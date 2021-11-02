import { SimpleGrid,Box,Flex,Container } from "@chakra-ui/react"

const Month = ({monthValue,bgColor})=>{
    return(
        <Box h="40" w="40" bg={bgColor}>
            {monthValue}

        </Box>
    )
}

const YearQuarters = ({children})=>(
    <Flex direction="column">
        {children}
    </Flex>
)

export const YearView = ()=>{
    return(
        <Flex direction="row" m="10">

<YearQuarters>
    <Month monthValue="1" bgColor="blue.100"/>
    <Month monthValue="2"bgColor="blue.300"/>
    <Month monthValue="3"bgColor="blue.500"/>
</YearQuarters>
<YearQuarters>
    <Month monthValue="1" bgColor="green.100"/>
    <Month monthValue="2"bgColor="green.300"/>
    <Month monthValue="3"bgColor="green.500"/>
</YearQuarters>

<YearQuarters>
    <Month monthValue="1" bgColor="orange.100"/>
    <Month monthValue="2"bgColor="orange.300"/>
    <Month monthValue="3"bgColor="orange.500"/>
</YearQuarters>
<YearQuarters>
    <Month monthValue="1" bgColor="yellow.100"/>
    <Month monthValue="2"bgColor="yellow.300"/>
    <Month monthValue="3"bgColor="yellow.500"/>
</YearQuarters>

        </Flex >

    )
}