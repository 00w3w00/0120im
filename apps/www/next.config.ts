import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: import("next").NextConfig = {
  transpilePackages: ["@0120/ui"],
};

export default withVanillaExtract(nextConfig);
