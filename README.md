# SPCv2 Token Upgrade Spec
Version 1.0

## THIS IS A DRAFT

**This is a open source draft, subject to change.**  This is a proposal being discussed, not finalized.

## Executive Summary

The modern Ethereum DeFi financial products require ERC20 tokens to have certain features, in order to be deposited, traded, borrowed, and more.   The current Spacechain ERC20 token lacks these DeFi compatibility features.  We propose a voluntary, opt-in, seamless and secure upgrade to a new ERC20 token that will unlock many financial products for Spacechain holders, ideally leading to a better market outcome for the SPC (v2) token.

## Technical Problem

The current Spacechain ERC20 token on Ethereum (0x8069080a922834460c3a092fb2c1510224dc066b) lacks the standard API features that many decentralized financial (DeFi) products expect:
* approve
* Increase, decrease allowance
* transferFrom
* Bool return values.

In the past, the lack of these modern APIs has limited token listings and created technical problems requiring workarounds.

## Roadblocks for Investors

These technical limitations severely limit SPC token price, because Spacechain cannot access modern DEX trading mechanisms (Uniswap, Loopring) and cannot be held in index funds such as Balancer.

Spacechain holders will see a better, healthier token market with more trading and liquidity, if Spacechain takes action to create a new SPC, with modern DeFi API features.

## Upgrade Process
The entire upgrade process is permissionless and secure.  It is handled 100% by smart contract.   Users choose when & how much to upgrade.   We recommend for all users,
* Beta test phase:   Early adopters should try the upgrade process, with a small amount of SPC (v1).   Early adopters take early risks, but have the advantage of accessing advanced trading with SPC (v2).
* Production phase 1:   Users should upgrade a small amount of SPC, to verify that they understand the process, before risking larger amounts.
* Production phase 2:   Users are recommended to upgrade their remaining SPC (v1) to SPC (v2).

## Technical Process
SPC v1 tokens are upgraded to SPC v2 tokens on a 1:1 basis, secured by a process on the Ethereum blockchain.   No custodians are involved; this process is entirely on-chain and opt-in.

User steps:
1. Call the createUpgrader() API, to create a user-owned vault contract.
2. User sends SPC v1 tokens to the address of their vault contract.
3. User calls migrateV1tokens() API, which mints (credits) SPC v2 tokens, and burns (debits) SPC v1 tokens from the vault contract.

The user will visit a simple website that will lead them through the upgrade process with the MetaMask wallet on Ethereum.

This guarantees the Spacechain SPC token promise of keeping supply at 1B.

## Individual Users Process
The upgrade process for individual users:
* Visit tokenupgrade.spacechain.com website with MetaMask or another Ethereum wallet.
* Connect your wallet to website.
* Click “Create Upgrader Vault”
* Approve Ethereum transaction in MetaMask.
* Click “Send SPC to Vault”
* Approve Ethereum transaction in MetaMask.
* Click “Upgrade SPC v1 tokens”
* Approve Ethereum transaction in MetaMask.
* You now have SPCv2 and can trade!

## Exchanges Process
* Alert users.
* Pause trading.
* Stop new SPCv1 deposits.
* Upgrade cold wallet SPCv1 tokens to SPCv2, using smart contract upgrader APIs.
* Enable trading.
* Enable SPCv2 deposits and withdrawals.


## Questions

**Q**:  Does the SPC token supply change?

No.   The token supply remains capped at 1 billion.

The upgrade process mints new SPC v2 tokens, and burns old SPC v1 tokens, on a 1:1 pegged basis.

**Q**:  What happens if I do not upgrade my tokens immediately?

Nothing.   The upgrade process is opt-in and voluntary.

You can always swap 1:1  SPCv1 for SPCv2, today, tomorrow or 10 years from now.


**Q**:  What happens if I never upgrade my tokens?

SPCv1 can still be transferred to others, who can convert them to SPCv2.

Nobody is “turning off” SPCv1.

**Q**:  What happens if exchange does not upgrade to SPCv2?

The exchange will not have access to many users, higher trading volumes and higher liquidity of SPCv2.



