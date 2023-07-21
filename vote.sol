// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 vote;
    }

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    constructor () {
    candidates.push(Candidate("Pepe the Politician", 0));
    candidates.push(Candidate("Doge McElection", 0));
    candidates.push(Candidate("Homer Simpson", 0));
}
    function registerVoter(address voterAddress) external {
        require(!voters[voterAddress].isRegistered, "Voter already registered");
        voters[voterAddress].isRegistered = true;
    }

    function vote(uint256 candidateIndex) external {
        require(voters[msg.sender].isRegistered, "Voter is not registered");
        require(!voters[msg.sender].hasVoted, "Voter has already voted");
        require(candidateIndex < candidates.length, "Invalid candidate index");

        voters[msg.sender].hasVoted = true;
        voters[msg.sender].vote = candidateIndex;
        candidates[candidateIndex].voteCount++;
    }

    function getCandidateCount() external view returns (uint256) {
        return candidates.length;
    }

    function getCandidate(uint256 index) external view returns (string memory, uint256) {
        require(index < candidates.length, "Invalid candidate index");
        Candidate memory candidate = candidates[index];
        return (candidate.name, candidate.voteCount);
    }
}
