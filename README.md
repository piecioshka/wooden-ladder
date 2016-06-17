# wooden-ladder

[![npm version](https://badge.fury.io/js/wooden-ladder.svg)](https://badge.fury.io/js/wooden-ladder)

> :hammer: Invokes 'fn1' until 'limit' is reached after that call 'fn2'.

## Install

```
npm install wooden-ladder
```

## Usage

### Example 1

```js
let WoodenLadder = require('wooden-ladder');

let fn1 = () => console.log(1);
let fn2 = () => console.log(2);
let lad = new WoodenLadder(3, fn1, fn2);

lad.climb(); // fired "fn1"
lad.climb(); // fired "fn1"
lad.climb(); // fired "fn1"

lad.climb(); // fired "fn2"
lad.climb(); // fired "fn2"
lad.climb(); // fired "fn2"
...
lad.climb(); // fired "fn2"
```

### Example 2

```js
let WoodenLadder = require('wooden-ladder');

let fn1 = () => console.log(1);
let fn2 = () => {
    console.log(2)
    lad.reset();
};
let lad = new WoodenLadder(3, fn1, fn2);

lad.climb(); // fired "fn1"
lad.climb(); // fired "fn1"
lad.climb(); // fired "fn1"

lad.climb(); // fired "fn2"

lad.climb(); // fired "fn1"
lad.climb(); // fired "fn1"
lad.climb(); // fired "fn1"

lad.climb(); // fired "fn2"
lad.climb(); // fired "fn2"
lad.climb(); // fired "fn2"
...
lad.climb(); // fired "fn2"
```

## License 

[The MIT License](http://piecioshka.mit-license.org) @ 2016
