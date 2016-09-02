# @nib-components/react-header-small

Micro header react component. Small queen-elizabeth bar with nib logo.

## Installation

```bash
npm install @nib-components/react-header-small
```

## Contributing

Since the stylesheet lives outside of this repo, the easiest way to develop/test this is to do the following:

1. Checkout this repository

1. cd into `react-header-small` and run `npm link`, then run `npm run watch:scripts`

1. Checkout https://github.com/nib-styles/header-small

1. cd into `header-small` and run `npm link`

1. Checkout https://git.nib.com.au/nib-pattern-library/nib-pattern-library

1. cd into `nib-pattern-library` and run `npm link @nib-components/react-header-small && npm link @nib-styles/header-small`

1. Now you can run the `nib-pattern-library` project, whilst editing `react-header-small` & `header-small`, the changes should reflect on the [http://localhost:5000/atom/header-small](http://localhost:5000/atom/header-small) page. You'll just have to run `npm run build` everytime you make a change to `react-header-small` or `header-small`


## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderSmall from '@nib-components/react-header-small';

ReactDOM.render(
  <div>
    <HeaderSmall/>
    <HeaderSmall color="white" />
    <HeaderSmall color="queen-elizabeth" lhs={"Content on the Left"} rhs={"Content on the Right"} />
  </div>,
  document.querySelector('#app')
);
```

## Properties

### color

The color to use.

`white` will give a white background with a queen-elizabeth logo.

`queen-elizabeth` will give a queen-elizabeth background with a white logo.

Optional. A `string`.

### lhs

Content to appear on the left of the header

Optional. A `node`.

### rhs

Content to appear on the right of the header

Optional. A `node`.

## Change log

### 0.1.5

- feature: white theme `<HeaderSmall color="white"/>`
- Uses @nib-components/Logo

### 0.1.4

- fix: remove `react` `dependencies` to `peerDependencies`
