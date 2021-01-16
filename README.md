# page-scroll-indicator

This plugin sets the scroll bar indicator for the document.

## Sample page:
[This is an example of a page using a scroll indicator](https://denislopatin.github.io/Scroll-Page-Indicator/)

## Install
    npm install --save page-scroll-indicator
    
### Use
    import pageScrollIndicator from "page-scroll-indicator/src/scripts/page-scroll-indicator";
___pageScrollIndicator___ - configuration function. Accepts the configuration. For example:

    developmentPageScrollIndicator({
        element: '.scroll-top',
        zIndex: 99,
        height: 5,
        opacity: 0.75,
        backgroundColor: 'blue',
        boxShadow: 'aqua inset',
        transition: '200ms ease-in-out',
    });
    
* element - class of the element to be selected for creating the indicator. Default - class '.scroll-page-indicator'. Type 'string' ('.my-class').
* zIndex - z-index of the element. Default - 10000. Type 'string' or 'number' (30 or '456').
* height - height of the element. Default - 10px. Type 'string' or 'number' (10 or '18').
* opacity - opacity of the element. Default - 1. Type 'string' or 'number' (0.25 or '0.9').
* backgroundColor - background-color of the element. Default - aqua. Type 'string' ('red').
* boxShadow - box-shadow of the element. Default - 0 0 5px transparent. Type 'string' ('green' or 'green inset').
* transition - transition of the element. Default - right 300ms linear. Type 'string' ('350ms easy-in' or '1s easy-in-out').

Or connect the file at the bottom of your page: 

    <script src="https://denislopatin.github.io/Scroll-Page-Indicator/page-scroll-indicator.js"> </script>

The scroll indicator will be installed at the very top of the site:

![](https://github.com/DenisLopatin/page-scroll-indicator/blob/main/src/image/page-scroll-indicator.jpg?raw=true)
