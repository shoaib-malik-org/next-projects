

import { useRouter } from 'next/router'

export async function getStaticProps() {
    const p = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await p.json()
    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths() {
    const p = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await p.json()
    // console.log(data)
    const params = data.map(value => { return { params: { name: value.title } } })
    return {
        paths: params,
        fallback: true
    }
}

export default function Data() {
    const { name } = useRouter().query
    return (
        <h1>
            {name}            
        </h1>
    )
}
