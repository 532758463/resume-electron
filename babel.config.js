module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react',
    ['@babel/preset-typescript', { allowNamespaces: true }]
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import']
};
