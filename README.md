# excel-formula-parser

Parse excel formula into a tree.

## Install

`npm install excel-formula-parser -S`

or

`yarn add excel-formula-parser`

## Usage

```js
const {parse, visit} = require('excel-formula-parser');

const tree = parse('SUM(1, 2)');

visit(tree, visitor);
```

## API

### parse(formula)

Parse a formula into an expression tree.

### visit(tree, visitor)

Visit nodes of the tree.

See docs for [excel-formula-ast](https://github.com/psalaets/excel-formula-ast#visittree-visitor).

## License

MIT
