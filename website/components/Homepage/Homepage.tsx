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

type testimonialText = Array<string>;

const HomePage = () => {
    // const text: Array<string> = ["Test", "Test1", "Test2"];

    const [text, setText] = useState<testimonialText>([
        "Test1",
        "Test2",
        "Test3",
    ]);
    const { isOpen, onToggle } = useDisclosure();
    let currentText: string = "";

    if (!currentText) {
        console.log(true, currentText);
        currentText = text[0];
    }

    const rotateText = () => {
        setTimeout(() => {
            if (!isOpen) {
                onToggle();
                console.log("toggle");
                // currentText = text[0];
                text.unshift(...text.splice(-1));
                console.log(text);
                setText([...text]);
            }
        }, 500);
    };

    useEffect(() => {
        rotateText();
    }, [isOpen]);

    return (
        <Box bg="brand.darkBlue" className={styles.pageContainer}>
            <div className={styles.leftNav}>
                <Sidebar />
            </div>
            <div className={styles.pageContent}>
                <Center h="100%" w="100%">
                    <Stack marginLeft="20px" justifyContent={"center"}>
                        <Heading fontSize="15vmin" color="brand.white">
                            Amean
                        </Heading>

                        <Heading fontSize="15vmin" color="brand.white">
                            Asad
                        </Heading>
                        <Button onClick={onToggle}> Fader </Button>
                        <Fade in={isOpen}>
                            <TestimonialCard text={currentText} />
                        </Fade>
                    </Stack>
                </Center>
            </div>
            <div className={styles.animationContent}>
                <p> tesdst</p>
            </div>
        </Box>
    );
};

export default HomePage;
