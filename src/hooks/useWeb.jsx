import { useState, useEffect } from "react";
import doctorate from '../assets/Project-Image/doctorate.png'
import techHeim from '../assets/Project-Image/tech-heim.png'
import weddingPro from '../assets/Project-Image/weddingPro.png'
import toolsWay from '../assets/Project-Image/tools-way.png'
import eScooter from '../assets/Project-Image/e-schooter.png'
import bikeWarehouse from '../assets/Project-Image/bike-warehouse.png'
import doctorProtal from '../assets/Project-Image/doctors-protal.png'
import carDoctor from '../assets/Project-Image/car-doctor.png'
import bikeWay from '../assets/Project-Image/bike-way.png'
import bodyFlex from '../assets/Project-Image/body-flex.png'
import emaJhon from '../assets/Project-Image/ema-jon.png'
import convation from '../assets/Project-Image/convation-center.png'
import cartoonNetwork from '../assets/Project-Image/cartoon-network.png'
import missionProject from '../assets/Project-Image/Mission-Project.png'
import cartoonNext from '../assets/Project-Image/cartoon-next.png'
import manyMaster from '../assets/Project-Image/many-master.png'
import tShart from '../assets/Project-Image/t-shart-mania.png'
import travelAgency from '../assets/Project-Image/travel-agency.png'
import influncer from '../assets/Project-Image/influncer.png'
import teamBoard from '../assets/Project-Image/team-ford.png'

const useWebsite = () => {
    const [web, setWeb] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setWeb(website);
            setLoading(false);
        }, 1000); // 1 second delay for demonstration
    }, []);

    return [web, loading];
};

export default useWebsite;

const website = [
    {
        "id": "1",
        "name": "Doctorate",
        "image": doctorate,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/Doctors-project-client",
        "gitHubServer": "https://github.com/Waheedulislam/Doctors-project-server",
        "liveLink": "https://doctors-project-client.vercel.app/"
    },
    {
        "id": "2",
        "name": "Tech Heim",
        "image": techHeim,
        "type": "Team-Projects",
        "gitHubClient": "https://github.com/Waheedulislam/Dev-Daynamos-Fashion-House-",
        "gitHubServer": "https://github.com/Waheedulislam/Dev-Daynamos-Fashion-House-server",
        "liveLink": "https://techheim.netlify.app/"
    },
    {
        "id": "3",
        "name": "Weeding Pro",
        "image": weddingPro,
        "type": "Team-Projects",
        "gitHubClient": "https://github.com/Waheedulislam/Dev-Wedding-Management",
        "gitHubServer": "https://github.com/Waheedulislam/weedubg-managment-server",
        "liveLink": "https://weedingpro.netlify.app/"
    },
    {
        "id": "4",
        "name": "Tools Way",
        "image": toolsWay,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/manufacturer-website-client-side",
        "gitHubServer": "https://github.com/Waheedulislam/manufacturer-website-server-side",
        "liveLink": "https://manufacturer-website-client-side-taupe.vercel.app/"
    },
    {
        "id": "5",
        "name": "E-Scooter",
        "image": eScooter,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/E-Scooter",
        "gitHubServer": "",
        "liveLink": "https://e-scooter-zeta.vercel.app/"
    },
    {
        "id": "6",
        "name": "Bike Warehouse",
        "image": bikeWarehouse,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/Own-Project",
        "gitHubServer": "https://github.com/Waheedulislam/own-project-server",
        "liveLink": "https://own-project.vercel.app/"
    },
    {
        "id": "7",
        "name": "Doctors Portal",
        "image": doctorProtal,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/doctors-portal-client",
        "gitHubServer": "https://github.com/Waheedulislam/doctors-portal-server",
        "liveLink": "https://doctors-portal-42d35.web.app/"
    },
    {
        "id": "8",
        "name": "The Car Doctor",
        "image": carDoctor,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/genius-car-services",
        "gitHubServer": "https://github.com/Waheedulislam/genius-car-service-server-mongodb-66",
        "liveLink": "https://genius-car-services-289eb.web.app/"
    },
    {
        "id": "9",
        "name": "Bike Way",
        "image": bikeWay,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/-warehouse-management-client-side",
        "gitHubServer": "https://github.com/Waheedulislam/-warehouse-management-server-side",
        "liveLink": "https://inventory-house-a0164.web.app/home"
    },
    {
        "id": "10",
        "name": "Body Flex Gym",
        "image": bodyFlex,
        "type": "FrontEnd",
        "gitHubClient": "https://github.com/Waheedulislam/independent-service-GYM",
        "liveLink": "https://gym-trainer-services.web.app/home"
    },
    {
        "id": "11",
        "name": "Ema-John",
        "image": emaJhon,
        "type": "FrontEnd",
        "gitHubClient": "https://github.com/Waheedulislam/ema-john-simple",
        "liveLink": "https://dulcet-peony-961ab6.netlify.app/"
    },
    {
        "id": "12",
        "name": "Convention-Center",
        "image": convation,
        "type": "HtmlCss",
        "gitHubClient": "https://github.com/Waheedulislam/convention-center",
        "liveLink": "https://eloquent-borg-bcd16e.netlify.app/"
    },
    {
        "id": "13",
        "name": "Cartoon Network",
        "image": cartoonNetwork,
        "type": "FrontEnd",
        "gitHubClient": "https://github.com/Waheedulislam/lucky-one-cartoon",
        "liveLink": "https://ephemeral-puppy-d02e5c.netlify.app/"
    },
    {
        "id": "14",
        "name": "Mission Project",
        "image": missionProject,
        "type": "HtmlCss",
        "gitHubClient": "https://github.com/Waheedulislam/assignment",
        "liveLink": "https://sad-shaw-2ea678.netlify.app/"
    },
    {
        "id": "15",
        "name": "Cartoon Next",
        "image": cartoonNext,
        "type": "FrontEnd",
        "gitHubClient": "https://github.com/Waheedulislam/product-analysis-cartoons",
        "liveLink": "https://melodic-kataifi-27b80e.netlify.app/home"
    },
    {
        "id": "16",
        "name": "Many Master",
        "image": manyMaster,
        "type": "FrontEnd",
        "gitHubClient": "https://objective-wescoff-1e176e.netlify.app/",
        "liveLink": "https://objective-wescoff-1e176e.netlify.app/"
    },
    {
        "id": "17",
        "name": "Tshirt-Mania",
        "image": tShart,
        "type": "HtmlCss",
        "gitHubClient": "https://github.com/Waheedulislam/tshirt-mania",
        "liveLink": "https://extraordinary-sunburst-2e8b8c.netlify.app/"
    },
    {
        "id": "18",
        "name": "Travel Agency Network",
        "image": travelAgency,
        "type": "TypescriptNextJs",
        "gitHubClient": "https://github.com/Waheedulislam/Travel-Agency-Network",
        "liveLink": "https://travel-agency-network.vercel.app/"
    },
    {
        "id": "19",
        "name": "Influencer Products",
        "image": influncer,
        "type": "HtmlCss",
        "gitHubClient": "https://github.com/Waheedulislam/assignment-02",
        "liveLink": "https://goofy-heisenberg-4e0983.netlify.app/"
    },
    {
        "id": "20",
        "name": "TeamBoard Software",
        "image": teamBoard,
        "type": "FullStack",
        "gitHubClient": "https://github.com/Waheedulislam/collaborative-Task-management",
        "gitHubServer": "https://github.com/Waheedulislam/collaborative-task-server",
        "liveLink": "https://collaborative-task-management.vercel.app/"
    }
]