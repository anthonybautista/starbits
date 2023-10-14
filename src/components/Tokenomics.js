export default function Tokenomics() {
  const tokenomicsItems = [
    "1,530,000 (7.14%) Protocol Allocation",
    "4,200,000 (19.61%) Initial Liquidity",
    "15,690,000 (73.25%) Price Containment Liquidity (PCL)",
  ];
  return (
    <div class="h-full py-4 text-black flex flex-col items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight my-4 px-4 py-2 rounded-xl border-2 border-black border-solid bg-black text-secondary">
        Tokenomics
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto container mx-auto">
        {tokenomicsItems.map((item, index) => {
          return (
            <div
              key={index}
              class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow"
            >
              <p>{item}</p>
            </div>
          );
        })}
        <div class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow text-fuchsia-800 font-bold col-span-1 md:col-span-3">
          <p>
            NOTE: PCL is stored in the token contract and programmatically added
            to the liquidity pool using Chainlink Automation. This temporarily suppresses rapid price
            increases in an attempt to make providing liquidity easier for early entrants.
          </p>
        </div>
      </div>
    </div>
  );
}
