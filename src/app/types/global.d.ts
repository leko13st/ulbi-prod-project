declare module "*.scss" {
    const content: { readonly [key: string]: string }
    export = content
}

// declare module "*.svg" {
//     const content: string
//     export default content
// }

declare module "*.svg" {
    import React from "react"
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const __IS_DEV__: boolean
