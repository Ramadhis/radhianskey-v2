import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { HelmetProvider } from "react-helmet-async";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        return render(
            <HelmetProvider>
                <Provider store={store}>
                    <App {...props} />
                </Provider>
            </HelmetProvider>,
            el
        );
    },
});

InertiaProgress.init();
