import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const AboutPage: NextPage = () => {
    const divider = (
        <Divider marginTop={5} marginBottom={3} />
    );

    const aboutMeText = (
        <Text>
            I moved to Canada 4 years ago from Egypt to study.
            Currently, I am in my final year of Mathematics and Computer Engineering at
            Queen&apos;s, graduating in May 2022 (hopefully). Last year I completed
            a 16 month internship at IBM working as a Software Engineer as part of the
            Watson Studio Core team. I also Co-Founded a startup that uses computer vision
            to real time corrections for fitness users.
        </Text>
    );

    const interests = (
        <Text>
            Im really interested in working on technology that helps progress society in
            an ehtical, sustainable manner. I am always working on some sort of tech side
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
        <Text>
            Currently I am working on a thesis group project that involves using deep neural nets
            to estimate the function of dendritic trees in cortical neurons. I am also experimenting
            with handwriting recognition to generate Latex documents from my class notes.
        </Text>
    );
    return (
        <Box p={5}>
            <Heading marginBottom={8}> Hello! This is Amean Asad </Heading>

            <Flex direction={{ base: "column", lg: "row" }}>
                <Box margin={{ base: "auto", lg: "0" }} minWidth={360} maxWidth={700}>
                    <Image
                        layout="intrinsic"
                        width={562}
                        height={700}
                        src="https://f004.backblazeb2.com/file/websitev1/portrait.jpg"
                        quality={100}
                    />

                </Box>

                <Box maxWidth="800px" paddingLeft={{ base: 0, md: 8 }}>
                    <Heading>
                        About Me
                    </Heading>
                    {aboutMeText}

                    {divider}

                    <Heading> Interests </Heading>
                    {interests}

                    {divider}

                    <Heading> Current Work</Heading>
                    {currentWork}

                </Box>

            </Flex>

        </Box>
    );
};

export default AboutPage;
