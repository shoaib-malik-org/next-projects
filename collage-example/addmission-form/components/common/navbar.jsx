import Link from 'next/link'
import style from '../../styles/common.module.css'



export function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg ${style.NavBg}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className={`nav-item border-end ${style.borderBlue} pe-3`}>
                            <Link href={`/`}>
                                <a className={`nav-link text-light`} aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className={`nav-item border-end ${style.borderBlue} px-0 px-lg-3`}>
                            <Link href={`/Bulletin`}>
                                <a className="nav-link text-light">Information Bulletin</a>
                            </Link>
                        </li>
                        <li className={`nav-item border-end ${style.borderBlue} px-0 px-lg-3`}>
                            <Link href={`/Syllabus`}>
                                <a className="nav-link text-light">Syllabus</a>
                            </Link>
                        </li>
                        <li className={`nav-item border-end ${style.borderBlue}`}>
                            <Link href={`/Guide`}>
                                <a className="nav-link text-light">Application Guide</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className={`nav-item border-end ${style.borderBlue} px-0 px-lg-3`}>
                            <Link href={`/`}>
                                <a className="nav-link text-light">Sign in</a>
                            </Link>
                        </li>
                        <li className={`nav-item`}>
                            <Link href={`/`}>
                                <a className="nav-link text-light">Register</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}