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
        avatar: "https://pbs.twimg.com/media/E4kbSE0WQAcpowX.jpg",
    };

    const { name, role, content, avatar } = test;
    return (
        <Flex
            // boxShadow={"xl"}
            // boxShadowColor="white"
            maxW={"640px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"md"}
            // border={"0.5px"}
            // borderColor={"brand.red"}
            // backgroundImage={"linear-gradient(#151247,#82294D)"}
            // borderLeft="10px"
            // borderRight="10px"
            // borderColor="white"

            p={8}
            justifyContent={"space-between"}
            position={"relative"}
            bg={"brand.darkBlue"}
            // bg={"rgba(130,41,77,0.5)"}
            sx={{
                "border-top": "1px solid rgba(255,255, 255, 0.25)",
                "border-bottom": "1px solid rgba(255,255, 255, 0.25)",

                "border-left":"30px solid gray",
                "border-right": "30px solid #413B70"
            
                // "box-shadow": "rgba(255, 255, 255, 0.35) 0px 5px 15px"
                // "box-shadow": "rgba(250, 250, 190, 0.25) 0px 2px 5px -1px, rgba(255,255, 255, 0.3) 0px 1px 3px -1px"
            }}
        >
            <Flex
                direction={"column"}
                textAlign={"left"}
                justifyContent={"space-between"}
                // bg="brand.lightBlue"
            >
                <chakra.p
                    
                    fontSize={"15px"}
                    fontWeight="30"
                    color="brand.white"
                    pb={4}
                >
                    {content}
                </chakra.p>
                <chakra.p
                    fontWeight={"bold"}
                    fontSize={14}
                >
                    {name}
                    <chakra.span
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
                size="xl"
                loading="eager"
                // height={"100px"}
                // border="8px"
                // borderColor="gray.900"
                
                // width={"100px"}
                alignSelf={"center"}
                m={{ base: "0 0 20px 0", md: "0 0 0 20px" }}
                sx={{
                    border: "1px solid #262153",

                }}
            />
        </Flex>
    );
};

export default TestimonialCard;
