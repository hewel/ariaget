/* eslint-disable @typescript-eslint/no-require-imports */
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

const postcssPlugins = isProd =>
  [
    tailwindcss,
    isProd &&
      purgecss({
        // Specify the paths to all of the template files in your project
        content: [
          "./public/*.html",
          "./src/**/*.html",
          "./src/**/*.js",
          "./src/**/*.ts",
          "./src/**/*.jsx",
          "./src/**/*.tsx",
          // etc.
        ],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    cssnano({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ].filter(plugin => plugin);

module.exports = function({ env }) {
  const isProd = env === "production";
  return {
    style: {
      css: {
        loaderOptions: {
          sourceMap: !isProd,
        },
      },
      postcss: {
        plugins: postcssPlugins(isProd),
        loaderOptions: {
          sourceMap: !isProd,
        },
      },
    },
  };
};
