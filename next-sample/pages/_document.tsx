// custom-document
// https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/custom-document
// <html>タグや<body>タグを拡張する手法

import Document, {DocumentContext} from "next/document";
import { ServerStyleSheet } from "styled-components";

// 元のDocumentをMyDocumentで上書き
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            })

            // 初期値を流用
            const initialProps = await Document.getInitialProps(ctx)

            // 初期値にstylesを追加して返す
            return {
                ...initialProps,
                styles: [
                    // 元のstyle
                    initialProps.styles,
                    // 追加したstyle
                    sheet.getStyleElement()
                ],
            }
        } finally {
            sheet.seal()
        }
    }
}