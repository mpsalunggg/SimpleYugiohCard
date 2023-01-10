// TODO: answer here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box, Center, Heading,Text} from "@chakra-ui/react"
import Home from "./Home";
import Detail from "./Detail"
import Cards from "./Cards"


const App = () => {
  const MyRouter = () => (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/card/:id" element={<Detail/>} />
      <Route path="*" element={<Text>404 Page not found!</Text>}/>
    </Routes>
    ); // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="auto" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
