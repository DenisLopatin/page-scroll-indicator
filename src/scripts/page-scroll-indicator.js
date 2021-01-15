/** function scroll
 *  calculates the scroll height of the document
 *  @param { HTMLElement } scrollPageIndicator - HTMLElement div for scroll
 *  @param { number } margins - number calculated from fields
 * */

function scroll(scrollPageIndicator, margins) {
    try {
        const documentHeightValues = [
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
        ];
        const documentHeight = Math.min(...documentHeightValues);
        const documentFullHeight = Math.max(...documentHeightValues);
        const finalHeight = documentFullHeight - documentHeight;
        if (finalHeight === margins) return;
        const scrollTop = window.pageYOffset;
        const result = Math.round((scrollTop * 100) / finalHeight);
        scrollPageIndicator.style.right = `${String(100 - result)}%`;
    } catch (err) {
        throw new Error(err);
    }
}

/** function getMargins
 *  calculates the fields of the body element and all its first-level child elements
 *  @return { number } - returns the maximum value
 * */

function getMargins() {
    const bodyMargins = [
        Number(getComputedStyle(document.body).marginTop.replace('px', '')),
        Number(getComputedStyle(document.body).marginBottom.replace('px', '')),
    ].reduce((acc, el) => {
        acc += el;
        return acc;
    }, 0);
    const bodyElementsMargins = [
        ...document.querySelectorAll('body > *'),
    ].reduce((acc, el) => {
        const elMarginTop = getComputedStyle(el).marginTop.replace('px', '');
        const elMarginBottom = getComputedStyle(el).marginBottom.replace(
            'px',
            '',
        );
        const marginValue = Number(elMarginTop) + Number(elMarginBottom);
        acc += marginValue;
        return acc;
    }, 0);
    return Math.max(bodyMargins, bodyElementsMargins);
}

/** function pageScrollIndicator
 *   config function
 *   @param { Object } config - configuration
 * */

function pageScrollIndicator(config) {
    try {
        const element = document.querySelector(
            config.element || '.scroll-page-indicator',
        );
        element.style.position = 'fixed';
        element.style.zIndex = `${String(config.zIndex)}` || '10000';
        element.style.top = '0';
        element.style.left = '0';
        element.style.right = '100%';
        element.style.height = `${String(config.height)}px` || '10px';
        element.style.opacity = `${String(config.opacity)}` || '1';
        element.style.backgroundColor = config.backgroundColor || 'aqua';
        element.style.boxShadow = `0 0 5px ${
            config.boxShadow || 'transparent'
        }`;
        element.style.transition = `right ${
            config.transition || '300ms linear'
        }`;

        const margins = getMargins();

        window.addEventListener('scroll', scroll.bind(null, element, margins));
    } catch (err) {
        throw new Error(err);
    }
}

export default pageScrollIndicator;
