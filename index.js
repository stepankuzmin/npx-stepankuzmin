const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const wordWrap = require('word-wrap');

const title = `Stepan Kuzmin is a software engineer and GIS specialist
with 10 years of experience in solving problems with technologies`;

const newLine = '\n';
const rows = [
  newLine,
  chalk.grey(title),
  newLine,
  `Work: ${chalk.grey('CTO at Urbica')}`,
  `Twitter: ${chalk.grey('https://twitter.com/stepankuzmin')}`,
  `LinkedIn: ${chalk.grey('https://linkedin.com/in/stepan-kuzmin')}`,
  newLine,
  `GitHub: ${chalk.grey('https://github.com/stepankuzmin')}`,
  `npm: ${chalk.grey('https://www.npmjs.com/~stepankuzmin')}`,
  `web: ${chalk.grey('https://stepankuzmin.com')}`,
  newLine,
  newLine
];

const indent = '   ';
const wrapOptions = {
  indent,
  trim: false,
  width: process.stdout.columns - indent.length
};

const wrap = (row = '') => wordWrap(row, wrapOptions);
const output = rows.map(wrap).join(newLine);

fs.writeFileSync(path.join(__dirname, 'bin/output'), output);
process.stdout.write(output);
