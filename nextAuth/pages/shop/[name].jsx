

// function Profile() {


export async function getStaticProps() {
    const p = await fetch('http://localhost:8000/stock')
    const data = await p.json()
    console.log(data)
    return {
        props: {
            data,
        },
        revalidate: 60000
    }
}

export async function getStaticPaths() {
    const p = await fetch('http://localhost:8000/stock')
    const data = await p.json()
    console.log(data)
    const param = data.map(value => { return { params: { name: value.name } } })
    return {
        paths: param,
        fallback: "blocking"
    }
}

export default function ({ data }) {
    console.log(data)
    return (
        <h1>
            his
        </h1>
    )
}

