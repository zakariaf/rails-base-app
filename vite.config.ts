import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from "path"

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "app", "javascript"),
      },
    ],
  },
  plugins: [
    RubyPlugin(),
  ],
})
