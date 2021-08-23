/**
 * @function getMaxHeightValueOfThePage - return max height of the page
 * @return { number } - max height of the page
 * */

export default function getMaxHeightValueOfThePage() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
    );
}
