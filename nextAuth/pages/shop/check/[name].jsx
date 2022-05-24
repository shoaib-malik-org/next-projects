






import { useRouter } from 'next/router'

export default function () {
    const router = useRouter()
    const { name } = router.query
    return (
        <>
            <h1>
                {name}
            </h1>
        </>
    )
}