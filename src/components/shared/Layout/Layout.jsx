import Nav from '@/components/shared/Nav/Nav';
import SEO from '@/components/shared/Seo/Seo';
import Footer from '@/components/shared/Footer/Footer';

export default function Layout({
  children,
  hideNav = false,
  hideFooter = false,
}) {
  return (
    <>
      <SEO />
      {!hideNav && <Nav />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}
