import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import commonjsExternals from 'vite-plugin-commonjs-externals';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        commonjsExternals.default({externals: [
            'node:util',
        ]}),
    ]
})
