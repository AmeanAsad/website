import styles from "./Homepage.module.scss";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const AnimationComponent = dynamic(() => import("./Animation"), { ssr: false });
const TestimonialCard = dynamic(() => import("./TestimonialCard/TestimonialCard"));
const HomePage: NextPage = () => {
    return (
        <Box position="relative" zIndex="10" className={styles.pageContainer}>
            <div className={styles.leftNav}>
                <Sidebar />
            </div>
            <Box className="animation" zIndex="5" position="absolute" top={0}>
                <AnimationComponent
                    background="#151247"
                    name="pts-tester"
                    style={{ opacity: 0.9, height: "100vh", width: "100vw" }}
                />
            </Box>
            <Box
                marginTop={{
                    base: "100px",
                    md: "0",
                }}
                position="relative"
                className={styles.pageContent}
            >

                <Flex width="fit-content" top={200} margin="auto" zIndex="1000" position="relative">
                    <Stack marginLeft="20px" justifyContent="center">
                        <Heading textAlign="center" fontSize="15vmin" color="brand.white">
                            Amean
                        </Heading>

                        <Heading textAlign="center" fontSize="15vmin" color="brand.white">
                            Asad
                        </Heading>

                        <TestimonialCard />
                    </Stack>
                </Flex>

            </Box>

        </Box>
    );
};

export default HomePage;
