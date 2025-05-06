import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: 'tikz',
      fileName: '[name]',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          dir: './dist/es',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: './dist/lib',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
  },
  esbuild: {
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  },
  plugins: [
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: ['dist/lib', 'dist/es'],
    }),
  ],
});
