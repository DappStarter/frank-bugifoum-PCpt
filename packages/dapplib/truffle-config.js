require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stomach deny oval coast hunt problem equal genius'; 
let testAccounts = [
"0x058a880fee4fe6275b87276007db8fb8f1c663b53ba2b2b8b26f3db8bdf69216",
"0xcd01553b4f34088fd6159e3bad666bade1b45008537883cf35b8dc9678ce16bb",
"0x6e22d1ea070d3888bc8df8610b52cd657d7b6f2b16e50fc972cb52200fd34c67",
"0x823f618c500f3438da0bf0057f97b3a86d28ba4c6b445a36dbad028c76c24342",
"0x73e637676147f62ffab8b8ccd3cfffc5be66fe0f5b9392c94858ef6f9023d177",
"0x8201240c674f8654c620314a7d8871adeaa2c85321062e060240af8159b15a8e",
"0x99b3447db58d42f056aa320b883a0edbe32b39f80b8e1d871aaed1dd05e53fc4",
"0x5fffcccdb3c223b236f1497d8deb5f0f4fecd1df9b7404a6934c8d02c271454e",
"0x06996aa05c82afd50feb676544901ff83ba366e026fb604909c65e94a926baf2",
"0x7a0dcca3fc06c7db717dc80a5de924b89365edf2698f413ba813f688ce303347"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

