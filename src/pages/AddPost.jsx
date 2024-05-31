import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Image, useToast } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const toast = useToast();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Post created.",
      description: "Your new blog post has been created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset form
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <Image src={image} alt="Selected Image" boxSize="sm" />}
        <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;