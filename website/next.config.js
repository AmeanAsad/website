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
    images: {
        domains: ["f004.backblazeb2.com"],
    },
    target: "serverless",

    webpack: (config, options) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };

        return config;
    },
});
