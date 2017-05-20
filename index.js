const {buildTree, visit} = require('excel-formula-ast');
const {tokenize} = require('excel-formula-tokenizer');

module.exports.parse = parse;
module.exports.visit = visit;

function parse(formula) {
  return buildTree(tokenize(formula));
}
