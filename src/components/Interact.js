import {Button, TextField} from "@mui/material";
import {useState} from "react";
import Unstake from "./Unstake";
import arena from '../arena_logo.png';
import React from "react";

export default function Interact(props) {
  const { wallet, connecting, connect, disconnect, getStarPower, starPower, holder,
          lpBalance, lpApproved, holderTimestamp, stakerTimestamp, totalStarPower,
          claimHolder, claimStaker, stakeLP, unStakeLP, approveLP, lpStaked} = props;
  const [addy, setAddy] = useState("");
  const [lpAmount, setLpAmount] = useState(0);

  const handleChange = (event) => {
    setAddy(event.target.value)
  }

  const handleLPChange = (event) => {
    setLpAmount(Number(event.target.value))
  }

  // Solution from https://labeebklatif.medium.com/js-number-tofixed-without-rounding-4da4207ba146
  Number.prototype.toFixedNoRound = function (precision = 1) {
    const factor = Math.pow(10, precision);
    return Math.floor(this * factor) / factor;
  }

  return (
    <div class="h-full py-4 text-black flex flex-col items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight my-4 px-4 py-2 rounded-xl border-2 border-black border-solid bg-black text-secondary">
        Interact
      </h2>
      <div className="flex flex-col justify-center items-center px-4 py-2 col-span-3"
      >
        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow mx-auto">
          <Button
            id="connectButton"
            variant="contained"
            color="secondary"
            sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E"}}
            onClick={() => (wallet ? disconnect(wallet) : connect())}
          >
            {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
          </Button>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto container mx-auto pt-2">

        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow">
          <img
            src={arena}
            alt="Stars Arena Logo"
            className="object-contain"
          />
          <p className="text-xl font-bold">xrpant Holder Claim</p>
          <hr className="h-px my-4 bg-black w-4/5 border-1 dark:bg-black border-black"/>
          {holder ? 'You are a holder' : 'You are not a holder'}
          <Button
            id="holderButton"
            variant="contained"
            color="secondary"
            disabled={!holder}
            sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1}}
            onClick={() => (wallet ? disconnect(wallet) : connect())}
          >
            Claim
          </Button>
        </div>
        <div class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow">
          <p className="text-xl font-bold">Stake LP</p>
          <p>You have {(lpBalance / 10**18).toFixedNoRound(6)} LP</p>
          <p>Allowance: {(lpApproved / 10**18).toFixedNoRound(6)} LP</p>
          <TextField
            id="lpAmount"
            type="number"
            label="LP Amount"
            variant="outlined"
            color="secondary"
            onChange={handleLPChange}
            sx={{mt: 1}}
          />
          {
            (lpApproved / 10 ** 18) >= lpAmount ?
              <Button
                id="stakeButton"
                variant="contained"
                color="secondary"
                sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1, mb: 1}}
                onClick={() => {
                }}
              >
                Stake
              </Button>
              :
              <Button
                id="approveButton"
                variant="contained"
                color="secondary"
                sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1, mb: 1}}
                onClick={() => {
                }}
              >
                Approve
              </Button>
          }
          <hr className="h-px my-4 bg-black w-4/5 border-1 dark:bg-black border-black"/>
          <Unstake
            handleLpChange={handleLPChange}
            lpBalance={lpBalance}
            lpApproved={lpApproved}
            lpStaked={lpStaked}
            stakerTimestamp={stakerTimestamp}
            unStakeLP={unStakeLP}
          />

        </div>
        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow">
          <p className="text-xl font-bold">Check Star Power</p>
          <p>{starPower}</p>
          <TextField
            id="addy"
            label="Address"
            variant="outlined"
            color="secondary"
            onChange={handleChange}
            sx={{mt: 1}}
          />
          <Button
            id="searchButton"
            variant="contained"
            color="secondary"
            sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1, mb: 1}}
            onClick={() => getStarPower(addy)}
          >
            Check
          </Button>
          <hr className="h-px my-4 bg-black w-4/5 border-1 dark:bg-black border-black"/>
          <p className="text-xl font-bold">Current Total Star Power</p>
          <p>{totalStarPower}</p>
        </div>
      </div>
    </div>
  );
}
