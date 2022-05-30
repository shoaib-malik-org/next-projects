


import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    const p = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await p.json()
    return {
        props: {
            data
        }
    }
}


export default function Home({ data }) {
  return (
      <div className={styles.container}>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          {
              data.map(value => <div style={{ marginTop: '20px' }} key={value.title}><Link href={`/data/${value.title}`}>
                  <a>
                      {value.title}
                  </a>
              </Link></div>)
          }

      </div>
  )
}
