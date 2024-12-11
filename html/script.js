// пишем в консоль: showMessage("тестовое сообщение")
function showMessage(message) {
    console.log(message);
}

// пишем в консоль: changeBackgroundColor("yellow") или changeBackgroundColor("lightblue")
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// пишем в консоль: toggleVisibility(".content")
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
}

// в адресной строке: ?utm_term=добро_пожаловать
// потом пишем в консоль: updateH1FromUtm()
function updateH1FromUtm() {
    const params = new URLSearchParams(window.location.search);
    const utmTerm = params.get('utm_term');
    const h1Element = document.querySelector('h1');
    if (h1Element && utmTerm) {
        h1Element.textContent = utmTerm;
    }
}

// пишем в консоль: logCurrentTime()
function logCurrentTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('ru-RU', { hour12: false });
    console.log(`текущее время: ${formattedTime}`);
}

// пишем в консоль: resetBackgroundColor()
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}
