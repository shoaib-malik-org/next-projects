
import { Navbar } from "../../components/common/navbar"
import Image from "next/image"
import history from '../../imgs/about/history.jpg'
import mission from '../../imgs/about/mission.png'
import news from '../../imgs/about/news.jpg'

const data = [
    {
        h1: 'about us',
        head: 'Coaching History',
        p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis' +
            'repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla' +
            'animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti,',
        p2: 'Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde' +
            'excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere' +
            'voluptates aliquam adipisci sapiente beatae ullam.'
    },
    {
        h1: 'MISSION & VISION',
        head: 'Mission & Vision',
        p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat ,' +
            'adipisci non ipsam atitaque rerum vitae, necessitatibus nulla animi expedita' +
            'inventore? Voluptatum in tempora earum deleniti, culpa odit veniam,',
        p2: 'Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde' +
            'excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere' +
            'voluptates aliquam adipisci sapiente beatae ullam.'
    },
    {
        head: 'Latest News',
        p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat ,' +
            'adipisci non ipsam atitaque rerum vitae, necessitatibus nulla animi expedita' +
            'inventore? Voluptatum in tempora earum deleniti, culpa odit veniam,',
        p2: 'Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde' +
            'excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere' +
            'voluptates aliquam adipisci sapiente beatae ullam.'
    },
]



export default function About() {
    return (
        <>
            <Navbar className={'bg-lgrey'} />
            <div className="container">
                <div className="row">
                    <h1 className="text-serif mt-xl text-center display-3 text-black">About us</h1>
                    <ColImg put={history} />
                    <ColText className={'ps-5'} put={data[0]} />
                    <ColText className={'pe-5'} put={data[1]} />
                    <ColImg put={mission} />
                    <ColImg put={news} />
                    <ColText className={'ps-5'} put={data[2]} />
                </div>
            </div>
        </>
    )
}

function ColImg({ put }) {
    if(put === undefined) return <></>
    return (
        <div className="col-6 position-relative mt-10">
            <Image
                src={put.src}
                layout={'fill'}
            />
        </div>
    )
}

function ColText({ put, className }) {
    return (
        <div className={`col-6 mt-5 pt-4 ${className}`}>
            <p className="text-uppercase text-secondary text-ms text-sans mt-5">{put.h1}</p>
            <h1 className="display-5 text-serif ">
                {put.head}
            </h1>
            <p className="text-serif text-xs mt-4 text-muted">
                {put.p1}
            </p>
            <p className="text-serif text-xs mt-4 text-muted">
                {put.p2}
            </p>
        </div>
    )
}