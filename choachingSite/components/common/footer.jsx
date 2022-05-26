
import style from '../../styles/common.module.css'


export function Footer() {
    return (
        <div className={`container-fluid ${style.NavBg}`} >
            <div className='container py-4'>
                <h4 className='text-light'>© Disclaimer:</h4>

                <p className='text-light mt-4 w-50'>
                    This site is designed and hosted by Shoaib and
                    the contents are provided by someone. For any further
                    information contact me
                </p>
            </div>
        </div>
    )
}