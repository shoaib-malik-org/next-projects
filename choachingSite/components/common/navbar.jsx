import Link from 'next/link'
import style from '../../styles/common.module.css'
import Image from 'next/image'
import logo from '../../imgs/choachingLogo.png'


export function Navbar() {
    return (
        <nav className='position-absolute w-100'>
            <nav className='navbar navbar-expand-lg w-100 z-10 border-bottom border-grey'>
                <div className='container w-100'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-relative">
                        <li className={`nav-item border-end border-grey pe-2`}>
                            <Link href={`tel:+919015895951`}>
                                <a className={`nav-link text-light text-sans`} aria-current="page">
                                    <i className="fa-solid fa-phone-flip me-1"></i>
                                    Call us: +91 9015895951
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item  ps-2`}>
                            <Link href={`mailto:someone@gmail.com`}>
                                <a className="nav-link text-light text-sans">
                                    <i className="fa-solid fa-envelope me-1"></i>
                                    someone@gmail.com
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className={`navbar navbar-expand-lg w-100 z-10 navbar-dark`}>
                <div className="container">
                    <Link href={'/'}>
                        <a className="navbar-brand">
                            <Image src={logo.src} height={'50px'} width={'50px'} className={`bg-light rounded-circle`} />
                            <span className='text-light fw-bold ms-2 position-relative top-neg'>Inter Alia
                                <p className='position-relative' style={{top:"-7px",left:'57px'}}>Technologies</p>
                            </span>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative text-sans top-neg">
                            <li className={`nav-item`}>
                                <Link href={`/`}>
                                    <a className={`nav-link text-light me-4`} aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/Bulletin`}>
                                    <a className="nav-link text-light me-4">
                                        Courses
                                        <i className="fa-solid fa-angle-down ms-2 fa-sm"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/Syllabus`}>
                                    <a className="nav-link text-light me-4">
                                        Features
                                        <i className="fa-solid fa-angle-down ms-2 fa-sm"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/Guide`}>
                                    <a className="nav-link text-light me-4">
                                        Events
                                    </a>
                                </Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/Guide`}>
                                    <a className="nav-link text-light me-4">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    )
}