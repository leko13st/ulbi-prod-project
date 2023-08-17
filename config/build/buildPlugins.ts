import path from "path"
import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const buildPlugins = (
    templatePath: string
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
    ]
}
