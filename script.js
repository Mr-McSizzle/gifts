document.getElementById('giftCard').addEventListener('click', function() {
    var card = document.getElementById('giftCard');
    card.classList.toggle('open');
});

document.getElementById('closeButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the card
    var card = document.getElementById('giftCard');
    card.classList.remove('open');
});

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 4}s`;
    document.getElementById('floatingHearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);