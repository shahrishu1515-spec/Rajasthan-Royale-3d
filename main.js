 document.addEventListener('DOMContentLoaded', function() {
            // Gallery item hover effect enhancement
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.zIndex = '100';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.zIndex = '';
                });
            });
            
            // Header background on scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(10, 10, 10, 0.95)';
                    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                } else {
                    header.style.background = 'rgba(10, 10, 10, 0.9)';
                    header.style.boxShadow = 'none';
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });