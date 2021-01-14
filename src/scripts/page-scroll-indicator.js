function scroll(scrollPageIndicator) {
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
        const scrollTop = window.pageYOffset;
        const result = Math.round((scrollTop * 100) / finalHeight);
        scrollPageIndicator.style.right = `${String(100 - result)}%`;
    } catch (err) {
        throw new Error(err);
    }
}

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

        window.addEventListener('scroll', scroll.bind(null, element));
    } catch (err) {
        throw new Error(err);
    }
}

export default pageScrollIndicator;
