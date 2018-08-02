<!-- TITLE/ -->

<h1>HOC Loader</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

HOC (Higher Order Component) Loader for Redux Containers

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/hoc-loader" title="Nodei.co badge"><img src="https://nodei.co/npm/hoc-loader.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/RemeJuan/hoc-loader" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/RemeJuan/hoc-loader/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/hoc-loader" title="View this project on NPM"><img src="https://img.shields.io/npm/v/hoc-loader.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/hoc-loader" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/hoc-loader.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/RemeJuan/hoc-loader" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/RemeJuan/hoc-loader.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->


## Installation

```
yarn add hoc-loader

or

npm install hoc-loader
```

## Usage

```javascript
import HOCLoader from 'hoc-loader';

...
/**
* Cached fetch wrapper/helper
* @param {string} url URL being fetched
* @param {*} options fetch options
* @param {number} expiry time in seconds for caching, default = 300 (5 minutes)
*/
const url = 'API PATH';
const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};

const response = cacheFetch(url, options);
// or
const response = cacheFetch(url, options, 600);

return response.json();
...
```

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/RemeJuan/hoc-loader/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2018+ <a href="reme.lehane@gmail.com) (https://www.remelehane.me">Reme Le Hane</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
