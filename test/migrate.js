/* eslint-disable arrow-body-style */
'use strict'

const { assert } = require('chai')
const ERC20Burnable = artifacts.require('ERC20Burnable')
const SpaceChain = artifacts.require('SpaceChain')
const TokenUpgrader = artifacts.require('TokenUpgrader')
contract('VWETH Pool', function (accounts) {
  describe('Migrate SPC V1', function () {

    it('Should check that VWETH is deployed correctly', async function () {
        const spcv1 = await ERC20Burnable.at('0x8069080a922834460C3A092FB2c1510224dc066b')
        const spcv2 = await SpaceChain.new()
        let vBalance = await spcv1.balanceOf(accounts[0])
        console.log('vBalance', vBalance.toString())
        await spcv2.createUpgrader()
        let upgrader = await spcv2.tokenUpgrader(accounts[0])
        upgrader = await TokenUpgrader.at(upgrader)
        await spcv1.transfer(upgrader.address, '20000000000000000')
        await spcv2.migrateV1tokens()
        await spcv1.transfer(upgrader.address, '30000000000000000')
        await spcv2.migrateV1tokens()
        vBalance = await spcv1.balanceOf(accounts[0])
        console.log('vBalance', vBalance.toString())
        vBalance = await spcv2.balanceOf(accounts[0])
        console.log('vBalance', vBalance.toString())
        assert.equal(vBalance, '50000000000000000', 'Spc v2 balance is wrong')
    })

  })
})
