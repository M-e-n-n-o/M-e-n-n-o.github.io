import React, { useEffect, useState } from 'react';
import Period from "./Period";
import Project from "./Project";
import Technology from "./Technology";

const parsePeriod = (period) => {
    let { children = [], title } = period.props;

    if (children.type) {
        children = [children];
    }

    const result = {
        technologies: [],
        periods: [title],
        projects: []
    };

    children.forEach((child) => {
        const childResult = parseChild(child);
        result.technologies = [...new Set(result.technologies.concat(childResult.technologies))];
        result.projects = result.projects.concat(childResult.projects);
        result.periods = result.periods.concat(childResult.periods);
    });

    return result;
};

const parseProject = (project) => {
    const { technologies, title } = project.props;

    const result = {
        technologies: [],
        projects: [title]
    };

    technologies.forEach((tech) => {
        if (tech.type !== Technology) { return; }
        result.technologies.push(tech.props.name);
    });
    return result;
};

const parseChild = (child) => {
    let result = {
        technologies: [],
        periods: [],
        projects: []
    };

    if (child.type === Period) {
        result = parsePeriod(child);
    } else if (child.type === Project) {
        const parsed = parseProject(child);
        result.technologies = parsed.technologies;
        result.projects = parsed.projects;
    }

    return result;
};

const TimelineContainer = ({ children = [], className = "", onParsed, filter }) => {

    const [filteredChildren, setFilteredChildren] = useState([]);

    useEffect(() => {
        if (typeof (onParsed) !== "function") { return; }
        const timeline = {
            technologies: [],
            periods: [],
            projects: []
        };

        children.forEach((child) => {
            const childResult = parseChild(child);
            timeline.technologies = [...new Set(timeline.technologies.concat(childResult.technologies))];
            timeline.projects = timeline.projects.concat(childResult.projects);
            timeline.periods = timeline.periods.concat(childResult.periods);
        });

        onParsed(timeline);
    }, [children]);

    useEffect(() => {
        
    }, [children, filter]);

    return (
        <div className={`flex flex-col ${className}`}>
            {filteredChildren}
        </div>
    );
};

export default TimelineContainer;