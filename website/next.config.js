/** @type {import('next').NextConfig} */
/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    webpack: (config, options) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true
        };
        config.module.rules.push({
            test: /\.mdx$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: require.resolve("@mdx-js/loader"),
                    options: {
                        providerImportSource: "@mdx-js/react",
                        remarkPlugins: []
                    }
                },
            ],
        });
        return config;
    },
});
