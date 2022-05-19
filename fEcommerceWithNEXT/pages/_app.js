import '../styles/globals.css'
import { getStaticProp } from './shop/index'

// console.log(getStaticProp())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
