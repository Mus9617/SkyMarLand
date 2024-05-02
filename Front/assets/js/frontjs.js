const texts = ["We Make Your Dreams Fly. Luxury Is Our Buisness &#x1F451;"];
let textIndex = 0;
let index = 0;
let direction = 1;

/**
 * Simulates a typewriter effect by gradually displaying text.
 */
function typeWriter() {
    const typingText = document.getElementById("typing-text");
    typingText.innerHTML = texts[textIndex].substring(0, index);
    index += direction;
    if (index === 0 || index === texts[textIndex].length) {
        // direction *= -1; //
        textIndex = (textIndex + 1) % texts.length;
    }
    setTimeout(typeWriter, 200); 
}

typeWriter();


