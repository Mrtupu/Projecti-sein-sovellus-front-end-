import Togglable from "./Togglable"
import React from "react"
import projectService from "../services/projects"

const Project = ({ project, user, setProjects }) => {


    const removeProject = async () => {
        if (window.confirm(`Are you sure you want to delete project ${project.name}?`)) {
            await projectService.remove(project.id)
            setProjects((prevProjects) => prevProjects.filter((p) => p.id !== project.id))
        }
    }



    return (
        <div className="project">
            <div name="projectName" >{project.name}</div>
            <div name="projectType">{project.projectType}</div>
            <div name="deadline">{project.deadline}</div>
            <Togglable buttonLabel="Show details" buttonLabel1="Hide details">
                <div>{project.description}</div>
                <div>{project.status}</div>
                <div>{project.members}</div>
                {project.user && project.user.id === user.id && (
                    <button onClick={() => removeProject(project)}>Delete</button>
                )}
            </Togglable>
            
        </div>

    )
}

export default Project