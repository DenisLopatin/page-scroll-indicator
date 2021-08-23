/*
* page scroll indicator v 3.0.0
* creates a scroll indicator for a page, article, or other elements
* entry point - function pageScrollIndicator
* NPM: https://www.npmjs.com/package/page-scroll-indicator
* GITHUB: https://github.com/DenisLopatin/page-scroll-indicator
* if you encounter a problem when using the plugin please write about it: https://github.com/DenisLopatin/page-scroll-indicator/issues
* */

import pageScrollIndicator from "./page-scroll-indicator";

if (sessionStorage.getItem('page-scroll-indicator')) {
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
}

sessionStorage.setItem('page-scroll-indicator', 'page-is-loaded');

Element.prototype.pageScrollIndicator = pageScrollIndicator;
if (window.jQuery) {
    (function jQuery($) {
        $.prototype.pageScrollIndicator = pageScrollIndicator;
    }(window.jQuery));
}
