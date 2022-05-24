import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/common/footer'

import { Navbar } from '../components/common/navbar'
import { Row } from '../components/home/home'
import { Option } from '../components/home/option'



export default function Home() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Row />
        <Option />
      </div>
      <Footer />
    </>
  )
}
