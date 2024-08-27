import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import useWebsite from '../../hooks/useWeb';
import ProjectsCard from '../ProjectsCard/ProjectsCard';

const Projects = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [web] = useWebsite();

    const fullStack = web?.filter(web => web?.type === 'FullStack')
    const frontEnd = web.filter(web => web.type === 'FrontEnd')
    const htmlCss = web.filter(web => web.type === 'HtmlCss')

    return (
        <div id="projects" >
            <h1 className="text-5xl font bold text-center  my-24">My projects </h1>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center gap-5 '>

                    <Tab >ALL</Tab>
                    <Tab>Full-Stack</Tab>
                    <Tab>Front End</Tab>
                    <Tab>Html-Css</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid my-8  grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center '>
                        {
                            web.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid my-10 grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 '>
                        {
                            fullStack.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid my-10 grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 '>
                        {
                            frontEnd.map(web => <ProjectsCard
                                key={web.id}
                                web={web}></ProjectsCard>)
                        }
                    </div>

                </TabPanel>
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