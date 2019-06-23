export default function emptyElement (element) {
    while (element && element.firstChild) {
        element.removeChild(element.firstChild);
    }
}