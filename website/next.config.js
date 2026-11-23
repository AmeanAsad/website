/** @type {import('next').NextConfig} */
/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
      },
    async redirects() {
        return [
            // Pages that no longer exist
            { source: "/projects", destination: "/about", permanent: false },
            { source: "/projects/:slug", destination: "/about", permanent: false },
            { source: "/articles", destination: "/blog", permanent: false },
            { source: "/contact", destination: "/about", permanent: false },
            { source: "/experience", destination: "/about", permanent: false },
            { source: "/praise", destination: "/", permanent: false },
        ];
    },
    webpack: (config, options) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };

        return config;
    },
});
