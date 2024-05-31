import { Container, Text, VStack, Heading, Box, Image, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post.", image: "/images/blog-banner.jpg" },
    { id: 2, title: "Second Post", content: "This is the second post.", image: "/images/blog-banner.jpg" },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        {posts.map(post => (
          <Box key={post.id} boxSize="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
            <Image src={post.image} alt={post.title} />
            <Heading as="h2" size="md" mt={4}>{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Button colorScheme="red" mt={4} onClick={() => handleDelete(post.id)}>Delete</Button>
          </Box>
        ))}
        <Link as={RouterLink} to="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link as={RouterLink} to="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
      </VStack>
    </Container>
  );
};

export default Index;