import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <Flex
      pos="fixed"
      top="0"
      mx="auto"
      color="white"
      py="4"
      gap="6"
      alignItems="center"
    >
      <Text
        cursor="pointer"
        onClick={() => router.push("/")}
        color={router.pathname === "/" ? "blue.500" : "white"}
      >
        Encode
      </Text>
      <Text
        cursor="pointer"
        onClick={() => router.push("/decode")}
        color={router.pathname === "/decode" ? "blue.500" : "white"}
      >
        Decode
      </Text>
    </Flex>
  );
};

export { NavBar };
