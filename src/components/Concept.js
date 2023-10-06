export default function Concept() {
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
    </div>
  );
}
