[![Build Status](https://travis-ci.org/mediamonks/seng-destructible.svg?branch=master)](https://travis-ci.org/MediaMonks/seng-destructible)
[![Code Climate](https://codeclimate.com/github/MediaMonks/seng-destructible/badges/gpa.svg)](https://codeclimate.com/github/MediaMonks/seng-destructible)
[![Coverage Status](https://coveralls.io/repos/github/MediaMonks/seng-destructible/badge.svg?branch=master)](https://coveralls.io/github/MediaMonks/seng-destructible?branch=master)
[![npm version](https://badge.fury.io/js/seng-destructible.svg)](https://www.npmjs.com/package/seng-destructible)
[![Downloads](https://img.shields.io/npm/dm/seng-destructible.svg)](https://www.npmjs.com/package/seng-destructible)

# seng-destructible

seng-destructible provides a basic framework for destructible classes and objects. Destructible is used as a basis for
many Seng libraries because it provides a common interface which can be passed around to be destructed at a later time.


## Installation

```
npm i -S seng-destructible
```

Or grab one of the following files from the `/dist/` folder for manual use:

- **umd** (bundled with webpack)
- **amd** (bundled with webpack)
- **commonjs2** (bundled with webpack, but why don't you use npm?)
- **browser** (bundled with webpack, available as `window.SengBoilerplate`)
- **system**
- **es6**

## Usage

```
import Destructible from 'seng-destructible';

class AsyncThinger extends Destructible {
	interval:number;

	start() {
		this.interval = setInterval(() => console.log('hello world!'));
	}
	
	destruct() {
		if (this.interval !== void 0) {
			clearInterval(this.interval);
			this.interval = void 0;
		}
		
		super.destruct();
	}
}

// since all objects implementing IDestructible provide the same way to destruct it, we can simply create an array
// that contains IDestructible objects, without having to care what they actually are.
let destructibles:Array<IDestructible> = [];

destructibles.push(new AsyncThinger());
destructibles.push(new AsyncThinger());
destructibles.push(new AsyncThinger());
destructibles.push(new AsyncThinger());

destructibles.forEach(destructible => destructible.destruct());

```


## Documentation

View the [generated documentation](https://rawgit.com/MediaMonks/seng-destructible/master/doc/typedoc/index.html).


## Building

In order to build seng-destructible, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```
git clone https://github.com/MediaMonks/seng-destructible.git
```

Change to the seng-destructible directory:
```
cd seng-destructible
```

Install dev dependencies:
```
npm install
```

Use one of the following main scripts:
```
npm run build   		# build this project (done on install)
npm run typings			# install .d.ts dependencies (done on install)
npm test    			# run the tests
npm validate			# runs validation scripts, including test, lint and doc
npm run lint			# run tslint on this project
npm run doc				# generate typedoc and yuidoc documentation
npm run typescript-npm	# just compile the typescript output used in the npm module
```

When installing this module, it adds a pre-commit hook, that runs the `validate`
and `build` scripts before committing, so you can be sure that everything
checks out and all files that should be committed are generated.

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks
