import Link from "next/link"



export function Contact() {
    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col">
                    <h2 className="text-serif fw-bold text-uppercase">contact info</h2>
                    <p className="text-secondary text-sans text-sm">
                        Welcome to our Website. We are glad to have you around
                    </p>
                    <hr className="hr mb-5" />
                    <hr className="hr-sm" />
                    <div className="row pt-3">
                        <div className="col">
                            <Link href="tel:+91 ">
                                <a>
                                    <i className="fa-solid fa-phone-flip fa-xl text-blue"></i>
                                    <h5 className="d-inline text-sans fw-bold ms-3">Phone</h5>
                                </a>
                            </Link>
                            <p className="ms-4 ps-3 my-2 text-secondary">+91 (963) 852 74 10</p>
                        </div>
                        <div className="col">
                            <div className="col">
                                <Link href="mailto:someone@gmail.com ">
                                    <a>
                                        <i className="fa-solid fa-envelope fa-xl text-blue"></i>
                                        <h5 className="d-inline text-sans fw-bold ms-3">Email</h5>
                                    </a>
                                </Link>
                                <p className="ms-4 ps-3 my-2 text-secondary">someone@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-4 hr-sm" />
                    <div className="col py-3">
                        <Link href="tel:+91 ">
                            <a>
                                <i className="fa-solid fa-location-dot fa-xl text-blue"></i>
                                <h5 className="d-inline text-sans fw-bold ms-3">Address</h5>
                            </a>
                        </Link>
                        <p className="ms-4 ps-2 my-2 text-secondary">shaheen bagh okhla new delhi</p>
                    </div>
                    <hr className="hr-sm" />
                    <i className="fa-brands fa-facebook-square fa-lg"></i>
                    <i className="fa-brands fa-twitter fa-lg ms-3"></i>
                    <i className="fa-brands fa-github fa-lg ms-3"></i>
                    <i className="fa-brands fa-instagram fa-lg ms-3"></i>
                </div>
                <div className="col">
                    <h2 className="text-serif fw-bold text-uppercase">send a message</h2>
                    <p className="text-secondary text-sans text-sm">
                        Your email address will not be published. Required fields are marked.
                    </p>
                    <hr className="hr mb-5" />
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder="Name *" className="form-control rounded-0 text-sans text-sm" />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Email *" className="form-control rounded-0 text-sans text-sm" />
                        </div>
                    </div>
                    <input type="text" placeholder="Subject *" className="form-control rounded-0 text-sans text-sm mt-4" />
                    <textarea name="" className="form-control mt-4 rounded-0 h-25" placeholder="Message"></textarea>
                    <button className={`btn btn-blue mt-4 rounded-0 px-4`}>Submit</button>
                </div>
            </div>
        </div>
    )
}