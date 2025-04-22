// Excel + AI Workshop Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  
  // Toggle mobile navigation
  function toggleMobileNav() {
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    
    // Toggle between menu and close icon
    const icon = mobileNavToggle.querySelector('i');
    if (mobileNav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
  
  // Event listeners for mobile navigation
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', toggleMobileNav);
  }
  
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', toggleMobileNav);
  }
  
  // Close mobile nav when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMobileNav);
  });
  
  // Back to Top Button
  const backToTopButton = document.querySelector('.back-to-top');
  
  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top when back to top button is clicked
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Skip if it's the back to top button (already handled)
      if (this.classList.contains('back-to-top')) return;
      
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Skip if the href is just "#"
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate header offset for better positioning
        const headerOffset = window.innerWidth <= 768 ? 70 : 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains('active');
      
      // Close all other answers
      document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
      });
      
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.maxHeight = null;
      });
      
      // Toggle current answer
      if (!isOpen) {
        question.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Add animation to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .testimonial-card, .audience-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  
  // Trigger once on load
  animateOnScroll();
  
  // Current year for copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Set workshop date and time (example - replace with actual date/time)
  const workshopDate = "April 30, 2025";
  const workshopTime = "7:00 PM IST";
  
  // Update all date/time elements
  document.getElementById('workshop-date').textContent = workshopDate;
  document.getElementById('workshop-date-footer').textContent = workshopDate;
  document.getElementById('workshop-time').textContent = workshopTime;
  document.getElementById('workshop-time-footer').textContent = workshopTime;
  
  // Handle touch events for better mobile experience
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Add active state for buttons on touch
    const buttons = document.querySelectorAll('.btn, .feature-card, .audience-card');
    
    buttons.forEach(button => {
      button.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      }, { passive: true });
      
      button.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      }, { passive: true });
    });
  }
  
  // Prevent zoom on double tap for iOS
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
});
