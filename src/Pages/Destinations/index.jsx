import { Link, useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const Destinations = () => {
    const { countries } = useParams()
    const { all_continents, continents_dispatch } = useData()
    const destinations = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === all_continents.selected_continent)[0].countries.filter(each => each.name.toLowerCase() === countries)[0].destinations

    // const country = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === continents)

    console.log("aa", destinations)
    return (
        <Flex gap={10} justify={"space-around"} flexWrap={"wrap"}>
            {destinations.map(each_destination => <Box maxW={"500px"} position={"relative"}>
                <Link to={`/destination/${each_destination.name.toLowerCase()}`}>
                    <Image onClick={() => continents_dispatch({ type: "SELECT_COUNTRY", payload: countries })
                    } boxSize={"100%"} src={each_destination.image} />
                    <Text textAlign={"center"} color={"white"} bottom={0} left={0} right={0} bg={"rgba(23, 23, 23, 0.6)"} fontSize={"2xl"} position={"absolute"} zIndex={1} fontWeight={700}>{each_destination.name}</Text>
                </Link>
            </Box>
            )
            }
        </Flex>
    )
}

export default Destinations