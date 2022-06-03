
import style from '../../styles/common.module.css'
import Link from 'next/link'


const Links = [
    'Home',
    'about',
    'Courses',
    'Contact',
    'FAQs',
    'portfolio'
]
const course = [
    { title: 'From Zero to Hero With Basic Computer', name: 'Basic Computer' },
    { title: 'Learn Python, C, C++, Each', name: 'Python, C, C++' },
    { title: 'Your Complete Guide for Fullstack', name: 'Fullstack web' },
    { title: 'Learn Frontend Designing', name: 'Frontend web' },
    { title: 'Complete Backend Programming', name: 'Backend web' },
]


export function Footer() {
    return (
        <footer className={`w-100 ${style.bgDblue} mt-10 pt-5`}>
            <div className='container '>
                <div className='row'>
                    <div className='col-3 '>
                        <h3 className='text-light text-serif fw-bold'>
                            Inter Alia Technologies
                        </h3>
                        <p className='text-light mt-4 text-sm'>
                            Shaheen bagh, okhla, New Delhi
                        </p>
                        <div className='mt-4 text-sm'>
                            <span className='text-light'>Phone: </span>
                            <a href="tel:+91 9015895951" className='text-dgrey'>+91 9015895951</a>
                        </div>
                        <div className='mt-1 text-sm'>
                            <span className='text-light'>Email: </span>
                            <a className='text-dgrey' href="mailto:">someone@gmail.com</a>
                        </div>
                    </div>
                    <div className='col'>
                        <p className='text-light text-serif'>Useful Links</p>
                        <hr className={`col-2 ${style.hr}`} />
                        {Links.map(Btn)}
                    </div>
                    <div className='col'>
                        <p className='text-light text-serif'>Our Services</p>
                        <hr className={`col-2 ${style.hr}`} />
                        {course.map(courseBtn)}
                    </div>
                    <div className='col-4'>
                        <p className='text-light text-serif'>Our Newsletter</p>
                        <hr className={`col-2 ${style.hr}`} />
                        <p className='fw-normal text-light text-sans mt-4 text-sm'>
                            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                        </p>
                        <div className='d-flex mt-4'>
                            <input type="text" className={`form-control ${style.inputBorder}`} />
                            <button className={`btn btn-blue ${style.btnBorder}`}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5 pb-3 pt-4' style={{ backgroundColor: '#3a4753' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text-sm text-dgrey mb-0'>© Copyright
                                <span className='text-light'>Inter Alia Technologies</span>.
                                All Rights Reserved
                            </p>
                            <p className='text-dgrey text-sm'>
                                Designed by <span className='text-blue'>dash</span>
                            </p>
                        </div>
                        <div className='col'>
                            <div className='d-flex justify-content-end'>
                                <div className='d-inline'>
                                    <i className="fa-brands fa-facebook-square fa-lg text-light"></i>
                                    <i className="fa-brands fa-twitter fa-lg ms-3 text-light"></i>
                                    <i className="fa-brands fa-github fa-lg ms-3 text-light"></i>
                                    <i className="fa-brands fa-instagram fa-lg ms-3 text-light"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function courseBtn(value) {
    return (
        <div className='mb-2' key={value.title}>
            <Link href={"/course/" + value.title}>
                <a className='text-dgrey text-sans'>
                    <i className="fa-solid fa-angle-right me-2"></i>
                    {value.name}</a>
            </Link>
        </div>
    )
}

function Btn(value) {
    var path = value;
    if (value === 'Courses') {
        path = '#courses'
    } else if (value === 'Contact') {
        path = '#contact'
    }
    return (
        <div className='mb-2' key={value}>
            <Link href={"pages/" + path}>
                <a className='text-dgrey text-sans'>
                    <i className="fa-solid fa-angle-right me-2"></i>
                    {value}</a>
            </Link>
        </div>
    )
}