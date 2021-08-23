/**
 * @function getTopOffsetOfElement - get the top position relative to the parent container. Setting the top position for scrollIndicator
 * @param { HTMLElement } parentElement - parent element for scroll
 * @param { HTMLElement } scrollIndicator - scroll element
 * @return { Array } - Array with HTMLElements
 * */

export default function getTopOffsetOfElement(parentElement, scrollIndicator) {
    const border = parseInt(
        getComputedStyle(parentElement).getPropertyValue('border-top-width'), 10,
    );
    const top = parentElement.getBoundingClientRect().top * -1 - border;
    const height = parentElement.clientHeight;
    if (top > 0 && top < height) {
        scrollIndicator.style.top = `${top}px`;
    } else {
        scrollIndicator.style.top = '0';
    }
    return [parentElement, scrollIndicator];
}
