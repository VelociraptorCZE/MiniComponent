/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default interface MiniComponent {
    state: object,
    constructor(container: Element | string, initialState: Object | void): this,
    setState(target: object): void,
    onMount(): void,
    onRender(): void,
    render({ state }): string | void
}