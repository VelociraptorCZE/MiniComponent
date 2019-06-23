/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

const eventNames = Object.keys(window).filter(property => /^on/.test(property));

if (!eventNames.length) {
    for (const property in document) {
        if (/^on/.test(property)) {
            eventNames.push(property);
        }
    }
}

export default eventNames;
