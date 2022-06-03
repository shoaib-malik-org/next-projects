

import style from '../../styles/home.module.css'
import Image from 'next/image'
import img from '../../imgs/course/bg-newletter.webp'


export function Subscribe() {
    return (
        <div className={`container pt-5 mt-lg mb-0`}>
            <div className='position-relative col-8 center'>
                <p className='text-center'>
                    <Image
                        src={img.src}
                        width={'700%'}
                        height={'300px'}
                    />
                </p>
                <div className='position-absolute top-0 mt-5 pt-5 text-center px-5'>
                    <p className='px-5 text-sans text-sm text-secondary'>
                        Subscribe now and receive weekly newsletter with educational materials,
                        new courses, interesting posts, popular books and much more!
                    </p>
                    <form className='d-flex px-5 mt-5'>
                        <input type="text" className='form-control rounded-0 py-2 text-sans text-sm' placeholder='Your email here' />
                        <button className='btn btn-blue rounded-0'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}