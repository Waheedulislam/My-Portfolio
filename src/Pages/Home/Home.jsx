// import Banner from "../../Container/Banner/Banner";
import ParticlesComponent from "../../Components/Particles/Particles";
import Navbar from "../../Container/Navbar/Navbar";
import bannerImage from '../../assets/banner2.jpeg'

const Home = () => {
    return (

        <div style={{ backgroundImage: `url(${bannerImage})` }} className="background">
            <ParticlesComponent />
            <div className='max-w-screen-xl	mx-auto'>
                <Navbar />

            </div>

            {/* <Banner /> */}
        </div>
    );
};

export default Home;