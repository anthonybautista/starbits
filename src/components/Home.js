import Concept from "./Concept";
import Participate from "./Participate";
import Tokenomics from "./Tokenomics";
import Footer from "./Footer";
import Interact from "./Interact";
import { init, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import React, {useState, useEffect} from 'react';
import {ethers} from "ethers";
import bits from '../starbits_pfp.png';
import walletConnectModule from '@web3-onboard/walletconnect'
import ARENA from '../junk/arena.json';
import ERC20 from '../junk/erc20.json';
import STARBITS from '../junk/bits.json';
import lodash from "lodash";

const cArena = "0xA481B139a1A654cA19d2074F174f17D7534e8CeC";
const cBTC = "0x152b9d0FdC40C096757F570A51E494bd4b943E50";
const cLP = "0xC467215fa95370c672D7F475a430579CFe66752B";
const cStarbits = "0xF553838E7ac36d2311fEC4a32254bD67BEd1B1BF";
const cSwapper = "0xb9F118Cd29b56aDf79628F41687B2Cf510C1E4dc";

const injected = injectedModule()

const rpcUrl = `https://api.avax.network/ext/bc/C/rpc`
const provider = new ethers.JsonRpcProvider(rpcUrl);

const btcContract = new ethers.Contract(cBTC, ERC20, provider);
const starbitsContractA = new ethers.Contract(cStarbits, STARBITS, provider);
const arenaContract = new ethers.Contract(cArena, ARENA, provider);
const lpContractA = new ethers.Contract(cLP, ERC20, provider);

const wcV2InitOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */
  projectId: '703cb1bacfe971cc87bc663e5c172666',
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [43114],
  /**
   * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
   * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
   * To connect with WalletConnect
   */
  dappUrl: 'http://starbits.xyz'
}

// initialize the module with options
// If version isn't set it will default to V2 - V1 support will be completely removed shortly as it is deprecated
const walletConnect = walletConnectModule(wcV2InitOptions)

// initialize Onboard
init({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: '0xa86a',
      token: 'AVAX',
      label: 'Avalanche Mainnet',
      rpcUrl
    }
  ],
  appMetadata: {
    name: 'StarBits',
    icon: bits,
    description: 'StarBits - An Experimental ERC20',
    recommendedInjectedWallets: [
      { name: 'Core', url: 'https://core.app' },
      { name: 'MetaMask', url: 'https://metamask.io' }
    ]
  }
})

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [stars, setStars] = useState([]);
  const [btcBalance, setBtcBalance] = useState(0);
  const [lpBalance, setLpBalance] = useState(0);
  const [lpApproved, setLpApproved] = useState(0);
  const [lpStaked, setLpStaked] = useState(0);
  const [starPower, setStarPower] = useState(0);
  const [holder, setHolder] = useState(false);
  const [holderTimestamp, setHolderTimestamp] = useState(0);
  const [stakerTimestamp, setStakerTimestamp] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await btcContract.balanceOf(cSwapper).then(x => {
        setBtcBalance(Number(x));
      })
      await starbitsContractA.getStars().then(s => {
        setStars(s);
      })
      if (wallet) {
        console.log(wallet.accounts[0].address)
        await arenaContract.sharesBalance("0x659071a5eB37eaF2B87bA5Ac3a60cC63948C03Db", wallet.accounts[0].address).then(h => {
          setHolder(h);
        })
        await starbitsContractA.starToLastHolderClaim(wallet.accounts[0].address).then(ht => {
          setHolderTimestamp(Number(ht));
        })
        await lpContractA.balanceOf(wallet.accounts[0].address).then(j => {
          console.log(j)
          setLpBalance(Number(j));
        })
        await lpContractA.allowance(wallet.accounts[0].address, cStarbits).then(a => {
          console.log(a)
          setLpApproved(Number(a));
        })
        await starbitsContractA.starToStake(wallet.accounts[0].address).then(st => {
          //setLpStaked(Number[st[0]]);
          setLpStaked(500000000000000000000)
          setStakerTimestamp(Number(st[1]));
        })
      }
    }
    fetchData();
  }, [wallet]);

  const claimHolder = async () => {

  }

  const claimStaker = async () => {

  }

  const approveLP = async (address) => {
  }

  const stakeLP = async (address) => {

  }

  const unStakeLP = async (address) => {

  }

  const getStars = async () => {
    await starbitsContractA.getStars().then(s => {
      setStars(s);
    })
  }

  const getStarPower = async (address) => {
    let counts = lodash.countBy(stars);
    setStarPower(counts[address] ? counts[address] : 0);
  }

  // create an ethers provider
  let ethersProvider, signer;

  if (wallet) {
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any');
    signer = ethersProvider.getSigner();
  }

  return (
    <>
      <div class="flex flex-col bg-gradient-to-b from-black via-black to-primary px-2">
        <div className=" relative w-screen h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[92vh] flex flex-col justify-center items-center text-primary pr-3">
          <img
            src={`${process.env.PUBLIC_URL}/images/starbits_logo.png`}
            alt="Background"
            className="object-contain"
          />
          <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            An Experimental ERC20
          </p>
        </div>
        <Concept btc={btcBalance / 10**8} />
        <Tokenomics />
        <Participate />
        <Interact
          wallet={wallet}
          connecting={connecting}
          connect={connect}
          disconnect={disconnect}
          getStarPower={getStarPower}
          starPower={starPower}
          holder={holder}
          lpBalance={lpBalance}
          lpApproved={lpApproved}
          lpStaked={lpStaked}
          holderTimestamp={holderTimestamp}
          stakerTimestamp={stakerTimestamp}
          totalStarPower={stars.length}
          claimHolder={claimHolder}
          claimStaker={claimStaker}
          approveLP={approveLP}
          stakeLP={stakeLP}
          unStakeLP={unStakeLP}
        />
        <Footer />
      </div>
    </>
  );
}