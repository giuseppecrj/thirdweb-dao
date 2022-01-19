import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js"

const voteModule = sdk.getVoteModule("0x37E83d815d7b0C347F6Ed988D3B6BC439eCFf79c",)

const tokenModule = sdk.getTokenModule("0x53C64E3E723D965aD0f5d79bA2193468c78a856a",);

(async () => {
    try {
        // Give our treasury the power to mint additional token if needed.
        await tokenModule.grantRole("minter", voteModule.address);

        console.log(
            "Successfully gave vote module permissions to act on token module"
        );
    } catch (error) {
        console.error(
            "failed to grant vote module permissions on token module",
            error
        );
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS)

        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value)
        const percent90 = ownedAmount.div(100).mul(90)

        await tokenModule.transfer(
            voteModule.address,
            percent90
        )

        console.log("✅ Successfully transferred tokens to vote module");
    } catch (error) {
        console.error("failed to transfer tokens to vote module", error);

    }
})()
