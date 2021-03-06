
import { useState } from 'react'
import style from '../../styles/home.module.css'


export function Row() {
    var [focus, setFocus] = useState([`${style.focus}`, ``, ``])
    var [show,setShow] = useState('first');
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`col px-0`}>
                    <div className={`col-12 ${style.Rounded10} px-0 bg-white  ${style.htMd} pt-1 sticky-top top-0 mt-5`}>
                        <div className='border-bottom mt-5 ms-auto me-auto'>
                            <button
                                className={`btn ${style.btnBlue} fw-bold ms-xl-5 ms-2 pb-2 ${focus[0]}`}
                                onClick={() => { 
                                    setFocus([`${style.focus}`, ``, ``])
                                    setShow('first')
                                 }}
                            >
                                Public Notice
                            </button>
                            <button
                                className={`btn ${style.btnBlue} fw-bold pb-2 ${focus[1]}`}
                                onClick={() => { 
                                    setFocus([``, `${style.focus}`, ``])
                                    setShow('sec')
                                 }}
                            >
                                News & Events
                            </button>
                            <button
                                className={`btn ${style.btnBlue} fw-bold pb-2 ${focus[2]}`}
                                onClick={() => { 
                                    setFocus([``, ``, `${style.focus}`])
                                    setShow('third')
                                 }}
                            >
                                Important Dates
                            </button>
                        </div>

                        <Uls put={show} />

                    </div>
                </div>
                <div className="col ps-5 mt-5 text-secondary">
                    <h5 >About</h5>
                    <p className="lh-lg text-sm text-sans">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="lh-lg text-sm text-sans">
                        There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                        you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Uls(props) {
    var show = props.put
    return (
        <div className={`overflow-auto h-75`}>
            <ul>
                {
                    (show === 'first') && <First />
                }
                {
                    (show === 'sec') && <Sec />
                }
                {
                    (show === 'third') && <Third />
                }
            </ul>
        </div>
    )
}

function First() {
    return (
        <>
            <li className='py-4 mx-3 border-bottom'>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature
            </li>
            <li className='py-4 mx-3 border-bottom'>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature
            </li>
            <li className='py-4 mx-3 border-bottom'>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature
            </li>
            <li className='py-4 mx-3 border-bottom'>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature
            </li>
            <li className='py-4 mx-3 border-bottom'>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature
            </li>
        </>
    )
}

function Sec() {
    return (
        <>
            <li className='py-4 mx-3 border-bottom'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
            </li>
            <li className='py-4 mx-3 border-bottom'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
            </li>
            <li className='py-4 mx-3 border-bottom'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
            </li>
            <li className='py-4 mx-3 border-bottom'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
            </li>
            <li className='py-4 mx-3 border-bottom'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
            </li>
        </>
    )
}

function Third(){
    return (
        <>
            <li className='py-4 mx-3 border-bottom'>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures
            </li>
            <li className='py-4 mx-3 border-bottom'>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures
            </li>
            <li className='py-4 mx-3 border-bottom'>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures
            </li>
            <li className='py-4 mx-3 border-bottom'>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures
            </li>
            <li className='py-4 mx-3 border-bottom'>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures
            </li>
        </>
    )
}