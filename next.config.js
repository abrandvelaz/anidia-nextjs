/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['jquery'] = 'jquery/dist/jquery.min.js';
        }
        return config;
    }
}

module.exports = nextConfig
