document.addEventListener('DOMContentLoaded', function() {
  var addressValue = localStorage.getItem('address');
  console.log('Address Value :', addressValue);

// Import Web3.js library
const Web3 = require('web3');

// Create a new Web3 instance
const web3 = new Web3('https://mainnet.infura.io/v3/307e1b7166d94191b2a8760c9f02963b');

// Set the deployed contract address
const contractAddress = '0x2ad2a3e9784FC7589Fb80c36c391db58DFc0f1D1';

// Load the contract ABI (Application Binary Interface)
const contractABI = require('/.abi_code.json');

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function voteForCandidate(candidateIndex) {
  try {
    const confirmation = confirm("Do you want to continue?");
    
    if (confirmation) {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const voterAddress = accounts[0];

      // Perform the vote transaction here
      await contract.methods.vote(candidateIndex).send({ from: voterAddress });

      // Update the vote count display
      const voteCountElement = document.getElementById(`vote-count-${candidateIndex}`);
      const currentVoteCount = Number(voteCountElement.textContent) + 1;
      voteCountElement.textContent = currentVoteCount;

      alert(`You have successfully voted for candidate ${candidateIndex}. Current vote count: ${currentVoteCount}`);
    }
  } catch (error) {
    console.error(error);
  }
}
console.log()


});


