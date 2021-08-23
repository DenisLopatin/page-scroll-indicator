# page-scroll-indicator

The plugin configures the scroll indicator for a page or article. Using this plugin allows your website users to track the number of
content remaining on the homepage or in a standalone article.

On the documentation page, you can see the plugin in action,
find out browsers support and get more information.

## RU DOCUMENTATION:
[Plugin documentation in Russian](https://denislopatin.github.io/page-scroll-indicator/)

---

## EN DOCUMENTATION:
[Plugin documentation in English](https://denislopatin.github.io/page-scroll-indicator/en-index.html)

---

## GITHUB:
[GITHUB](https://github.com/DenisLopatin/page-scroll-indicator)

---

## INSTALL
    npm install --save page-scroll-indicator

---

### USAGE
ESM:

    import 'page-scroll-indicator';

CommonJS:

    require('page-scroll-indicator');

---

__pageScrollIndicator__ - Plugin entry point. The function takes a single argument as a config file. (Object with settings).

For example:

    document.querySelector('.element').pageScrollIndicator({
        zIndex: 100,
        height: 10,
        opacity: 0.5,
        scrollLine: 'bottom',
        backgroundColor: '#6242d2',
        boxShadow: 'white',
        transition: '200ms',
    });

__element__ - the target element for which the plugin will act will always be the context of the pageScrollIndicator
function call (this). In the example above, it was document.documentElement. If you need to set a scroll indicator for the entire content
of the page, you must call it on document.documentElement or document.body. The following example is equivalent to the previous one:

    document.body.pageScrollIndicator({
        zIndex: 100,
        height: 8,
        opacity: 1,
        bottom: true,
        scrollLine: 'top',
        backgroundColor: 'pink',
        boxShadow: 'white',
        transition: '200ms',
    });

You can use this plugin with jQuery:

    $('.element').pageScrollIndicator({
        zIndex: 10,
        height: 7.5,
        opacity: 1,
        scrollLine: 'top',
        backgroundColor: 'blue',
        boxShadow: 'gray',
        transition: '220ms',
    });

---

In the sentences below, the word “element” will refer to the “div” element created by the plugin, which will act as a scroll indicator.

* __zIndex__ -  Element Z offset. Default value - 10000. Type string or
  number. Any values are allowed, even negative ones. You should be aware that the scroll indicator should
  take precedence over the stacking context than other elements in the block. Any values from -X to + X are allowed. For example: 10,
  '10000' или -5000.


* __height__ - Element height. Default value - 10px. Type string or number. Any value except negative is allowed. Don't make the indicator very high. For example: 15, '7' или 8.5.


* __opacity__ - Element transparency. Default value - 1. Type string or number. Any value from 0 to 1 is allowed. For example: 1, '0.6' or 0.253.


* __backgroundColor__ - Element background color. Default value - aqua. Type string. Any correct color value is allowed. For example: 'red', 'green' or #6242d2.


* __boxShadow__ - Element shadow. Default value - 0 0 5px transparent. Type string.
  Any correct color value is allowed. For example: 'green', 'green inset' or '#6242d2'. You can only control the color of the shadow.
  You can specify an inner or outer shadow.


* __transition__ - Element animation speed. Default value - right 300ms linear. Type string.
  The following values are allowed: '350ms' or '1s'. You can only control the speed of the animation.


* __bottom__ - The position of the element on the page. Allowed to be used only to track all content on the website.
  This means that this value will be ignored if you initialize the plugin for any element other than HTML or BODY. Default value - false.
  Type boolean. The following values are allowed: true или false.


* __scrollLine__ - Sets the reference point for the scroll indicator. If "top" is specified, the plugin will wait
  until the top edge of the element is at the top of the browser window, and only after that the indicator will start its work and finish
  it, when the bottom edge of the element is at the top of the browser window. If "bottom" is specified, the plugin will not wait until
  the top edge of the element is at the top of the browser window, it will work as soon as the element appears in the user's field of
  view, and exits when the bottom edge of the element is in the view of the browser window. The value will have no effect if set on HTML
  or BODY elements. Default value - bottom. Type string. The following values are allowed: 'top' или 'bottom'.
