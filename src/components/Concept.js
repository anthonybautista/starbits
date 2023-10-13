export default function Concept(props) {
  const {btc} = props;
  const conceptItems = [
    "StarBits implements a 10% transfer tax on most transactions(buying from the LP does not!). This tax is used to swap for BTC.b, and every time at least 0.1 BTC.b is accumulated, one lucky address will be sent that BTC.b!",
    "That's right! If this token can sustain liquidity and usage (which is no guarantee, of course), participants have a chance at being airdropped BTC.b!",
  ];
  return (
    <div class="h-full py-4 text-black flex flex-col items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight my-4 px-4 py-2 rounded-xl border-2 border-black border-solid bg-black text-secondary">
        Concept
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto container mx-auto">
        {conceptItems.map((item, index) => {
          return (
            <div
              key={index}
              class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow"
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-2 col-span-3"
      >
        <div
          className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow mx-auto">
          <p className="text-xl font-bold">Current BTC.b Accumulated</p>
          <p>{btc}</p>
        </div>
      </div>
    </div>
  );
}
