import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { date } from "zod";
import { StyledString } from "next/dist/build/swc";
import { useRouter } from "next/navigation";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () => {
      //const data = await createLinkToken();
      // setToken(data?.linkToken);
    };
    getLinkToken();
  }, []);
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      // await exchangePublicToken({
      //   publicToken: public_token,
      //   user,
      // });
      router.push("/");
    },
    [user]
  );
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };
  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {variant === "primary" ? (
        <Button
          className="plaidlink-primary"
          onClick={() => open}
          disabled={!ready}
        >
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
