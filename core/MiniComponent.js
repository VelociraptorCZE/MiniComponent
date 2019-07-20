/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import fragmentName from "../service/jsxFragmentName";
import eventNames from "../service/eventNames";
import setEvents from "../service/setEvents";
import { emptyElement } from "../service/elementService";

export default class MiniComponent {
	constructor (container, initialState) {
		this.container = container instanceof Element ? container : document.querySelector(container);
		this.setState(initialState);
		this.onMount();
	}

	setState (target) {
		this.state = { ...this.state, ...target };
		const { container } = this;
		const newContent = this.render(this.state) || "";
		emptyElement(container);
		if (typeof newContent === "string") {
			container.insertAdjacentHTML("beforeend", newContent);
			eventNames.forEach(event => setEvents.bind(this)(event));
		}
		else {
			if (newContent.tagName === fragmentName) {
				[...newContent.children].forEach(child => container.appendChild(child));
			}
			else {
				container.appendChild(newContent);
			}
		}
		this.onRender();
	}

	onMount () {}

	onRender () {}

	render () {}
}
