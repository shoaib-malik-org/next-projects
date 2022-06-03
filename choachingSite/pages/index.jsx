import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/common/footer'
import { Navbar } from '../components/common/navbar'
import { Courses } from '../components/home/courses'
import { Top } from '../components/home/top'
import { Contact } from '../components/home/Contact'
import style from '../styles/home.module.css'
import { Carousel } from '../components/home/testimonial'
import { Subscribe } from '../components/home/subscribe'
import { About } from '../components/home/about'



export default function Home() {
  return (
    <>

      <div className={`container-fluid ${style.bgHome} h-full`}>
        <Navbar />
        <Top />
      </div>

      <Courses />
      <About />
      <Carousel />
      <Contact />
      {/* <Subscribe /> */}
      <Footer />
    </>
  )
}
