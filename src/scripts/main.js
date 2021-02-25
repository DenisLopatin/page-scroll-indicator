import '../index.html';
import pageScrollIndicator from './page-scroll-indicator';

Element.prototype.pageScrollIndicator = pageScrollIndicator;

document.querySelector('.example-two').pageScrollIndicator({
    element: '.scroll-indicator',
    zIndex: 10000,
    // bottom: true,
    height: 5,
    opacity: 0.7,
    track: 'example-two',
    put: 'example-two',
    scrollLine: 'top',
    backgroundColor: 'green',
    boxShadow: 'red',
    transition: '400ms',
});

// pageScrollIndicator({
//     element: '.scroll-indicator',
//     zIndex: 10000,
//     // bottom: true,
//     height: 5,
//     opacity: 0.7,
//     track: 'example-two',
//     // put: 'empty1',
//     scrollLine: 'top',
//     backgroundColor: 'green',
//     boxShadow: 'red',
//     transition: '400ms',
// });
