import '../public/vendor/animate/animate.css'
import '../public/vendor/bootstrap-select/css/bootstrap-select.min.css'
import '../public/vendor/tempus-dominus/css/tempus-dominus.min.css'
import '../public/css/style.css'
import '../public/css/skin/skin-1.css'
import Layout from '../components/layout'
export default function App({ Component, pageProps }) {
  return (
    <main id="root">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
