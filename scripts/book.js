const pages = [
    {
        type: 'image',
        src: './assets/images/1.png',
        text: 'Welcome to the picture!!'
    },
    {
        type: 'image',
        src: './assets/images/2.png',
        text: 'What a nice place to take pictures of'
    },
    {
        type: 'image',
        src: './assets/images/3.png',
        text: '2 Crystals in 1 picture..'
    },     
    {
        type: 'video',
        src: './assets/videos/1.mp4',
        text: 'He deserves a special place in our hearts for the chest'
    },
    {
        type: 'video',
        src: './assets/videos/2.mp4',
        text: 'Walking to death, but still smiling'
    },    
    {
        type: 'video',
        src: './assets/videos/3.mp4',
        text: 'A merciale just hahppened, and it was a great one'
    },
    {
        type: 'video',
        src: './assets/videos/4.mp4',
        text: 'We live together, we laugh together, we cry together, and we die together'
    },    
    {
        type: 'video',
        src: './assets/videos/5.mp4',
        text: 'Blow kiss but in different way :)'
    },    
    {
        type: 'video',
        src: './assets/videos/6.mp4',
        text: 'Sorry for what 🤔'
    },
    {
        type: 'video',
        src: './assets/videos/7.mp4',
        text: 'Take my hand Norah 💞'
    }, 
    {
        type: 'video',
        src: './assets/videos/8.mp4',
        text: 'A little bit of effects for you :)'
    }, 
    {
        type: 'video',
        src: './assets/videos/9.mp4',
        text: 'Cats have nine lives, but you have one, so take care of it.. YOU:'
    }, 
    {
        type: 'video',
        src: './assets/videos/10.mp4',
        text: 'Random COSU Moments'
    }, 
    {
        type: 'video',
        src: './assets/videos/11.mp4',
        text: 'My First dance with you, and it was a great one, love it'
    }, 
    {
        type: 'video',
        src: './assets/videos/12.mp4',
        text: 'It wasn\'t my fault, I swear, it was the camera angle'
    }, 
    {
        type: 'video',
        src: './assets/videos/13.mp4',
        text: 'Lets try together.. OK 123'
    }, 
    {
        type: 'video',
        src: './assets/videos/14.mp4',
        text: 'Fake 123, again, and again, and again'
    }, 
    {
        type: 'video',
        src: './assets/videos/15.mp4',
        text: 'Don\'t worry JUMP JUMP, wait don\'tttt'
    }, 
    {
        type: 'video',
        src: './assets/videos/16.mp4',
        text: 'Look at me moment'
    }, 
    {
        type: 'video',
        src: './assets/videos/17.mp4',
        text: 'WTH is wrong with you, I\'m not gonna kill you, I swear'
    }, 
    {
        type: 'video',
        src: './assets/videos/18.mp4',
        text: 'Sometimes suffering is nice '
    }, 

];

let currentPage = 0;

function renderPage() {
    const page = pages[currentPage];
    const bookPage = document.getElementById('book-page');
    bookPage.innerHTML = '';
    if (page.type === 'image') {
        const img = document.createElement('img');
        img.src = page.src;
        img.alt = page.text;
        img.className = 'book-media';
        bookPage.appendChild(img);
    } else if (page.type === 'video') {
        const video = document.createElement('video');
        video.src = page.src;
        video.controls = true;
        video.className = 'book-media';
        bookPage.appendChild(video);
    }
    const caption = document.createElement('p');
    caption.textContent = page.text;
    bookPage.appendChild(caption);
}

document.getElementById('prev-page').onclick = () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
};
document.getElementById('next-page').onclick = () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
    }
};

document.addEventListener('DOMContentLoaded', renderPage);

document.addEventListener('DOMContentLoaded', () => {
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
});

// Animated hearts
function createHearts() {
    const heartsBg = document.getElementById('hearts-bg');
    for (let i = 0; i < 6; i++) { // fewer hearts
        const heart = document.createElement('span');
        heart.className = 'heart-anim';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        heartsBg.appendChild(heart);
    }
}

// Balloons
function createBalloons() {
    const balloonsBg = document.getElementById('balloons-bg');
    const colors = ['#fbc2eb', '#a6c1ee', '#ff69b4', '#a78bfa', '#ffe066', '#6d28d9'];
    for (let i = 0; i < 12; i++) {
        const balloon = document.createElement('span');
        balloon.className = 'balloon-anim';
        balloon.textContent = '🎈';
        balloon.style.left = Math.random() * 90 + 'vw';
        balloon.style.fontSize = (2 + Math.random() * 2) + 'rem';
        balloon.style.color = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = (Math.random() * 7) + 's';
        balloonsBg.appendChild(balloon);
    }
}

function createConfetti() {
    const confetti = document.getElementById('confetti');
    for (let i = 0; i < 10; i++) { // fewer pieces
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.width = piece.style.height = (6 + Math.random() * 8) + 'px';
        piece.style.background = `hsl(${Math.random() * 360}, 80%, 80%)`;
        piece.style.animationDelay = (Math.random() * 6) + 's';
        confetti.appendChild(piece);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createBalloons();
    createConfetti();
});