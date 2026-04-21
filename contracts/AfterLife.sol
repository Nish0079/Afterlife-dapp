// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AfterLife {
    struct LegacyMessage {
        address owner;
        string beneficiaryName;
        string content;
        uint256 unlockTimestamp;
    }

    LegacyMessage[] public messages;

    function addMessage(
        string memory beneficiaryName,
        string memory content,
        uint256 unlockTimestamp
    ) public {
        messages.push(LegacyMessage(msg.sender, beneficiaryName, content, unlockTimestamp));
    }

    function getMessages() public view returns (LegacyMessage[] memory) {
        return messages;
    }
}
