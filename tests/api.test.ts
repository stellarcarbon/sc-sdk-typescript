import { getSinkTxList } from "../src";


describe("SDK smoke", () => {
  it("can fetch transaction list", async () => {
    
    const {data} = await getSinkTxList();
    

    expect(typeof data).toBe("object");
    
    const expectedKeys = ["retirement_grace_days", "total_carbon_sunk", "total_carbon_retired", "total_carbon_pending", "transactions"];
    expectedKeys.forEach((k) => {
      expect(data).toHaveProperty(k);
    });
  });
});
