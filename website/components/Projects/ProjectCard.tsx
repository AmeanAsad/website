import {
    Box,
    Center,
    Flex,
    Heading,
    HStack,
    Icon,
    Tag,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    useDisclosure,
    IconButton,
    Spacer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
    ImFileText2,
    ImEnlarge2,
    ImShrink2,
    ImEmbed2,
    ImCog,
} from "react-icons/im";
import { Project } from "./ProjectTypes";
import ProjectPage from "./ProjectPage";
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

    const { isOpen, onOpen, onClose } = useDisclosure();

    const closeIcon = (
        <Icon as={ImShrink2} w={7} h={7} color="brand.darkBlue" />
    );
    const modalContent = (
        <Modal onClose={onClose} size="full" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody bg="brand.white">
                    <Flex padding={2} width="100%" direction="row">
                        <Heading color="brand.mediumBlue">{title}</Heading>
                        <Spacer />
                        <IconButton
                            onClick={onClose}
                            variant="outline"
                            border="2px"
                            rounded="none"
                            borderColor="brand.darkBlue"
                            aria-label="Close Modal"
                            icon={closeIcon}
                        />
                    </Flex>
                    <ProjectPage projectId={id} />
                </ModalBody>
                <ModalFooter />
            </ModalContent>
        </Modal>
    );
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
            <Box
                height="60px"
                width="60px"
                border="solid"
                borderWidth="30px"
                onClick={onOpen}
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
                    <Heading float="left" color="brand.red" fontSize={15}>
                        {date}
                    </Heading>
                </Flex>
            </Flex>
        </Box>
    );
    return (
        <>
            {modalContent}
            <motion.div whileHover={{ y: -10 }}>
                <Box
                    h="350px"
                    w="400px"
                    bg="brand.darkBlue"
                    position="relative"
                    margin={6}
                >
                    {cardHeader}
                    <Box
                        bg="brand.darkBlue"
                        h="inherit"
                        width="100%"
                        maxHeight="290px"
                        position="relative"
                        sx={{
                            boxShadow:
                                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
                        }}
                    >
                        <Heading
                            onClick={onOpen}
                            fontSize={30}
                            p={5}
                            color="brand.white"
                            cursor="pointer"
                            marginTop="5"
                            letterSpacing={1}
                        >
                            {title}
                        </Heading>
                        {cardFooter}
                    </Box>
                </Box>
            </motion.div>
        </>
    );
};

export default ProjectCard;
