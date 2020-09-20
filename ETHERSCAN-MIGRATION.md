# Token Migration - Step by Step

This document is a walkthrough of the SPC (v1) to SPC (v2) token migration, for **expert users comfortable with Etherscan and MetaMask**.

## Step 1 - Prepare SPC tokens and MetaMask wallet

Ensure that you have a working MetaMask wallet, that contains SPC (v1) tokens.

## Step 2 - Create Personal Upgrader contract

Summary:  Use Etherscan to create your upgrader contract.

1. Visit SPC (v2) "Write Contract" page: https://etherscan.io/address/0x86ed939b500e121c0c5f493f399084db596dad20#writeContract
2. Click "Connect to Web3"
3. Choose MetaMask on the "Connect a Wallet" pop-up.
4. Click "OK" to acknowledge this is an Etherscan beta product.
5. Scroll down to "4. createUpgrader" and click the **Write** button.
6. Sign the transaction with your wallet, and wait for the transaction to confirm.

## Step 3 - Record Personal Upgrader address

Summary:   Ask Etherscan for the address of your personal upgrader contract.

1. Visit SPC (v2) "Read Contract" page: https://etherscan.io/address/0x86ed939b500e121c0c5f493f399084db596dad20#readContract
2. Scroll down to "6. tokenUpgrader"
3. Enter your wallet address in the text box below tokenUpgrader, and click the **Query** button.
4. After "tokenUpgrader method Response", an address is displayed.  **This is your Personal Upgrader, the address where you will send SPC.**
5. Copy and paste this address to a safe location, such as a file or Google doc.

Note:  If the address returned is all-zeroes, e.g. 0x00000000000000... that means your Personal Upgrader contract is not yet created on the blockchain.

## Step 4 - Send SPC to Personal Upgrader

1. Send SPC to the address recorded in the previous step.

**It is strongly recommended to send a small, test amount of SPC first, to test the process and understand it fully.**

## Step 5 - Migrate SPC (v1) to SPC (v2)

1. Visit SPC (v2) "Write Contract" page: https://etherscan.io/address/0x86ed939b500e121c0c5f493f399084db596dad20#writeContract
2. Click "Connect to Web3"
3. Choose MetaMask on the "Connect a Wallet" pop-up.
4. Click "OK" to acknowledge this is an Etherscan beta product.
5. Scroll down to "7. migrateV2tokens" and click the **Write** button.
6. Sign the transaction with your wallet, and wait for the transaction to confirm.

After the blockchain confirms the transaction, your SPC (v1) tokens are removed from the Personal Upgrader, and new SPC (v2) tokens have been sent to your wallet address.

## Step 6 - (Optional) Add SPC (v2) to MetaMask

MetaMask does not show the new SPC (v2) tokens by default.  Users must **add a custom token**, to make their balances appear.

1. Click on the MetaMask icon in your browser, to open MetaMask.
2. Under the Assets tab, scroll down to the bottom of the assets list.
3. Click the **Add Token** button.
4. Select the Custom Token tab.
5. In the Token Contract Address text box, paste the SPC v2 address:  0x86ed939b500e121c0c5f493f399084db596dad20
6. Click the **Next** button.
7. Click the **Add Tokens** button.

SPC (v2) should now appear in MetaMask, listed as "SPC".
