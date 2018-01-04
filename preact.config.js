export default (config, env, helpers) => {
  config.node.process = 'mock';

  const { loader } = helpers.getLoadersByName(config, 'css-loader')[1];
  loader.options.url = false;

  if (env.production) {
    config.output.publicPath = '/restaurant-search/build/';
  }
};
