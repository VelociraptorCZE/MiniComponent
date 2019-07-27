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
            if (Array.isArray(child)) {
                child.forEach(parseChildren);
            }
            else {
                if (child === void 0 || child === null) {
                    child = "";
                }
                element.appendChild(child instanceof Object ? child : document.createTextNode(child));
            }
        };

        children.forEach(parseChildren);

        return element.tagName === fragmentName ? [...element.childNodes] : element;
    },
    FRAGMENT: fragmentName
};

export default MiniComponentJsx;