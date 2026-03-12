#!/usr/bin/env node

const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const yaml = require('js-yaml');
const fs = require('fs');

// Load config
const config = yaml.load(fs.readFileSync('./google-ads-config.yaml', 'utf8'));

const oauth2Client = new google.auth.OAuth2(
  config.client_id,
  config.client_secret,
  'http://localhost:3000/oauth2callback'
);

const SCOPES = ['https://www.googleapis.com/auth/adwords'];

async function getRefreshToken() {
  return new Promise((resolve, reject) => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent', // Force consent to get refresh token
    });

    console.log('\n🔐 Google Ads API Authentication\n');
    console.log('Opening browser for authorization...\n');
    console.log('If it doesn\'t open automatically, visit this URL:\n');
    console.log(authUrl);
    console.log('\n');

    // Open browser
    const open = require('child_process').exec;
    open(`open "${authUrl}"`);

    // Start local server to receive callback
    const server = http.createServer(async (req, res) => {
      if (req.url.startsWith('/oauth2callback')) {
        const qs = url.parse(req.url, true).query;
        const code = qs.code;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body style="font-family: system-ui; padding: 40px; text-align: center;">
              <h1>✅ Authorization Successful!</h1>
              <p>You can close this window and return to your terminal.</p>
            </body>
          </html>
        `);

        server.close();

        try {
          const { tokens } = await oauth2Client.getToken(code);
          console.log('\n✅ Success! Your refresh token:\n');
          console.log(tokens.refresh_token);
          console.log('\n📋 Copy this token into google-ads-config.yaml\n');
          
          // Auto-update config file
          config.refresh_token = tokens.refresh_token;
          fs.writeFileSync('./google-ads-config.yaml', yaml.dump(config));
          console.log('✓ Updated google-ads-config.yaml automatically\n');
          
          resolve(tokens.refresh_token);
        } catch (error) {
          console.error('Error getting tokens:', error);
          reject(error);
        }
      }
    });

    server.listen(3000, () => {
      console.log('Waiting for authorization...\n');
    });
  });
}

getRefreshToken()
  .then(() => {
    console.log('✓ Ready to run setup-aim-ads.js\n');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
