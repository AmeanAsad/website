import { Box, Divider, Flex, Heading, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const AboutPage: NextPage = () => {
    const divider = (
        <Divider marginTop={5} marginBottom={3} />
    );

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
            I am in my final year of Mathematics and Computer Engineering at
            Queen&apos;s University, graduating in May 2022. I lived in Egypt for 17 years prior to
            returning to Canada four years ago to study.
            The past four years have been filled with so much growth, experiences,
            and projects. Last year I completed
            a 16 month internship at IBM working as a Software Engineer as part of the
            Watson Studio Core team. It was an amazing experience and I filed my first ever
            patent! I also Co-founded a computer vision startup called Yasa
            with Liam Hough that aimed to democratize peronsalized fitness for online users.
            This last summer, we raised 20K and I led a team of three engineers
            to develop our platform.
        </Text>
    );

    const interests = (
        <Text color="brand.darkBlue">
            I am really interested in working on technology that helps progress society in
            an ehtical and sustainable manner. I am continuously working on side projects
            that provide me with opportunities to learn and apply new technologies.
            Currently, I am learning about the topics of computer vision, blockchain,
            computational neuroscience, and
            geometric algebra. I have been trying to explore the area of Web3 and Blockchain
            recently
            and I am currently in the workings of a project in that area.
            I also enjoy working with hardware a lot, mainly embedded systems and RC models.
            I am always interested to collaborate on new projects and ideas, so feel free to
            reach out to me <Link color="brand.mediumBlue" href="/contact"> here</Link> !
            <br />
            <br />
            Outside of work, I like food, standup comedy, and I play and watch a lot of
            football/soccer.
        </Text>
    );

    const currentWork = (
        <Text color="brand.darkBlue">
            Currently I am working on a thesis group project that involves using deep neural nets
            to estimate the function of dendritic trees in cortical neurons. I am also experimenting
            with computer vision to generate Latex documents from my class notes.
        </Text>
    );
    return (
        <Box backgroundColor="brand.white" p={5}>
            <Heading size="2xl" color="brand.mediumBlue" marginBottom={8}> Hello! I am Amean Asad </Heading>

            <Flex direction={{ base: "column", lg: "row" }}>
                <Box margin={{ base: "auto", lg: "0" }} minWidth={330} maxWidth={700}>
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

                    <Heading color="brand.mediumBlue">
                        About Me
                    </Heading>
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
