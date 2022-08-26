import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import wordWrap from 'word-wrap';
import { fileURLToPath } from 'url';

const title = `Stepan Kuzmin is a software engineer and GIS specialist
with 10 years of experience in solving problems with technologies`;

const newLine = '\n';
const rows = [
  newLine,
  chalk.grey(title),
  newLine,
  `${chalk.grey('Work')}: Software Engineer at Mapbox`,
  `${chalk.grey('Twitter')}: https://twitter.com/stepankuzmin`,
  `${chalk.grey('LinkedIn')}: https://linkedin.com/in/stepan-kuzmin`,
  newLine,
  `${chalk.grey('GitHub')}: https://github.com/stepankuzmin`,
  `${chalk.grey('npm')}: https://www.npmjs.com/~stepankuzmin`,
  `${chalk.grey('web')}: https://stepankuzmin.com`,
  newLine,
];

const indent = '   ';
const wrapOptions = {
  indent,
  trim: false,
  width: process.stdout.columns - indent.length,
};

const wrap = (row = '') => wordWrap(row, wrapOptions);
const output = rows.map(wrap).join(newLine);

const dirname = path.dirname(fileURLToPath(import.meta.url));
fs.writeFileSync(path.join(dirname, 'bin/output'), output);
console.log(output);
