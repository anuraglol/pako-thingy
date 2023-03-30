import { Textarea } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const InputArea: FC<Props> = ({ value, setValue }) => {
  return (
    <Textarea
      w="xl"
      bg="rgba(39, 40, 42, 0.8)"
      border="none"
      outline="none"
      placeholder="Value goes here"
      color="white"
      _placeholder={{ color: "gray.500", fontWeight: "medium" }}
      _focus={{ bg: "rgba(39, 40, 42, 0.9)", border: "none", outline: "none" }}
      fontWeight="medium"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default InputArea;
