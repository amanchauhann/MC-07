import { Link, useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const Countries = () => {
    const { continents } = useParams()
    const { all_continents, continents_dispatch } = useData()

    const country = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === continents)

    console.log("couna", all_continents)
    return (
        <Flex gap={10} justify={"space-around"} flexWrap={"wrap"}>
            {country[0].countries.map(each_country => <Box maxW={"500px"} position={"relative"}>
                <Link to={`/country/${each_country.name.toLowerCase()}`}>
                    <Image onClick={() => continents_dispatch({ type: "SELECT_CONTINENT", payload: continents })
                    } boxSize={"100%"} src={each_country.image} />
                    <Text textAlign={"center"} color={"white"} bottom={0} left={0} right={0} bg={"rgba(23, 23, 23, 0.6)"} fontSize={"2xl"} position={"absolute"} zIndex={1} fontWeight={700}>{each_country.name}</Text>
                </Link>
            </Box>
            )
            }
        </Flex>
    )
}

export default Countries