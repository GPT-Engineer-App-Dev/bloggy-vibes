import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm excited to share my thoughts, experiences, and stories with you. Stay tuned for updates!
        </Text>
        <Link as={RouterLink} to="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link as={RouterLink} to="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
      </VStack>
    </Container>
  );
};

export default Index;