import '../index.html';
import development from './development';

Element.prototype.pageScrollIndicator = development;
if (window.jQuery) {
    (function jQuery($) {
        $.fn.pageScrollIndicator = development;
    }(window.jQuery));
}
