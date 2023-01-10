// TODO: answer here
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Box, Image, Center, Text, SimpleGrid, Container, Button, Flex, Heading, Wrap, WrapItem, Stack} from "@chakra-ui/react"

function Detail() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      try {
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;
        const response = await fetch(url);
        const data = await response.json();  
        setDetail(data.data); 
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    loadDetail();
  }, [id]);
  return (
    <>
      <Link to='/'>
        <Button m={4}>Back</Button>
      </Link>
      {
        loading ? 'Loading...' :
        <>
        {
        detail.map(val => (
          <Container maxW={1150}>
            <SimpleGrid row={2} p='6'>
              <Flex>
                <Image src={val?.card_images[0].image_url} width='200px'/>
                <Box pl={5}>
                  <Heading as='h2'>{val?.name}</Heading>
                  <Text as={'b'}>Level: {val?.level}</Text>
                  <br></br>
                  <Text as={'b'}>{val?.attribute}</Text>
                  <br></br>
                  <Text>ATK/{val?.atk} DEF/{val?.def}</Text>
                  <Text>[ {val?.type} / {val?.race} ]</Text>
                  <Text>Description: {val?.desc}</Text>
                </Box>
              </Flex>
              <Text as='b' pt={3} textAlign='center'>Card Set</Text>
              <Wrap spacing={3} justify='center' pt={5}>
                {
                  val?.card_sets.map((val, index) => (
                    <WrapItem>
                      <Box key={index} w='180px' h={180} p={3} shadow='md' borderWidth='1px'>
                        <Text>Name: {val?.set_name}</Text>
                        <Text>Code: {val?.set_code}</Text>
                        <Text>Rarity: {val?.set_rarity}</Text>
                        <Text>Price: {val?.set_price}</Text>
                      </Box>
                    </WrapItem>
                  ))
                }
              </Wrap>
            </SimpleGrid>
          </Container>
        ))
      }
        </>
      }
      
    </>
  ) // TODO: replace this
}

export default Detail;
