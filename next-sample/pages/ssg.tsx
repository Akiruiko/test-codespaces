import { NextPage, GetStaticProps, NextPageContext } from 'next'
import Head from 'next/head'

type SSGProps = {
    message: string
}

// NextPageはページコンポーネントの型
// ジェネリックは受け取るpropsの型を指定する
const SSG: NextPage<SSGProps> = ({ message }) => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです。
                </p>
                <p>
                    お前の"message"はこれだ↓ <br />
                    {message}
                </p>
            </main>
        </div>
    )
}

// GetStaticPropsはビルド時に実行され、propsをページコンポーネントに渡す関数
// 1.exportする、2.非同期関数async()で定義、3.contextを引数に取る
// ジェネリックは返すpropsの型を指定する、propsはページコンポーネントに渡される
// contextはビルド時に使用できる変数のあつまり
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にgetStaticPropsが実行されました`
    console.log(message)
    return {
        props: {
            message
        }
    }
}
export default SSG