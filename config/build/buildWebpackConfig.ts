import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { buildDevServer } from "./buildDevServer"

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const {
        mode,
        paths: { build, entry, html },
        port,
        isDev,
    } = options

    return {
        mode,
        entry,
        output: {
            filename: "[name].[contenthash].js",
            path: build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(html),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    }
}
