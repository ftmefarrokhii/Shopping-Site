import BackToUpComponent from "../features/BackToUpComponent";
import Footer from "../features/FooterComponents/Footer";
import Header from "../features/HeaderComponents/Header";

export default function AppLayout({children}){
    return(
        <div className=' bg-primary-0 dark:bg-slate-800'>
            <Header />
            {children}
            <BackToUpComponent />
            <Footer />
        </div>
    )
}