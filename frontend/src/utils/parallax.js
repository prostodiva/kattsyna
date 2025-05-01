export const setupParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax > *');
    
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(getComputedStyle(element).getPropertyValue('--parallax-speed')) || 0;
            element.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}; 