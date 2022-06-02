import { faN } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../../components/common/navbar";
import { v4 } from "uuid";


const arr = [
    'Changing account name',
    'How do I unsubscribe from inter alia e-mails',
]
const arr2 = [
    'How do I change my password?',
    `Why aren't my courses showing in my account?`,
]



export default function faq() {
    return (
        <>
            <Navbar className={'bg-lgrey'} />
            <div className="container">
                <div className="row">
                    <h1 className="text-serif mt-xl text-center display-3 text-black">FAQ PAGE</h1>
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
                                <ul>
                                    {arr.map(Li)}
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    {arr2.map(Li)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Li(data, index) {
    const [id]=data.slice(-4)
    return (
        <li className="border" key={data}>
            <button className="btn rounded-0 w-100" type="button" data-bs-toggle="collapse" data-bs-target={"#"+id+`${index}`} aria-expanded="false" aria-controls="collapseExample">
                {data}
            </button>
            <div className="collapse" id={id+`${index}`}>
                <div className="card card-body rounded-0 border-0 border-top">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
        </li>
    )
}