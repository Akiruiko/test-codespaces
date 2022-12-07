import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  // next.js 13 (2022/10/26) から<Link>子要素に<a>タグを入れなくなった（勝手に入る）
  // hrefはpathをstring, pathのどちらで渡しても良い
  // https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
  return (
    <div>
      <Link href="/ssg">Go to SSG</Link>
      <br />
      <Link href={{ pathname: '/ssg' }}>Go to SSG by pathname</Link>
    </div>
  )
}
