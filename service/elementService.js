/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export function emptyElement (element) {
    while (element && element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function escapedContent (container) {
    const elementsWithEscapedContent = [...container.querySelectorAll("[escapedContent]")];
    elementsWithEscapedContent.forEach(element => {
        element.insertAdjacentText("beforeend", element.getAttribute("escapedContent"));
        element.removeAttribute("escapedContent");
    });
}