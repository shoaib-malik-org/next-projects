import Head from 'next/head'
import { Footer } from '../components/common/footer'
import { Navbar } from '../components/common/navbar'
import { Courses } from '../components/home/courses'
import { Top } from '../components/home/top'
import { Contact } from '../components/home/Contact'
import style from '../styles/home.module.css'
import { Carousel } from '../components/home/testimonial'
import { About } from '../components/home/about'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Inter Alia Technology,coding classes,coding languages,coding for beginners,learn coding,coding program for middle school,coding for kids,python coding,scratch coding,java coding" />
        <meta name="author" content="Mohd Ali Nawab" />
        <meta name="description" content="An Institute for learning programming languages" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Inter Alia Technologies</title>
      </Head>
      <div className={`container-fluid ${style.bgHome} h-full`}>
        <Navbar />
        <Top />
      </div>
      <Courses />
      <About />
      <Carousel />
      <Contact />
      <Footer />
    </>
  )
}
