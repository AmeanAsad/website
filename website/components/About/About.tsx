import {
    Box,
    Divider,
    Flex,
    Heading,
    HStack,
    IconButton,
    Link,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const AboutPage: NextPage = () => {
    const divider = <Divider marginTop={5} marginBottom={3} />;

    const social = (
        <HStack
            mt={4}
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
        <Text color="brand.darkBlue" p={3}>
            <UnorderedList spacing={3}>
                {/* <ListItem>
                    2024: Founded{" "}
                    <Link
                        isExternal
                        href="https://chromewebstore.google.com/detail/focal/foejbliibcljbobfidlbahiilkgkcnfe?hl=en"
                        color="blue.500"
                    >
                        Focal
                    </Link>
                </ListItem> */}
                <ListItem>
                    Currently building{" "}
                    <Link isExternal href="https://lunal.dev" color="blue.500">
                        Lunal
                    </Link>{" "}
                    in San Fransico.
                </ListItem>
                <ListItem>
                    2024: Created{" "}
                    <Link
                        isExternal
                        href="https://focalbrowse.com"
                        color="blue.500"
                    >
                        Focal
                    </Link>
                </ListItem>
                <ListItem>
                    2024: Founded{" "}
                    <Link
                        isExternal
                        href="https://mycommon.place"
                        color="blue.500"
                    >
                        Commonplace
                    </Link>
                </ListItem>
                <ListItem>
                    2022-2024: Distributed Systems Engineer @ Protocol Labs
                </ListItem>

                <ListItem>
                    2022: Graduated Uni, studied Applied Mathematics and
                    Computer Engineering
                </ListItem>

                <ListItem>
                    2021: Founded Yasa, a fitness analytics platform
                    (discontinued).
                </ListItem>
                <ListItem>
                    2020: Filed my first{" "}
                    <Link
                        isExternal
                        href=" https://patents.google.com/patent/US20220414316A1/en?inventor=amean+asad
"
                        color="blue.500"
                    >
                        patent in machine learning
                    </Link>
                </ListItem>
                <ListItem>2019-2020: Software Engineer @IBM</ListItem>
            </UnorderedList>
        </Text>
    );

    const interests = (
        <Text color="brand.darkBlue">
            Currently in San Francisco working on{" "}
            <Link href="https://lunal.dev" isExternal>
                Lunal
            </Link>
            . My interests lie in math and engineering. I have worked a lot on
            distributed systems, information theory, zero knowledge proofs, and
            machine learning. In general, the type of work I enjoy the most is
            simply building tech that people use, maybe with a slight bias
            towards math though ngl.
            <br />
            <br />
            Away from my desk, I train jiu jitsu, play tennis, and make a lot of
            tea. My current favorite dessert is Tiramisu and my go to comfort
            dinner is Koshari.
            <br />
            <br />
            Here are some of the things I have been upto in the past few years:
        </Text>
    );

    return (
        <Box backgroundColor="brand.white" p={10}>
            <Flex direction="column">
                <Box maxWidth="800px">
                    <Heading color="brand.mediumBlue" mb={4}>
                        About
                    </Heading>
                    {interests}

                    {aboutMeText}

                    {divider}
                </Box>
                {social}
            </Flex>
        </Box>
    );
};

export default AboutPage;
