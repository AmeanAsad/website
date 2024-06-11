import styles from "./Homepage.module.scss";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const AnimationComponent = dynamic(() => import("./Animation"), { ssr: false });
// const TestimonialCard = dynamic(
//     () => import("./TestimonialCard/TestimonialCard")
// );

const HomePage: NextPage = () => {
    return (
        <>
            <Box className="animation" zIndex="5" position="absolute" top={0}>
                <AnimationComponent
                    background="#151247"
                    name="homepageAnimation"
                    style={{
                        opacity: 0.9,
                        minHeight: "600px",
                        height: "100vh",
                        width: "100vw",
                    }}
                />
            </Box>
            <Box
                marginTop={{
                    base: "0",
                    md: "0",
                }}
                position="relative"
                className={styles.pageContent}
            >
                <Flex
                    width="fit-content"
                    top={{ md: "40%", base: "40%", sm: "0" }}
                    transform={{ md: "translateY(-50%)", base: "0" }}
                    margin="auto"
                    zIndex="1000"
                    position="relative"
                    pointerEvents="none"
                >
                    <Stack justifyContent="center">
                        <Heading
                            pointerEvents="none"
                            textAlign="center"
                            fontSize={{ base: "25vmin", sm: "17vmin" }}
                            color="brand.white"
                        >
                            Amean
                        </Heading>

                        <Heading
                            pointerEvents="none"
                            textAlign="center"
                            fontSize={{ base: "25vmin", sm: "17vmin" }}
                            color="brand.white"
                        >
                            Asad
                        </Heading>
                    </Stack>
                </Flex>

                <Flex
                    zIndex="1000"
                    position="relative"
                    width="fit-content"
                    margin="auto"
                    visibility={{ base: "hidden", sm: "visible" }}
                    top={{ base: "20%", sm: "35%" }}
                    transform={{
                        md: "translateY(-55%)",
                        base: "translateY(-60%)",
                    }}
                >
                    {/* <TestimonialCard /> */}
                </Flex>
            </Box>
        </>
    );
};

export default HomePage;
