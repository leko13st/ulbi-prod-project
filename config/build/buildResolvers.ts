import webpack from "webpack"
import { BuildOptions } from "./types/config"

export const buildResolvers = (
    options: BuildOptions
): webpack.ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        mainFiles: ["index"],
        modules: [options.paths.src, "node_modules"],
        alias: {},
    }
}
