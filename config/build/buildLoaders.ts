import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const assetsLoader = {
        test: /\.(png|jpg|gif|ttf|woff|woff2|eot)$/,
        type: "asset/resource",
    }
    // --- without svg extension ---
    // const assetsLoader = {
    //     test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
    //     type: "asset/resource",
    // }

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    }

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        { locales: ["ru", "en"], keyAsDefaultValue: true },
                    ],
                    // […] your other plugins […]
                ],
            },
        },
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    } as RuleSetRule
    // если не юзаем typesript - юзаем babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    return [assetsLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
