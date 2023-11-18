import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Todo = ({ value, dispatch }) => {
  return (
    <Box gap={'10px'} display={"flex"} flexDirection={"column"} >
      <Text>{value.name}</Text>
      <Button
        w={'150px'}
        onClick={() => dispatch({ type: "delete", payload: { id: value.id } })}
      >
        Delete
      </Button>
    </Box>
  );
};

export default Todo;
