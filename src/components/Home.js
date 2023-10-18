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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cArena = "0x563395A2a04a7aE0421d34d62ae67623cAF67D03";
const cBTC = "0x152b9d0FdC40C096757F570A51E494bd4b943E50";
const cLP = "0x25Da99174E44592c37ddbE0e6Ee4B48a40fec2E5";
const cStarbits = "0xB618b0545455C90258F5Ff551a2FfBA8FcFB3cbB";
const cSwapper = "0x9036525E14ce8aadDE627Bd7b07ed85Ec2681dC2";

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

  let ethersProvider, signer;

  useEffect(() => {
    async function fetchData() {
      await btcContract.balanceOf(cSwapper).then(x => {
        setBtcBalance(Number(x));
      })
      await starbitsContractA.getStars().then(s => {
        setStars(s);
      })
      if (wallet) {
        await arenaContract.sharesBalance("0x659071a5eB37eaF2B87bA5Ac3a60cC63948C03Db", wallet.accounts[0].address).then(h => {
          setHolder(h);
        })
        await starbitsContractA.starToLastHolderClaim(wallet.accounts[0].address).then(ht => {
          setHolderTimestamp(Number(ht));
        })
        await lpContractA.balanceOf(wallet.accounts[0].address).then(j => {
          setLpBalance(Number(j));
        })
        await lpContractA.allowance(wallet.accounts[0].address, cStarbits).then(a => {
          setLpApproved(Number(a));
        })
        await starbitsContractA.starToStake(wallet.accounts[0].address).then(st => {
          setLpStaked(Number(st[0]));
          setStakerTimestamp(Number(st[1]));
        })
      }
    }
    fetchData();
  }, [wallet]);

  const claimHolder = async () => {
    ethersProvider = await new ethers.BrowserProvider(wallet.provider, 'any');
    signer = await ethersProvider.getSigner();
    const contract = new ethers.Contract(cStarbits, STARBITS, signer);

    try {
      const tx = await contract.holderClaimStarPower();
      toast('Claiming Holder Star Power');
      const receipt = await tx.wait()
      if (receipt.status) {
        toast.success('Successfully Claimed!');
        await starbitsContractA.starToLastHolderClaim(wallet.accounts[0].address).then(ht => {
          setHolderTimestamp(Number(ht));
        })
      } else {
        toast.warning('Claim Failed!');
      }
    } catch (e) {
      console.log(e)
      toast.error(e["reason"]);
    }
  }

  const claimStaker = async () => {
    ethersProvider = await new ethers.BrowserProvider(wallet.provider, 'any');
    signer = await ethersProvider.getSigner();
    const contract = new ethers.Contract(cStarbits, STARBITS, signer);

    try {
      const tx = await contract.claimStarPower();
      toast('Claiming Staker Star Power');
      const receipt = await tx.wait()
      if (receipt.status) {
        toast.success('Claim Successful!');
        await starbitsContractA.starToStake(wallet.accounts[0].address).then(st => {
          setLpStaked(Number[st[0]]);
          setStakerTimestamp(Number(st[1]));
        })
      } else {
        toast.warning('Claim Failed!');
      }
    } catch (e) {
      toast.error(e["reason"]);
    }
  }

  const approveLP = async (amount) => {
    ethersProvider = await new ethers.BrowserProvider(wallet.provider, 'any');
    signer = await ethersProvider.getSigner();
    const contract = new ethers.Contract(cLP, ERC20, signer);

    try {
      const tx = await contract["approve"](cStarbits,ethers.parseEther((amount.toString())));
      toast('Approving LP Tokens')
      const receipt = await tx.wait()
      if (receipt.status) {
        toast.success('Approval Successful!')
        await lpContractA.allowance(wallet.accounts[0].address, cStarbits).then(a => {
          setLpApproved(Number(a));
        })
      } else {
        toast.warning('Approval Failed!')
      }
    } catch (e) {
      console.log(e)
      toast.error(e["reason"]);
    }
  }

  const stakeLPT = async (amount) => {
    ethersProvider = await new ethers.BrowserProvider(wallet.provider, 'any');
    signer = await ethersProvider.getSigner();
    const contract = new ethers.Contract(cStarbits, STARBITS, signer);

    try {
      const tx = await contract.stakeLP(ethers.parseEther((amount.toString())));
      toast('Staking LP Tokens')
      const receipt = await tx.wait()
      if (receipt.status) {
        toast.success('Successfully Staked!')
        await lpContractA.balanceOf(wallet.accounts[0].address).then(j => {
          setLpBalance(Number(j));
        })
        await lpContractA.allowance(wallet.accounts[0].address, cStarbits).then(a => {
          setLpApproved(Number(a));
        })
        await starbitsContractA.starToStake(wallet.accounts[0].address).then(st => {
          setLpStaked(Number[st[0]]);
          setStakerTimestamp(Number(st[1]));
        })
      } else {
        toast.warning('Staking Failed!')
      }
    } catch (e) {
      console.log(e)
      toast.error(e["reason"]);
    }
  }

  const unStakeLP = async (amount) => {
    ethersProvider = await new ethers.BrowserProvider(wallet.provider, 'any');
    signer = await ethersProvider.getSigner();
    const contract = new ethers.Contract(cStarbits, STARBITS, signer);

    try {
      const tx = await contract.unstakeLP(ethers.parseEther((amount.toString())));
      toast('Unstaking LP Tokens')
      const receipt = await tx.wait()
      if (receipt.status) {
        console.log(receipt.status)
        toast.success('Successfully Unstaked!');
        await lpContractA.balanceOf(wallet.accounts[0].address).then(j => {
          setLpBalance(Number(j));
        })
        await lpContractA.allowance(wallet.accounts[0].address, cStarbits).then(a => {
          setLpApproved(Number(a));
        })
        await starbitsContractA.starToStake(wallet.accounts[0].address).then(st => {
          setLpStaked(Number[st[0]]);
          setStakerTimestamp(Number(st[1]));
        })
      } else {
        toast.warning('Unstaking Failed!');
      }
    } catch (e) {
      console.log(e)
      toast.error(e["reason"]);
    }
  }

  const getStars = async () => {
    await starbitsContractA.getStars().then(s => {
      setStars(s);
    })
  }

  const getStarPower = async (address) => {
    await getStars().then(() => {
      let counts = lodash.countBy(stars);
      setStarPower(counts[address] ? counts[address] : 0);
    })
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
        <Concept btc={btcBalance / 10**8} swapper={cSwapper}/>
        <Tokenomics />
        <Participate token={cStarbits}/>
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
          stakeLP={stakeLPT}
          unStakeLP={unStakeLP}
        />
        <Footer />
        <div class="buffer"/>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}
