import { Link, useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const Destinations = () => {
    const { countries } = useParams()
    const { all_continents, selected_continent } = useData()
    const destinations = all_continents.continents

    // const country = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === continents)

    console.log("aa", selected_continent)
    return (
        <>Aman</>
    )
}

export default Destinations