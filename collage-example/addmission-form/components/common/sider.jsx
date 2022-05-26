import style from '../../styles/common.module.css'
import Link from 'next/link'



const desc = [
    'Application Detail',
    'Upload Photo and Signature',
    'Academic Detail',
    'Sports Achievements',
    'Course Select',
    'Preview and Confirm'
]



export function Sider(props) {
    return (
        <div className="container-fluid">
            {
                desc.map(value => Desc(value, props))
            }
        </div>
    )
}

function Desc(value,props) {
    console.log(props)
    return (
        <div className={`${style.NavBg} text-light py-2 ps-2 text-xs position-relative`}>
            <Link href={`/form/${value}`}>
                <a>
                    {value}
                </a>
            </Link>
            <i className="fa-solid fa-x rounded-circle position-absolute end-0 me-1 bg-light text-danger circle"></i>
        </div>
    )
}

