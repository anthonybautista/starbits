import {useState} from 'react';
import {Button, TextField} from "@mui/material";
import Timer from "./Timer";

export default function Unstake(props) {
  const {lpStaked, unStakeLP, stakerTimestamp, claimStaker, wallet} = props;
  const [lpAmount, setLpAmount] = useState(0);

  const handleLPChange = (event) => {
    setLpAmount(Number(event.target.value))
  }

  return (
    <div>
      {
        lpStaked > 0 ?
          <div class="flex flex-col justify-center items-center px-4 py-2">
            <p>You have {(lpStaked / 10**18).toFixedNoRound(6)} LP Staked</p>
            <Timer timestamp={stakerTimestamp} />
            <Button
              id="claimStakeButton"
              variant="contained"
              color="secondary"
              disabled={lpStaked === 0 || !wallet}
              sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1, mb: 1}}
              onClick={() => {claimStaker()}}
            >
              Claim
            </Button>
            <TextField
              id="lpAmount2"
              type="number"
              label="LP Amount"
              variant="outlined"
              color="secondary"
              onChange={handleLPChange}
              sx={{mt: 1}}
            />
            <Button
              id="unStakeButton"
              variant="contained"
              color="secondary"
              disabled={lpStaked === 0 || !wallet}
              sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1, mb: 1}}
              onClick={() => {unStakeLP(lpAmount)}}
            >
              Unstake
            </Button>
          </div>
        :
          <p>No LP tokens staked.</p>
      }
    </div>
  );
}