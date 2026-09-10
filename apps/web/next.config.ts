import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@fashion-station/api-client",
    "@fashion-station/shared-types",
    "@fashion-station/validation",
    "@fashion-station/shared"
  ]
};

export default nextConfig;
