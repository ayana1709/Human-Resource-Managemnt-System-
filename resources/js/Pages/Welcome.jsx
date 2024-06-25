import Navbar from "@/components copy/Navbar";
import Hero from "@/components copy/Hero";
import Features from "@/components copy/Features";
import Testimonial from "@/components copy/Testimonial";
import CallToAction from "@/components copy/CallToAction";

import { BrowserRouter } from "react-router-dom";
import Footer from "@/components copy/Footer";

function Welcome() {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <Features />
            <Testimonial />
            <CallToAction />
            <Footer />
        </BrowserRouter>
    );
}

export default Welcome;
