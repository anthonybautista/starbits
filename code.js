const STARBITS = '[{"inputs":[{"internalType":"uint64","name":"subscriptionId","type":"uint64"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"have","type":"address"},{"internalType":"address","name":"want","type":"address"}],"name":"OnlyCoordinatorCanFulfill","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"}],"name":"RequestMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"lp","type":"uint256"}],"name":"StakedLP","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"star","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StarPowerClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"lp","type":"uint256"}],"name":"UnstakedLP","type":"event"},{"inputs":[],"name":"BTC","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"JOE","outputs":[{"internalType":"contract IJoeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SWAPPER","outputs":[{"internalType":"contract StarSwapper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveRouterWavax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimStarPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"claimableView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getStars","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastRequest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseRequests","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"poolViewA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"poolViewB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPoolB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"starToLastPush","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"starToStake","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stars","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subscriptionAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstakeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"useA","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]';
const STARBITS_ADDRESS = "0xd4d1980a11A23020B6f7F04D0D9f0feAF323CB35";
const SWAPPER_ADDRESS = "";
const BTC_ADDRESS = "0x152b9d0FdC40C096757F570A51E494bd4b943E50";
const JLP_ADDRESS = "";
let provider, signer, currentNetwork, connectedContract;
let account;
let stars = [];
let x;

const defaultNetwork = "0xa86a",
    { ethereum: ethereum } = window,
    networks = { "0xa86a": { chainId: "0xa86a", chainName: "Avalanche", nativeCurrency: { decimals: 18, symbol: "AVAX" }, rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"], blockExplorerUrls: ["https://snowtrace.io"] } };
const RPC = 'https://api.avax.network/ext/bc/C/rpc';

async function checkWeb3() {
    if (void 0 !== window.ethereum) {
        console.log("Web3 provider is installed!"), (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
        try {
            account = await signer.getAddress();
            await checkNetwork(), await checkAccount(), $("button#connect").html("Connected").css("background", "darkolivegreen"), $("button#connect").prop("disabled", !0);
            await getTokens(account);
        } catch (t) {
            console.log(t);
        }
    } else console.log("Please install MetaMask or another web3 provider!"), alert("Please install MetaMask or another web3 provider!");
}
async function connect() {
    console.log("Connecting..."), $("p#mintError").text(""), $("button#connect").prop("disabled", !0);
    try {
        await ethereum.request({ method: "eth_requestAccounts" }), await checkNetwork(), await checkAccount(), console.log("Connected."), $("button#connect").html("Connected").css("background", "darkolivegreen");
    } catch (t) {
        $("button#connect").prop("disabled", !1), 4001 === t.code ? console.log("Please connect to MetaMask.") : console.error(t), $("p#mintError").text(`${t}`);
    }
}
async function checkNetwork() {
    ethereum.on("chainChanged", handleChainChanged);
    let t = await ethereum.request({ method: "eth_chainId" });
    void 0 !== networks[t]
        ? (currentNetwork = networks[t])
        : ethereum.isMetaMask
            ? (await setupNetwork(defaultNetwork), t === (await ethereum.request({ method: "eth_chainId" })) && console.log("Please switch to one of the supported networks."))
            : console.log("Please switch to one of the supported networks.");
}
async function checkAccount() {
    await ethereum.request({ method: "eth_accounts" });
    ethereum.on("accountsChanged", handleAccountsChanged);
}
async function setupNetwork(t) {
    try {
        await ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: networks[t].chainId }] });
    } catch (e) {
        if (4902 === e.code)
            try {
                await ethereum.request({ method: "wallet_addEthereumChain", params: [networks[t]] });
            } catch (t) {
                4001 === t.code ? console.log("Please approve the Avalanche network.") : console.error(t);
            }
        else 4001 === e.code ? console.log("Avalanche configuration already present.") : console.error(e);
    }
    (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
}
async function handleChainChanged(t) {
    console.log("Chain changed to " + t),
        $("p#mintError").text(""),
        (currentNetwork = networks[t]),
        (provider = new ethers.providers.Web3Provider(window.ethereum)),
        (signer = provider.getSigner()),
    void 0 !== currentNetwork || (console.log("Please switch to one of the supported networks."), $("p#mintError").text("Wrong Network"));
}
async function handleAccountsChanged(t) {
    console.log("Account changed to " + t), t.length;
}
const getMinted = async () => {
        const t = new ethers.providers.JsonRpcProvider(RPC);
        connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
        let minted = await connectedContract.totalSupply();
        $("span#eggsMinted").text(`${minted}`), minted === 150 && $("button#mintButton").prop("disabled", !0);
}

// countdown clock from w3 schools
function startClock() {
    clearInterval(x);

    var countDownDate = 1658700000 * 1000;

    // Update the count down every 1 second
    x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("saleOpen").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s";

        // If the count down is over, write some text
        if (distance < 1) {
            document.getElementById("saleOpen").innerHTML = "Open";
            if (distance < 1) {
                $("span#periodOneOpen").text("Open").css("color","darkolivegreen");
            }
            if (distance < -600000) {
                $("span#periodTwoOpen").text("Open").css("color","darkolivegreen");
            }
            if (distance < -1200000) {
                $("span#periodThreeOpen").text("Open").css("color","darkolivegreen");
            }
            if (distance < - 1800000) {
                clearInterval(x);
                $("button#mintButton").html("Closed").css("background", "darkolivegreen");
                $("button#mintButton").prop("disabled", !0);
                document.getElementById("saleClosed").innerHTML = `<a href="https://campfire.exchange/collections/0xd4d1980a11a23020b6f7f04d0d9f0feaf323cb35/minting">Public Sale on Campfire</a>`;
                return;
            }
        }
    }, 1000);

}

const getTokens = async (address) => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
    tokenIds = await connectedContract.walletOfOwner(account);

    await displayTokens();
}

const displayTokens = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
    $("div#display").empty();
    if (tokenIds.length > 0) {
        for (i = 0; i < tokenIds.length; i++) {
            let tokenID = tokenIds[i];
            let img = `https://horribleanz-png.smolrun.repl.co/api/image/${tokenID}`;
            $("div#display").append(`<img src="${img}" id="egg${tokenID}" class="nft"/>`);
        }
    } else {
            $("div#display").text("You don't have any Horribleanz!");
    }

}

const mintBean = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
        try {
            if (ethereum) {
                $("p#mintError").text("");
                let n = await connectedContract.mint(1, { value: ethers.utils.parseEther("1")});
                $("p#mintError").text("Minting...");
                await n.wait();
                let a = `<a href='https://snowtrace.io/tx/${n.hash}' target="_blank" rel="noreferrer">\n                                  View Transaction</a>`;
                $("p#mintError").html(`Successfully minted: ${a}`), getMinted();
                getTokens(account);
            } else console.log("Ethereum object doesn't exist!"), $("p#mintError").text("Connect wallet and refresh!");
        } catch (t) {
            console.log(t), $("p#mintError").text(`${t.data.message}`);
        }
};

$(function () {
    getMinted(),
    startClock(),
    $("button#connect")
        .off()
        .on("click", function (t) {
            t.preventDefault(), connect();
        }),
    $("button#mintButton")
        .off()
        .on("click", function (t) {
            t.preventDefault(), mintBean();
        }),
    $("div#display").off().on('click', 'img', function () {
        $(this).siblings().css( "border", "" );
        $(this).css("border", "solid darkolivegreen 2px");
        $("input#sendInput").val($(this).attr('id').substring(3));
    })
    checkWeb3();
});