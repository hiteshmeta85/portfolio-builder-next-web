import {Box, Flex, Text} from "@chakra-ui/react";

export default function Contact({contactDetails}) {
    return (
        <>
            {contactDetails &&
            <Box bgColor='gray.50'>
                <Box p='1rem' maxW='800px' mx='auto'
                     py={{base: '3rem', md: '5rem'}}>
                    <Text color='#e31b6d' fontSize={{base: '2rem', md: '3rem'}} fontWeight='600' fontFamily="Raleway">Connect
                        with
                        me.</Text>
                    {/*ml = '2rem'*/}
                    {contactDetails.email && <Flex alignItems='center'><Text>{contactDetails.email}</Text></Flex>}
                    {contactDetails.phone && <Flex alignItems='center'><Text>{contactDetails.phone}</Text></Flex>}
                    <Flex color='blue.500' flexWrap='wrap'>
                        {contactDetails.twitter &&
                        <Text mr='1rem'><a href={contactDetails.twitter}>Twitter</a></Text>}
                        {contactDetails.linkedIn &&
                        <Text mr='1rem'><a href={contactDetails.linkedIn}>LinkedIn</a></Text>}
                        {contactDetails.github &&
                        <Text mr='1rem'><a href={contactDetails.github}>Github</a></Text>}
                        {contactDetails.instagram &&
                        <Text mr='1rem'><a href={contactDetails.instagram}>Instagram</a></Text>}
                        {contactDetails.facebook &&
                        <Text mr='1rem'><a href={contactDetails.facebook}>
                            {/*<FaFacebook size='2rem'/>*/}
                            Facebook
                        </a></Text>}
                    </Flex>
                </Box>
            </Box>
            }
        </>
    )
}

// <FaTwitter size='2rem'/>
// <FaLinkedin size='2rem'/>
// <FaGithub size='2rem'/>
// <FaInstagram size='2rem'/>
//<SiGmail size='2rem'/>
//<MdLocalPhone size='2rem'/>