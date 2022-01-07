import {
    Box,
    Heading,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
} from "@chakra-ui/react";
import themeExtension from "../../styles/theme";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ImBriefcase } from "react-icons/im";
import styles from "./Experience.module.scss";
import experiences from "./Experiences.json";

const brand = themeExtension.colors.brand;
console.log(brand);

const TimeLineElement = (props: any) => {
    const { title, location, date, description } = props;
    return (
        <VerticalTimelineElement
            // className="vertical-timeline-element--work"
            className={styles.experience}
            contentStyle={{
                background: "#433A92",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "5px",
                boxShadow: "None",
                fontColor: "white",
            }}
            contentArrowStyle={{
                borderRight: "14px solid rgba(255,255,255,0.8)",
                borderRightColor: brand.white,
            }}
            date={date}
            iconStyle={{
                background: "#433A92",
                color: brand.lightBlue,
                boxShadow: "unset",
                border: "2px solid",
                borderColor: brand.lightBlue,
            }}
            icon={<Icon as={ImBriefcase} />}
        >
            <Text
                fontSize={17}
                letterSpacing={2}
                textTransform={"uppercase"}
                color="brand.lightBlue"
            >
                {title}
            </Text>
            <Heading
                fontFamily={"PT Sans Caption"}
                color={"red"}
                fontWeight={"thin"}
                fontSize={14}
            >
                {location}
            </Heading>
            <Accordion marginTop={3} allowMultiple>
                <AccordionItem>
                    <Text color={"brand.white"}>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Read More
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Text>
                    <AccordionPanel pb={3}>{description}</AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VerticalTimelineElement>
    );
};

const Exp2 = () => {
    const timelineElements = experiences.map((experience, idx) => {
        return <TimeLineElement key={idx} {...experience} />;
    });

    return (
        <Box width="100%" height="100%" background="brand.darkBlue">
            <div style={{ width: "100%", height: "100%" }}>
                <VerticalTimeline
                    lineColor={brand.lightBlue}
                    layout="2-columns"
                >
                    {timelineElements}
                </VerticalTimeline>
            </div>
        </Box>
    );
};

export default Exp2;
