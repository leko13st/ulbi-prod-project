import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export const buildPlugins = (
    templatePath: string,
    isDev: boolean
): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: templatePath,
            // minify: {
            //     collapseWhitespace: isProd,
            // },
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        // isDev && new ReactRefreshWebpackPlugin(),
    ]
}
