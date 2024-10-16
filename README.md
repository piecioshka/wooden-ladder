# wooden-ladder

[![node version](https://img.shields.io/node/v/wooden-ladder.svg)](https://www.npmjs.com/package/wooden-ladder)
[![npm version](https://badge.fury.io/js/wooden-ladder.svg)](https://badge.fury.io/js/wooden-ladder)
[![downloads count](https://img.shields.io/npm/dt/wooden-ladder.svg)](https://www.npmjs.com/package/wooden-ladder)
[![license](https://img.shields.io/npm/l/wooden-ladder.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/wooden-ladder/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/wooden-ladder/actions/workflows/testing.yml)

🔨 Invokes "fn1" until "limit" is reached after that call "fn2".

## Install

```bash
npm install wooden-ladder
```

## Usage

### Example 1 (only climb)

```javascript
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

### Example 2 (with reset)

```javascript
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

[The MIT License](https://piecioshka.mit-license.org) @ 2016
