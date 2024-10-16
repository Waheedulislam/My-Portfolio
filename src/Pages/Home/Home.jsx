import ParticlesComponent from "../../Components/Particles/Particles";
import Banner from "../../Container/Banner/Banner";
import Contact from "../../Container/Contact/Contact";
import Footer from "../../Container/Footer/Footer";
import Navbar from "../../Container/Navbar/Navbar";
import Projects from "../../Container/Projects/Projects";
import Service from "../../Container/Service/Service";
import Skills from "../../Container/Skills/Skills";
const Home = () => {
    return (
        <div>
            {/* Particles  */}
            <ParticlesComponent />

            <div style={{ position: "relative", zIndex: 1 }} className='container mx-auto '>
                <Navbar />
                <Banner />
                <Service />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>

    );
};

export default Home;