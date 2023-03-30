import InputArea from "@/components/decode/input";
import Result from "@/components/decode/result";
import { MainLayout } from "@/layouts/main";
import { Base64ToPayload } from "@/utils/conversions";
import { Button } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import { useState } from "react";
import { toast } from "react-hot-toast";

const DecodePage: NextPage = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      if (value === "") {
        toast.error("Please enter a value");
        return;
      }
      const data = Base64ToPayload(value);
      setResult(data);
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
    </MainLayout>
  );
};

export default DecodePage;
