import { Box, Flex, Heading } from "@chakra-ui/react";
import projectsInfo from "./ProjectCards.json";
import { ProjectCards } from "./ProjectTypes";
import ProjectCard from "./ProjectCard";
import { NextPage } from "next";

const Projects: NextPage = () => {
    const projectCards: ProjectCards = projectsInfo;

    const projectCardElements = projectCards.map((projectInfo) => (
        <ProjectCard key={projectInfo.title} {...projectInfo} />
    ));

    return (
        <Box p="3%" height="100vh" width="100%" bg="brand.white">
            <Heading color="brand.darkBlue" fontSize="5xl">
                Notable Projects
            </Heading>
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
