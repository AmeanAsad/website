import React, { ReactNode } from "react";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    Button,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    VStack,
    Heading,
} from "@chakra-ui/react";

import { ReactText } from "react";

interface LinkItemProps {
    name: string;
    icon: any;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: null },
    { name: "About", icon: null },
    { name: "Projects", icon: null },
    { name: "Experience", icon: null },
    { name: "Contact", icon: null },
];

export default function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            className="Box"
            w="100%"
            minH="100vh"
            bg={useColorModeValue("brand.lightBlue", "gray.900")}
        >
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
                width="100%"
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
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>

            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            className="Test"
            bg={useColorModeValue("", "gray.900")}
            borderRight="10px"
            // borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 120 }}
            pos="fixed"
            h="100%"
            {...rest}
        >
            <Flex direction="column" height="full">
                <Flex
                    h="20"
                    alignItems="center"
                    mx="5"
                    // justifyContent="space-between"
                >
                    {/* <Text
                        fontSize="2xl"
                        fontFamily="monospace"
                        fontWeight="bold"
                    >
                        Logo
                    </Text> */}
                    <CloseButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onClose}
                    />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon}>
                        <Heading size={"md"}>{link.name} </Heading>
                    </NavItem>
                ))}
            </Flex>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: any;
    children: ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Flex
            align="center"
            justifyContent={"center"}
            w="100%"
            role="group"
            cursor="pointer"
            _hover={{
                bg: "brand.red",
                color: "brand.darkBlue",
            }}
            flex="1"
            {...rest}
        >
            {children}
        </Flex>
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
            <Button variant="outline" onClick={onOpen} aria-label="open menu" />

            <Text
                fontSize="2xl"
                ml="8"
                fontFamily="monospace"
                fontWeight="bold"
            >
                Logo
            </Text>
        </Flex>
    );
};
