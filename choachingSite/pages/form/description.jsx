import { Navbar } from "../../components/common/navbar";
import { Sider } from "../../components/common/sider";
import { Footer } from '../../components/common/footer'
import style from '../../styles/common.module.css'
import Link from "next/link";


const desc = [
    'Application Detail',
    'Upload Photo and Signature',
    'Academic Detail',
    'Sports Achievements',
    'Course Select',
    'Preview and Confirm'
]




export default function AppDetails() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3 px-0">
                        <Sider status={'first'} />
                    </div>
                    <div className="col">
                        <StatusApplication />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

function StatusApplication() {
    return (
        <div className="container-fluid">
            <h3 className="text-sans">STATUS OF SUBMITTED APPLICATION</h3>
            <p>APPLICATION DETAILS FOR BCA:</p>
            <div className="row">
                <div className={`col-2 ${style.NavBg} text-light py-2`}>
                    Stage
                </div>
                <div className={`col ${style.NavBg} text-light py-2`}>
                    Description
                </div>
                <div className={`col-3 ${style.NavBg} text-light py-2`}>
                    Status
                </div>
            </div>
            {desc.map(Description)}
        </div>
    )
}

function Description(value, index) {
    return (
        <div className="row" key={index}>
            <div className="col-2 border py-1">
                {index + 1}
            </div>
            <div className="col text-blue border py-1 position-relative">
                <Link href={`/form/${value}`}>
                    <a>
                        {value}
                    </a>
                </Link>
                <i className="fa-solid fa-x border border-danger rounded-circle position-absolute end-0 me-4 py-1 px-2"></i>
            </div>
            <div className="col-3 border py-1">
                incomplete
            </div>
        </div>
    )
}