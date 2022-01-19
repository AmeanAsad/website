import {
    Box,
    Center,
    Flex,
    Heading,
    HStack,
    Icon,
    Tag,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    ImFileText2,
    ImEnlarge2,
    ImEmbed2,
    ImCog,
} from "react-icons/im";
import { Project } from "./ProjectTypes";
import { NextPage } from "next";

const cardIcons = {
    code: (
        <Center
            width="32px"
            height="32px"
            border="solid"
            borderWidth="1px"
            rounded="sm"
            borderColor="brand.lightBlue"
        >
            <Icon as={ImEmbed2} w={6} h={6} color="brand.lightBlue" />
        </Center>
    ),
    hardware: (
        <Box h="32px" w="32px">
            <Icon as={ImCog} w={6} h={6} color="brand.lightBlue" />
        </Box>
    ),
    document: (
        <Box h="32px" w="32px">
            <Icon as={ImFileText2} w={7} h={7} color="brand.lightBlue" />{" "}
        </Box>
    ),
};

const ProjectCard: NextPage<Project> = (props: Project) => {
    const { id, icon, topic, title, tags, date } = props;
    const projectIcon = cardIcons[icon as keyof typeof cardIcons];
    const iconElement = projectIcon || cardIcons.document;

    const tagElements = tags.map((tagText) => {
        return (
            <Tag
                bg="brand.lightBlue"
                key={tagText}
                borderRadius="full"
                color="brand.darkBlue"
                variant="solid"
                paddingLeft={3}
                paddingRight={3}
                marginRight={2}
                marginTop={2}
            >
                {tagText}
            </Tag>
        );
    });

    const cardHeader = (
        <>
            <Link passHref href={`/projects/${id}`}>
                <Box
                    height="60px"
                    width="60px"
                    border="solid"
                    borderWidth="30px"
                    background="brand.white"
                    float="right"
                    sx={{
                        cursor: "pointer",
                        borderColor: "#FFFFF7 #FFFFF7 #3C3483 #3C3483;",
                    }}
                >
                    <Icon
                        as={ImEnlarge2}
                        w={4}
                        h={4}
                        float="inherit"
                        marginTop={1}
                        marginRight={1}
                        color="brand.lightBlue"
                    />

                </Box>
            </Link>

            <HStack paddingTop={5} marginLeft={5}>
                {iconElement}

                <Text
                    fontSize={15}
                    letterSpacing={3}
                    paddingLeft={4}
                    textTransform="uppercase"
                    color="brand.lightBlue"
                >
                    {topic}
                </Text>
            </HStack>
        </>
    );
    const cardFooter = (
        <Box
            padding={5}
            className="projectCardFooter"
            position="absolute"
            width="100%"
            bottom={3}
        >
            <Flex direction="column">
                <Flex flexDirection="row" flexWrap="wrap" marginBottom={6}>
                    {tagElements}
                </Flex>

                <Flex position="relative" direction="row">
                    <Heading float="left" color="brand.red" fontSize={16}>
                        {date}
                    </Heading>
                </Flex>
            </Flex>
        </Box>
    );
    return (
        <motion.div whileHover={{ y: -10 }}>
            <Box
                h={{ base: "380px", sm: "350px" }}
                w={{ base: "350px", sm: "400px" }}
                bg="brand.darkBlue"
                position="relative"
                marginRight={6}
                marginBottom={6}
                marginTop={6}
            >
                {cardHeader}
                <Box
                    bg="brand.darkBlue"
                    h="inherit"
                    width="100%"
                    maxHeight={{ base: "330px", sm: "290px" }}
                    position="relative"
                    sx={{
                        boxShadow:
                                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
                    }}
                >
                    <Link passHref href={`/projects/${id}`}>
                        <Heading
                            fontSize={30}
                            p={5}
                            color="brand.white"
                            cursor="pointer"
                            marginTop="5"
                            letterSpacing={1}
                        >
                            {title}
                        </Heading>
                    </Link>
                    {cardFooter}
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectCard;
