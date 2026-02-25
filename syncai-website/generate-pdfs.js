// Generate PDFs from Insights Articles
// Run: node generate-pdfs.js

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const articles = [
    {
        file: 'insights/why-cmms-alone-is-failing-2026.html',
        output: 'pdfs/ai-readiness-assessment-2026.pdf',
        title: 'AI Readiness Assessment 2026'
    },
    {
        file: 'insights/economics-of-autonomous-maintenance.html',
        output: 'pdfs/autonomous-maintenance-roi-model.pdf',
        title: 'Autonomous Maintenance ROI Model'
    },
    {
        file: 'insights/governance-in-industrial-ai.html',
        output: 'pdfs/ai-governance-framework-template.pdf',
        title: 'AI Governance Framework Template'
    }
];

async function generatePDF(article) {
    console.log(`Generating ${article.output}...`);
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, article.file);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    // Remove navigation and footer for PDF
    await page.evaluate(() => {
        document.querySelector('nav')?.remove();
        document.querySelector('footer')?.remove();
        document.querySelector('.share-sidebar')?.remove();
        document.querySelector('.article-cta')?.remove();
        document.querySelector('.modal-overlay')?.remove();
        document.querySelector('#reading-progress')?.remove();
    });
    
    // Generate PDF with executive styling
    await page.pdf({
        path: article.output,
        format: 'Letter',
        margin: {
            top: '0.75in',
            right: '0.75in',
            bottom: '0.75in',
            left: '0.75in'
        },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: `
            <div style="width: 100%; font-size: 9px; padding: 0 0.75in; color: #71717a; font-family: Inter, sans-serif;">
                <span style="float: left;">SyncAI — ${article.title}</span>
                <span style="float: right;">syncai.ca</span>
            </div>
        `,
        footerTemplate: `
            <div style="width: 100%; font-size: 9px; padding: 0 0.75in; color: #71717a; font-family: Inter, sans-serif; text-align: center;">
                <span class="pageNumber"></span> / <span class="totalPages"></span>
            </div>
        `
    });
    
    await browser.close();
    console.log(`✅ Created ${article.output}`);
}

async function generateAllPDFs() {
    console.log('Starting PDF generation...\n');
    
    for (const article of articles) {
        try {
            await generatePDF(article);
        } catch (error) {
            console.error(`Error generating ${article.output}:`, error.message);
        }
    }
    
    console.log('\n✅ All PDFs generated successfully!');
}

generateAllPDFs().catch(console.error);
