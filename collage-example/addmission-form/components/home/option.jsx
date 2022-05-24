

import style from '../../styles/home.module.css'


export function Option() {
    return (
        <div className="container-fluid mt-1 mb-5 mt-5">
            <div className="row pt-5">
                <div className="col ps-0">
                    <div className={`col bg-white ${style.Rounded10} px-3 pt-4 pb-2 shadow`}>
                        <h4>Candidate Activity</h4>
                        <hr className="col-9 " />
                        <p className='text-blue'>Login</p>
                    </div>
                </div>
                <div className="col ps-0">
                    <div className={`col bg-white ${style.Rounded10} px-3 pt-4 pb-2 shadow`}>
                        <h4>Helpdesk</h4>
                        <hr className="col-9 " />
                        <p className='text-blue'>Contact Us</p>
                    </div>
                </div>
                <div className="col ps-0">
                    <div className={`col bg-white ${style.Rounded10} px-3 pt-4 pb-2 shadow`}>
                        <h4>Important Links</h4>
                        <hr className="col-9 " />
                        <p className='text-blue'>Ministry of Education</p>
                    </div>
                </div>
            </div>
        </div>
    )
}