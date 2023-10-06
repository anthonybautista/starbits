export default function Participate() {
  const items = [
    "Selling or transferring the token, which incurs a tax, will earn you 1 Star Power. This can be done once per 24 hours.",
    "Staking LP tokens. If you provide liquidity, you can stake those LP tokens to accrue 1 Star Power per 1 AVAX in LP per 24 hours.",
  ];
  return (
    <div class="h-full py-4 text-black flex flex-col items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight my-4 px-4 py-2 rounded-xl border-2 border-black border-solid bg-black text-secondary">
        Participation
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto container mx-auto">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow"
            >
              <p>{item}</p>
            </div>
          );
        })}
        <div class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow text-fuchsia-800 font-bold col-span-1 sm:col-span-2">
          <p>
            NOTE: Star Power from staking fluctuates as the value of the LP
            fluctuates, and must be claimed every day.
          </p>
        </div>
      </div>
    </div>
  );
}
