import web3 from './web3';

const address = "0x5346177D234a1448dCFF27932C2433bfDE12cFaA";

const abi = [
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getTokenValue",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getBalance",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"serviceCost",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"tokenValue",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"tokensTotal",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"service",
            "type":"uint256"
         },
         {
            "name":"platform",
            "type":"uint256"
         },
         {
            "name":"maintanence",
            "type":"uint256"
         },
         {
            "name":"tax",
            "type":"uint256"
         },
         {
            "name":"insurance",
            "type":"uint256"
         },
         {
            "name":"utility",
            "type":"uint256"
         }
      ],
      "name":"setAnualCosts",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getPartners",
      "outputs":[
         {
            "name":"",
            "type":"address[]"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"utilityCost",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"projectValue",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"taxCost",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"insuranceCost",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"maintanenceCost",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"platformCost",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"gravy",
      "outputs":[
         
      ],
      "payable":true,
      "stateMutability":"payable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"enter",
      "outputs":[
         
      ],
      "payable":true,
      "stateMutability":"payable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"admin",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "name":"initialProjectValue",
            "type":"uint256"
         },
         {
            "name":"initialTokensTotal",
            "type":"uint256"
         },
         {
            "name":"toContractors",
            "type":"address"
         },
         {
            "name":"toContinuance",
            "type":"address"
         },
         {
            "name":"toPowerPlant",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
   }
];

 export default new web3.eth.Contract(abi, address);
 