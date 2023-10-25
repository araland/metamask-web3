const { expect } = require("chai");
const { utils } = require("ethers");
const { ethers } = require("hardhat");

describe("Simple Counter Contract", function () {
  it("Deploy and counter test", async function () {
    const CounterContract = await ethers.getContractFactory("Counter");
    let counterIns = await CounterContract.deploy();
    await counterIns.deployed();
    console.log("Counter contract address: ", counterIns.address);

    let curCounter = await counterIns.getCount();
    expect(Number(curCounter)).to.equal(0);

    const counterTx = await counterIns.incrementCounter();
    await counterTx.wait();

    curCounter = await counterIns.getCount();
    expect(Number(curCounter)).to.equal(1);
  });
});
