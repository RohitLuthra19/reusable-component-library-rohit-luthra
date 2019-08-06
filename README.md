# reusable-component-library-rohit-luthra

> react based reusable component library

[![NPM](https://img.shields.io/npm/v/component-library-test.svg)](https://www.npmjs.com/package/reusable-component-library-rohit-luthra) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reusable-component-library-rohit-luthra
```

## Usage

```jsx
import React, { Component } from 'react'

import { Input, Header, SearchBar } from 'reusable-component-library-rohit-luthra'
import s from './index.css';

export default class App extends Component {
  render () {
    return (
      <div className={s.container}>
        <Header></Header>
        <Input
          label="CITY"
          name="city"
          placeholder=""
          value={""}
          onChange={ () => {console.log('changed')} }
          disabled={false}
          onBlur={ () => {console.log('blur')} }
        />
        <SearchBar
          placeholder="Search Members"
          query=""
          onSearch={ () => {console.log('search')} }
          onChange={ () => {console.log('change')} }
        />
      </div>
    )
  }
}

```

## License

MIT © [rohitluthra](https://github.com/rohitluthra19)
