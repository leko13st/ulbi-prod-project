import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildPlugins = (
    templatePath: string,
    isDev: boolean,
): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: templatePath,
            // minify: {
            //     collapseWhitespace: isProd,
            // },
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new EslintWebpackPlugin({
            useEslintrc: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ] as webpack.WebpackPluginInstance[];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
};
