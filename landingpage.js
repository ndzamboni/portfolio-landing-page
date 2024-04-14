 // Get elements
 const tiltElements = document.querySelectorAll('.imgg, .main, .profile');

 // Add mousemove event listener to each element
 tiltElements.forEach(element => {
     element.addEventListener('mousemove', e => {
         const rect = element.getBoundingClientRect();
         const x = e.clientX - rect.left; // X position within the element
         const y = e.clientY - rect.top;  // Y position within the element

         // Calculate tilt angles based on mouse position
         const tiltX = (rect.width / 2 - x) / 20; // Adjust the divisor to control the tilt intensity
         const tiltY = (rect.height / 2 - y) / 20;

         // Apply tilt effect using CSS transform
         element.style.transform = `perspective(1000px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`;
     });

     // Reset tilt effect when mouse leaves
     element.addEventListener('mouseleave', () => {
         element.style.transform = 'none';
     });
 });