require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot dance release still evil coral light army gate'; 
let testAccounts = [
"0x373a576ada77f62d4fb621f5f60d7556b3be4e4bea2833c201336f471c817721",
"0x4c744fb482bc5c2d4e5d43a4f894d4d7e1dc43a2715fe87ddb4d61e2ca8fa59d",
"0xf350755a958853b1524323652777078430aa1efc74b83f812f57fee668923fdb",
"0x3dadae5329cb39f2a3c96a79fd54661a13bb23d9b881983df902fce2577c3931",
"0x4f6e93925477afff9b6a58a8c7de9770b223d3f56757210afefc3245dae86129",
"0x8c8b0833b0d462ff0beb9f79071ed74e16e4533a92f0d0dcfbac67633b939994",
"0x27c9e196f33eee8151d2caa4dbff82618df9bb9e9a9de7b52e0eaa1fc95dfafc",
"0x99fc8509e8667801038320d48072eca0bd843e1521459e5fabf2bf35460369b2",
"0x3670a014175353a2b579e70aa5799d45c269a2bb064e401fead060e06729b281",
"0x594898997dddacd4ce284cc0184f1267df24c69465dd21805d2055dcc3d97dc9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

