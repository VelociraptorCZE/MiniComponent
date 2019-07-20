/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import eventNames from "../service/eventNames";
import fragmentName from "../service/jsxFragmentName";

const MiniComponentJsx = {
    createElement: (tagName, props, ...children) => {
        const element = document.createElement(tagName);

        if (props instanceof Object) {
            Object.entries(props).forEach(([attribute, value]) => {
                const attributeInLowerCase = attribute.toLowerCase();

                if (attribute === "dangerouslySetInnerHTML") {
                    element.insertAdjacentHTML("beforeend", value);
                }
                else if (eventNames.includes(attributeInLowerCase)) {
                    element.addEventListener(attributeInLowerCase.slice(2), value);
                }
                else {
                    if (attribute === "className") {
                        element.className = value;
                    }
                    else {
                        element.setAttribute(attribute, value);
                    }
                }
            });
        }

        const parseChildren = child => {
            if (child instanceof Element) {
                element.appendChild(child);
            }
            else if (typeof child === "string") {
                element.insertAdjacentText("beforeend", child);
            }
            else if (Array.isArray(child)) {
                child.forEach(parseChildren);
            }
        };

        children.forEach(parseChildren);

        return element;
    },
    FRAGMENT: fragmentName
};

export default MiniComponentJsx;