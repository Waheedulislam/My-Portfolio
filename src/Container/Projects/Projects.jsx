import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import useWebsite from '../../hooks/useWeb';
import ProjectsCard from '../ProjectsCard/ProjectsCard';

const Projects = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [web] = useWebsite();

    const fullStack = web?.filter(web => web?.type === 'FullStack')
    const TeamProjects = web?.filter(web => web?.type === 'Team-Projects')
    const frontEnd = web.filter(web => web.type === 'FrontEnd')
    const htmlCss = web.filter(web => web.type === 'HtmlCss')

    return (
        <div id="projects" >
            <div className="text-center">
                <h1 className="text-5xl font-semibold text-center text-white  mt-24">My projects </h1>
                <progress className="progress  w-72 mb-10 mt-4 progress-warning   "></progress>
            </div>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center gap-5 mb-20'>

                    <Tab className='btn  bg-pink-700 text-xl hover:bg-pink-700  text-white'>ALL</Tab>
                    <Tab className='btn  bg-pink-700 text-xl hover:bg-pink-700  text-white ml-4 ' >Full-Stack</Tab>
                    <Tab className='btn  bg-pink-700 text-xl hover:bg-pink-700  text-white ml-4 ' >Team-Projects</Tab>
                    <Tab className='btn  bg-pink-700 text-xl hover:bg-pink-700  text-white ml-4 ' >Front End</Tab>
                    <Tab className='btn  bg-pink-700 text-xl hover:bg-pink-700  text-white ml-4 ' >Html-Css</Tab>
                </TabList>
                {/* All  */}
                <TabPanel>
                    <div className='grid my-8  grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center '>
                        {
                            web.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>
                </TabPanel>
                {/* Full-Stack  */}
                <TabPanel>
                    <div className='grid my-8  grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center '>
                        {
                            fullStack.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>
                </TabPanel>
                {/* Team-projects  */}
                <TabPanel>
                    <div className='grid my-10 grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 '>
                        {
                            TeamProjects.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>

                </TabPanel>
                {/* Front End  */}
                <TabPanel>
                    <div className='grid my-10 grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 '>
                        {
                            frontEnd.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>

                </TabPanel>
                {/* Front End  */}
                <TabPanel>
                    <div className='grid my-10  grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3  '>
                        {
                            htmlCss.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Projects;