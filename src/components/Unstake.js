import {Button, TextField} from "@mui/material";

export default function Unstake(props) {
  const {lpStaked, lpBalance, lpApproved, handleLpChange, unStakeLP, stakerTimestamp} = props;

  return (
    <div>
      {
        lpStaked > 0 ?
          <div class="flex flex-col justify-center items-center px-4 py-2">
            <p>You have {(lpBalance / 10**18).toFixedNoRound(6)} LP Staked</p>
            <p>Time until claim: {(lpApproved / 10**18).toFixedNoRound(6)}</p>
            <TextField
              id="lpAmount2"
              type="number"
              label="LP Amount"
              variant="outlined"
              color="secondary"
              onChange={handleLpChange}
              sx={{mt: 1}}
            />
            <Button
              id="unStakeButton"
              variant="contained"
              color="secondary"
              sx={{minWidth: 100, height: 30, backgroundColor: "black", color: "#F7931E", mt: 1, mb: 1}}
              onClick={() => {}}
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