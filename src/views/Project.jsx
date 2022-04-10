import React from 'react';
import useParams from "../components/Router/useParams";

const Project = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>Project</div>
    );
};

export default Project;