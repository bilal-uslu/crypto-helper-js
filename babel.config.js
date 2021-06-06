module.exports = {
    plugins: [
        ["@babel/plugin-transform-modules-umd", {
        exactGlobals: true,
        globals: {
          index: 'CryptoHelperJs'
        }
      }]
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };