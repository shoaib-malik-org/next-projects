import Link from 'next/link'
import style from '../../styles/common.module.css'
import Image from 'next/image'
import logo from '../../imgs/choachingLogo.png'
import { useState } from 'react'


export function Navbar({ className }) {
    var [disp, setDisp] = useState('')
    var text = style.textGrey;
    if (className !== undefined) {
        text = className + ' ' + style.textDark
    }
    return (
        <nav className={`w-100 position-absolute ${text}`} style={{ zIndex: '10000' }}>
            <nav className='navbar navbar-expand-lg w-100 z-10 border-bottom border-grey'>
                <div className='container w-100'>
                    <ul className="py-2 mb-2 mb-lg-0 position-relative row w-100 list-unstyled">
                        <li className={`col-lg-3 col-md-4`}>
                            <Link href={`tel:+919015895951`}>
                                <a className={`nav-link text-sans border-end border-grey`} aria-current="page">
                                    <i className="fa-solid fa-phone-flip me-1"></i>
                                    Call us: +91 9015895951
                                </a>
                            </Link>
                        </li>
                        <li className={`col`}>
                            <Link href={`mailto:someone@gmail.com`}>
                                <a className="nav-link text-sans ms-xl-4">
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
                        <a className="navbar-brand c-pointer">
                            <div className='row '>
                                <div className='col'>
                                    <Image alt='choaching logo' src={logo.src} height={'48px'} width={'48px'} className={`bg-light rounded-circle`} />
                                </div>
                                <div className='col px-0 text-serif'>
                                    <span className='fw-bold position-relative'>Inter Alia
                                        <p className='position-relative mb-0' style={{ marginTop: '-7px' }}>Technologies</p>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 position-relative text-sans z-10 ${style.bgMdWhite}`} >
                            <li className={`nav-item`}>
                                <Link href={`/`}>
                                    <a className={`nav-link me-4 position-relative`} style={{ zIndex: '1000' }} aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/pages/about`}>
                                    <a className={`nav-link me-4`} aria-current="page">About</a>
                                </Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/#courses`}>
                                    <a className="nav-link me-4">
                                        Courses
                                    </a>
                                </Link>
                            </li>
                            <li className={`nav-item position-relative`}>
                                <a className={`nav-link me-4 ${style.dropDown}`} onClick={() => {
                                    if (disp === 'block') setDisp('')
                                    else setDisp('block')
                                }}>
                                    Features
                                    <i className="fa-solid fa-angle-down ms-2 fa-sm"></i>
                                </a>
                                <div className={`py-2 position-absolute rounded-3 bg-white shadow ${style.dropDiv} w-100`} style={{ display: disp }}>
                                    <Link href={'/pages/FAQs'}>
                                        <a className='px-3 my-2 text-sm d-block'>FAQs</a>
                                    </Link>
                                    <Link href={'/pages/portfolio'}>
                                        <a className='px-3 my-2 text-sm d-block'>Portfolio</a>
                                    </Link>
                                    <Link href={'/pages/blog'}>
                                        <a className='px-3 my-2 text-sm d-block'>Blog</a>
                                    </Link>
                                </div>
                            </li>
                            <li className={`nav-item`}>
                                <Link href={`/#contact`}>
                                    <a className="nav-link me-4">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    )
}