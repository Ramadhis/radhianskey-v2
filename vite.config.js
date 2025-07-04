import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        // laravel({
        //     input: ['resources/css/app.css', 'resources/js/app.js'],
        //     refresh: true,
        // }),
        laravel(["resources/css/app.css", "resources/js/app.jsx"]),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    // build: { sourcemap: false },
});
