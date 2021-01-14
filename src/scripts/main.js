import '../index.html';
import pageScrollIndicator from './page-scroll-indicator';

pageScrollIndicator({
    element: '.scroll-top',
    zIndex: 99,
    height: 5,
    opacity: 0.75,
    backgroundColor: 'blue',
    boxShadow: 'aqua inset',
    transition: '200ms ease-in-out',
});
