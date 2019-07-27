/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import renderToDOM from "../service/renderToDOM";

export default class MiniComponent {
	constructor (container, initialState) {
		this.container = container instanceof Element ? container : document.querySelector(container);
		this.setState(initialState);
		this.onMount();
	}

	setState (target) {
		this.state = { ...this.state, ...target };
		renderToDOM(this.render(this.state), this.container);
		this.onRender();
	}

	onMount () {}

	onRender () {}

	render () {}
}