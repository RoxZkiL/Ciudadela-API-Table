import { Stack, Box, Button } from "@chakra-ui/react";

export default function TablePaginated({
  asteroidsPerPage,
  allAsteroids,
  paginated,
  currentPage,
}) {
  let pageNumber = [];

  for (let i = 0; i < Math.ceil(allAsteroids / asteroidsPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <Stack direction="column">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        mb={3}
        mt={4}
      >
        {currentPage > 1 && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="black"
            marginRight={10}
            onClick={() => paginated(currentPage - 1)}
          >
            Prev
          </Button>
        )}
        <Button
          size="sm"
          variant="outline"
          colorScheme="black"
          marginRight={10}
          onClick={() => paginated(currentPage)}
        >
          {currentPage}
        </Button>
        {currentPage < allAsteroids / asteroidsPerPage && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="black"
            onClick={() => paginated(currentPage + 1)}
          >
            Next
          </Button>
        )}
      </Box>
    </Stack>
  );
}
