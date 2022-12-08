import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = ({ id }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    // 括弧()の中はJSX、JSXの波括弧{}の中はjsが使える、jsのバッククォート``の中は${}で変数を代入可能
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p> このページはSSGでビルド時に生成されたページです。 </p>
                <p> {`/posts/${id}に対応するページです。`}</p>
            </main>
        </div>
    )
}

// ビルド時に実行され、contextを操作する関数
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: '1'
            }
        },
        {
            params: {
                id: '2'
            }
        },
        {
            params: {
                id: '3'
            }
        }
    ]

    // context.paramsとfallback時の挙動を指定(false→404ページを返す)
    return { paths, fallback: false }
}

// これ何？　クラスっぽい
// interface と ParsedUrlQuery について調べる
interface PostParams extends ParsedUrlQuery {
    id: string
}

// ジェネリックの第二引数にPostParamsを入れてcontextを操作する
// getPaths→(params)→getProps→(props)→pageの関係
export const getStaticProps: GetStaticProps<PostProps, PostParams> = (context) => {
    return {
        props: {
            // optionalを!で剥がすのは良くないのでやらない方が良い
            id: context.params!['id']
        }
    }
}

export default Post