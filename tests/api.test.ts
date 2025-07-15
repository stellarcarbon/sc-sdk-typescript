import { getSinkTxList } from "../src";

describe("Sanity check", () => {
  it("Can fetch transaction list", async () => {
    const { data } = await getSinkTxList({
      query: {
        for_funder: "GAVF6ZB7Z7FKCWM5HEY2OV4ENPK3OSSHMFTVR4HHSBFHKW36U3FUH2CB",
      },
    });

    expect(typeof data).toBe("object");

    const expectedKeys = [
      "retirement_grace_days",
      "total_carbon_sunk",
      "total_carbon_retired",
      "total_carbon_pending",
      "transactions",
    ];
    expectedKeys.forEach((k) => {
      expect(data).toHaveProperty(k);
    });
  });
});
