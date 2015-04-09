# ng.cork.ui.textarea-auto-resize
[![Build Status: Linux](http://img.shields.io/travis/cork-labs/ng.cork.ui.textarea-auto-resize/master.svg?style=flat-square)](https://travis-ci.org/cork-labs/ng.cork.ui.textarea-auto-resize)
[![Bower version](http://img.shields.io/bower/v/ng.cork.ui.textarea-auto-resize.svg?style=flat-square)](https://github.com/cork-labs/ng.cork.ui.textarea-auto-resize)

> Provides a directive to resize textareas on user input or programatic changes


## Getting Started

Add **ng.cork.ui.textarea-auto-resize** to you project.

Via bower:

```
$ bower install --save ng.cork.ui.textarea-auto-resize
```

Via npm:

```
$ npm install --save ng.cork.ui.textarea-auto-resize
```


Include the following JS files in your build:
- `dist/ng.cork.ui.textarea-auto-resize.js` OR `dist/ng.cork.ui.textarea-auto-resize.min.js`

Alternatively, include only the components and utils you are going to use:
- `dist/lib/ng.cork.ui.textarea-auto-resize.enter-click.js`
- `dist/lib/ng.cork.ui.textarea-auto-resize.focus-on.js`
- `dist/lib/ng.cork.ui.textarea-auto-resize.stop-propagation.js`
- ...


## Documentation

Make sure to check the [official documentation](http://jarvis.cork-labs.org/ng.cork.ui.textarea-auto-resize/current/docs) where you can find a
[guide](http://jarvis.cork-labs.org/ng.cork.ui.textarea-auto-resize/current/docs/#/guide), a few [demos](http://jarvis.cork-labs.org/ng.cork.ui.textarea-auto-resize/current/docs/#/demos) and the complete
[API reference](http://jarvis.cork-labs.org/ng.cork.ui.textarea-auto-resize/current/docs/#/docs).


## Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Make sure you read the [Contributing Guide](CONTRIBUTING.md) first.


## Developing

Clone this repository, install the dependencies and simply run `grunt develop`.

```
$ npm install -g grunt-cli bower
$ npm install
$ bower install
$ ./bootstrap.sh
$ grunt develop
```

At this point, the source was validated, tested and built into the `build/` directory. A simple webserver is launched so
that you can browse the generated code, documentation and the code coverage. If you now edit and save any project file,
the necessary `grunt` tasks will be triggered to update the build and docs.

```
...
Running "serve:build" (serve) task
Started connect web server on http://0.0.0.0:8000

Running "watch" task
Waiting...
```

More info on the (Grunt based) tools can be found in the
[boilerplate documentation](http://jarvis.cork-labs.org/boilerplate-nglib/current/docs).


## [MIT License](LICENSE)

[Copyright (c) 2005 Cork Labs](http://cork-labs.mit-license.org/2015)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
