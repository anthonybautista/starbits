export default function Footer() {
  return (
    <div class="h-full py-4 text-black flex flex-col items-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight my-4 px-4 py-2 rounded-xl border-2 border-black border-solid bg-black text-secondary">
        Disclaimers
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto container mx-auto">
        <div class="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow text-fuchsia-800 font-bold col-span-1 sm:col-span-2">
          <p>
              This experimental token should be considered as highly speculative and not a sound
              investment. All users should verify the legality of digital tokens per their local government entities and act
              accordingly. DO NOT purchase any digital asset with money you are not willing to lose.
          </p>
        </div>
        <div
            className="bg-tertiary border-2 border-solid border-black flex flex-col justify-center items-center rounded-xl px-4 py-2 box-shadow text-fuchsia-800 font-bold col-span-1 sm:col-span-2">
          <p>Please note that while providing liquidity gives more chances to win per day, it comes
            with significant risks.</p>
          <a href="https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi" className="underline"
             target="_blank" rel="noreferrer"> Learn More Here </a>
        </div>
      </div>
    </div>
  );
}
