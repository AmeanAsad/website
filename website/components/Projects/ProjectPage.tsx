import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

interface ProjectId {
    projectId: string;
}
const ProjectPage: NextPage<ProjectId> = (props: ProjectId) => {
    // TODO: Add project id functionality to retrieve project info
    const projectId: string = props && props.projectId; // eslint-disable-line
    return <Box height="100%" width="100%" />;
};

export default ProjectPage;
