# wooden-ladder ([npm](https://www.npmjs.com/package/wooden-ladder))

[![npm version](https://badge.fury.io/js/wooden-ladder.svg)](https://badge.fury.io/js/wooden-ladder)
![](https://img.shields.io/npm/dt/wooden-ladder.svg)
[![Travis](https://img.shields.io/travis/piecioshka/wooden-ladder.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/wooden-ladder)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/wooden-ladder/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/wooden-ladder?branch=master)

> :hammer: Invokes "fn1" until "limit" is reached after that call "fn2".

## Install

```
$ npm install wooden-ladder
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

[The MIT License](http://piecioshka.mit-license.org) @ 2016
