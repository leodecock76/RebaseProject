// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing Animation for Hero Text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add class to hide cursor when typing is complete
            element.classList.add('typing-complete');
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && heroSubtitle) {
        // Start with empty text
        heroTitle.innerHTML = '';
        heroSubtitle.innerHTML = '';
        
        // Type the title first - faster timing to sync with check mark
        setTimeout(() => {
            typeWriter(heroTitle, 'A way home.', 60);
        }, 300);
        
        // Type the subtitle - faster timing to complete before check mark stops
        setTimeout(() => {
            typeWriter(heroSubtitle, 'Finding re-entry housing, made easy.', 50);
        }, 1200);
    }
});

// Supabase configuration
const SUPABASE_URL = 'https://yhljlvuqbnsnhtwdovdo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobGpsdnVxYm5zbmh0d2RvdmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTM2MjAsImV4cCI6MjA2OTIyOTYyMH0.GevKf1f4e-YVlmswT2yd0d9HLGNjzMmRAGKxDEWKWQ8';

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const message = formData.get('message') || '';
        
        // No validation - allow any content
        
        // Update button state
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Submit to Supabase
            const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });
            
            if (response.ok) {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
            } else {
                const errorText = await response.text();
                console.error('Supabase error:', response.status, errorText);
                throw new Error(`Failed to submit form: ${response.status}`);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Partnership form submission handling
const partnershipForm = document.querySelector('.partner-form form');
if (partnershipForm) {
    partnershipForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const orgName = formData.get('orgName') || '';
        const contactName = formData.get('contactName') || '';
        const email = formData.get('email') || '';
        const phone = formData.get('phone') || '';
        const orgType = formData.get('orgType') || 'other';
        const services = formData.get('services') || '';
        const message = formData.get('message') || '';
        
        // No validation - allow any content
        
        // Update button state
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        try {
            // Submit to Supabase
            const response = await fetch(`${SUPABASE_URL}/rest/v1/partnership_submissions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    org_name: orgName,
                    contact_name: contactName,
                    email: email,
                    phone: phone,
                    org_type: orgType,
                    services: services,
                    message: message
                })
            });
            
            if (response.ok) {
                alert('Thank you for your partnership request! We\'ll review your application and get back to you soon.');
                this.reset();
            } else {
                const errorText = await response.text();
                console.error('Supabase error:', response.status, errorText);
                throw new Error(`Failed to submit partnership request: ${response.status}`);
            }
        } catch (error) {
            console.error('Partnership form submission error:', error);
            alert('Sorry, there was an error submitting your partnership request. Please try again.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Function to get client IP (using a free service)
async function getClientIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error getting IP:', error);
        return null;
    }
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation to buttons
document.querySelectorAll('.cta-button, .secondary-button, .submit-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('submit-button')) {
            return; // Don't add animation to submit button as it has its own
        }
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .cta-button, .secondary-button, .submit-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Typing animation cursor effect */
    .hero-title::after,
    .hero-subtitle::after {
        content: '|';
        animation: blink 1s infinite;
        color: #1a1a1a;
        font-weight: bold;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    /* Hide cursor when typing is complete */
    .hero-title.typing-complete::after,
    .hero-subtitle.typing-complete::after {
        display: none;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section-content, .about-content, .contact-content').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Search button functionality (redirects to directory page)
document.querySelector('.cta-button').addEventListener('click', () => {
    // Redirect to the directory page for housing search
    window.location.href = 'directory.html';
}); 

// Analytics tracking
function trackPageView() {
    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    
    fetch(`${SUPABASE_URL}/rest/v1/page_analytics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
            page_name: pageName,
            user_agent: navigator.userAgent,
            ip_address: null, // We'll get this asynchronously
            referrer: document.referrer
        })
    }).catch(error => {
        console.error('Analytics tracking error:', error);
    });
}

// Track page view on load
document.addEventListener('DOMContentLoaded', function() {
    trackPageView();
}); 