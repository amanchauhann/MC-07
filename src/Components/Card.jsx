import { Box, Text } from "@chakra-ui/react"

const Card = ({ image, name }) => {
    return (
        <>
            <Box maxW={"500px"} position={"relative"}>
                <ImageBitmap boxSize={"100%"} src={image} />
                <Text textAlign={"center"} color={"white"} bottom={0} left={0} right={0} bg={"rgba(23, 23, 23, 0.6)"} fontSize={"2xl"} position={"absolute"} zIndex={1} fontWeight={700}>{name}</Text>
            </Box>
        </>
    )
}

export default Card