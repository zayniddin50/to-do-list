import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import Todo from "./Todo";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      case "delete":
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSumid = () => {
    dispatch({ type: "add", payload: { name: name } });
    setName("");
  };

  return (
    <div>
      <Flex justify={'center'} flexDirection={'column'}>
        <Box display={'flex'} gap={'10px'}>
          <Input
            w={300}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleSumid}>Sumbit</Button>
        </Box>
        {todos.map((value) => {
          <br />;
          return <Todo value={value} dispatch={dispatch} />;
        })}
      </Flex>
    </div>
  );
}

export default App;
