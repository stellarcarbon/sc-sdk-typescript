# Stellarcarbon API Typescript SDK

The Stellarcarbon Typescript SDK can be used to easily use the Stellarcarbon API in your typescript project.

Check out the Stellarcarbon API specification docs here: https://api.stellarcarbon.io/docs

By default the Stellarcarbon API and its SDK will connect with the Stellar mainnet.

## Installation

`npm install @stellarcarbon/sc-sdk`

## Example usage

A function that fetches the transactions list made with a given wallet pubkey.

```ts
import { getSinkTxList, SinkTxListResponse } from "@stellarcarbon/sc-sdk";

const fetchTxListForFunder = async (
  pubKey: string
): Promise<SinkTxListResponse | undefined> => {
  const { data } = await getSinkTxList({
    query: {
      for_funder: pubKey,
    },
  });
  return data;
};
```

CARBON quote

Get a quote of the current CARBON price in USD.

```ts
import { getCarbonQuote, CarbonQuoteResponse } from "@stellarcarbon/sc-sdk";

const fetchQuote = async (): Promise<CarbonQuoteResponse | undefined> => {
  const { data } = await getCarbonQuote();
  return data;
};
```

## Testnet

We also have an API that is connected to the Stellar testnet: https://testnet-api.stellarcarbon.io. This is our development environment so it may be unstable. Connecting to the testnet API is currently not supported in this SDK. However, you could just swap the base URL and hope the schema has not changed too much:

```ts
import { client } from "@stellarcarbon/sc-sdk";

client.setConfig({
  baseUrl: "https://testnet-api.stellarcarbon.io",
});

fetchQuote(); // Fetches the quote on testnet
```

API schema & docs for the testnet API are available at https://testnet-api.stellarcarbon.io/docs
