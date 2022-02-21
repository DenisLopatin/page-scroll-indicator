/**
 * @function coverTheContentOfSomeElement - the indicator covers the specified content
 * @param { number } rightOffset - the offset of the scroll element to the right relative to its parent element
 * @param { HTMLElement } scrollIndicator - scroll element
 * */

export default function coverTheContentOfSomeElement(rightOffset, scrollIndicator) {
    if (typeof rightOffset === 'boolean') return;
    if (rightOffset >= 0 && rightOffset <= 100) {
        scrollIndicator.style.right = `${String(100 - rightOffset)}%`;
    } else if (rightOffset > 100) {
        scrollIndicator.style.right = '0';
    } else if (rightOffset < 0) {
        scrollIndicator.style.right = '100%';
    }
}
