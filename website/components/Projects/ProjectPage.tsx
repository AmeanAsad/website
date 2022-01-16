import { Box, Center, Divider, Flex, Heading, Tag, List, ListIcon, ListItem } from "@chakra-ui/react";
import { NextPage } from "next";
import MarkdownPage from "./MarkdownPage";
import { IoPersonSharp, IoGitBranchOutline } from "react-icons/io5";
import { ImLink } from "react-icons/im";

interface ProjectId {
    projectId: string;
}
const ProjectPage: NextPage<ProjectId> = (props: ProjectId) => {
    const projectId: string = props && props.projectId;
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
                    <Heading size="sm">
                        Title about something
                    </Heading>

                    <Tag
                        bg="brand.darkBlue"
                        borderRadius="full"
                        color="brand.red"
                        variant="solid"
                        paddingLeft={3}
                        paddingRight={3}
                        marginRight={2}
                        marginTop={2}
                    >
                        Test Content
                    </Tag>
                    <Tag
                        bg="brand.darkBlue"
                        borderRadius="full"
                        color="brand.red"
                        variant="solid"
                        paddingLeft={3}
                        paddingRight={3}
                        marginRight={2}
                        marginTop={2}
                    >
                        Test Content
                    </Tag>
                    <Tag
                        bg="brand.darkBlue"
                        borderRadius="full"
                        color="brand.white"
                        variant="solid"
                        paddingLeft={3}
                        paddingRight={3}
                        marginRight={2}
                        marginTop={2}
                    >
                        Test Content
                    </Tag>

                    <Divider size="sm" marginTop={2} />

                    <Heading marginTop={3} size="sm">
                       Information
                    </Heading>

                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={IoPersonSharp} color="brand.darkBlue" />
    Person 2
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoPersonSharp} color="brand.darkBlue" />
    Person 1
                        </ListItem>

                    </List>

                    <Divider marginTop={2} />

                    <Heading marginTop={3} size="sm">
                       Acknowledgements
                    </Heading>

                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={IoGitBranchOutline} color="brand.darkBlue" />
    Person 2
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ImLink} color="brand.darkBlue" />
    Person 1
                        </ListItem>

                    </List>
                    <Divider marginTop={2} />
                </Box>
                <Box margin="auto" paddingTop={6} maxWidth="800px">

                    <MarkdownPage projectId={projectId} />
                </Box>
            </Flex>
        </Center>

    );
};

export default ProjectPage;
