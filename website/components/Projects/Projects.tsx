import { Box, Flex } from "@chakra-ui/react";

import React from "react";
import projectsInfo from "./ProjectCards.json";
import { ProjectCards } from "./ProjectTypes";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projectCards: ProjectCards = projectsInfo;

    const projectCardElements = projectCards.map((projectInfo) => (
        <ProjectCard key={projectInfo.title} {...projectInfo} />
    ));

    return (
        <Box p="3%" height="100vh" width="100%" bg="brand.white">
            <Flex
                justifyContent={{ base: "center", lg: "left" }}
                direction="row"
                wrap="wrap"
            >
                {projectCardElements}
            </Flex>
        </Box>
    );
};

export default Projects;
