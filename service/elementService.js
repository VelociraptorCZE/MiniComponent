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