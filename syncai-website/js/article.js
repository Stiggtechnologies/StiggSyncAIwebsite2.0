// Article Page Functionality

// Reading Progress Bar
function updateReadingProgress() {
    const article = document.querySelector('.article-content');
    if (!article) return;

    const scrollTop = window.pageYOffset;
    const docHeight = article.offsetHeight + article.offsetTop;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    }
}

window.addEventListener('scroll', updateReadingProgress);
window.addEventListener('load', updateReadingProgress);

// PDF Download Modal
const pdfModal = {
    init() {
        const downloadButtons = document.querySelectorAll('[data-pdf-download]');
        const modal = document.getElementById('pdf-modal');
        const closeButton = modal?.querySelector('.modal-close');
        const form = document.getElementById('pdf-email-form');

        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        closeButton?.addEventListener('click', () => this.close());
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(e.target);
        });
    },

    open() {
        const modal = document.getElementById('pdf-modal');
        modal?.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        const modal = document.getElementById('pdf-modal');
        modal?.classList.remove('active');
        document.body.style.overflow = '';
    },

    async handleSubmit(form) {
        const email = form.querySelector('input[type="email"]').value;
        const articleTitle = document.querySelector('h1')?.textContent || 'Unknown';

        try {
            // Store email (placeholder - integrate with Supabase or your backend)
            console.log('Email captured:', { email, article: articleTitle, timestamp: new Date() });
            
            // You can add Supabase integration here:
            // await supabase.from('newsletter_signups').insert({ email, article: articleTitle })

            // Trigger PDF download
            const pdfUrl = form.querySelector('button').dataset.pdfUrl;
            if (pdfUrl) {
                window.open(pdfUrl, '_blank');
            }

            // Show success message
            alert('Thank you! Your download will begin shortly.');
            
            this.close();
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    }
};

// Newsletter Form
const newsletterForm = {
    init() {
        const form = document.getElementById('newsletter-form');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(e.target);
        });
    },

    async handleSubmit(form) {
        const email = form.querySelector('input[type="email"]').value;

        try {
            // Store email (placeholder - integrate with Supabase or your backend)
            console.log('Newsletter signup:', { email, timestamp: new Date() });
            
            // You can add Supabase integration here:
            // await supabase.from('newsletter_signups').insert({ email, source: 'insights' })

            // Show success message
            alert('Thank you for subscribing! Check your inbox for confirmation.');
            
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    }
};

// Share Functionality
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-button[data-share]');
    const pageUrl = window.location.href;
    const pageTitle = document.querySelector('h1')?.textContent || document.title;

    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = button.dataset.share;

            let shareUrl;
            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'copy':
                    navigator.clipboard.writeText(pageUrl);
                    alert('Link copied to clipboard!');
                    return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    pdfModal.init();
    newsletterForm.init();
    initShareButtons();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
