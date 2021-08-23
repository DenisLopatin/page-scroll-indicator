import './index.html';
import './en-index.html';
import './css/style.css';
import './scripts/main';

document.documentElement.pageScrollIndicator({
    zIndex: 100,
    height: '8px',
    opacity: 1,
    bottom: true,
    backgroundColor: 'pink',
    boxShadow: 'white',
    transition: '200ms',
});

document.querySelector('.example-one').pageScrollIndicator({
    zIndex: 100,
    height: 10,
    opacity: 0.5,
    scrollLine: 'bottom',
    backgroundColor: '#6242d2',
    boxShadow: 'white',
    transition: '200ms',
});

document.querySelector('.example-two').pageScrollIndicator({
    zIndex: 100,
    height: 5,
    opacity: 0.7,
    scrollLine: 'top',
    backgroundColor: 'aqua',
    boxShadow: 'blue',
    transition: '400ms',
});

document.querySelector('.example-three').pageScrollIndicator({
    zIndex: 100,
    height: 10,
    opacity: 0.5,
    scrollLine: 'bottom',
    backgroundColor: '#6242d2',
    boxShadow: 'white',
    transition: '200ms',
});

document.querySelector('.example-four').pageScrollIndicator({
    zIndex: 100,
    height: 5,
    opacity: 0.7,
    scrollLine: 'top',
    backgroundColor: 'aqua',
    boxShadow: 'blue',
    transition: '400ms',
});
