import InputArea from "@/components/decode/input";
import Result from "@/components/decode/result";
import { MainLayout } from "@/layouts/main";
import { Base64ToPayload } from "@/utils/conversions";
import { Button, Flex, useClipboard } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";

const DecodePage: NextPage = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const { onCopy, hasCopied, setValue: setCopyableVal } = useClipboard(result);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      if (value === "") {
        toast.error("Please enter a value");
        return;
      }
      const data = Base64ToPayload(value);
      setResult(data);
      setCopyableVal(data);
    },
    onSuccess: () => {},
  });

  return (
    <MainLayout>
      <InputArea
        {...{
          value,
          setValue,
        }}
      />

      <Button
        px="6"
        rounded="full"
        colorScheme="blue"
        fontWeight="medium"
        onClick={() => mutate()}
        isLoading={isLoading}
      >
        Convert
      </Button>

      <Result value={result} />

      <Flex justifyContent="center" mt="4" color="white">
        {hasCopied ? (
          <BsCheck2 size={24} color="green.500" />
        ) : (
          <FiCopy onClick={onCopy} size={24} cursor="pointer" />
        )}
      </Flex>
    </MainLayout>
  );
};

export default DecodePage;
