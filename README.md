# page-scroll-indicator

This plugin sets the scroll bar indicator for the document.

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

The scroll indicator will be installed at the very top of the site:

![Альтернативный текст](https://github.com/DenisLopatin/page-scroll-indicator/blob/main/src/image/scroll-page-indicator.jpg?raw=true)
