import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface ProjectId {
    projectId: string;
}
const ProjectPage = (props: ProjectId) => {
    const projectId: string = props && props.projectId;
    return <Box height="100%" width="100%"></Box>;
};

export default ProjectPage;
