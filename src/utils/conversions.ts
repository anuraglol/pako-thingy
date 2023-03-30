import { deflate, inflate } from "pako";

const PayloadToBase64 = (payload: string) => {
  const compressed = deflate(payload);
  const base64 = Buffer.from(compressed).toString("base64");
  return encodeURIComponent(base64);
};

const Base64ToPayload = (base64: string): string => {
  const compressed = Buffer.from(decodeURIComponent(base64), "base64");
  const payload = inflate(compressed, { to: "string" });
  return payload;
};

export { PayloadToBase64, Base64ToPayload };
