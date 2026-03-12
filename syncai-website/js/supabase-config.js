// Supabase Configuration
// Using the syncai-github project credentials from MEMORY

const SUPABASE_URL = 'https://dguwgnxjdivsrekjarlp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndXdnbnhqZGl2c3Jla2phcmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MjQ3NjQsImV4cCI6MjA3NjQwMDc2NH0.bO4TidmfpHl7Vzus7vooBzmJGvVIUGq_-5_uD3zH7OQ';

// Initialize Supabase client (will be loaded from CDN in HTML)
function initSupabase() {
    if (typeof supabase === 'undefined') {
        console.error('Supabase library not loaded. Add CDN script to HTML.');
        return null;
    }
    return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Store newsletter signup
async function storeNewsletterSignup(email, source = 'insights') {
    const client = initSupabase();
    if (!client) return { error: 'Supabase not initialized' };

    try {
        const { data, error } = await client
            .from('newsletter_signups')
            .insert({
                email: email,
                source: source,
                created_at: new Date().toISOString()
            });

        if (error) throw error;
        return { success: true, data };
    } catch (error) {
        console.error('Error storing newsletter signup:', error);
        return { error: error.message };
    }
}

// Store PDF download request
async function storePDFDownload(email, article) {
    const client = initSupabase();
    if (!client) return { error: 'Supabase not initialized' };

    try {
        const { data, error } = await client
            .from('newsletter_signups')
            .insert({
                email: email,
                source: `pdf:${article}`,
                article: article,
                created_at: new Date().toISOString()
            });

        if (error) throw error;
        return { success: true, data };
    } catch (error) {
        console.error('Error storing PDF download:', error);
        return { error: error.message };
    }
}

// Export functions for use in article.js
window.supabaseHelpers = {
    storeNewsletterSignup,
    storePDFDownload
};
