# MiniComponent

A really simple and lightweight component supporting one way binding.
MiniComponent consists of five essential methods. 
From version 1.5.0 onwards you can use JSX.


#### constructor(container: Element | string, initialState: Object | void): this
When you call constructor of MiniComponent you have to pass container as either Element or string.
String will be selected with document.querySelector. 

Second parameter is initialState. This parameter can be omitted, 
but you can pass through this parameter set of properties for your Component's state before first render.

#### setState(target: object): void
This method is similar to setState in React, 
you just pass an object with data to update your component state.

#### onMount(): void
This method is called when your component is mounted.

#### onRender(): void
This method is called on each render in your component.

#### render(): Array<Element | Text> | Element | void
Like setState this method is pretty much same as React render function.

### Simple example

```js
import MiniComponent, { MiniComponentJsx } from "minicomponent";

export default class DoubleNumber extends MiniComponent {
    constructor () {
        super(document.body);
    }

    setNumber ({ target }) {
        this.setState({
            number: +target.value
        });
    }

    render ({ number }) {
        return (
            <>
                <label htmlFor={"numberInput"}>{"Number: "}</label>
                <input type="number" id={"numberInput"} value={number || 0} onChange={e => this.setNumber(e)}/>
                <br/><br/>
                {
                    number !== void 0 ?
                        (<div>
                            <strong>{"Result: "}</strong>
                            {number * 2}
                        </div>) : "Type in some number first"
                }
            </>
        );
    }
}
```

### Before 1.5.0
Before version 1.5.0 you had to use string for render method,
because at that time this library hadn't support for JSX.

Let's imagine we wrote our example before version 1.5.0,
so render method would look like this in that case:

```js
render ({ number }) {
        return `
                <label for="numberInput">Number: </label>
                <input type="number" id="numberInput" value=${number || 0} onchange="setNumber">
                <br><br>
                ${
                    number !== void 0 ?
                        `<div>
                            <strong>Result: </strong>
                            ${number * 2}
                        </div>` : "Type in some number first"
                }
            `;
    }
```

### After 1.5.0

As I mentioned that higher already, you can use JSX from version 1.5.0.
String injecting was still supported, but with next version (1.5.5) this support was dropped.

### Webpack configuration

For your webpack you have to use plugin for transforming JSX:

@babel/plugin-transform-react-jsx

This plugin is made for React, but with some changes in webpack config we can make this work.
First of all, you need to specify pragma for creating elements and second you need to define pragma for React fragments.

```js
plugins: [
    ["@babel/plugin-transform-react-jsx", {
        pragma: "MiniComponentJsx.createElement",
        pragmaFrag: "MiniComponentJsx.FRAGMENT"
    }],
]
```

That's also reason why you need to import MiniComponentJsx in your scripts.

You might also have struggle with some errors after build. Most likely it would be caused by exclude rule in config.
One possible solution is to change widely used regular expression:

```js
/node_modules/
```

To:

```js
/node_modules\/(?!minicomponent).*/
```

