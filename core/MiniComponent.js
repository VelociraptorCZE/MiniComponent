/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import eventNames from "../service/eventNames";
import setEvents from "../service/setEvents";
import emptyElement from "../service/emptyElement";

export default class MiniComponent {
	constructor (container, initialState) {
		this.container = container instanceof Element ? container : document.querySelector(container);
		this.setState(initialState);
		this.onMount();
	}

	setState (target) {
		this.state = { ...this.state, ...target };
		const { container } = this;
		emptyElement(container);
		container.insertAdjacentHTML("beforeend", this.render() || "");
		eventNames.forEach(event => setEvents.bind(this)(event));
		this.onRender();
	}

	onMount () {}

	onRender () {}

	render () {}
}
