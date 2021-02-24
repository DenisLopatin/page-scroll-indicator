/** function getOffset
 * return offset of the element
 * @param { HTMLElement } trackElement - html element
 * @return { number } - offset number
 * */

function getOffset(trackElement) {
    try {
        let offset = 0;
        while (trackElement) {
            offset += trackElement.offsetTop;
            trackElement = trackElement.parentElement;
        }
        return offset;
    } catch (err) {
        throw new Error(err);
    }
}

/** return max height of the page
 * @return { number } - max height of the page
 * */

function getMaxHeightValueOfThePage() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
    );
}

/** function coverTheTrackContent
 * the indicator covers the specified content
 * @param { HTMLElement } scrollPageIndicator - HTMLElement div for scroll
 * @param { HTMLElement } track - target element
 * */

function coverTheTrackContent(scrollPageIndicator, track) {
    try {
        const trackElement = document.querySelector(`.${track}`);
        const documentFullHeight = getMaxHeightValueOfThePage();
        const offsetTop = getOffset(trackElement);
        const scrollTop = window.pageYOffset - offsetTop;
        const elementHeight = trackElement.clientHeight + offsetTop;
        const finalHeight = documentFullHeight - elementHeight;
        const result = Math.round((scrollTop * 100) / finalHeight);
        scrollPageIndicator.style.right = `${String(100 - result)}%`;
    } catch (err) {
        throw new Error(err);
    }
}

/** function coverTheEntireContent
 *  the indicator covers all the content
 *  @param { HTMLElement } scrollPageIndicator - HTMLElement div for scroll
 * */

function coverTheEntireContent(scrollPageIndicator) {
    try {
        const documentFullHeight = getMaxHeightValueOfThePage();
        const documentHeight = document.documentElement.clientHeight;
        const finalHeight = documentFullHeight - documentHeight;
        const scrollTop = window.pageYOffset;
        const result = Math.round((scrollTop * 100) / finalHeight);
        scrollPageIndicator.style.right = `${String(100 - result)}%`;
    } catch (err) {
        throw new Error(err);
    }
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
        config.bottom
            ? (element.style.bottom = '0')
            : (element.style.top = '0');
        element.style.left = '0';
        element.style.right = '100%';
        element.style.height = `${String(config.height)}px` || '10px';
        element.style.opacity = `${String(config.opacity)}` || '1';
        element.style.backgroundColor = config.backgroundColor || 'aqua';
        element.style.boxShadow = `0 0 5px ${
            config.boxShadow || 'transparent'
        }`;
        element.style.transition = `right 
        ${config.transition || '300ms'} linear
        `;

        config.track
            ? window.addEventListener(
                'scroll',
                coverTheTrackContent.bind(null, element, config.track),
            )
            : window.addEventListener(
                'scroll',
                coverTheEntireContent.bind(null, element),
            );
    } catch (err) {
        throw new Error(err);
    }
}

export default pageScrollIndicator;
