const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { 
	rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.(csv|tsv)$/i,
			use: ['csv-loader'],
		},
		{
			test: /\.xml$/i,
			use: ['xml-loader'],
		},		
	],
  },
  /*
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
      },
    }),
    new ModuleFederationPlugin({
      name: 'remote',
      exposes: [ './src/component.js'],
    }),	
  ],
  */  
};