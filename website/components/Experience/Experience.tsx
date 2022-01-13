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
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ImBriefcase } from "react-icons/im";
import styles from "./Experience.module.scss";
import experiences from "./Experiences.json";
import { NextPage } from "next";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaUniversity, FaGraduationCap, FaScroll } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";

const brand = themeExtension.colors.brand;

const timelineIcons = {
    work: ImBriefcase,
    travel: GiCommercialAirplane,
    study: FaUniversity,
    code: BsCodeSlash,
    grad: FaGraduationCap,
    rocket: IoRocketSharp,
    scroll: FaScroll

};

const TimeLineElement: NextPage = (props: any) => {
    const { title, location, date, company, icon, description } = props;
    const iconElement = timelineIcons[icon as keyof typeof timelineIcons];
    return (
        <VerticalTimelineElement
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
            icon={<Icon as={iconElement} />}
        >
            <Text
                fontSize={17}
                letterSpacing={2}
                textTransform="uppercase"
                color="brand.lightBlue"
            >
                {title}
            </Text>
            <Text
                fontSize={14}
                letterSpacing={1}
                fontWeight={5}
                color="brand.lightBlue"
            >
                {company}
            </Text>
            <Heading
                fontFamily="PT Sans Caption"
                color="red"
                fontWeight="thin"
                fontSize={14}
            >
                {location}
            </Heading>
            <Accordion marginTop={3} allowMultiple>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <Text color="brand.white">
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {isExpanded ? "Read Less" : "Read More"}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Text>
                            <AccordionPanel pb={3}>
                                {description}
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const timelineElements = experiences.map((experience) => {
        return <TimeLineElement key={experience.title} {...experience} />;
    });

    return (
        <Box
            width="100%"
            height="100%"
            background="brand.darkBlue"
            className={styles.wrapper}
        >

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

export default Experience;
