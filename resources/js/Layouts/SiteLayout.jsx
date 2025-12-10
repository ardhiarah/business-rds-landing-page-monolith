import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SiteLayout({ children }) {
    return (
        <div className="min-h-screen bg-white font-sans dark:bg-black">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
