import ParticlesComponent from "../../Components/Particles/Particles";
import About from "../../Container/About/About";
import Banner from "../../Container/Banner/Banner";
import Navbar from "../../Container/Navbar/Navbar";
import Service from "../../Container/Service/Service";
import Skills from "../../Container/Skills/Skills";
const Home = () => {
    return (
        <div>
            {/* Particles  */}
            <ParticlesComponent />

            <div className='max-w-screen-xl	mx-auto'>
                <Navbar />
                <Banner />
                <About />
                <Service />
                <Skills />
            </div>
        </div>

    );
};

export default Home;