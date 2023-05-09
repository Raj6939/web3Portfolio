/* eslint-disable */
import Web3 from 'web3'

async function loadWeb3()  {
  try{
  
    if(window.ethereum){      
    //  const chain = Web3.utils.toHex(inDecimal);     
      window.web3 = new Web3(window.ethereum);          
      try {
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{
              eth_accounts: {}
          }]
          })
      } catch (error) {        
        throw new Error(error.message)
      }
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });  
        return window.web3;
      } catch (error) {        
        throw new Error(error.message)
      }                                   
      
    }else if(window.web3){            
      window.web3 = new Web3(window.web3.currentProvider);
      return window.web3;
    }else{
      throw new Error("Install Metamask browser extention");
    }
  }catch(e) {    
    throw new Error(e.message)
    }
}

export default loadWeb3;