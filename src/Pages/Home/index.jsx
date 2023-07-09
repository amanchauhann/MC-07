import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { useData } from "../../Contexts/DataContext"
import { Link } from "react-router-dom"

const Home = () => {
    const { all_continents } = useData()
    console.log(all_continents)
    return (
        <Flex gap={10} justify={"space-around"} flexWrap={"wrap"}>
            {all_continents.continents.map(each_continent => <Box maxW={"500px"} position={"relative"}>
                <Link to={`/${each_continent.name.toLowerCase()}`}>
                    <Image boxSize={"100%"} src={each_continent.image} />
                    <Text textAlign={"center"} color={"white"} bottom={0} left={0} right={0} bg={"rgba(23, 23, 23, 0.6)"} fontSize={"2xl"} position={"absolute"} zIndex={1} fontWeight={700}>{each_continent.name}</Text>
                </Link>

            </Box>
            )}
        </Flex>
    )
}

export default Home