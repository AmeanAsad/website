import {
    Box,
    Divider,
    Flex,
    Heading,
    HStack,
    IconButton,
    Link,
    Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const AboutPage: NextPage = () => {
    const divider = <Divider marginTop={5} marginBottom={3} />;

    const social = (
        <HStack
            mt={{ lg: 2, md: 2 }}
            spacing={7}
            mb={4}
            paddingTop={3}
            justifyContent="center"
            width="100%"
        >
            <Link isExternal href="https://www.linkedin.com/in/ameanasad/">
                <IconButton
                    aria-label="LinkedIn Link"
                    variant="ghost"
                    size="lg"
                    color="brand.mediumBlue"
                    isRound
                    _hover={{ bg: "brand.red", color: "brand.white" }}
                    icon={<BsLinkedin size="28px" />}
                />
            </Link>
            <Link isExternal href="https://github.com/AmeanAsad">
                <IconButton
                    aria-label="Github Link"
                    variant="ghost"
                    color="brand.mediumBlue"
                    size="lg"
                    isRound
                    _hover={{ bg: "brand.red", color: "brand.white" }}
                    icon={<BsGithub size="28px" />}
                />
            </Link>
            <Link isExternal href="https://twitter.com/ameanasad">
                <IconButton
                    aria-label="Twitter Link"
                    variant="ghost"
                    size="lg"
                    color="brand.mediumBlue"
                    isRound
                    _hover={{ bg: "brand.red", color: "brand.white" }}
                    icon={<BsTwitter size="28px" />}
                />
            </Link>
        </HStack>
    );

    const aboutMeText = (
        <Text color="brand.darkBlue">
            Currently a distributed systems engineer @ Protocol Labs building a
            decentralized CDN network called Filecoin Saturn. Previously founded
            Yasa, a computer vision powered fitness app. Im currently based on
            Toronto but previously lived in Egypt for 17 years.
        </Text>
    );

    const interests = (
        <Text color="brand.darkBlue">
            My main interests and work lie in software engineering and
            mathematical research. My main areas are zero knowledge machine
            learning, reinforcement learning, and incentive design. My goal is
            to always work on technology that reaches millions and contributes a
            net positive to the world.
            <br />
            <br />
            Outside of my desk, I like food, standup comedy, and I practice Jiu
            Jitsu
        </Text>
    );

    const currentWork = (
        <Text color="brand.darkBlue">
            Currently I am working on a decentralized CDN at Protocol Labs
            called{" "}
            <Link isExternal href="https://saturn.tech/" sx={{}}>
                Filecoin Saturn
            </Link>
        </Text>
    );
    return (
        <Box backgroundColor="brand.white" p={5}>
            <Heading size="2xl" color="brand.mediumBlue" marginBottom={8}>
                {" "}
                About?{" "}
            </Heading>

            <Flex direction={{ base: "column", lg: "row" }}>
                <Box
                    margin={{ base: "auto", lg: "0" }}
                    minWidth={330}
                    maxWidth={700}
                >
                    <Image
                        layout="intrinsic"
                        width={562}
                        height={700}
                        src="https://f004.backblazeb2.com/file/websitev1/portrait.jpg"
                        quality={100}
                        priority
                    />
                    {social}
                </Box>

                <Box maxWidth="800px" paddingLeft={{ base: 0, md: 8 }}>
                    <Heading color="brand.mediumBlue">About Me</Heading>
                    {aboutMeText}

                    {divider}

                    <Heading color="brand.mediumBlue"> Interests </Heading>
                    {interests}

                    {divider}

                    <Heading color="brand.mediumBlue"> Current Work</Heading>
                    {currentWork}
                </Box>
            </Flex>
        </Box>
    );
};

export default AboutPage;
