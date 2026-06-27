import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't infer the wrong directory
  // when multiple lockfiles exist higher up the tree.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
