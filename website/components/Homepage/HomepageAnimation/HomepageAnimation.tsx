import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const HomepageAnimation = () => {
    const box = (
        <Box
            // p={4}
            h="350px"
            w="400px"
            bg="brand.darkBlue"
            position={"relative"}
            margin={4}
            sx={
                {
                    // "box-shadow": "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
                    // "box-shadow":
                    //     "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
                }
            }
        >
            <Box
                height="60px"
                width="60px"
                border="solid"
                borderWidth={"30px"}
                // marginRight="-10px"
                background="brand.white"
                float="right"
                // borderColor={
                //     "brand.red brand.red brand.darkBlue brand.darkblue"
                // }

                sx={{
                    "border-color": "#FFFFF7 #FFFFF7 #3C3483 #3C3483;",
                    // "border-style": "solid;",
                    // "border-width": "29px;",
                }}
            ></Box>

            <Heading marginLeft={5} marginTop={5} color="brand.lightBlue">
                Test Heading
            </Heading>

            <Box
                bg="brand.darkBlue"
                h="inherit"
                width="100%"
                maxHeight="290px"
                position="absolute"
                sx={{
                    // "box-shadow":
                    //     "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
                    // "box-shadow": "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;",
                    "box-shadow":
                        "rgba(0, 0, 0, 0.19) 10px 10px 20px, rgba(0, 0, 0, 0.23) 3px 8px 6px;",
                }}
            >
                <Text p={5} color="brand.white" marginTop="5">
                    Some sample text to fill up card space describing project
                </Text>

                <Heading p={5} color="brand.red" marginTop={12} fontSize={15}>
                    April 16 2019
                </Heading>
            </Box>
        </Box>
    );
    return (
        <Box p="3%" height="100vh" width={"100%"} bg="brand.white">
            <Flex
                // alignContent={"center"}
                // alignItems={"center"}

                justifyContent={{ base: "center", lg: "left" }}
                direction={"row"}
                wrap={"wrap"}
            >
                {box}
                {box}
                {box}
                {box}
                {box}
                {box}
                {box}
                {box}
            </Flex>
        </Box>
    );
};

export default HomepageAnimation;
