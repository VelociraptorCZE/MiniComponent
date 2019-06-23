/**
 * MiniComponent
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

interface MiniComponent {
    state: object,
    setState(target: object): void,
    onMount(): void,
    onRender(): void,
    render({ state }): string | void
}