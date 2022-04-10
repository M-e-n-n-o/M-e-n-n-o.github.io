import React from 'react';
import Timeline, { Period, Project } from "../components/Timeline/index";


const ProjectsTimeline = () => {
    return (
        <div className="flex flex-col">
            <Timeline>
                <Period title="Year 1" />
                <Project />
                <Period title="Year 2" />
                <Project />
                <Project />
            </Timeline>
        </div>
    );
};

export default ProjectsTimeline;