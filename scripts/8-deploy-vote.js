import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x8E34678DeeEE1fFC7047B2DB62386851B5AbE570");

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "DreamwaveDAO's Epic Proposals",
            votingTokenAddress:"0x53C64E3E723D965aD0f5d79bA2193468c78a856a",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0"
        })
        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (error) {
        console.error("Failed to deploy vote module", error);
    }
})()

