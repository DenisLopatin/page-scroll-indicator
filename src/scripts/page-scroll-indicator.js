/** put scroll indicator in container
 * @param { string } elementPut - name of container for scroll
 * @param { HTMLElement } scrollPageIndicator - HTMLElement div for scroll
 * */

function putIn(elementPut, scrollPageIndicator) {
    const container = document.querySelector(`.${elementPut}`);
    container.style.position = 'relative';
    container.style.overflowX = 'hidden';
    scrollPageIndicator.style.position = 'absolute';
    container.append(scrollPageIndicator);
    function getOffset() {
        const top = container.getBoundingClientRect().top * -1;
        scrollPageIndicator.style.top = `${top}px`;
    }
    window.addEventListener('scroll', getOffset);
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
 * @param { HTMLElement } trackElement - target element
 * @param { number } offsetTop - offset of the element
 * @param { string } scrollLine - line of the scroll relative element
 * */

function coverTheTrackContent(scrollPageIndicator, trackElement, offsetTop, scrollLine) {
    try {
        if (scrollLine === 'top') {
            const elementHeight = trackElement.clientHeight;
            const scrollTop = window.pageYOffset - offsetTop;
            const result = Math.round((scrollTop * 100) / elementHeight);
            scrollPageIndicator.style.right = `${String(100 - result)}%`;
        }
        if (scrollLine === 'bottom') {
            const documentElementIsTop =
                document.documentElement.getBoundingClientRect().y;
            if (documentElementIsTop === 0) {
                scrollPageIndicator.style.right = '100%';
                return;
            }
            const documentHeight = document.documentElement.clientHeight;
            const elementHeight = trackElement.clientHeight;
            const scrollTop = window.pageYOffset - offsetTop + documentHeight;
            const result = Math.round(
                (scrollTop * 100) / elementHeight,
            );
            scrollPageIndicator.style.right = `${String(100 - result)}%`;
        }
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
        if (config.put) {
            putIn(config.put, element);
        }
        if (config.track) {
            const trackElement = document.querySelector(`.${config.track}`);
            const offsetTop = trackElement.getBoundingClientRect().top;
            const scrollLine = config.scrollLine || 'bottom';
            window.addEventListener(
                'scroll',
                coverTheTrackContent.bind(
                    null, element, trackElement, offsetTop, scrollLine,
                ),
            );
        } else {
            window.addEventListener(
                'scroll',
                coverTheEntireContent.bind(null, element),
            );
        }
    } catch (err) {
        throw new Error(err);
    }
}

export default pageScrollIndicator;
