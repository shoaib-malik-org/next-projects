import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import first from '../../imgs/course/basicComp.jpg'
import soft from '../../imgs/course/software.jpg'
import fullStack from '../../imgs/course/fullStack.png'
import front from '../../imgs/course/frontend.png'
import back from '../../imgs/course/backend.png'
import style from '../../styles/home.module.css'
const course = [
    {
        src: first.src,
        title: 'From Zero to Hero With Basic Computer',
        std: '54',
        comments: '4',
        price: '5000'
    },
    {
        src: soft.src,
        title: 'Learn Python, C, C++, Each',
        std: '20',
        comments: '2',
        price: '4000'
    },
    {
        src: fullStack.src,
        title: 'Your Complete Guide for Fullstack',
        std: '35',
        comments: '4',
        price: '18000'
    },
    {
        src: front.src,
        title: 'Learn Frontend Designing',
        std: '10',
        comments: '1',
        price: '6000'
    }
]
const course2 = [
    {
        src: back.src,
        title: 'Complete Backend Programming',
        std: '9',
        comments: '1',
        price: '12000'
    },
]




export function Courses() {
    return (
        <div className="container my-5 pt-5">
            <h1 className="text-serif fw-bold text-uppercase">popular courses</h1>
            <hr className="hr mb-5" />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row row-cols-4">
                            {
                                course.map(Col)
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row row-cols-4">
                            {
                                course2.map(Col)
                            }
                        </div>
                    </div>
                    
                </div>
                <button className={`carousel-control-prev ${style.CarouselStart}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={`carousel-control-next ${style.CarouselEnd}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

function Col(props) {
    return (
        <div className="col" key={props.src}>
            <div className="card h-100">
                <Image
                    src={props.src}
                    height={'200px'}
                    width={'300px'}
                />
                <div className="card-body">
                    <h6 className="card-title text-sans fw-bold my-4 col-xl-9 center text-center">
                        {props.title}
                    </h6>
                    <hr />
                    <div className="text-start">
                        <span className="text-secondary">
                            <i className="fa-solid fa-users fa-sm me-1"></i>
                            {props.std}
                        </span>
                        <span className="text-secondary ms-3">
                            <i className="fa-solid fa-comment fa-sm me-1"></i>
                            {props.comments}
                        </span>
                        <span className="position-absolute end-0 me-3 text-danger fw-bold">
                            ₹{props.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
