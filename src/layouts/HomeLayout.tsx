import { useEffect } from "react";
import Header from "../components/home/elements/Header";
import Footer from "../components/home/elements/Footer";

export interface ILayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function HomeLayout({ title, children }: ILayoutProps) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Header />
            <main>{children}</main>
            {/* Modal */}
            {/* <Footer /> */}
        </>
    );
}
