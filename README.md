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

```js
const {parse, visit} = require('excel-formula-parser');
```

### parse(formula)

Parse a formula into an expression tree.

- formula: string - Excel formula

Returns: [ast node](https://github.com/psalaets/excel-formula-ast#node-types)

### visit(tree, visitor)

Visit nodes of the tree.

- tree: [ast node](https://github.com/psalaets/excel-formula-ast#node-types)
- visitor: object - See [excel-formula-ast visitor](https://github.com/psalaets/excel-formula-ast#visittree-visitor).

## License

MIT
