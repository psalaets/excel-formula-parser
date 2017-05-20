# excel-formula-parser

Parse excel formula into a tree.

## Usage

```js
const {parse, visit} = require('excel-formula-parser');

const tree = parse('SUM(1, 2)');

visit(tree, visitor);
```

See [psalaets/excel-formula-ast](https://github.com/psalaets/excel-formula-ast) for details on `visitor` object.
