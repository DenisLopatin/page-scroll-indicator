/**
 * @function putInSomeElement - put scroll indicator in some container. Setting some containers before installing the scroll indicator
 * @param { HTMLElement } parentElement - parent element for scroll
 * @param { HTMLElement } scrollIndicator - scroll element
 * */

export default function putInSomeElement(parentElement, scrollIndicator) {
    const isElementHavePosition = getComputedStyle(parentElement).getPropertyValue('position');
    if (!isElementHavePosition || isElementHavePosition === 'static') {
        parentElement.style.position = 'relative';
    }
    if (isElementHavePosition === 'fixed' || isElementHavePosition === 'sticky') {
        throw new Error(`The plugin will not work ` +
            `if the element is set to the position property as sticky or fixed`);
    }
    scrollIndicator.style.position = 'absolute';
    parentElement.appendChild(scrollIndicator);
}
