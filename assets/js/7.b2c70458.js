(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(e,t,o){"use strict";o.r(t);var r=o(43),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"learn-how-anyone-can-help-determine-and-contribute-to-the-future-of-the-secret-network-with-governance-proposals-"}},[e._v("Learn how anyone can help determine and contribute to the future of the Secret Network with governance proposals!")]),o("p",[e._v("Hello, Secret Agents! Today, we’re focusing on a key aspect of the Secret Network: "),o("strong",[o("strong",[e._v("governance.")])])]),o("p",[e._v("As you may already know, "),o("a",{attrs:{href:"https://blog.enigma.co/the-enigma-mainnet-has-launched-3bd0d40fe80d",rel:"noopener"}},[e._v("our community of validators launched a blockchain")]),e._v(" built with the "),o("a",{attrs:{href:"https://cosmos.network/sdk"}},[e._v("Cosmos SDK")]),e._v(" and "),o("a",{attrs:{href:"https://tendermint.com"}},[e._v("Tendermint")]),e._v(", a proof-of-stake consensus engine. This approach better equips the Secret Network to support privacy solutions for a multi-chain ecosystem, including Cosmos and Ethereum. One of the most important changes made in this launch is adding elements of on-chain governance to the protocol. Now members of the community can delegate voting power and influence protocol development, which is fully open source. Collectively, our common goal is to facilitate coordination through effective and efficient management of shared resources, such as the Secret community pool.")]),o("p",[e._v("At this point, nearly 30 validators are running secret nodes to help secure the network by staking Secret (SCRT), the native coin of Secret Network. With the addition of delegation and governance, there are now direct ways for members of the Secret Network community to participate in the future of the protocol, marking a fundamental change to how the project is organized. Moving forward, the Enigma development team (and any other contributors) must make changes to the protocol using proposals, which are voted on and approved by network validators and delegators.")]),o("p",[e._v("Below is a summary of the governance processes of the Secret Network. Before getting into the details, we need to define the following terms.")]),o("h2",{attrs:{id:"terminology"}},[e._v("Terminology")]),o("p",[o("em",[e._v("via "),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/gov",rel:"noopener"}},[e._v("Cosmos SDK Documentation")])])]),o("p",[o("strong",[o("strong",[e._v("Proposal Submission:")])]),e._v(" Users can submit proposals to the Secret Network with a deposit. Once the minimum deposit is reached, the proposal enters voting period.")]),o("p",[o("strong",[o("strong",[e._v("Vote:")])]),e._v(" Participants can vote on proposals that reached MinDeposit threshold. There are four types of votes: "),o("code",[e._v("Yes")]),e._v(", "),o("code",[e._v("No")]),e._v(", "),o("code",[e._v("NoWithVeto")]),e._v(", and "),o("code",[e._v("Abstain")]),e._v(". "),o("code",[e._v("NoWithVeto")]),e._v(" counts as "),o("code",[e._v("No")]),e._v(" but also adds a Veto. The "),o("code",[e._v("Abstain")]),e._v(" option allows voters to signal that they do not vote in favor or against the proposal but accept the result of the vote.")]),o("p",[o("strong",[o("strong",[e._v("Inheritance and Penalties:")])]),e._v(" Delegators inherit their validator’s vote if they do not submit a vote themselves.")]),o("p",[o("strong",[o("strong",[e._v("Claiming Deposit:")])]),e._v(" Users that deposited on proposals can recover their deposits so long as the proposal was not denied with a No with Veto. Deposits are recoverable if the proposal never entered a voting period.")]),o("h2",{attrs:{id:"current-secret-network-parameters"}},[e._v("Current Secret Network Parameters")]),o("ul",[o("li",[e._v("Deposit period: 1 week")]),o("li",[e._v("Voting period: 1 week")]),o("li",[o("a",{attrs:{href:"https://github.com/enigmampc/enigmachain/blob/7504bd7430dd5ecfa11eb735e571d1fb4d37f308/enigma-1-genesis.json#L1854",rel:"noopener"}},[e._v("Minimum deposit amount")]),e._v(": 1000 SCRT")]),o("li",[e._v("Quorum: 33.4%")]),o("li",[e._v("Threshold: 50%")]),o("li",[e._v("Veto: 33.4%")])]),o("h2",{attrs:{id:"governance-process"}},[e._v("Governance Process")]),o("p",[e._v("More information can be found in the "),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/gov",rel:"noopener"}},[e._v("Cosmos documentation")]),e._v(".")]),o("figure",{staticClass:"kg-card kg-image-card"},[o("img",{staticClass:"kg-image",attrs:{src:"https://blog.scrt.network/content/images/2020/05/governance.png"}})]),o("h2",{attrs:{id:"four-stages-of-governance-proposals"}},[e._v("Four Stages of Governance Proposals")]),o("p",[e._v("The below description is adapted from Chorus One’s "),o("a",{attrs:{href:"https://blog.chorus.one/an-overview-of-cosmos-hub-governance",rel:"noopener"}},[e._v("Overview of Cosmos Hub Governance")]),e._v(". We greatly appreciate the opportunity to collaborate with their team and others in the Cosmos ecosystem.")]),o("h3",{attrs:{id:"1-deposits"}},[e._v("1. Deposits")]),o("p",[e._v("For a proposal to be considered for voting, a minimum deposit of 1000 SCRT must be deposited within 1 week from when the proposal was submitted. Any SCRT holder may contribute to this deposit to support proposals, meaning the party submitting the proposal doesn’t necessarily need to provide the deposit itself. The deposit is required as spam protection.")]),o("p",[e._v("If the proposal does not reach the minimum deposit threshold, deposits are refunded. If the proposal is approved or if it’s rejected but not vetoed, deposits will automatically be refunded to their respective depositor. "),o("strong",[o("strong",[e._v("When a proposal is vetoed with a supermajority, deposits will be burned.")])])]),o("h3",{attrs:{id:"2-voting"}},[e._v("2. Voting")]),o("p",[e._v("When the minimum deposit for a particular proposal is reached, the 1-week voting period begins. During this period, SCRT holders are able to cast their vote on that proposal. As mentioned, there are four voting options: "),o("code",[e._v("Yes")]),e._v(", "),o("code",[e._v("No")]),e._v(", "),o("code",[e._v("NoWithVeto")]),e._v(", and "),o("code",[e._v("Abstain")]),e._v(".")]),o("ul",[o("li",[e._v("Only staked tokens can participate in governance.")]),o("li",[e._v("Voting power is measured in terms of stake. The amount of SCRT you stake determines your influence on the decision.")]),o("li",[e._v("Delegators inherit the vote of the validators they are delegated to unless they cast their own vote, which will overwrite validator decisions.")])]),o("h3",{attrs:{id:"3-tallying"}},[e._v("3. Tallying")]),o("p",[e._v("Whether a proposal is accepted depends on the result of the coin voting by SCRT holders. The following requirements need to be satisfied for a proposal to be considered accepted:")]),o("ul",[o("li",[e._v("Quorum: More than 33.4% of the total staked tokens at the end of the voting period need to have participated in the vote. If this requirement is not met at the end of the voting period, the proposal is denied.")]),o("li",[e._v("Threshold: More than 50% of the tokens that participated in the vote (after excluding "),o("code",[e._v("Abstain")]),e._v(" votes) voted in favor of the proposal.")]),o("li",[e._v("No Veto: Less than 33.4% of the tokens that participated in the vote (after excluding "),o("code",[e._v("Abstain")]),e._v(" votes) vetoed the decision.")])]),o("h3",{attrs:{id:"4-implementation"}},[e._v("4. Implementation")]),o("p",[e._v("An accepted proposal is really nothing without being implemented as part of the software that is run by validators in the network. If a proposal is just offering direction (“signaling”), developers can bake it into a hard fork proposal and pass it to the validators to update the network.")]),o("hr"),o("p",[e._v("In addition to on-chain governance mechanisms, our community has explored various off-chain organizational frameworks to help coordinate the Secret Network community."),o("strong"),e._v("We believe transparency and inclusivity help interconnected projects drive progress through collaboration. Ultimately, cooperation and trust are necessary for sustainability of our network and community. Stay tuned for more...")]),o("h2",{attrs:{id:"contribute-on-the-secret-forum-"}},[e._v("Contribute on the Secret Forum:")]),o("figure",{staticClass:"kg-card kg-bookmark-card"},[o("a",{staticClass:"kg-bookmark-container",attrs:{href:"https://forum.scrt.network/c/governance"}},[o("div",{staticClass:"kg-bookmark-content"},[o("div",{staticClass:"kg-bookmark-title"},[e._v("Governance")]),o("div",{staticClass:"kg-bookmark-description"},[e._v("This category is for any discussion related to Secret Network governance. Relevant topics include software upgrades, parameter changes, community initiatives, and reputation systems.")]),o("div",{staticClass:"kg-bookmark-metadata"},[o("img",{staticClass:"kg-bookmark-icon",attrs:{src:"https://aws1.discourse-cdn.com/business4/uploads/enigma1/optimized/1X/100d109e9f30cc9dc42ff7760e3cf4568f8b69a2_2_180x180.png"}}),o("span",{staticClass:"kg-bookmark-publisher"},[e._v("Secret Network")])])]),o("div",{staticClass:"kg-bookmark-thumbnail"},[o("img",{attrs:{src:"https://aws1.discourse-cdn.com/business4/uploads/enigma1/original/1X/f8733eeeed23aa43a3ce6f702c1806de8c957daf.png"}})])])]),o("h2",{attrs:{id:"secret-network-participation"}},[e._v("Secret Network Participation")]),o("p",[e._v("All are welcome to share feedback  submit proposals to change parameters or spend community budget. Learn more about the gov module in the "),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/gov",rel:"noopener"}},[e._v("Cosmos SDK documentation")]),e._v(". There is much work to be done! Here is a breakdown of two different kinds of proposals: "),o("a",{attrs:{href:"https://github.com/gavinly/CosmosCommunitySpend",rel:"noopener"}},[e._v("community spend")]),e._v(" and "),o("a",{attrs:{href:"https://github.com/gavinly/CosmosParametersWiki",rel:"noopener"}},[e._v("parameter changes")]),e._v(".")]),o("p",[e._v("Let’s build!")]),o("figure",{staticClass:"kg-card kg-image-card"},[o("img",{staticClass:"kg-image",attrs:{src:"https://blog.scrt.network/content/images/2020/05/Secret-Color-Hall-1.png"}})]),o("p",[o("em",[e._v("To discuss the network and join our community, visit our official channels:")]),o("br"),o("a",{attrs:{href:"https://forum.scrt.network"}},[e._v("Forum")]),e._v(" | "),o("a",{attrs:{href:"https://chat.scrt.network"}},[e._v("RocketChat")]),e._v(" | "),o("a",{attrs:{href:"https://twitter.com/SecretNetwork"}},[e._v("Twitter")]),e._v(" | "),o("a",{attrs:{href:"https://t.me/scrtnetwork"}},[e._v("Telegram")])])])}),[],!1,null,null,null);t.default=s.exports}}]);