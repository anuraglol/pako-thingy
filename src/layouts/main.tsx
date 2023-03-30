import { NavBar } from "@/components/nav";
import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const MainLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Box
      minH="100vh"
      w="full"
      bg="#111"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="6"
    >
      <NavBar />
      {children}
    </Box>
  );
};

export { MainLayout };
