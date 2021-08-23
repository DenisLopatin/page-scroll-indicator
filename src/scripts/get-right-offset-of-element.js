import getMaxHeightValueOfThePage from "./get-max-height-value-of-the-page";

/**
 * @function getRightOffsetOfElement - get the right position relative to the parent container. Return the right position for scrollIndicator
 * @param { HTMLElement } parentElement - parent element for scroll
 * @param { HTMLElement } scrollIndicator - scroll element
 * @param { string } scrollLine - line of the scroll relative element
 * @return { Array, Boolean } - array, where first element is number, second scrollIndicator or undefined
 * */

export default function getRightOffsetOfElement(parentElement, scrollIndicator, scrollLine) {
    const offsetTop = parentElement.getBoundingClientRect().top + window.pageYOffset;
    const elementHeight = parentElement.clientHeight;
    let scrollTop;
    if (scrollLine === 'top') {
        const documentHeight = document.documentElement.clientHeight;
        const fullHeight = window.pageYOffset + documentHeight;
        if (fullHeight === getMaxHeightValueOfThePage()) {
            scrollIndicator.style.right = '0';
            return [false, scrollIndicator];
        }
        scrollTop = window.pageYOffset - offsetTop;
    }
    if (scrollLine === 'bottom') {
        const documentHeight = document.documentElement.clientHeight;
        scrollTop = window.pageYOffset - offsetTop + documentHeight;
    }
    return [Math.round((scrollTop * 100) / elementHeight), scrollIndicator];
}
