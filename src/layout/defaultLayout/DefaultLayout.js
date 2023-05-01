import Header from "../componentLayout/Header/Header";
import Footer from "../componentLayout/Footer/Header";

function DefaultLayout({ children }) {
    return ( 
        <div className="max-w-screen-2xl text-base mx-auto">
            <Header />
            <div className="">{children}</div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;