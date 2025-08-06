document.addEventListener("DOMContentLoaded", function() {
    const text = "Control Systems • Mechatronics • Vehicle Dynamics";
    let i = 0;
    const speed = 80; // typing speed in ms
    const typingElement = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
});
