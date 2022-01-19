import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0x5C36c5F58D5E73B39A6a14b97b66225050BC00D7",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionsFactory()

        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1
        })

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log(`✅ Successfully set claim condition on bundle drop: ${bundleDrop.address}`)
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()
