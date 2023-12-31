import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    {
      name: "Contract",
      path: `https://snowtrace.io/address/0x5812146DD60f97eb4C5aCEc94703acDDdD49e88C#code`,
    },
    {
      name: "Liquidity Burned",
      path: "https://snowtrace.io/tx/0xace05a3869335c3525252c76343f1126aef91e40a0091c2c2ea6abc198cb7a70",
    },
    {
      name: "Owner Renounced",
      path: "https://snowtrace.io/tx/0xfb21709110f312be24ae32ac8fc70020a5e3b6b907fd24927301bc4979224244",
    },
  ];
  function toggleNav() {
    let x = document.getElementById("navbar-default");
    x.classList.toggle("hidden");
  }
  return (
    <nav class="bg-black">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/starbits_logo.png`}
            class="h-8 mr-3"
            alt="Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNav}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:flex-row">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    class="block py-2 pl-3 pr-4 text-primary"
                    aria-current="page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
