import styles from "../Homepage/Homepage.module.scss";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const AnimationComponent = dynamic(() => import("../Homepage/Animation"), { ssr: false });

const HomePage: NextPage = () => {
    return (
        <>
            <Box className="animation" zIndex="5" position="absolute" top={0}>
                <AnimationComponent
                    background="#151247"
                    name="homepageAnimation"
                    style={{ opacity: 0.9, minHeight: "600px", height: "100vh", width: "100vw" }}
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

                <Center
                    width="100%"
                    margin="auto"
                    height="100vh"
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
                            Coming
                        </Heading>

                        <Heading
                            pointerEvents="none"
                            textAlign="center"
                            fontSize={{ base: "25vmin", sm: "17vmin" }}
                            color="brand.white"
                        >
                            Soon
                        </Heading>

                    </Stack>
                </Center>
            </Box>

        </>
    );
};

export default HomePage;
