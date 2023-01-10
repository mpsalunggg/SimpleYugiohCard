// TODO: answer here
import React from "react";
import {Box, Image, Center, Heading} from "@chakra-ui/react"
import {Link} from "react-router-dom"

function Card({ card }) {
  return (
    <Link to={`/card/${card?.id}`}>
      <Box p='6' rounded='md' bg='white' className="yugioh-card">
        <Image src={card?.card_images[0].image_url} width='200px'/>
        <Center>
          <Heading as='h2' fontSize='lg' textAlign='center'>{card?.name}</Heading>
        </Center>
      </Box>
      </Link>
  ) // TODO: replace this
}

export default Card;
