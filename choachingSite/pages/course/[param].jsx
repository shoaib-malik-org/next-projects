import Image from 'next/image'
import { Navbar } from '../../components/common/navbar'
import style from '../../styles/course.module.css'
import { course, course2 } from '../../components/home/courses'
import { useRouter } from 'next/router'
import { useState } from 'react'
import first from '../../imgs/course/soloCourse/first.png'
import sec from '../../imgs/course/soloCourse/sec.png'
import third from '../../imgs/course/soloCourse/third.png'
import four from '../../imgs/course/soloCourse/four.png'
import five from '../../imgs/course/soloCourse/five.png'


const paragraph = [
    {
        head: 'Contrary to popular belief',
        sub: ' Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
        para: 'passage, and going through the cites of the word in classical Contrary to popular belief, literature, discovered the undoubtable source.  Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
    },
    {
        head: 'Contrary to popular belief, literature',
        sub: ' All the Lorem Ipsum generators on the Internet tend to repeat ',
        para: 'passage, and going through the Contrary to popular belief, literature  to popular belief, literature Contrary to popular belief, literature, discovered the undoubtable source.  Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
    },
    {
        head: 'handful of model sentence',
        sub: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
        para: 'passage, and going through the cites of the word in classical Contrary to popular belief, literature, discovered the undoubtable source.  Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
    },
    {
        head: 'Contrary to popular belief',
        sub: ' Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
        para: 'passage, and going through the cites of the word in classical Contrary to popular belief, literature, discovered the undoubtable source.  Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
    },
    {
        head: 'Contrary to popular belief',
        sub: ' Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
        para: 'passage, and going through the cites of the word in classical Contrary to popular belief, literature, discovered the undoubtable source.  Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
    },
]


export default function Course() {
    const { param } = useRouter().query
    var data
    data = course.filter(value => value.title === param)[0]
    if (data === undefined) {
        data = course2.filter(value => value.title === param)[0]
        if (data === undefined) {
            return (
                <></>
            )
        }
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
            <div className='container px-3 my-5'>
                <h2 className='text-serif '>{data.title}</h2>
                <div className='row'>
                    <div className='col-7'>
                        <Image
                            src={data.src}
                            height={'600px'}
                            width={'1000%'}
                            className={'mt-4 rounded-2 border'}
                        />
                    </div>
                    <div className='col'>
                        <CourseSider data={data} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7 mt-5 position-relative'>
                        <h2 className={`${style.hrDesign}`}>There are many variations</h2>
                        <p className='mt-4 fw-normal text-secondary lh-lg'>
                            Lorem Ipsum available, but the majority have suffered alteration in
                            some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem
                            Ipsum, you need to be sure there isn't anything embarrassing hidden
                            in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary, making this the first
                            true generator on the Internet. It uses a dictionary of over 200 Latin words,
                        </p>
                    </div>
                </div>
                <Select />
            </div>
        </>
    )
}

function Select() {
    var [blue, setBlue] = useState([`${style.borderBlue}`])
    var [para, setPara] = useState(paragraph[0])
    var [imgSrc, setImgSrc] = useState(first.src)
    console.log(para)
    return (
        <div className='row mt-5'>
            <div className='col-3 text-sans'>
                <ul className={`${style.listStyle} ms-0 ps-0 c-pointer`}>
                    <li className={`border-end mb-0 pb-3 ${blue[0]}`} onClick={() => {
                        setBlue([`${style.borderBlue}`])
                        setPara(paragraph[0])
                        setImgSrc(first.src)
                    }}>
                        About the course
                    </li>
                    <li className={`border-end py-3 mb-0 ${blue[1]}`} onClick={() => {
                        setBlue(['', `${style.borderBlue}`])
                        setPara(paragraph[1])
                        setImgSrc(sec.src)
                    }}>
                        Contrary to popular belief
                    </li>
                    <li className={`border-end py-3 mb-0 ${blue[2]}`} onClick={() => {
                        setBlue(['', '', `${style.borderBlue}`])
                        setPara(paragraph[2])
                        setImgSrc(third.src)
                    }}>
                        Lorem Ipsum
                    </li>
                    <li className={`border-end py-3 mb-0 ${blue[3]}`} onClick={() => {
                        setBlue(['', '', '', `${style.borderBlue}`])
                        setPara(paragraph[0])
                        setImgSrc(four.src)
                    }}>
                        roots in a piece
                    </li>
                    <li className={`border-end py-3 mb-0 ${blue[4]}`} onClick={() => {
                        setBlue(['', '', '', '', `${style.borderBlue}`])
                        setPara(paragraph[2])
                        setImgSrc(five.src)
                    }}>
                        randomised words which
                    </li>
                </ul>
            </div>
            <div className='col'>
                <h4>
                    {para.head}
                </h4>
                <p className='mt-4 text-secondary'>
                    <em >
                        {para.sub}
                    </em>
                </p>
                <p className='mt-4 text-secondary lh-lg'>
                    {para.para}
                </p>
            </div>
            <div className='col-3'>
                <Image
                    src={imgSrc}
                    height={'1000%'}
                    width={'1000%'}
                />
            </div>
        </div>
    )
}

function CourseSider(props) {
    const { data } = props
    console.log(data)
    return (
        <div className='row mt-4 text-sans soloCourses'>
            <div className={`col-6 text-secondary h3 fw-normal ${style.bgBlue} py-2 rounded-2`}>
                Trainer
            </div>
            <div className={`col-6 text-secondary h3 fw-bold ${style.bgBlue} py-2 rounded-2 text-end`}>
                Mr. Ali Bhai
            </div>
            <div className={`col-6 text-secondary h3 fw-normal mt-2 ${style.bgBlue} py-2 rounded-2`}>
                Course Fee
            </div>
            <div className={`col-6 text-secondary h3 fw-normal mt-2 ${style.bgBlue} py-2 rounded-2 text-end`}>
                ₹{data.price}
            </div>
            <div className={`col-6 text-secondary h3 fw-normal mt-2 ${style.bgBlue} py-2 rounded-2`}>
                Available Seats
            </div>
            <div className={`col-6 text-secondary h3 fw-normal mt-2 ${style.bgBlue} py-2 rounded-2 text-end`}>
                10
            </div>
        </div>
    )
}