export default function Participate(props) {
  const {token} = props;
  return (
    <div class="h-full py-4 text-black flex flex-col items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight my-4 px-4 py-2 rounded-xl border-2 border-black border-solid bg-black text-secondary">
        Participation
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-auto container mx-auto">
        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow"
        >
          <p>Holders of <a href="https://x.com/xrpant" target="blank" rel="noreferrer noopener" class="underline text-fuchsia-800">xrpant</a>
            &nbsp;tickets on <a href="https://starsarena.com" target="blank" rel="noreferrer noopener" class="underline text-fuchsia-800">StarsArena</a>
            &nbsp;can claim 1 Star Power every 24 hours without needed to hold any StarBits!</p>
        </div>
        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow"
        >
          <p>Selling or transferring StarBits, which incurs a tax, will earn you 1 Star Power. This can be done once per 24 hours.</p>
          <p><a
            href={`https://dex.vavalon.com/swap?chainId=43114&inputCurrency=0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7&outputCurrency=${token}`}
            target="blank"
            rel="noreferrer noopener" className="underline text-fuchsia-800">Buy Starbits</a>*</p>
          <p>*<a href="#disclaimers" className="underline text-fuchsia-800">Please Read Disclaimers</a></p>
        </div>
        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow"
        >
          <p>If you provide liquidity for StarBits, you can stake those LP tokens to accrue 1 Star Power per 1 AVAX in LP per 24 hours.</p>
          <p><a href={`https://dex.vavalon.com/pool/add/${token}/undefined?chainId=43114`} target="blank"
             rel="noreferrer noopener" class="underline text-fuchsia-800">Add Liquidity</a>*</p>
          <p>*<a href="#disclaimers" class="underline text-fuchsia-800">Please Read Disclaimers</a></p>
        </div>
        <div class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow text-fuchsia-800 font-bold col-span-1 sm:col-span-3">
          <p>
            NOTE: Star Power from staking fluctuates as the value of the LP
            fluctuates, and must be claimed every day.
          </p>
        </div>
      </div>
    </div>
  );
}
