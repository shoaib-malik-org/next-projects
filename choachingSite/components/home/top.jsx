
import { useState } from 'react'
import style from '../../styles/home.module.css'
import Link from 'next/link'


export function Top() {
    return (
        <div className='container position-relative z-10 pt-lg-0 pt-4'>
            <main>
                <div className='row'>
                    <div className='col-10 mt-5 pt-4 text-light'>
                        <h1 className='display-3 fw-bold text-serif'>
                            The Education You Want
                        </h1>
                        <h1 className='display-3  text-serif fw-bold'>
                            The Attention You Deserve
                        </h1>
                        <p className='text-sans text-dgrey col-xl-6 col-lg-9 h5'>
                            It is a long established fact that a reader
                            will be distracted by the readable content of
                            a page when looking at its layout.
                        </p>
                        <Link href={'/course'}>
                            <a>
                                <button className='btn btn-blue px-5 py-2 mt-3 rounded-1'>
                                    Get started
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}