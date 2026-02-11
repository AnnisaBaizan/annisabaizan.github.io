/**
 * main.js - Global JavaScript Utilities
 * Annisa Baizan Portfolio - annisabaizan.github.io
 * 
 * Reusable JavaScript functions and utilities for all pages.
 * Focus on vanilla JS, performance, and modularity.
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// NAVIGATION UTILITIES
// ============================================

/**
 * Add active class to current page navigation link
 */
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Check if current path matches link path
        if (currentPath === linkPath || 
            (currentPath.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Add scroll effect to navigation
 */
function initNavScrollEffect() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    const handleScroll = throttle(() => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
}

// ============================================
// SMOOTH SCROLL
// ============================================

/**
 * Smooth scroll to anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just '#'
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            
            const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without jumping
            history.pushState(null, null, href);
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Observe elements and add animation class when in viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

/**
 * Copy text to clipboard with feedback
 * @param {string} text - Text to copy
 * @param {HTMLElement} button - Button element (optional for feedback)
 */
async function copyToClipboard(text, button = null) {
    try {
        await navigator.clipboard.writeText(text);
        
        if (button) {
            const originalText = button.textContent;
            button.textContent = '✓ Copied!';
            button.style.color = 'var(--accent-green)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.color = '';
            }, 2000);
        }
        
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
}

// ============================================
// EXTERNAL LINKS
// ============================================

/**
 * Add target="_blank" and rel="noopener noreferrer" to external links
 */
function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    
    links.forEach(link => {
        // Skip if already has target
        if (link.hasAttribute('target')) return;
        
        const url = new URL(link.href);
        const currentDomain = window.location.hostname;
        
        // Check if external link
        if (url.hostname !== currentDomain) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add external link icon (optional)
            if (!link.querySelector('.external-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-icon';
                icon.innerHTML = ' ↗';
                icon.style.fontSize = '0.8em';
                icon.style.opacity = '0.6';
                link.appendChild(icon);
            }
        }
    });
}

// ============================================
// LOADING STATE
// ============================================

/**
 * Show loading indicator
 * @param {HTMLElement} element - Element to show loading state
 */
function showLoading(element) {
    if (!element) return;
    
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
    element.classList.add('loading');
}

/**
 * Hide loading indicator
 * @param {HTMLElement} element - Element to hide loading state
 */
function hideLoading(element) {
    if (!element) return;
    
    element.style.opacity = '';
    element.style.pointerEvents = '';
    element.classList.remove('loading');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type: 'success', 'error', 'info', 'warning'
 * @param {number} duration - Duration in milliseconds
 */
function showToast(message, type = 'info', duration = 3000) {
    // Create toast container if it doesn't exist
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#06b6d4',
        warning: '#f59e0b'
    };
    
    toast.style.cssText = `
        background: var(--bg-card);
        border: 1px solid ${colors[type]};
        border-left: 4px solid ${colors[type]};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        color: var(--text-primary);
        min-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    
    toast.textContent = message;
    container.appendChild(toast);
    
    // Auto remove after duration
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            toast.remove();
            
            // Remove container if empty
            if (container.children.length === 0) {
                container.remove();
            }
        }, 300);
    }, duration);
}

// ============================================
// FORM UTILITIES
// ============================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Serialize form data to object
 * @param {HTMLFormElement} form - Form element
 * @returns {Object} Form data as object
 */
function serializeForm(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}

// ============================================
// LOCAL STORAGE UTILITIES
// ============================================

/**
 * Set item in localStorage with error handling
 * @param {string} key - Storage key
 * @param {*} value - Value to store (will be JSON stringified)
 */
function setStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (err) {
        console.error('LocalStorage error:', err);
        return false;
    }
}

/**
 * Get item from localStorage with error handling
 * @param {string} key - Storage key
 * @returns {*} Parsed value or null
 */
function getStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (err) {
        console.error('LocalStorage error:', err);
        return null;
    }
}

/**
 * Remove item from localStorage
 * @param {string} key - Storage key
 */
function removeStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (err) {
        console.error('LocalStorage error:', err);
        return false;
    }
}

// ============================================
// PERFORMANCE UTILITIES
// ============================================

/**
 * Log performance metrics to console (dev only)
 */
function logPerformance() {
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                console.log('⚡ Performance Metrics:');
                console.log(`  Page Load Time: ${pageLoadTime}ms`);
                console.log(`  Connect Time: ${connectTime}ms`);
                console.log(`  Render Time: ${renderTime}ms`);
            }, 0);
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all global features
 */
function init() {
    // Set active nav link
    setActiveNavLink();
    
    // Initialize navigation scroll effect
    initNavScrollEffect();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize external links
    initExternalLinks();
    
    // Log performance (dev only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        logPerformance();
    }
    
    console.log('✅ Main.js initialized');
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// EXPORT UTILITIES (for use in other scripts)
// ============================================

window.utils = {
    debounce,
    throttle,
    copyToClipboard,
    showToast,
    showLoading,
    hideLoading,
    isValidEmail,
    serializeForm,
    setStorage,
    getStorage,
    removeStorage
};
