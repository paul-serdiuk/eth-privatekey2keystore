// https://ethereum.stackexchange.com/a/11226/20417

let privateKey = process.argv[2];
let password = process.argv[3];

if (!privateKey || privateKey.length === 0) {
  console.log("You need to specify a private key");
  process.exit(1);
}

if (!password || password.length === 0) {
  console.log("You need to specify a password");
  process.exit(1);
}

let Wallet = require('ethereumjs-wallet');
let key = Buffer.from(privateKey, 'hex');
let wallet = Wallet.fromPrivateKey(key);
let s = wallet.toV3String(password, {kdf: 'scrypt', dklen: 32, n: 4096, p: 6, r: 8, cipher: 'aes-128-ctr'});
console.log(s);
