import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Copy mockup images automatically on Vite start/reload
const geminiDir = 'C:/Users/HP/.gemini/antigravity/brain/6f413dda-dbac-4f98-8fb6-50ffee88fa60';
const assetsDir = path.resolve(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const mockups = [
  { src: 'powersaver_mockup_1781675638622.png', dest: 'powersaver_mockup.png' },
  { src: 'stock_predictor_mockup_1781675679494.png', dest: 'stock_predictor_mockup.png' },
  { src: 'voice_to_code_mockup_1781675702280.png', dest: 'voice_to_code_mockup.png' }
];

mockups.forEach(({ src, dest }) => {
  const srcPath = path.join(geminiDir, src);
  const destPath = path.join(assetsDir, dest);
  if (fs.existsSync(srcPath)) {
    try {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Vite Build helper] Copied ${src} to assets/${dest}`);
    } catch (e) {
      console.error(`[Vite Build helper] Error copying ${src}:`, e);
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4'],
  server: {
    port: 3000,
    open: true
  }
})
