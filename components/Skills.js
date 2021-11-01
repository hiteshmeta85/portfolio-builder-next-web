import {Box, Flex, Text} from "@chakra-ui/react";

export default function Skills({skills}) {
    return (
        <>
            {(skills && skills.length>0) &&
            <Box p='1rem' maxW='800px' mx='auto' fontFamily="Raleway" py={{base: '3rem', md: '8rem', lg: '10rem'}}>
                <Text fontSize={{base: '3rem', md: '4rem'}} fontWeight='600'>Skills</Text>
                <Flex flexWrap='wrap' px='auto' justifyContent={{base: 'space-between', md: 'flex-start'}}>
                    {skills.map((item) =>
                        <Box w={{base: '48%', md: 'auto'}} my={{base: '0.25rem', md: '0.4rem'}} key={item.id}>
                            <Text bgColor='red.100' mr={{md:'0.5rem'}} borderRadius={{base:'0.25rem',md:'2rem'}} p='0.75rem' py='0.25rem'
                                  textAlign='center'>
                                {item.title}
                            </Text>
                        </Box>
                    )}
                </Flex>
            </Box>
            }
        </>
    )
}

/* props: {
    error: error.response.status
}*/
