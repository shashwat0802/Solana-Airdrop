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

const getWalletBalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const walletBalance = await connection.getBalance(publickKey);
    console.log(`Wallet balance is ${walletBalance}`);
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  await getWalletBalance();
};

main();
