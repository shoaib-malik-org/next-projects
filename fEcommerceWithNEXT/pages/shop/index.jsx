
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json())

// function Profile() {
  


export async function getStaticProps() {
    const p = await fetch('http://localhost:8000/stock/headphone')
    const data = await p.json();    
    // const q=await fetch("/pages/api/hello");
    const { data1, error } = useSWR('/api/hello', fetcher)
    console.log(data1)
// const data1 = await p.json();


if(req.method=="GET")


// var data;
    return {
        props: {
            data,
        }
    }
}




export default function ({ data }) {
    // console.log(getStaticProp())
    // console.log(data)
    return (
        <h1>
his
        </h1>
    )
}

