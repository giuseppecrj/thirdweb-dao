import { ethers } from "ethers";
import {sdk} from './1-initialize-sdk.js'

const tokenModule = sdk.getTokenModule(
    "0x53C64E3E723D965aD0f5d79bA2193468c78a856a",
);

(async () => {
    try {
        const amount = 1_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        // Print out how many of our token's are out there now!
        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$DREAM in circulation",
        );
    } catch (error) {
        console.error("Failed to print money", error);

    }
})()
