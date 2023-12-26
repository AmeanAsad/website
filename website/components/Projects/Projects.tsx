import { Box, Flex, Heading } from "@chakra-ui/react";
// import projectsInfo from "./ProjectCards.json";
import projectsInfo from "./ProjectCards.json";
// import { ProjectCards } from "./ProjectTypes";
import ProjectCard from "./ProjectCard";
import { NextPage } from "next";

const Projects: NextPage = () => {
    // const projectCards = new Object(projectsInfo);
    const keys = Object.keys(projectsInfo);
    const projectCardElements = keys.map((key) => {
        const projectInfo = projectsInfo[key as keyof typeof projectsInfo];
        return (
            <ProjectCard key={projectInfo.title} id={key} {...projectInfo} />
        );
    });

    return (
        <Box p="3%" pr="0" height="100vh" width="100%" bg="brand.white">
            <Heading color="brand.mediumBlue" fontSize="5xl">
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
