import React, { useState, useEffect } from "react";
import {
    Avatar,
    Icon,
    Center,
    Flex,
    useDisclosure,
    Fade,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    IconButton,
    Box,
    Heading,
} from "@chakra-ui/react";

import { BiChevronsRight, BiChevronsLeft, BiInfoCircle } from "react-icons/bi";
import testimonials from "./Testimonials.json";

interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
}

type TestimonialList = Array<Testimonial>;

const TestimonialCard = () => {
    const [text, setText] = useState<TestimonialList>(testimonials);
    const [direction, setDirection] = useState<number>(1);
    const { isOpen, onToggle } = useDisclosure();
    const currentText: Testimonial = text[0];

    const toggle = (dir: number) => {
        setDirection(dir);
        onToggle();
    };

    useEffect(() => {
        const rotateText = () => {
            setTimeout(() => {
                if (!isOpen) {
                    onToggle();
                    text.unshift(...text.splice(direction));
                    setText([...text]);
                }
            }, 800);
        };

        rotateText();
    }, [isOpen]); // eslint-disable-line

    const popoverIcon = (
        <Icon as={BiInfoCircle} color="brand.lightBlue" w={6} h={6} />
    );
    const { name, content, avatar } = currentText;
    return (
        <Flex
            direction="row"
            justifyItems="center"
            rounded="xl"
            borderRight="60px solid"
            borderLeft="60px solid"
            borderTop="1px"
            borderBottom="1px"
            borderColor="brand.lightBlue"
            // maxW="600px"
            backgroundColor="rgba(255,255,255,0.2)"

        >
            <Center height="auto" float="left" width="40px" marginLeft="-50px">
                <Icon
                    as={BiChevronsLeft}
                    onClick={() => toggle(-1)}
                    w={20}
                    h={20}
                    color="brand.darkBlue"
                    style={{ cursor: "pointer" }}
                />
            </Center>
            <Fade
                style={{
                    margin: "10px",
                    padding: "10px",
                }}
                in={isOpen}
            >
                <Flex
                    direction={{ base: "column-reverse", md: "row" }}
                    width="full"
                    m="10px"
                    p={3}
                    justifyContent="space-between"
                    position="relative"
                >
                    <Flex
                        direction="column"
                        p="4"
                        textAlign="left"
                        justifyContent="space-between"
                    >
                        {" "}
                        <Text
                            fontSize={17}
                            fontWeight="30"
                            color="brand.white"
                            pb={4}
                        >
                            {content}
                        </Text>
                        <Flex direction="row">
                            <Heading
                                as="em"
                                color="brand.white"
                                fontWeight="bold"
                                marginRight={2}
                                fontSize={18}
                            >
                                - {name}
                            </Heading>
                            <Popover placement="right">
                                <PopoverTrigger>
                                    <IconButton
                                        aria-label="Info Button"
                                        size="sm"
                                        variant="link"
                                        icon={popoverIcon}
                                    />
                                </PopoverTrigger>
                                <PopoverContent
                                    rounded="sm"
                                    bg="brand.lightBlue"
                                >
                                    <PopoverArrow />
                                    <PopoverBody>
                                        <Box bg="brand.lightBlue" padding={4}>
                                            <Text color="brand.darkBlue">
                                                Content goes here my friend
                                            </Text>
                                        </Box>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Flex>
                    </Flex>
                    <Avatar
                        src={avatar}
                        size="xl"
                        loading="eager"
                        alignSelf="center"
                        m={{ base: "0 0 20px 0", md: "0 0 0 20px" }}
                        borderWidth="4px"
                        borderColor="brand.darkBlue"

                    />
                </Flex>
            </Fade>

            <Center height="auto" float="left" width="40px" marginRight="-50px">
                <Icon
                    as={BiChevronsRight}
                    onClick={() => toggle(1)}
                    w={20}
                    h={20}
                    color="brand.darkBlue"
                    style={{ cursor: "pointer" }}
                />
            </Center>
        </Flex>
    );
};

export default TestimonialCard;
