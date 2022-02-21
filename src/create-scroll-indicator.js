/**
 * @function createScrollIndicator - create scroll element and setting basis style
 * @param { Object } config - configuration
 * @return { HTMLDivElement } scrollIndicator - scroll element
 * */

export default function createScrollIndicator(config) {
    const scrollIndicator = document.createElement('div');
    Object.assign(scrollIndicator.style, {
        position: 'fixed',
        zIndex: String(config.zIndex || '10000'),
        bottom: (
            config.bottom ? (scrollIndicator.style.bottom = '0') : (scrollIndicator.style.top = '0')
        ),
        left: '0',
        right: '100%',
        height: (
            config.height ? `${String(parseInt((config.height), 10))}px` : '10px'
        ),
        opacity: `${String(config.opacity)}` || '1',
        backgroundColor: config.backgroundColor || 'aqua',
        boxShadow: `0 0 5px ${config.boxShadow || 'transparent'}`,
        transition: `right ${config.transition || '300ms'} linear`,
        willChange: 'top, right',
    });
    return scrollIndicator;
}
