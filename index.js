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
    console.log(`Wallet balance is ${walletBalance / LAMPORTS_PER_SOL}`);
  } catch (error) {
    console.error(error);
  }
};

const airDropSol = async () => {
  try {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const fromAirDropSignature = await connection.requestAirdrop(
      publickKey,
      2 * LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(fromAirDropSignature);
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  await getWalletBalance();
  await airDropSol();
  await getWalletBalance();
};

main();
