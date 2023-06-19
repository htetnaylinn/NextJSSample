import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/nevbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
          <div>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>Testing</p>
            <Link className={styles.btn} href="/ninjas">See all ninjas</Link>
          </div>
    </>
   
  )
}
