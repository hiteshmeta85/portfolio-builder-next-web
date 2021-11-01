import {Box, Flex, Text} from "@chakra-ui/react";
import marked from "marked";

export default function Education({formalEducation, onlineEducation}) {
    return (
        <>
            {(formalEducation || onlineEducation) &&
            <Box p='1rem' maxW='800px' mx='auto' fontFamily="Raleway"
                 py={{base: '2rem', md: '3rem', lg: '5rem'}}>
                <Text fontSize={{base: '3rem', md: '4rem'}} fontWeight='600' mb='1rem'>Education</Text>
                {formalEducation && <Box bgColor='red.50' p='1rem' mb='1rem' borderRadius='0.5rem'>
                    <Text fontSize={{base: '1rem', md: '2rem'}}>Formal Education</Text>
                    <Box textAlign='justify'
                         dangerouslySetInnerHTML={{__html: marked(formalEducation.description)}}/>
                </Box>}
                {onlineEducation &&
                <Box bgColor='red.50' p='1rem' borderRadius='0.5rem'>
                    <Text fontSize={{base: '1rem', md: '2rem'}}>Online Education & Courses</Text>
                    <Box textAlign='justify'
                         dangerouslySetInnerHTML={{__html: marked(onlineEducation.description)}}/>
                </Box>}
            </Box>
            }
        </>
    )
}
