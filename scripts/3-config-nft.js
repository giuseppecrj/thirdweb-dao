import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x5C36c5F58D5E73B39A6a14b97b66225050BC00D7",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Dreamwave Pass",
                description: "This NFT will give you access to Dreamwave DAO!",
                image: readFileSync('scripts/assets/ticket.png')
            }
        ])
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()

