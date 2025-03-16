document.getElementById('giftCard').addEventListener('click', function() {
    var card = document.getElementById('giftCard');
    card.classList.toggle('open');
});

document.getElementById('closeButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the card
    var card = document.getElementById('giftCard');
    card.classList.remove('open');
});