import React, { useState, useEffect, useRef } from "react";
import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
const TestimonialCard = (props: any) => {
    const test = {
        name: "Brandon P.",
        role: "Chief Marketing Officer",
        content:
            "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
        avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    };

    const { name, role, content, avatar } = test;
    return (
        <Flex
            boxShadow={"lg"}
            maxW={"640px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"md"}
            // border={"0.5px"}
            borderColor={"brand.white"}
            p={8}
            justifyContent={"space-between"}
            position={"relative"}
            bg={"brand.mediumBlue"}
            sx={{
                border: "0.5px",
            }}
        >
            <Flex
                direction={"column"}
                textAlign={"left"}
                justifyContent={"space-between"}
            >
                <chakra.p
                    fontFamily={"Inter"}
                    fontWeight={"medium"}
                    fontSize={"15px"}
                    color="brand.white"
                    pb={4}
                >
                    {content}
                </chakra.p>
                <chakra.p
                    fontFamily={"Work Sans"}
                    fontWeight={"bold"}
                    fontSize={14}
                >
                    {name}
                    <chakra.span
                        fontFamily={"Inter"}
                        fontWeight={"medium"}
                        color={"gray.500"}
                    >
                        {" "}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={"80px"}
                width={"80px"}
                alignSelf={"center"}
                m={{ base: "0 0 20px 0", md: "0 0 0 20px" }}
            />
        </Flex>
    );
};

export default TestimonialCard;
