import Image from 'next/image'
import { Navbar } from '../../components/common/navbar'
import style from '../../styles/course.module.css'
import { course, course2 } from '../../components/home/courses'
import { useRouter } from 'next/router'


export default function Course() {
    const { param } = useRouter().query
    const [data] = course.filter(value => value.title === param)
    if (data === undefined) {
        return (
            <></>
        )
    }
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${style.bgHome} ps-0`}>
                <div className='container px-3'>
                    <div className='row'>
                        <h1 className={`display-5 fw-bold text-serif text-light position-relative`}
                            style={{ marginTop: '200px' }}>
                            TECHNOLOGY
                        </h1>
                    </div>
                </div>
            </div>
            <div className='container px-3 mt-5'>
                <h2 className='text-serif '>{data.title}</h2>
                <div className='col bg-dark'>
                    <Image
                        src={data.src}
                        height={'400%'}
                        width={'100%'}
                        className={`mt-5`}
                    />
                </div>
            </div>
        </>
    )
}