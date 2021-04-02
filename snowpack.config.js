/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  alias: {
    "@constants": "./src/constants",
    "@pages": "./src/pages",
    "@components": "./src/components",
    "@typings": "./src/typings",
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
