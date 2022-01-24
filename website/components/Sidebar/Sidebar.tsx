import React, { ReactNode } from "react";
import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Heading,
    IconButton,
} from "@chakra-ui/react";

import { ImMenu } from "react-icons/im";
import { NextPage } from "next";
import Link from "next/link";
import svgCa from "../../public/test.svg";
import Image from "next/image";

interface LinkItemProps {
    name: string;
    icon: any;
    id: string;
    href: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: null, href: "/home", id: "home", },
    { name: "About", icon: null, href: "/about", id: "about", },
    { name: "Projects", icon: null, href: "/projects", id: "projects", },
    { name: "Experience", icon: null, href: "/experience", id: "experience", },
    { name: "Contact", icon: null, href: "/contact", id: "contact", },
    { name: "Blog", icon: null, href: "/blog", id: "blog", },
];

interface NavItemProps extends FlexProps {
    children: ReactNode;
    selected: boolean;
}

const NavItem = ({ children, selected, ...rest }: NavItemProps) => {
    const backgroundColor = selected ? "brand.red" : "none";
    const color = selected ? "brand.white" : "brand.darkBlue";
    return (
        <Flex
            align="center"
            justifyContent="center"
            w="100%"
            role="group"
            cursor="pointer"
            borderColor="brand.darkBlue"
            borderTop="1px"
            backgroundColor={backgroundColor}
            color={color}
            _hover={{
                bg: "brand.red",
                color: "brand.white",
            }}
            flex="1"
            {...rest}
        >
            {children}
        </Flex>
    );
};

interface SidebarProps extends BoxProps {
    onClose: () => void;
    pageId: string
}

const SidebarContent = ({ onClose, pageId, ...rest }: SidebarProps) => {
    return (
        <Box
            className="Test"
            bg={useColorModeValue("", "gray.900")}
            borderRight="10px"
            // borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 120 }}
            pos="fixed"
            h={{ base: "100vh", md: "100%" }}
            {...rest}
        >
            <Flex direction="column" height="full">
                <Flex h="20" alignItems="center" mx="5">
                    <CloseButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onClose}
                    />
                    <Box marginTop={2} margin="auto">
                        <Image src={svgCa} height="70px" width="70px" />
                    </Box>

                </Flex>
                {LinkItems.map((link) => {
                    const isSelected = link.id === pageId;
                    return (
                        <Link key={link.name} passHref href={link.href}>
                            <NavItem selected={isSelected}>
                                <Heading size="md">{link.name} </Heading>
                            </NavItem>
                        </Link>

                    );
                })}
            </Flex>
        </Box>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                colorScheme="gray"
                aria-label="Menu"
                size="lg"
                icon={<ImMenu />}
                onClick={onOpen}
            />
            <Heading
                fontSize="4xl"
                ml="8"
                color="brand.mediumBlue"
            >
                Menu
            </Heading>
        </Flex>
    );
};

interface SideBarProps {
    pageId: string
}

const SideBar: NextPage<SideBarProps> = ({ pageId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            className="Box"
            w="100%"
            h={{ base: 70, md: "100vh" }}
            bg="brand.white"
        >
            <SidebarContent
                onClose={() => onClose}
                pageId={pageId}
                display={{ base: "none", md: "block" }}
                width="100%"
                borderRight="1px"
                borderColor="brand.darkBlue"

            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent pageId={pageId} onClose={onClose} />
                </DrawerContent>
            </Drawer>

            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        </Box>
    );
};

export default SideBar;
