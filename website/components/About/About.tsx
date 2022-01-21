import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import svgCa from "../../public/test.svg";

const AboutPage: NextPage = () => {
    const divider = (
        <Divider marginTop={8} marginBottom={8} />
    );
    return (
        <Box p={5}>
            <Heading marginBottom={8}> Hello! This is Amean Asad </Heading>
            <Image height="32px" width="32px" src={svgCa} />
            <Flex direction={{ base: "column", md: "row" }}>
                <Box margin={{ base: "auto", md: "0" }} maxWidth="480px">
                    <Image
                        layout="intrinsic"
                        width={480}
                        height={700}
                        src="https://www.salk.edu/wp-content/uploads/2019/06/Patrick-Hsu-1500.jpg"
                    />

                </Box>

                <Box paddingLeft={{ base: 0, md: 8 }}>
                    <Heading>
                        About Me
                    </Heading>

                    Some descriptive text about meself.
                </Box>
            </Flex>
            {divider}
            <Box>
                <Heading> Interests </Heading>
            </Box>
            {divider}
            <Box>
                <Heading> What I am working on now</Heading>
            </Box>
        </Box>
    );
};

export default AboutPage;
