import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
