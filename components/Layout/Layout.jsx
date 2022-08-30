import { Flex, Box, Spacer, Heading, Text } from "@chakra-ui/react";

export default function Layout() {
  return (
    <Flex
      backgroundColor="blackAlpha.900"
      minWidth="full"
      alignItems="center"
      gap="2"
      h={12}
      borderBottomRadius={40}
    >
      <Box p="2">
        <Heading paddingLeft={12} mb={4}>
          <Text as="em" color="white" fontSize="md">
            Asteroids App
          </Text>
        </Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Heading paddingRight={12} mb={4}>
          <Text as="em" color="white" fontSize="sm">
            by Jesús Matute
          </Text>
        </Heading>
      </Box>
    </Flex>
  );
}
