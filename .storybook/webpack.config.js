module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, runtime: 'automatic', typescript: true }]],
        },
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
