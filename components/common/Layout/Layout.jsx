//styles
import s from './Layout.module.css';
//lib
import { NextSeo } from 'next-seo';
//comp
import { Sidebar } from 'components/common';

const Layout = ({ children, seo = {} }) => {
  return (
    <>
      <NextSeo {...seo} />
      <div className={s.layout}>
        <Sidebar />
        <main className="pl-[90px] h-full pt-14">{children}</main>
      </div>
    </>
  );
};

export default Layout;
