import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useToast
} from "@chakra-ui/react";
import {
    MdEmail,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const info = {
    email: "amean.asad@queensu.ca",
    text: "You can contact me through my email or you can fill this form and I will receive your message directly!"
};

const Contact = () => {
    const toast = useToast();

    const copyEvent = () => {
        navigator.clipboard.writeText(info.email);
        toast({
            title: "Email Copied!",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };
    return (
        <Container padding={0} bg="brand.mediumBlue" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex justifyContent="center">
                <Box
                    bg="brand.darkBlue"
                    color="white"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ base: 3, md: 5, lg: 16 }}
                >
                    <Heading>Contact</Heading>

                    <Text color="gray.100">
                        {info.text}
                    </Text>

                    <Box p={5}>
                        <HStack
                            mt={{ lg: 2, md: 2 }}
                            spacing={5}
                            px={5}
                            alignItems="flex-start"
                        >
                            <IconButton
                                aria-label="facebook"
                                variant="ghost"
                                size="lg"
                                isRound
                                _hover={{ bg: "brand.red" }}
                                icon={<MdFacebook size="28px" />}
                            />
                            <IconButton
                                aria-label="github"
                                variant="ghost"
                                size="lg"
                                isRound
                                _hover={{ bg: "brand.red" }}
                                icon={<BsGithub size="28px" />}
                            />
                            <IconButton
                                aria-label="discord"
                                variant="ghost"
                                size="lg"
                                isRound
                                _hover={{ bg: "brand.red" }}
                                icon={<BsDiscord size="28px" />}
                            />
                        </HStack>
                        <Button
                            size="md"
                            variant="ghost"
                            _hover={{ bg: "brand.darkBlue" }}
                            leftIcon={<MdEmail color="brand.red" size="20px" />}
                            onClick={copyEvent}
                            m={3}
                        >
                            {info.email}
                        </Button>
                        <Box bg="brand.mediumBlue" borderRadius="sm" p={3}>
                            <Box m={8} color="brand.white">
                                <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
                                    <input type="text" name="name" />
                                    <input type="email" name="email" />
                                    <textarea name="message" />
                                </form>
                                <VStack spacing={5}>
                                    <form name="contact" method="POST" action="/" data-netlify="true">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <FormControl isRequired id="name">
                                            <FormLabel>Your Name</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                >
                                                    <BsPerson color="brand.red" />
                                                </InputLeftElement>

                                                <Input maxWidth="300px" rounded="sm" name="name" type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="email">
                                            <FormLabel> Your Email </FormLabel>
                                            <InputGroup maxWidth="300px" border="sm" borderColor="#E0E1E7">
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                >
                                                    <MdOutlineEmail color="brand.red" />
                                                </InputLeftElement>
                                                <Input name="email" rounded="sm" type="email" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired id="message">
                                            <FormLabel>Message</FormLabel>
                                            <Textarea
                                                rounded="sm"
                                                name="message"
                                                type="text"
                                                borderColor="gray.300"
                                                _hover={{
                                                    borderRadius: "gray.300",
                                                }}
                                                placeholder="Insert Message"
                                            />
                                        </FormControl>
                                        <FormControl id="submit" float="right">
                                            <Button
                                                variant="solid"
                                                rounded="sm"
                                                type="submit"
                                                bg="brand.red"
                                                color="brand.white"
                                                _hover={{}}
                                            >
                                                <Text
                                                    fontSize={17}
                                                    fontWeight={1}
                                                >
                                                Send Message
                                                </Text>
                                            </Button>
                                        </FormControl>
                                    </form>
                                </VStack>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Flex>
        </Container>
    );
};

export default Contact;
