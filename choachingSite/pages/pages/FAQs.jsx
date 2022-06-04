import { faN } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../../components/common/navbar";
import style from '../../styles/home.module.css'
import { Footer } from "../../components/common/footer";
import Head from "next/head";


const arr = [
    { title: 'Changing account name', id: 'Changingaccountname' },
    { title: 'How do I unsubscribe from inter alia e-mails', id: 'HowdoIunsubscribefrominteraliae-mails' },
]
const arr2 = [
    { title: 'How do I change my password?', id: 'HowdoIchangemypassword' },
    { title: `Why aren't my courses showing in my account?`, id: `Whyarentmycoursesshowinginmyaccount` },
]



export default function faq() {
    return (
        <>
            <Head>
                <meta name="keywords" content="Inter Alia Technology,coding classes,coding languages,coding for beginners,learn coding,coding program for middle school,coding for kids,python coding,scratch coding,java coding" />
                <meta name="author" content="Mohd Ali Nawab" />
                <meta name="description" content="Inter Alia Technology FAQs Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>FAQs Page</title>
            </Head>
            <Navbar className={'bg-lgrey'} />
            <div className="container">
                <div className="row">
                    <h1 className="text-serif mt-5 text-center display-3 text-black">FAQ PAGE</h1>
                    <h3 className="text-serif fw-bold text-ldark mt-5 text-center">
                        FREQUENTLY ASKED QUESTIONS
                    </h3>
                    <p className="text-secondary text-sans text-center mt-2">
                        Answer all of your questions
                    </p>
                    <hr className="hr mb-5 ms-auto me-auto" />

                    <h4 className="text-ldark text-serif mt-5 ms-4 ps-4">
                        Making Courses
                    </h4>
                    <hr className="hr mb-5 ms-5 mt-2" />

                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col">
                                <ul className="list-unstyled">
                                    {arr.map(Li)}
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="list-unstyled">
                                    {arr2.map(Li)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-3 " />
                    <div className="container my-5">
                        <div className={`row ${style.contactInput}`}>
                            <div className="col-xl-6 col-lg-7 center">
                                <h2 className="text-serif fw-bold text-uppercase text-ldark text-center">
                                    Didn't find the answer?
                                </h2>
                                <hr className="hr mb-5 center mt-3" />
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
                                <div className="justify-content-center d-flex">
                                    <button className={`btn btn-blue mt-4 rounded-0 px-4`}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

function Li(data, index) {
    return (
        <li className="border mt-2" key={data.id}>
            <button className="btn rounded-0 w-100" type="button" data-bs-toggle="collapse" data-bs-target={"#" + data.id} aria-expanded="false" aria-controls="collapseExample">
                {data.title}
            </button>
            <div className="collapse" id={data.id}>
                <div className="card card-body rounded-0 border-0 border-top">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
        </li>
    )
}