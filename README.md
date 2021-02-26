# page-scroll-indicator

The plugin sets the scroll indicator for the page or for a separate element on it.

## Sample page:
[This is an example of a page using a scroll indicator](https://denislopatin.github.io/Scroll-Page-Indicator/)

The sample page includes documentation in Russian and examples of using the plugin.

## Installation
    npm install --save page-scroll-indicator
    
### Using
    import pageScrollIndicator from "page-scroll-indicator/src/scripts/page-scroll-indicator";
___pageScrollIndicator___ - A function that accepts a single argument in the form of a configuration file (an object with settings). For example:

    document.documentElement.pageScrollIndicator({
        zIndex: 100,
        height: 8,
        opacity: 1,
        bottom: true,
        scrollLine: 'top',
        backgroundColor: 'pink',
        boxShadow: 'white',
        transition: '200ms',
    });
    
* element - the target element for which the plugin will act will always be the context of the function call pageScrollIndicator (this). In the example above, this is document.documentElement. If you need to set the scroll indicator for the entire page, then the pageScrollIndicator function should be called on document.documentElement or on document.body. The following example is equivalent to the previous one:

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

The margins and borders of the root element and the body element are irrelevant to the plugin. It will include them in the scroll and restart to the previous value if the page is reloaded.

In the sentences below, the word "element" will not mean the context of the pageScrollIndicator function call, but the "div" element created by the plugin, which will act as a scroll indicator.

* zIndex - z-index of element. Default - 10000. Type 'string' or 'number' (30 or '456').
* height - element width. Default - 10px. Type 'string' or 'number' (10 or '18').
* opacity - the transparency of the element. Default - 1. Type 'string' or 'number' (0.25 or '0.9').
* backgroundColor - the background color of an element. Default - aqua. Type 'string' ('red' or '#6242d2').
* boxShadow - the shadow element. Default - 0 0 5px transparent. Type 'string' ('green', 'green inset' or '#6242d2').
* transition - speed animation of the element. Default - right 300ms linear. Type 'string' ('350ms' or '1s').
* bottom - location of the element on the page. This means that you cannot apply this field if you want to put the scroll indicator in the element on which it was called using the "put: true" field. In this case, this field will be ignored. Default - false. Type boolean (true or false).
* put - position the element in the current context. If you apply this field, the scroll indicator will be located inside the current context. Default - false. Type boolean (true or false).
* scrollLine - configures the reference point for the scroll indicator. If "top" is set, the plugin will wait until the upper edge of the element (the parent element of the indicator, this) is located at the top of the browser window, and only then the indicator will start its work and finish it when the lower edge of the element is located at the top of the browser window. If the value is set to "bottom", the plugin will also wait until the upper edge of the element (the parent element of the indicator, this) is located at the top of the browser window, but it will perform its work as the element is visible on the page, and finishes execution when the lower edge of the element is within the view of the browser window. Default - 'bottom'. Type 'string' ('top' or 'bottom').


