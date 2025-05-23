// ===== MODAL FUNCTIONS =====

/**
 * Opens project detail modal with specified project data
 * @param {string} projectId - The ID of the project to display
 */
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) {
        console.error(`Project with ID "${projectId}" not found`);
        return;
    }

    const modal = document.getElementById('projectModal');
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalHeroImage').src = project.heroImage;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalTeam').textContent = project.team;
    document.getElementById('modalStatus').textContent = project.status;
    
    // Populate tech stack
    const techStackContainer = document.getElementById('modalTechStack');
    techStackContainer.innerHTML = '';
    project.techStack.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'modal-tech-tag';
        tag.textContent = tech;
        techStackContainer.appendChild(tag);
    });
    
    // Populate project details
    document.getElementById('modalDescription').innerHTML = project.description;
    document.getElementById('modalFeatures').innerHTML = project.features;
    document.getElementById('modalChallenges').innerHTML = project.challenges;
    document.getElementById('modalResults').innerHTML = project.results;
    
    // Populate gallery
    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = '';
    project.gallery.forEach(imageSrc => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${imageSrc}" alt="Project Image" loading="lazy">`;
        galleryContainer.appendChild(galleryItem);
    });
    
    // Set up action links
    document.getElementById('modalGithubLink').href = project.github;
    document.getElementById('modalDemoLink').href = project.demo;
    
    const paperLink = document.getElementById('modalPaperLink');
    if (project.paper) {
        paperLink.href = project.paper;
        paperLink.style.display = 'inline-flex';
    } else {
        paperLink.style.display = 'none';
    }
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the project detail modal
 */
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== PHOTO UPLOAD FUNCTIONS =====

/**
 * Handles profile photo upload and display
 * @param {Event} event - The file input change event
 */
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('Please select an image smaller than 5MB.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const photoContainer = document.querySelector('.photo-container');
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Profile Photo';
        img.className = 'profile-img';
        
        // Replace placeholder with uploaded image
        photoContainer.innerHTML = '';
        photoContainer.appendChild(img);
    };
    
    reader.onerror = function() {
        alert('Error reading the image file. Please try again.');
    };
    
    reader.readAsDataURL(file);
}

// ===== NAVIGATION & SCROLLING =====

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header scroll effects
 */
function initHeaderScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
}

// ===== ANIMATIONS & OBSERVERS =====

/**
 * Initialize intersection observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for project cards
                if (entry.target.classList.contains('project-card')) {
                    const cards = document.querySelectorAll('.project-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .skill-category, .contact-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== MOBILE MENU =====

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';
        
        // Toggle hamburger animation
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
}

// ===== EVENT LISTENERS =====

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Modal event listeners
    const modal = document.getElementById('projectModal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    // Prevent modal close when clicking on modal content
    const modalContent = document.querySelector('.modal-content');
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        // Close mobile menu on resize
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.mobile-menu');
        
        if (window.innerWidth > 768) {
            navLinks.style.display = '';
            hamburger.classList.remove('active');
        }
    }, 250));
}

// ===== UTILITY FUNCTIONS =====

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
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
 * Lazy load images for better performance
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Add loading states for better UX
 */
function showLoadingState(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// ===== INITIALIZATION =====

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initSmoothScrolling();
    initHeaderScrollEffects();
    initScrollAnimations();
    initMobileMenu();
    initEventListeners();
    initLazyLoading();
    
    // Add any additional initialization here
    console.log('Portfolio website initialized successfully!');
});

// ===== ERROR HANDLING =====

/**
 * Global error handler
 */
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // You can add error reporting here
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});
