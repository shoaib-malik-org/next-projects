import Head from "next/head";
import { Footer } from "../../components/common/footer";
import { Input } from "../../components/common/input";
import { Navbar } from "../../components/common/navbar";
import Link from "next/link";





export default function Course() {
    return (
        <>
            <Head>
                <meta name="description" content="taking cource ditails" />
                <title>Courses</title>
            </Head>
            <Navbar />
            <div className="container mb-5 pb-5">
                <Application />
            </div>
            <div className="mt-5 pt-5">
                <Footer />
            </div>
        </>
    )
}

function Application() {
    return (
        <div className="container-fluid border px-5 py-3 mt-5">
            <h5 className="text-sans text-blue mb-3">MY APPLICATION</h5>
            <p className="mt-4">
                Select Course:
            </p>
            <div className="row">
                <div className="col">
                    <div className="row mt-4">
                        <label htmlFor="" className="form-label">Course Type: </label>
                        <select name="CourseSelect" id="" className="form-select w-75  text-secondary">
                            <option value="none">Select</option>
                            <option value="b.com(hon)">b.com(home)</option>
                            <option value="bca">bca</option>
                            <option value="b.Ed">b.Ed</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="row mt-4">
                        <label htmlFor="" className="form-label">Course Type: </label>
                        <select name="CourseSelect" id="" className="form-select w-75  text-secondary">
                            <option value="none">Select</option>
                            <option value="b.com(hon)">b.com(home)</option>
                            <option value="bca">bca</option>
                            <option value="b.Ed">b.Ed</option>
                        </select>
                    </div>
                </div>
                <div className="col-1 px-0">
                    <Link href={`/form/description`}>
                        <button className="btn btn-blue mt-5">
                            Proceed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}