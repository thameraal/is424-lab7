document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const color = document.querySelector('#color').value;
        document.querySelector('h1').style.color = color;
        return false;
    };
});
