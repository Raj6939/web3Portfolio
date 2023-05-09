<template>
  <div class="hello">
    <button @click="loadBalance">Connect Wallet</button>
    
  </div>
</template>

<script>
import loadweb3 from "../mixins/getWeb3"
import {erc20ABI} from "../mixins/web3Utils"
// import axios from "axios"
export default {
  name: "HelloWorld",
  data() {
    return{
    walletAddress: "",
    web3:null,
    contracts:[      
      {
        chain:1,
        name:"hypersign-identity",
        tokenAddress:"0xB14eBF566511B9e6002bB286016AB2497B9b9c9D"  // HID on ethereum   
      },      
      {
        chain:1,
        name:"usdc-coin",
        tokenAddress:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" // usdc on ethereum
      },
      {
        chain:1,
        name:"tether",
        tokenAddress:"0xdAC17F958D2ee523a2206206994597C13D831ec7" // tether on ethereum
      },
      {
        chain:1,
        name:"HID",
        tokenAddress:"0x87847703D4bb4FCD42DB887FfdcB94496e77e3ab" // HID on polygon matic
      }       

    ]
    }
  },
  props: {},
  methods: {
    async loadBalance() {
      const balances =[]  
      this.web3 = await loadweb3(1)
      const accounts = await this.web3.eth.getAccounts();
      console.log(accounts);         
    const contractABI = erc20ABI; // Replace with a function that returns the ERC-20 contract ABI
  for (const token of this.contracts) {
    console.log(token.tokenAddress)
    const contract = new this.web3.eth.Contract(contractABI, token.tokenAddress);
     const balance = await contract.methods.balanceOf(accounts[0]).call();
    const t ={name : token.name,
    value:balance}
     balances.push({t})
    // const tokenSymbol = "hypersign-identity"    
    // const url ='https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=hypersign-identity&start=1&limit=100&category';
    // const response = await axios.get(url);
    // const json = await response.data();
    // console.log(json)
    // console.log(price);
  } 
    console.log(balances) 
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
