import '../index.html';
import pageScrollIndicator from './page-scroll-indicator';

pageScrollIndicator({
    element: '.scroll-indicator',
    zIndex: 10000,
    // bottom: true,
    height: 5,
    opacity: 0.7,
    track: 'section',
    scrollLine: 'top',
    backgroundColor: 'green',
    boxShadow: 'red',
    transition: '400ms',
});

window.pageScrollIndicator = pageScrollIndicator;
