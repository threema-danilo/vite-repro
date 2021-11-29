import App from './App.svelte'

import {promisify} from 'node:util';


const app = new App({
  target: document.getElementById('app')
})

const promisified = promisify((callback) => callback());

export default app
