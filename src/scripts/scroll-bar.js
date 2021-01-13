const documentHeightValues = [
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
];
const documentHeight = Math.min(...documentHeightValues);
const documentFullHeight = Math.max(...documentHeightValues);

function createScrollElement() {
    const element = document.createElement('div');
    element.id = 'scroll-element';
    element.style.position = 'fixed';
    element.style.zIndex = '10000';
    element.style.top = '0';
    element.style.bottom = '0';
    element.style.left = '0';
    element.style.right = '100%';
    element.style.height = '10px';
    element.style.marginLeft = '0';
    element.style.marginRight = '0';
    element.style.backgroundColor = 'red';
    element.style.color = 'red';
    element.style.boxShadow = '0 0 5px';
    element.style.transition = 'right 300ms linear 0s';
    document.body.appendChild(element);
}
createScrollElement();

const scrollElement = document.getElementById('scroll-element');

function scroll() {
    const finalHeight = documentFullHeight - documentHeight;
    const scrollTop = window.pageYOffset;
    const result = Math.round((scrollTop * 100) / finalHeight);
    scrollElement.style.right = `${String(100 - result)}%`;
}

window.addEventListener('scroll', scroll);
