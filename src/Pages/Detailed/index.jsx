import { Link, useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const Detailed = () => {
    const { detailed } = useParams()
    const { all_continents } = useData()
    // const destinations = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === all_continents.selected_continent)[0].countries.filter(each => each.name.toLowerCase() === countries)[0].destinations

    // const country = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === continents)
    const details = all_continents.continents.filter(each_continent => each_continent.name.toLowerCase() === all_continents.selected_continent)[0].countries.filter(each => each.name.toLowerCase() === all_continents.selected_country)[0].destinations.filter(each_destination => each_destination.name.toLowerCase() === detailed.toLowerCase())[0]
    console.log("detailed", details)
    return (
        <Flex m={"auto"} maxW={"50rem"} border={"1px solid grey"}>
            <Image src={details.image} boxSize={"400px"} />
            <Flex p={2} direction={"column"} justify={"space-between"}>
                <Text> Description: {details.description}</Text>
                <Text> Ratings: {details.ratings}</Text>
                <Text> Reviews: {details.reviews}</Text>
                <Text> Location: {details.location}</Text>
                <Text> Opening Hours: {details.openingHours}</Text>
                <Text> Ticket Price: {details.ticketPrice}</Text>
                <a href={details.website}>Website</a>

            </Flex>
        </Flex>
    )
}

export default Detailed