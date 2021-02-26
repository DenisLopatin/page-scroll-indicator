import '../index.html';
import jQuery from 'jquery';
import development from './development';

Element.prototype.pageScrollIndicator = development;
(function jq($) {
    $.fn.pageScrollIndicator = development;
}(jQuery));
