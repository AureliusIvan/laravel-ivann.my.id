import './bootstrap';
import '@/Styles/global.scss';
// import '@styles/global.scss';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <ApolloProvider client={client}>
                <App {...props} />
            </ApolloProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});