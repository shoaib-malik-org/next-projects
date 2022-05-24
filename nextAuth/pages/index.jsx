import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/common/navbar'
import { TopSellerComp } from '../components/home/topSeller'
import { useSession, signIn, signOut } from "next-auth/react"



export default function Home() {
    const { data, status } = useSession()
    if (status !== 'authenticated') {
        return <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
                <title>shIp</title>
            </Head>
            <Navbar />
            <Top />
            <TopSellerComp />
        </>
    )
}

function Top() {
    return (
        <div className="container-fluid bg-gradient ht-lg overflow-hidden position-relative">
            <div className="row px-5 pt-5">
                <div className="col mt-5">
                    <h1 className="display-3 fw-bold ">
                        Look so good sound so rad
                    </h1>
                    <button className="btn btn-info mt-4 px-4 z-11">
                        Shop now
                    </button>
                </div>
                <div className="col-7 ">
                    {/* <img src={`https://raw.githubusercontent.com/shoaib-malik-org/todoLIst/master/headLeft.png`}  alt="" /> */}
                </div>
            </div>
        </div>
    )
}