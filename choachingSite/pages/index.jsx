import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/common/footer'
import { Navbar } from '../components/common/navbar'
import { Courses } from '../components/home/courses'
import { Top } from '../components/home/top'
import { Contact } from '../components/home/Contact'
import style from '../styles/home.module.css'
import { Carousel } from '../components/home/carousel'
import { Subscribe } from '../components/home/subscribe'



export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`container-fluid ${style.bgHome} h-full position-relative`}>
        <Top />
      </div>
      <Courses />
      <Contact />
      <div className={`w-100 py-2 bg-blue`}></div>
      <Carousel />
      <Subscribe />
      {/* <Footer /> */}
    </>
  )
}
