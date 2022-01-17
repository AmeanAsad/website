import { Box, Center, Divider, Flex, Heading, Tag, List, ListIcon, ListItem, Link } from "@chakra-ui/react";
import { NextPage } from "next";
import MarkdownPage from "./MarkdownPage";
import { IoPersonSharp, IoGitBranchOutline } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { Project } from "./ProjectTypes";

const ProjectPage: NextPage<Project> = (props: Project) => {
    const { id, tags, links, acknowledgements } = props;
    let gitLink;
    let webLink;
    let linkSection;

    const divider = (
        <Box marginTop={2} width="100%" paddingLeft={4} paddingRight={4}>
            <Divider />
        </Box>
    );
    const tagElements = tags.map((tagName) => {
        return (
            <Tag
                bg="brand.darkBlue"
                key={tagName}
                borderRadius="full"
                color="brand.white"
                variant="solid"
                paddingLeft={3}
                paddingRight={3}
                marginRight={2}
                marginTop={2}
            >
                {tagName}
            </Tag>
        );
    });

    const infoSection = (
        <>
            <Heading marginBottom={3} marginTop={3} size="sm">
                Project Topics
            </Heading>
            {tagElements}
            {divider}
        </>
    );

    if (links.github) {
        gitLink = (
            <ListItem>
                <ListIcon as={IoGitBranchOutline} color="brand.red" />
                <Link isExternal href={links.github}>
                    Github Link
                </Link>
            </ListItem>
        );
    }

    if (links.web) {
        webLink = (
            <ListItem>
                <ListIcon as={ImLink} color="brand.red" />
                <Link isExternal href={links.github}>
                    Web Link
                </Link>
            </ListItem>
        );
    }

    if (webLink || gitLink) {
        linkSection = (
            <>
                <Heading marginBottom={3} marginTop={3} size="sm">
                    Sources
                </Heading>
                <List>
                    {gitLink}
                    {webLink}
                </List>
                {divider}
            </>
        );
    }

    const acknowledgementElements = acknowledgements.map((person) => {
        return (
            <ListItem key={person.name}>
                <ListIcon as={IoPersonSharp} color="brand.red" />
                <Link isExternal href={person.link}>
                    {person.name}
                </Link>
            </ListItem>
        );
    });

    const acknowledgementSection = (
        <>
            <Heading marginBottom={3} marginTop={3} size="sm">
                Acknowledgements
            </Heading>
            <List>
                {acknowledgementElements}
            </List>
            {divider}
        </>
    );

    return (

        <Center className="center" width="100%" height="100%">

            <Flex
                justifyContent="center"
                width="100%"
                height="100%"
                marginLeft={{ base: 0, xl2: "-300px" }}
                flexWrap="wrap"
                maxWidth="1100px"
            >
                <Box
                    height="fit-content"
                    width="300px"
                    padding={4}
                    paddingTop={20}
                    position="sticky"
                    top={0}
                    justifyContent="center"
                >
                    {infoSection}
                    {linkSection}
                    {acknowledgementElements.length > 0 && acknowledgementSection}
                </Box>
                <Box margin="auto" paddingTop={6} maxWidth="800px">

                    <MarkdownPage projectId={id} />
                </Box>
            </Flex>
        </Center>

    );
};

export default ProjectPage;
