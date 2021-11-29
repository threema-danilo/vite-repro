import App from './App.svelte'

import tempy from 'tempy';
import {promisify} from 'node:util';


const app = new App({
  target: document.getElementById('app')
})

const promisified = promisify((callback) => callback());
const tempdir = tempy.file();

export default app
