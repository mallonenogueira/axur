import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    include: [
      '**/test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '**/*.{tests,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ]
  }
});
