/** @type {import('next').NextConfig} */
/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,

    images: {
        domains: ["www.salk.edu", "f004.backblazeb2.com"],
    },

    webpack: (config, options) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };

        return config;
    },
});
