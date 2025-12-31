import { fixupConfigRules } from "@eslint/compat";
import nextConfig from "eslint-config-next";

export default [
  ...fixupConfigRules(nextConfig),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
