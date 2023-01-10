// TODO: answer here
import React, { useEffect, useState } from "react";
import { Container, Center, Select, SimpleGrid } from "@chakra-ui/react";
import Card from "./Cards";

function Home() {
  // TODO: answer here
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      })
      .catch(() => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function sortData(type) {
    if (type.target.value === "name") {
      const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
    } else if (type.target.value === "attack") {
      const sortedData = [...data].sort((a, b) => a.atk - b.atk);
      setData(sortedData);
    } else if (type.target.value == "defence") {
      const sortedData = [...data].sort((a, b) => a.def - b.def);
      setData(sortedData);
    }
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Center pt={7}>
            <Select
              maxWidth="40rem"
              placeholder="Sort By"
              name="sort"
              onChange={sortData}
            >
              <option value="name">Name</option>
              <option value="attack">Attack</option>
              <option value="defence">Defence</option>
            </Select>
          </Center>

          <Container maxW="70rem" centerContent pt={7}>
            <SimpleGrid columns={4} spacing={10}>
              {data.map((val, index) => (
                <Card key={index} card={val} />
              ))}
            </SimpleGrid>
          </Container>
        </>
      )}
    </>
  ); // TODO: replace this
}

export default Home;
