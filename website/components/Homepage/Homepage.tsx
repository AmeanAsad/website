import React, { useState, useEffect, useRef } from "react";
import styles from "./Homepage.module.scss";
import {
    Box,
    Center,
    Heading,
    Stack,
    Fade,
    useDisclosure,
    Button,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import PropTypes from "prop-types";
import Example from "./HomeTitle/HomeTitle";
import { Canvas, useFrame } from "@react-three/fiber";

const HomePage = () => {
    return (
        <Box bg="brand.darkBlue" className={styles.pageContainer}>
            <div className={styles.leftNav}>
                <Sidebar />
            </div>
            <Box
                marginTop={{
                    base: "100px",
                    md: "0",
                }}
                className={styles.pageContent}
            >
                <Center h="100%" w="100%">
                    <Stack marginLeft="20px" justifyContent={"center"}>
                        <Heading fontSize="15vmin" color="brand.white">
                            Amean
                        </Heading>

                        <Heading fontSize="15vmin" color="brand.white">
                            Asad
                        </Heading>

                        <TestimonialCard />
                    </Stack>
                </Center>
            </Box>
            <div className={styles.animationContent}>
                <p> tesdst</p>
            </div>
        </Box>
    );
};

export default HomePage;
