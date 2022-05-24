import { getSession } from "next-auth/react"


export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
        props: {
            isAuthenticated: session
        }
    }
}


export default function Shop({ isAuthenticated }) {
    console.log(isAuthenticated)
    return (
        <h1>
            Yeah boy
        </h1>
    )
}