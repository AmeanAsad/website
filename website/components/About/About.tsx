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
            spacing={5}
            mb={4}
            alignItems="flex-start"

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
            <Link isExternal href="https://twitter.com/ameanasad1">

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
            I moved to Canada five years ago from Egypt to study at Queen&apos;s University.
            Currently I am in my final year of Mathematics and Computer Engineering at
            Queen&apos;s, graduating in May 2022 (hopefully). Last year I completed
            a 16 month internship at IBM working as a Software Engineer as part of the
            Watson Studio Core team. I also Co-founded a computer vision startup that aimed
            to democratize peronsalized fitness for online users.
        </Text>
    );

    const interests = (
        <Text color="brand.darkBlue">
            Im really interested in working on technology that helps progress society in
            an ehtical and sustainable manner. I am always working on some sort of tech side
            project that interests me and has a good learning value. I also
            love to collaborate on projects when I get the
            chance. Currently, I am learning about the topics of computer vision, blockchain,
            computational neuroscience, and
            geometric algebra. I like the open source aspect of blockchain technologies
            and interested to work on a blockchain related project soon.
            <br />
            <br />
            Outside of work, I like shawarma, standup, and playing football/soccer.
        </Text>
    );

    const currentWork = (
        <Text color="brand.darkBlue">
            Currently I am working on a thesis group project that involves using deep neural nets
            to estimate the function of dendritic trees in cortical neurons. I am also experimenting
            with handwriting recognition to generate Latex documents from my class notes.
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
                        loading="eager"
                    />

                </Box>

                <Box maxWidth="800px" paddingLeft={{ base: 0, md: 8 }}>
                    {social}

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
