# Stellarcarbon API Typescript SDK

The Stellarcarbon Typescript SDK can be used to easily use the Stellarcarbon API in your typescript project.

## Installation

```npm install @stellarcarbon/sc-sdk-typescript```



## Example usage

Fetch transactions list

```
import { getSinkTxList, SinkTxListResponse } from "@stellarcarbon/sc-sdk";

const fetchData = async (): Promise<SinkTxListResponse> => {
    const { data } = await getSinkTxList();
    return data;
}
```

CARBON quote

Get a quote of the current CARBON price in USD.

```
import { getCarbonQuote, CarbonQuoteResponse } from "@stellarcarbon/sc-sdk";

const fetchData = async (): Promise<CarbonQuoteResponse | undefined> => {
    const { data } = await getCarbonQuote();
    return data;
};
```