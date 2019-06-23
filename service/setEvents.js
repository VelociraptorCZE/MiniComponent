/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default function setEvents (event) {
    const elements = [...this.container.querySelectorAll(`[${event}]`)];
    elements.forEach(element => {
        const callbackName = element.getAttribute(event);
        element.addEventListener(event.slice(2), e => this[callbackName](e));
        element.removeAttribute(event);
    });
}