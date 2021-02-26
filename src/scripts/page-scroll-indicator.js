import '../index.html';
import development from './development';

Element.prototype.pageScrollIndicator = development;
/* eslint-disable no-undef */
if ($('document') || jQuery('document')) {
    jQuery.fn.pageScrollIndicator = development;
    $.fn.pageScrollIndicator = development;
}
