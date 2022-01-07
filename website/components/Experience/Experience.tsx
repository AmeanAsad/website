import {
    Box,
    Heading,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import themeExtension from "../../styles/theme";
import React from "react";
import { Chrono } from "react-chrono";
import { ImShrink2 } from "react-icons/im";

const brand = themeExtension.colors.brand;
console.log(brand);

const Experience = () => {
    const items = [
        {
            title: "This section",
        },
        {
            title: "Section 2 about something",
        },
        {
            title: "May something",
        },
    ];

    return (
        <Box width="100%" height="100vh" background="brand.white">
            <div style={{ width: "100%", height: "100%" }}>
                <Chrono
                    borderLessCards
                    allowDynamicUpdate
                    hideControls
                    cardHeight={100}
                    theme={{
                        titleColor: brand.darkBlue,
                        primary: brand.darkBlue,
                        textColor: brand.darkBlue,
                        cardBgColor: "brand.darkBlue",
                        cardForeColor: brand.darkBlue,
                        secondary: brand.lightBlue,
                    }}
                    mode="VERTICAL_ALTERNATING"
                    items={items}
                >
                    <div className="1">
                        <Box width="200px" height="300px" bg={"brand.darkBlue"}>
                            <Heading> Test content </Heading>
                        </Box>
                    </div>

                    <div className="2">
                        <Box width="200px" height="300px" bg={"brand.darkBlue"}>
                            <Heading> Test resh </Heading>
                        </Box>
                    </div>
                    <div className="3">
                        <Box
                            width="200px"
                            height={"fit-content"}
                            bg={"brand.darkBlue"}
                        >
                            <Heading> Test resh </Heading>
                            <Accordion defaultIndex={[0]} allowMultiple>
                                <AccordionItem>
                                    <Heading color={"brand.white"}>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Read More
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </Heading>
                                    <AccordionPanel>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </div>
                    <div className="chrono-icons">
                        <Box w="32px" h="32px" bg="white">
                            <Icon as={ImShrink2} w={5} h={5} />
                        </Box>
                        <Icon as={ImShrink2} w={7} h={7} />
                        <Icon as={ImShrink2} w={7} h={7} />
                    </div>
                </Chrono>
            </div>
        </Box>
    );
};

export default Experience;
