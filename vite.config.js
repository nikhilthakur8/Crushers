import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        port: 80,
        proxy: {
            "/college": {
                target: "https://bharatividyapeethfees.com/",
                changeOrigin: true,
            },
        },
    },
});
