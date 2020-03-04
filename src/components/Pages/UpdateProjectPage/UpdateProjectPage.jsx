import React from "react";
import { Header, UpdateProjectForm} from "../..";

const UpdateProjectPage = ({ className }) => {
    return (
        <div className={`${className} UpdateProjectPage`}>
            <Header title="Project Form" />

            <UpdateProjectForm />
        </div>
    );
};

export default UpdateProjectPage;
