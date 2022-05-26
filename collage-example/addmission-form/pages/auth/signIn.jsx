import Link from "next/link"





export default function SignIn() {
    return (
        <>
            <div className="container px-5 px-sm-0">
                <div className="row">
                    <div className="col col-sm-9 col-md-7 col-lg-6 col-xl-5 mt-5 center border bg-white p-5 rounded-3">
                        <h1>
                            Welcome back
                        </h1>
                        <p className="text-secondary">
                            Welcome back! Please enter your details
                        </p>
                        <label htmlFor="" className="form-label mt-4">Email</label>
                        <input type="email" className="form-control" placeholder="Email address" />
                        <label htmlFor="" className="form-label mt-3">Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                        <div className="row mt-3">
                            <div className="col">
                                <input type="checkbox" className="position-relative" style={{ top: '2px' }} />
                                <label htmlFor="" className="text-xs ms-1">Remember me for 30 days</label>
                            </div>
                            <div className="col-5 text-end text-xs text-blue mt-1">
                                Forgot Password
                            </div>
                        </div>
                        <Link href={`/form/course`}>
                            <button className="btn btn-blue mt-3 w-100">
                                Sign in
                            </button>
                        </Link>
                        <p className="text-xs text-center mt-3 text-secondary">
                            Don't have an account?
                            <Link href={`/auth/register`}>
                                <a>
                                    <span className="text-blue"> Sign up</span>
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}