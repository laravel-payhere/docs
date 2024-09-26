import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Laravel PayHere",
    description: "Easily and securely integrate PayHere into your Laravel application with our trusted third-party plugin.",
    base: "/docs",
    srcDir: "src",
    outDir: "../public/docs",
    appearance: "force-dark",
    head: [
        [
            "link",
            {
                rel: "preconnect",
                href: "https://fonts.bunny.net/css?family=Ubuntu:400,500,700",
            },
        ],
    ],
    markdown: {
        theme: "dracula",
    },
    sitemap: {
        hostname: "https://laravel-payhere.com/docs/",
    },
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: false,
        nav: [
            { text: "Home", link: "https://laravel-payhere.com" },
            { text: "Purchase a License", link: "https://laravel-payhere.com/checkout" },
            { text: "Video Tutorials", link: "https://bit.ly/4dhoLR0" },
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Quickstart", link: "/quickstart" },
                    { text: "Installation", link: "/installation" },
                ],
            },
            {
                text: "Configuration",
                items: [
                    { text: "API Keys", link: "/configuration/api-keys" },
                    { text: "Currency", link: "/configuration/currency" },
                    { text: "Notify URL", link: "/configuration/notify-url" },
                    { text: "Return URL", link: "/configuration/return-url" },
                    { text: "Customer Model", link: "/configuration/customer-model" },
                    { text: "Events", link: "/configuration/events" },
                    { text: "Overriding Default Models", link: "/configuration/overriding-default-models" },
                ],
            },
            {
                text: "HTML Form-Based API Builder",
                items: [
                    { text: "Introduction", link: "/builder/introduction" },
                    { text: "Builder Methods", link: "/builder/builder-methods" },
                    { text: "Examples", link: "/builder/examples" },
                ],
            },
            {
                text: "PayHere Panel",
                items: [
                    { text: "Introduction", link: "/panel/introduction" },
                    { text: "Configuration", link: "/panel/configuration" },
                ],
            },
            {
                text: "Intermediate RESTful API",
                items: [
                    { text: "Introduction", link: "/rest-api/introduction" },
                    { text: "Retrieve Payments", link: "/rest-api/payments/retrieve" },
                    { text: "Charge a Payment", link: "/rest-api/payments/charge" },
                    { text: "Capture a Payment", link: "/rest-api/payments/capture" },
                    { text: "Refund a Payment", link: "/rest-api/payments/refund" },
                    { text: "Retrieve Payments of a Subscription", link: "/rest-api/subscriptions/retrieve-payments" },
                    { text: "List All Subscriptions", link: "/rest-api/subscriptions/list" },
                    { text: "Retry a Subscription", link: "/rest-api/subscriptions/retry" },
                    { text: "Cancel a Subscription", link: "/rest-api/subscriptions/cancel" },
                ],
            },
        ],
        editLink: {
            pattern: "https://github.com/laravel-payhere/docs/edit/main/src/:path",
            text: "Edit this page on GitHub",
        },
        search: {
            provider: "algolia",
            options: {
                appId: "EWK3GHM6CX",
                apiKey: "8f8d62a9f028eed8fe5088c0e616756e",
                indexName: "laravel-payhere",
            },
        },
    },
});
