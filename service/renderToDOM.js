/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import { emptyElement } from "./elementService";

export default function renderToDOM (content = [], container) {
    emptyElement(container);
    if (Array.isArray(content)) {
        content.forEach(element => container.appendChild(element));
    }
    else {
        container.appendChild(content);
    }
}