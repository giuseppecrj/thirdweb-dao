import { ethers } from "ethers";
import {sdk} from "./1-initialize-sdk.js";
import {readFileSync} from 'fs';

const app = sdk.getAppModule("0x8E34678DeeEE1fFC7047B2DB62386851B5AbE570");


(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "Dreamwave Dao Membership",
            description: "A DAO for Dreamwave users",
            image: readFileSync("scripts/assets/logo.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero
        })

        console.log(`✅ Successfully deployed bundleDrop module, address: ${bundleDropModule.address}`)

        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);

    }
})()
