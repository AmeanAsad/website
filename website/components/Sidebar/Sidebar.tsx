import React, { ReactNode } from "react";
import {
    Box,
    CloseButton,
    Flex,
    Button,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Heading,
} from "@chakra-ui/react";

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
    { name: "Blog", icon: null },
];

interface NavItemProps extends FlexProps {
    children: ReactNode;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
    return (
        <Flex
            align="center"
            justifyContent="center"
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
            h={{ base: "100vh", md: "100%" }}
            {...rest}
        >
            <Flex direction="column" height="full">
                <Flex h="20" alignItems="center" mx="5">
                    <CloseButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onClose}
                    />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name}>
                        <Heading size="md">{link.name} </Heading>
                    </NavItem>
                ))}
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

const SideBar = () => {
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
};

export default SideBar;
