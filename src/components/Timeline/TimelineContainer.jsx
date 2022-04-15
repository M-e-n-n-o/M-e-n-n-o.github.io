import React, { useEffect, useState } from 'react';
import Project from "./Project";
import Technology from "./Technology";

const sortFunctions = {
    "Datum ↑": (projectA, projectB) => (projectA.end ?? new Date(Date.now())) > (projectB.end ?? new Date(Date.now() - 1)),
    "Datum ↓": (projectA, projectB) => (projectA.end ?? new Date(Date.now())) < (projectB.end ?? new Date(Date.now() - 1)),
    "Naam ABC": (projectA, projectB) => projectA.title.toLowerCase() > projectB.title.toLowerCase(),
    "Naam CBA": (projectA, projectB) => projectA.title.toLowerCase() < projectB.title.toLowerCase()
};

const TimelineContainer = ({ projects = [], className = "", onParsed, filter }) => {
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const newFilteredProjects = [];
        const newFilterData = {
            technologies: [],
            projects: []
        };

        projects.forEach((project) => {
            const { title, technologies } = project;
            if (!title.toLowerCase().includes(filter.search?.toLowerCase?.()) && filter.search !== "") {
                return;
            }

            if (!filter.technologies.every(filterTech => technologies.find(tech => filterTech === tech.name))) {
                return;
            }

            newFilteredProjects.push(project);
            newFilterData.technologies = newFilterData.technologies.concat(technologies.map(t => t.name));
            newFilterData.projects.push(title);
        });
        newFilterData.technologies = [...new Set(newFilterData.technologies)];

        if (typeof (onParsed) === "function") { onParsed(newFilterData); }

        setFilteredProjects(newFilteredProjects.sort(sortFunctions[filter.sort]));

    }, [projects, filter]);

    return (
        <div className={`flex flex-col ${className}`}>
            {filteredProjects.map((project) => {

                const startDate = `${project.start.getFullYear()}${`-${project.start.getMonth() + 1}`}`;
                const endDate = project.end ? `${project.end.getFullYear()}${`-${project.end.getMonth() + 1}`}` : "Heden";

                return <Project
                    {...project}
                    key={project.title}
                    text={project.short}
                    image={project.shortImage}
                    timestamp={`${startDate} → ${endDate}`}
                    technologies={project.technologies.map(
                        (tech, i) => <Technology key={i} {...tech} />
                    )}
                />;
            })}
        </div>
    );
};

export default TimelineContainer;;;