import {Box, Flex, Text} from "@chakra-ui/react";
import marked from "marked";

export default function UserInfo({userInfo}) {

    return (
        <>
            <Flex flexDirection={{base: 'column', md: 'row'}} alignItems='center' h={{base: '100vh'}}
                  justifyContent={{md: 'center'}} py={{base: '8rem'}} bgColor='gray.50' fontFamily="Raleway">
                <Box p='1rem' maxW='800px'>
                    {userInfo ?
                        <>
                            <Text fontSize={{base: '3rem', md: '4rem'}} fontWeight='600'>
                                Hello, I'm <span style={{color: '#e31b6d'}}>
                                    {userInfo.username}.
                                </span>
                            </Text>
                            <Text fontSize={{base: '1rem', md: '2rem'}} mb='1rem'>
                                A {userInfo.jobtitle}.
                            </Text>
                            {userInfo.description && <Box textAlign='justify'
                                                          dangerouslySetInnerHTML={{__html: marked(userInfo.description)}}/>}
                        </>
                        :
                        <Text fontSize='2rem' color='#e31b6d' fontWeight='600'>Please fill the user-info column.</Text>}
                </Box>
            </Flex>
        </>
    )
}
