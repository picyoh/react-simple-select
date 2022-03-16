# React-simple-select

A simple and reusable Select component for React

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install rs-select --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add rs-select
```

## Usage

The most basic use of the RsSelect can be described with:

```js
import React from "react";
import RsSelect from "rs-select";

const Example = () => {
    const options = ["First", "Second", {name: "Third", abbreviation: "3rd" }]
    return (
        <RsSelect
            name={name} //id and name of select component
            options={options} //Array or Array of Objects
            title={title} //label's innerText
        />
    );
};
```

### Minimum Usage

The minimum use of the RsSelect:

```js
<RsSelect name={name} options={options} />
```

In this case the title will be set with the name parameter

## License
Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
