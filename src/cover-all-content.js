import getMaxHeightValueOfThePage from "./get-max-height-value-of-the-page";

/**
 * @function coverAllContent - the indicator covers all the content
 * @param { HTMLElement } scrollIndicator - scroll element
 * */

export default function coverAllContent(scrollIndicator) {
    const documentFullHeight = getMaxHeightValueOfThePage();
    const documentHeight = document.documentElement.clientHeight;
    const finalHeight = documentFullHeight - documentHeight;
    const scrollTop = window.pageYOffset;
    const result = Math.round((scrollTop * 100) / finalHeight);
    scrollIndicator.style.right = `${String(100 - result)}%`;
}
