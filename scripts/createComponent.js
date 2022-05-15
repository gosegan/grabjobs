const fs = require('fs');
const path = require('path');

const location = process.argv[2];
const name = process.argv[3];

const dir = path.resolve(`components/${location}/${name}`);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
} else {
  throw new Error(`Already exists ${dir}`);
}

const component = `//styles
import s from './${name}.module.css';

const ${name} = () => {
  return (
    <div>
      <h1>${name}</h1>
    </div>
  )
}

export default ${name}
`;

const reExport = `export { default } from './${name}';`;

fs.writeFileSync(path.join(dir, `${name}.jsx`), component);
fs.writeFileSync(path.join(dir, `${name}.module.css`), '');
fs.writeFileSync(path.join(dir, `index.js`), reExport);
