[![Build Status](https://travis-ci.org/mediamonks/seng-disposable.svg?branch=master)](https://travis-ci.org/MediaMonks/seng-disposable)
[![Code Climate](https://codeclimate.com/github/MediaMonks/seng-disposable/badges/gpa.svg)](https://codeclimate.com/github/MediaMonks/seng-disposable)
[![Coverage Status](https://coveralls.io/repos/github/MediaMonks/seng-disposable/badge.svg?branch=master)](https://coveralls.io/github/MediaMonks/seng-disposable?branch=master)
[![npm version](https://badge.fury.io/js/seng-disposable.svg)](https://www.npmjs.com/package/seng-disposable)
[![Downloads](https://img.shields.io/npm/dm/seng-disposable.svg)](https://www.npmjs.com/package/seng-disposable)

# seng-disposable

seng-disposable provides a basic framework for disposable classes and objects. Disposable is used as a basis for
many Seng libraries because it provides a common interface which can be passed around to be disposed at a later time.


## Installation

```
npm i -S seng-disposable
```

Or grab one of the following files from the `/dist/` folder for manual use:

- **umd** (bundled with webpack)
- **amd** (bundled with webpack)
- **commonjs2** (bundled with webpack, but why don't you use npm?)
- **browser** (bundled with webpack, available as `window.SengDisposable`)
- **system**
- **es6**

## Usage

```
import Disposable from 'seng-disposable';

class AsyncThinger extends Disposable {
	interval:number;

	start() {
		this.interval = setInterval(() => console.log('hello world!'));
	}
	
	dispose() {
		if (this.interval !== void 0) {
			clearInterval(this.interval);
			this.interval = void 0;
		}
		
		super.dispose();
	}
}

// since all objects implementing IDisposable provide the same way to dispose it, we can simply create an array
// that contains IDisposable objects, without having to care about what they actually are.
let disposables:Array<IDisposable> = [];

disposables.push(new AsyncThinger());
disposables.push(new AsyncThinger());
disposables.push(new AsyncThinger());
disposables.push(new AsyncThinger());

disposables.forEach(disposable => disposable.dispose());

```


## Documentation

View the [generated documentation](https://rawgit.com/MediaMonks/seng-disposable/master/doc/typedoc/index.html).


## Building

In order to build seng-disposable, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```
git clone https://github.com/MediaMonks/seng-disposable.git
```

Change to the seng-disposable directory:
```
cd seng-disposable
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
