const {
  Connection,
  PublicKey,
  Keypair,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

const wallet = new Keypair();

const publickKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;
