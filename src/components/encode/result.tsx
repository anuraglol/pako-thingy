import { Input } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  value: string;
}

const Result: FC<Props> = ({ value }) => {
  return (
    <Input
      w="xl"
      bg="rgba(39, 40, 42, 0.8)"
      border="none"
      outline="none"
      placeholder="Result will appear here"
      color="white"
      _placeholder={{ color: "gray.500", fontWeight: "medium" }}
      _focus={{ bg: "rgba(39, 40, 42, 0.9)", border: "none", outline: "none" }}
      fontWeight="medium"
      value={value}
      readOnly
    />
  );
};
export default Result;
