import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
    const [project, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects")
            .then(r => r.json())
            .then(data => setProjects(data.projects))
    }, [])

    const projectItems = projects.map((project) => (
        <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
        />
    ));
}