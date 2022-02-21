import createScrollIndicator from "./create-scroll-indicator";
import putInSomeElement from "./put-in-some-element";
import coverTheContentOfSomeElement from "./cover-the-content-of-some-element";
import getRightOffsetOfElement from "./get-right-offset-of-element";
import getTopOffsetOfElement from "./get-top-offset-of-element";
import coverAllContent from "./cover-all-content";
import errorHandler from "./error-handler";

/**
 * @function pageScrollIndicator - configuration function
 * @param { Object } config - configuration
 * */

export default function pageScrollIndicator(config = {}) {
    try {
        let target = this;
        if (window.jQuery && target instanceof window.jQuery) {
            target = this.get(0);
        }
        const isForPage = target.tagName === 'HTML' || target.tagName === 'BODY';
        const scrollIndicator = createScrollIndicator(config);
        if (!isForPage) {
            const scrollLine = config.scrollLine || 'bottom';
            putInSomeElement(target, scrollIndicator);
            window.addEventListener(
                'scroll',
                () => requestAnimationFrame(() => {
                    coverTheContentOfSomeElement(
                        ...getRightOffsetOfElement(
                            ...getTopOffsetOfElement(target, scrollIndicator),
                            scrollLine,
                        ),
                    );
                }),
            );
        } else {
            document.body.appendChild(scrollIndicator);
            window.addEventListener(
                'scroll',
                () => requestAnimationFrame(() => {
                    coverAllContent(scrollIndicator);
                }),
            );
        }
    } catch (err) {
        errorHandler(err);
    }
}
