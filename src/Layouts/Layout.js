import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CircleEffect from "../Components/CircleEffect/CircleEffect";

export const Layout = (props) => {
    return (
        <div>
            <CircleEffect />
            <Header />
            {props.children}
            <Footer />

        </div>
    );
};

export default Layout;