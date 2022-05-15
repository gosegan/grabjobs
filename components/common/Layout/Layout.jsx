//styles
// import s from './Layout.module.css';
//components
// import { Modal, Nav, Footer, BurgerMenu } from 'components/common';
//lib
import { NextSeo } from 'next-seo';

const Layout = ({ children, seo = {} }) => {
  return (
    <>
      <NextSeo {...seo} />
      <div>
        {/* <BurgerMenu /> */}
        {/* <Nav /> */}
        <main>{children}</main>
        {/* <Footer /> */}
        {/* <Modal /> */}
      </div>
    </>
  );
};

export default Layout;
