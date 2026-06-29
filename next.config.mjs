import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project. Without this, Next can pick the
  // wrong root when a stray lockfile exists higher up (e.g. in the home dir).
  outputFileTracingRoot: __dirname,
  eslint: {
    // ESLint is not wired up for Next.js yet (a follow-up task). Don't let a
    // missing/legacy lint config block production builds in the meantime.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
