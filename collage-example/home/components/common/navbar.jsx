import Link from 'next/link'
import style from '../../styles/common.module.css'
import Image from 'next/image'
import logo from '../../imgs/common/CollageLogo.png'

const myLoader = ({ src, width, quality }) => {
    return logo.src
}


export function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light py-3">
                {/* first navbar */}
                <div className="container-fluid">
                    <div className='container px-0 px-md-2'>
                        <div className="row">
                            <div className="col position-relative">
                                <Image
                                    loader={myLoader}
                                    src={`CollageLogo.png`}
                                    alt="Collage Logo"
                                    width={40}
                                    height={40}
                                />
                                <Link href="/">
                                    <a className="h3 mt-0 position-absolute ms-2" style={{ top: '-6px' }}>
                                        College
                                        <p className={`font-xs ms-1`}>Theme for Education</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-7 col-md-4">
                                <form className="d-flex" role="search">
                                    {/* <button className={`btn rounded-0 border-start border-top border-bottom`}>
                                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                                </button> */}
                                    <input
                                        className={`form-control rounded-0 ${style.focusNone}`}
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className={`btn ${style.bgPrimary} rounded-0`} type="submit">
                                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* second navbar  */}
            <nav className="navbar navbar-expand-lg bg-light py-3">
                <div className="container px-2">
                    <div className={`col ${style.bgPrimary}`}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Study at Collage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Courses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}



