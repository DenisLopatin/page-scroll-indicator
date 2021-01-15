import '../index.html';
import pageScrollIndicator from './page-scroll-indicator';

pageScrollIndicator({
    element: '.scroll-page-indicator',
    zIndex: 10000,
    height: 10,
    opacity: 1,
    backgroundColor: 'aqua',
});

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = pageScrollIndicator;
} else {
    window.pageScrollIndicator = pageScrollIndicator;
}
