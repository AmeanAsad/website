import {
    Box,
    Center,
    Divider,
    Flex,
    Heading,
    Tag,
    Text,
    List,
    ListIcon,
    ListItem,
    Link,
    IconButton,
    Spacer,
    Icon,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IoPersonSharp, IoGitBranchOutline } from "react-icons/io5";
import { ImArrowLeft2, ImLink } from "react-icons/im";
import NextLink from "next/link";
import ProjectInfo from "./ProjectCards.json";
import styles from "../MarkdownFiles/markdown.module.scss";
import Image from "next/image";

interface pageProps {
    projectId: string;
    source: MDXRemoteSerializeResult;
}

interface Person {
    name: string;
    link: string;
}

interface mediaProps {
    src: string;
    caption?: string; // eslint-disable-line
    height?:string; // eslint-disable-line
}

const Video = ({ src, caption }: mediaProps) => {
    return (
        <Box textAlign="center" width="100%" margin="auto" maxWidth="500px">
            <Box border="1px">

                <video controls autoPlay loop style={{ width: "100%", margin: "auto" }}>

                    <source src={src} />
                </video>
            </Box>
            <Text color="gray.500"> {caption}</Text>
        </Box>

    );
};

const ImageSrc = ({ src, caption }: mediaProps) => {
    return (
        <Box textAlign="center" width="100%" margin="auto" maxWidth="600px">
            <Box position="relative" width="100%" border="1px">
                <Image
                    // layout="responsive"
                    objectFit="contain"
                    width="600px"
                    height="400px"
                    src={src}
                    quality={100}
                />
            </Box>
            <Text color="gray.500"> {caption}</Text>
        </Box>
    );
};

const PDF = ({ src }: mediaProps) => {
    return (
        <Box position="relative" width="100%" height="100vh">

            <object
                data={src}
                style={{ position: "absolute" }}
                width="100%"
                height="100%"
                type="application/pdf"
                aria-label="Pdf Document"
            />
        </Box>
    );
};

const components = {
    Video,
    ImageSrc,
    PDF
};

const ProjectPage: NextPage<pageProps> = ({ projectId, source }) => {
    const id = projectId;
    const mdxSource = source;
    const { title, tags, links, acknowledgements } =
        ProjectInfo[id as keyof typeof ProjectInfo];
    let gitLink;
    let webLink;
    let linkSection;

    const divider = (
        <Box marginTop={2} width="100%" paddingLeft={4} paddingRight={4}>
            <Divider />
        </Box>
    );
    const tagElements = tags.map((tagName: string) => {
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
                <Link color="brand.mediumBlue" isExternal href={links.github}>
                    Github Link
                </Link>
            </ListItem>
        );
    }

    if (links.web) {
        webLink = (
            <ListItem>
                <ListIcon as={ImLink} color="brand.red" />
                <Link color="brand.mediumBlue" isExternal href={links.github}>
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

    const acknowledgementElements = acknowledgements.map((person: Person) => {
        return (
            <ListItem key={person.name}>
                <ListIcon as={IoPersonSharp} color="brand.red" />
                <Link color="brand.mediumBlue" isExternal href={person.link}>
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
            <List>{acknowledgementElements}</List>
            {divider}
        </>
    );

    const backIcon = (
        <Icon as={ImArrowLeft2} w={7} h={7} color="brand.darkBlue" />
    );
    return (
        <>
            <Flex
                padding={2}
                paddingTop={5}
                width="80%"
                maxWidth="1500px"
                margin="auto"
                direction="row"
            >
                <Heading color="brand.mediumBlue">{title}</Heading>
                <Spacer />
                <NextLink passHref href="/projects">
                    <IconButton
                        variant="outline"
                        key="test"
                        border="2px"
                        rounded="none"
                        borderColor="brand.darkBlue"
                        aria-label="Close Modal"
                        icon={backIcon}
                    />
                </NextLink>
            </Flex>
            <Center className="center" width="100%" height="100%">
                <Flex
                    justifyContent="center"
                    width="100%"
                    height="100%"
                    marginLeft={{ base: 0, xl2: "-250px" }}
                    flexWrap="wrap"
                    maxWidth="1100px"
                >
                    <Box
                        height="fit-content"
                        width="300px"
                        padding={4}
                        paddingTop={20}
                        position={{ base: "unset", pageWrap: "sticky" }}
                        top={0}
                        justifyContent="center"
                    >
                        {infoSection}
                        {linkSection}
                        {acknowledgementElements.length > 0 &&
                            acknowledgementSection}
                    </Box>
                    <Box
                        margin="auto"
                        padding={3}
                        marginTop={5}
                        maxWidth="800px"
                    >
                        <div className={styles["markdown-body"]}>
                            <MDXRemote {...mdxSource} components={components} />
                        </div>
                    </Box>
                </Flex>
            </Center>
        </>
    );
};

export default ProjectPage;
