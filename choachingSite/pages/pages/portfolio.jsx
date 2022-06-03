import { Navbar } from "../../components/common/navbar";
import { Footer } from "../../components/common/footer";
import style from '../../styles/common.module.css'
import Image from "next/image";
import { useState } from "react";

import first from '../../imgs/portfolio/first.jpg'
import sec from '../../imgs/portfolio/sec.jpg'
import third from '../../imgs/portfolio/third.jpg'
import four from '../../imgs/portfolio/four.jpg'
import five from '../../imgs/portfolio/firve.jpg'
import six from '../../imgs/portfolio/six.jpg'
import seven from '../../imgs/portfolio/seven.jpg'
import eight from '../../imgs/portfolio/eight.jpg'



const data = [
    { src: first.src, title: 'startup team' },
    { src: sec.src, title: 'Soft skills' },
    { src: third.src, title: 'Open books' },
    { src: four.src, title: 'Up your skills' },
    { src: five.src, title: 'Reading glasses' },
    { src: six.src, title: 'Design' },
    { src: seven.src, title: 'Reading Books' },
    { src: eight.src, title: 'Electronic book' },
]



export default function Portfolio() {
    var [show, setShow] = useState(data)
    var [color, setColor] = useState(['text-blue'])
    return (
        <>
            <Navbar className={'bg-lgrey'} />
            <div className="container">
                <div className="row">
                    <h1 className="text-serif mt-5 text-center display-3 text-black">
                        PORTFOLIO
                    </h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mt-5 center border-bottom d-inline pb-2 text-sans">
                        <button className={`btn ${color[0]}`} onClick={
                            () => {
                                setColor(['text-blue'])
                                setShow(data)
                            }}
                        >ALL</button>
                        <button className={`btn ${color[1]}`} onClick={
                            () => {
                                setColor(['', 'text-blue'])
                                setShow([data[0],data[1],data[4],data[5]])
                            }}
                        >PRESENTATION</button>
                        <button className={`btn ${color[2]}`} onClick={
                            () => {
                                setColor(['', '', 'text-blue'])
                                setShow([data[0],data[4],data[2]])
                            }}
                        >COURSES</button>
                        <button className={`btn ${color[3]}`} onClick={
                            () => {
                                setColor(['', '', '', 'text-blue'])
                                setShow([data[2],data[6],data[7]])
                            }}
                        >BOOKS</button>
                    </div>
                </div>
                <div className="container mt-10">
                    <div className="row">
                        {show.map(Photos)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

function Photos(value) {
    return (
        <div className="col-4 position-relative" key={value.src}>
            <div className={`col-12 position-relative h-mdpx mb-4 ${style.ImgHover}`}>
                <Image
                    src={value.src}
                    layout={'fill'}
                    className={`rounded-3`}
                />
                <h5 className={`position-absolute z-10 text-light text-serif ${style.absoluteCenter}`}>{value.title}</h5>
            </div>

        </div>
    )
}