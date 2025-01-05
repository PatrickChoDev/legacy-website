// dep.ts - Deno dependencies

// Core dependencies
export { type UserConfig as ViteConfig, defineConfig } from 'npm:vite@5.4.11';

export { type SvelteKitClientContext } from 'npm:@sveltejs/kit@2.12.0';

export { vitePreprocess } from 'npm:@sveltejs/vite-plugin-svelte@4.0.0';

// Development tools
export { default as autoprefixer } from 'npm:autoprefixer@10.4.20';
export { default as eslint } from 'npm:eslint@9.7.0';
export { default as prettier } from 'npm:prettier@3.3.2';

// Svelte specific
export { default as nodeAdapter } from 'npm:@sveltejs/adapter-node@5.2.9';

// TypeScript
export * as ts from 'npm:typescript@5.0.0';

// Note: Some development dependencies like prettier plugins and eslint configs
// are typically configured in their respective configuration files rather than
// being imported directly
