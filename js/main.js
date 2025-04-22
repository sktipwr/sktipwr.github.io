// Excel + AI Workshop Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
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
      const isOpen = answer.style.maxHeight;
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.maxHeight = null;
      });
      
      // Toggle current answer
      if (!isOpen) {
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
});
