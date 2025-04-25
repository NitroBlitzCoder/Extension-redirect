document.getElementById('watch-tab').addEventListener('click', function() {
    document.getElementById('watch-logos').style.display = 'block';
    document.getElementById('shopping-logos').style.display = 'none';
    document.getElementById('work-logos').style.display = 'none';
});

document.getElementById('shopping-tab').addEventListener('click', function() {
    document.getElementById('watch-logos').style.display = 'none';
    document.getElementById('shopping-logos').style.display = 'block';
    document.getElementById('work-logos').style.display = 'none';
});

document.getElementById('work-tab').addEventListener('click', function() {
    document.getElementById('watch-logos').style.display = 'none';
    document.getElementById('shopping-logos').style.display = 'none';
    document.getElementById('work-logos').style.display = 'block';
});
