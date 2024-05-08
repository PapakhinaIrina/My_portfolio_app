const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const path = require('path');
const submoduleName = 'submoduleFacilities';

module.exports = (env, argv) => {
  const branch = process.env.Branch;
  const isProduction = argv.mode === 'production';
  const envPath = isProduction
    ? branch == 'master'
      ? './.env.production'
      : branch == 'release'
      ? './.env.stage'
      : './.env.development'
    : './.env.local';
  require('dotenv').config({ path: envPath });

  return {
    devtool: !isProduction ? 'source-map' : undefined,
    entry: './src/index.ts',
    mode: process.env.NODE_ENV || 'development',
    output: {
      publicPath: process.env.PUBLIC_PATH,
    },
    devServer: {
      port: 3006,
      host: '127.0.0.1',
      open: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/app'),
        pages: path.resolve(__dirname, 'src/pages'),
        entities: path.resolve(__dirname, 'src/entities'),
        features: path.resolve(__dirname, 'src/features'),
        shared: path.resolve(__dirname, 'src/shared'),
        widgets: path.resolve(__dirname, 'src/widgets'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(?:js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                babelrc: false,
                presets: [['@babel/preset-env', { targets: 'defaults' }]],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.(less)$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentHashSalt: process.env.CSS_HASH_SALT,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(?:png|svg|jpg)$/,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: submoduleName,
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/app/App',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-router-dom'],
          },
          antd: {
            singleton: true,
            eager: true,
          },
          '@ant-design/icons': {
            singleton: true,
            eager: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        excludeChunks: [submoduleName],
        template: './public/index.html',
      }),
    ],
  };
};
