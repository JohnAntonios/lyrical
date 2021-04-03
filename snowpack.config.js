/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  alias: {
    "$typings": "./src/typings/index.ts",
    "@constants": "./src/constants",
    "@components": "./src/components",
    "@hooks": "./src/hooks",
    "@pages": "./src/pages",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  optimize: {
    bundle: true,
    minify: true,
    splitting: true,
    treeshake: true,
  },
};
