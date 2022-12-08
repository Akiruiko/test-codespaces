import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`color: red;`

const Home: NextPage = () => {
  // next.js 13 (2022/10/26) から<Link>子要素に<a>タグを入れなくなった（勝手に入る）
  // hrefはpathをstring, pathのどちらで渡しても良い
  // https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
  return (
    <div className={styles.comtainer}>
      <main className={styles.main}>
        <H1>
          Welcome to <a href="https://next.js.org">Next.js!</a>
        </H1>
        <br />
        <Link href="/ssg">Go to SSG</Link>
        <br />
        <Link href={{ pathname: '/ssg' }}>Go to SSG by pathname</Link>
      </main>
    </div>
  )
}

export default Home