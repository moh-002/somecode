document.addEventListener('DOMContentLoaded', () => {
    const birthdayMessage = document.getElementById('birthday-message');
    const images = document.querySelectorAll('.image-showcase img');
    const confetti = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.className = 'confetti-piece';
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animationDelay = Math.random() * 2 + 's';
        confetti.appendChild(div);
    }    

    // Function to display a birthday message
    function displayBirthdayMessage() {
        birthdayMessage.textContent = "Happy Birthday! 🎉🎂";
        birthdayMessage.style.color = "#ff69b4"; // Cute pink color
        birthdayMessage.style.fontSize = "2em";
        birthdayMessage.style.textAlign = "center";
    }

    // Function to add a simple animation to images
    function animateImages() {
        images.forEach((img, index) => {
            img.style.transition = "transform 0.5s";
            img.style.transform = "scale(1.1)";
            setTimeout(() => {
                img.style.transform = "scale(1)";
            }, index * 300); // Stagger the animations
        });
    }

    // Audio controller logic
    const audio = document.getElementById('bg-music');
    if (!audio) return;

    // Restore playback position and state
    const savedTime = sessionStorage.getItem('audioTime');
    const wasPlaying = sessionStorage.getItem('audioPlaying');
    if (savedTime) audio.currentTime = parseFloat(savedTime);
    if (wasPlaying === 'true') {
        audio.play().catch(()=>{});
    }

    // Save playback position and state before leaving page
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('audioTime', audio.currentTime);
        sessionStorage.setItem('audioPlaying', !audio.paused);
    });

    displayBirthdayMessage();
    animateImages();
});
function spawnHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 80 + 'vh';
    heart.textContent = '💖';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(spawnHeart, 700);

// Fireworks
function spawnFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = (20 + Math.random() * 60) + 'vh';
    firework.style.width = firework.style.height = (40 + Math.random() * 40) + 'px';
    firework.style.background = `radial-gradient(circle, #a78bfa 0%, #fbc2eb 60%, transparent 100%)`;
    document.getElementById('fireworks').appendChild(firework);
    setTimeout(() => firework.remove(), 1200);
}
setInterval(spawnFirework, 1200);

// Animated hearts
function createHearts() {
    const heartsBg = document.getElementById('hearts-bg');
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart-anim';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
        heart.style.animationDelay = (Math.random() * 6) + 's';
        heartsBg.appendChild(heart);
    }
}

// Confetti
function createConfetti() {
    const confetti = document.getElementById('confetti');
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.width = piece.style.height = (8 + Math.random() * 12) + 'px';
        piece.style.background = `hsl(${Math.random()*360},80%,70%)`;
        piece.style.animationDelay = (Math.random() * 4) + 's';
        confetti.appendChild(piece);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createConfetti();
});
