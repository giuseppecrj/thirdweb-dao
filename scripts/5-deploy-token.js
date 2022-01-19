import sdk from "./1-initialize-sdk.js"

const app = sdk.getAppModule("0x8E34678DeeEE1fFC7047B2DB62386851B5AbE570");


(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "Dreamwave DAO Governance Token",
            symbol: "DREAM",
        })

        console.log(`Successfully deployed token module, address: ${tokenModule.address}`);
    } catch (error) {
        console.error(`Failed to deploy token module ${error}`);
    }
})()
