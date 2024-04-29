import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import ColorSwitcher from '../common/elements/color-switcher/ColorSwitcher';
import LoadingWidget from '../common/components/loading';
import { ToastContainer } from 'react-toastify';
import HeaderOne from "../common/elements/header/HeaderOne";
import FooterOne from "../common/elements/footer/FooterOne";
import 'react-toastify/dist/ReactToastify.css'
import NProgress from 'nprogress'
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <LoadingWidget /> */}
      <ColorSwitcher />
      <ToastContainer position='top-center' />
      <HeaderOne />
      <Component {...pageProps} />
      <FooterOne />
    </>
  )
}

export default MyApp
