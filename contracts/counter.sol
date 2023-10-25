// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Counter {
    uint256 private count = 0;

    /**
     * @dev Increment the current counter
     */
    function incrementCounter() public {
        count += 1;
    }

    /**
     * @dev Decrement the current counter
     */
    function decrementCounter() public {
        count -= 1;
    }

    /**
     * @dev Get the current counter
     */
    function getCount() public view returns (uint256) {
        return count;
    }
}
