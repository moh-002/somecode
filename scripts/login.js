const answer = Array.from("Myone&onlyCOU");
const dropZone = document.getElementById('drop-zone');
const dragLetters = document.getElementById('drag-letters');
const loginBtn = document.getElementById('login-btn');
const loginMessage = document.getElementById('login-message');
const heartSvg = document.getElementById('heart-svg');
const heartEmoji = document.getElementById('heart-emoji');

let slots = [];
let letters = [];
let filledSlots = Array(answer.length).fill(null);

// Shuffle letters for drag area
function shuffle(arr) {
    let a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Render drop slots
function renderSlots() {
    dropZone.innerHTML = '';
    slots = [];
    answer.forEach((char, idx) => {
        const slot = document.createElement('div');
        slot.className = 'drop-slot';
        slot.dataset.index = idx;
        slot.ondragover = e => { e.preventDefault(); slot.style.background = '#e0c3fc'; };
        slot.ondragleave = e => { slot.style.background = ''; };
        slot.ondrop = e => {
            e.preventDefault();
            slot.style.background = '';
            const letterIdx = e.dataTransfer.getData('text/plain');
            placeLetter(idx, letterIdx);
        };
        slots.push(slot);
        dropZone.appendChild(slot);
    });
}

// Render drggable letters
function renderLetters() {
    dragLetters.innerHTML = '';
    letters.forEach((char, idx) => {
        if (char === null) return;
        const letterDiv = document.createElement('div');
        letterDiv.className = 'draggable-letter';
        letterDiv.textContent = char;
        letterDiv.draggable = true;
        letterDiv.dataset.index = idx;
        letterDiv.ondragstart = e => {
            e.dataTransfer.setData('text/plain', idx);
        };
        dragLetters.appendChild(letterDiv);
    });
}

// Place letter in slot
function placeLetter(slotIdx, letterIdx) {
    if (filledSlots[slotIdx] !== null) return;
    filledSlots[slotIdx] = letters[letterIdx];
    letters[letterIdx] = null;
    updateUI();
}

// Remove letter from slot
dropZone.onclick = function(e) {
    if (e.target.classList.contains('drop-slot') && filledSlots[e.target.dataset.index]) {
        const idx = Number(e.target.dataset.index);
        const letter = filledSlots[idx];
        // Place back to drag area
        const emptyIdx = letters.findIndex(l => l === null);
        if (emptyIdx !== -1) {
            letters[emptyIdx] = letter;
        } else {
            letters.push(letter);
        }
        filledSlots[idx] = null;
        updateUI();
    }
};

function updateUI() {
    // Update slots
    slots.forEach((slot, idx) => {
        slot.textContent = filledSlots[idx] || '';
        slot.className = 'drop-slot' + (filledSlots[idx] ? ' filled' : '');
    });
    // Update letters
    renderLetters();
    // Check if complete
    if (filledSlots.join('') === answer.join('')) {
        loginBtn.disabled = false;
        loginMessage.textContent = "Unlocked!";
        heartSvg.classList.remove('heart-locked');
        heartSvg.classList.add('heart-unlocked');

    } else {
        loginBtn.disabled = true;
        loginMessage.textContent = "Drag the letters below make the secret word!";
        heartSvg.classList.add('heart-locked');
        heartSvg.classList.remove('heart-unlocked');
        heartEmoji.textContent = '';
        heartEmoji.style.opacity = '0';
    }
}

// Button click
loginBtn.onclick = () => {
    window.location.href = 'main.html';
};

// Initialize
letters = shuffle(answer);
renderSlots();
renderLetters();
updateUI();