import Head from 'next/head'
import Image from 'next/image'

import { Navbar } from '../components/common/navbar'
import { Row } from '../components/home/home'
import { Option } from '../components/home/option'



export default function Home() {
  return (
    <div className='container'>
      <Navbar />
      <Row />
      <Option />
    </div>
  )
}
