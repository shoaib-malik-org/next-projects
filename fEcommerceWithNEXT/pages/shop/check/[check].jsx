

import { useRouter } from 'next/router'



export default function () {
    const router = useRouter()
    const { check } = router.query
    console.log(router.query)
    return (
        <>
            <h1>
                shaoib
                {check}
            </h1>
        </>
    )
}