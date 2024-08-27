import ParticlesComponent from "../../Components/Particles/Particles";
import Banner from "../../Container/Banner/Banner";
import Contact from "../../Container/Contact/Contact";
import Navbar from "../../Container/Navbar/Navbar";
import Projects from "../../Container/Projects/Projects";
import Service from "../../Container/Service/Service";
import Skills from "../../Container/Skills/Skills";
const Home = () => {
    return (
        <div>
            {/* Particles  */}
            <ParticlesComponent />

            <div style={{ position: "relative", zIndex: 1 }} className='lg:max-w-screen-xl	max-w-screen-sm mx-auto '>
                <Navbar />
                <Banner />
                <Skills />
                <Service />
                <Projects />
                <Contact />
            </div>
        </div>

    );
};

export default Home;