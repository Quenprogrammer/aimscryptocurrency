import {communities, platformsLogos} from "../../variables";

interface SocialMediaPlatform {
  SN: number;
  name: string;
  backComImage: string; // Path to the logo image
  code: string;
  description: string;
  global_dominance: number; // Global dominance in percentage
  general_usage: string; // General usage of the platform
  monthly_active_users: number; // Monthly active users in millions
  average_daily_posts: number; // Average daily posts or content shared
  age_demographic: string; // Age group of primary users
  market_share_in_social_media: number; // Platform's market share in social media space
  platform_growth_rate: number; // Growth rate in percentage
  pages_groups: Array<{ name: string; logo: string; link: string; SN?:number }>; // Relevant pages, groups, or hashtags related to crypto
}

export const communitiesData: SocialMediaPlatform[] = [

  {
    "SN": 2,
    "name": "Reddit",
    backComImage: communities + 'reddit.png',
    "code": "Reddit",
    "description": "A vast network of user-generated content and communities centered around various topics, including cryptocurrency.",
    "global_dominance": 6.5,
    "general_usage": "Community-driven discussions, crypto subreddits, news sharing",
    "monthly_active_users": 430,
    "average_daily_posts": 250000,
    "age_demographic": "18-45",
    "market_share_in_social_media": 1.7,
    "platform_growth_rate": 7.2,
    "pages_groups": [
      { "name": "CryptoCurrency", "logo": platformsLogos + 'p65.webp', "link": "https://www.reddit.com/r/CryptoCurrency/" },
      { "name": "Bitcoin", "logo": platformsLogos + 'p111.webp', "link": "https://www.reddit.com/r/Bitcoin/" },
      { "name": "cryptomoonshots", "logo": platformsLogos + 'p14.webp', "link": "https://www.reddit.com/r/cryptomoonshots/" },
      { "name": "ethereum", "logo": platformsLogos + 'p28.webp', "link": "https://www.reddit.com/r/ethereum/" },
      { "name": "cryptotrading", "logo": platformsLogos + 'p132.webp', "link": "https://www.reddit.com/r/cryptotrading/" },
      { "name": "defi", "logo": platformsLogos + 'p59.webp', "link": "https://www.reddit.com/r/defi/" },
      { "name": "cryptomemes", "logo": platformsLogos + 'p20.webp', "link": "https://www.reddit.com/r/cryptomemes/" },
      { "name": "altcoin", "logo": platformsLogos + 'p53.webp', "link": "https://www.reddit.com/r/altcoin/" },
      { "name": "BitcoinCash", "logo": platformsLogos + 'p44.webp', "link": "https://www.reddit.com/r/BitcoinCash/" },
      { "name": "cryptocurrencies", "logo": platformsLogos + 'p78.webp', "link": "https://www.reddit.com/r/cryptocurrencies/" },
      { "name": "cryptobull", "logo": platformsLogos + 'p19.webp', "link": "https://www.reddit.com/r/cryptobull/" },
      { "name": "CryptoMarkets", "logo": platformsLogos + 'p12.webp', "link": "https://www.reddit.com/r/CryptoMarkets/" },
      { "name": "Blockchain", "logo": platformsLogos + 'p118.webp', "link": "https://www.reddit.com/r/Blockchain/" },
      { "name": "cryptoinvesting", "logo": platformsLogos + 'p9.webp', "link": "https://www.reddit.com/r/cryptoinvesting/" },
      { "name": "cryptotechnology", "logo": platformsLogos + 'p136.webp', "link": "https://www.reddit.com/r/cryptotechnology/" },
      { "name": "cryptocoins", "logo": platformsLogos + 'p41.webp', "link": "https://www.reddit.com/r/cryptocoins/" },
      { "name": "NFT", "logo": platformsLogos + 'p40.webp', "link": "https://www.reddit.com/r/NFT/" },
      { "name": "ethtrader", "logo": platformsLogos + 'p123.webp', "link": "https://www.reddit.com/r/ethtrader/" },
      { "name": "cryptowallet", "logo": platformsLogos + 'p76.webp', "link": "https://www.reddit.com/r/cryptowallet/" },
      { "name": "cryptotokens", "logo": platformsLogos + 'p113.webp', "link": "https://www.reddit.com/r/cryptotokens/" },
      { "name": "cryptonews", "logo": platformsLogos + 'b209.webp', "link": "https://www.reddit.com/r/cryptonews/" },
      { "name": "cryptobusiness", "logo": platformsLogos + 'b156.webp', "link": "https://www.reddit.com/r/cryptobusiness/" },
      { "name": "cryptoeconomics", "logo": platformsLogos + 'b133.webp', "link": "https://www.reddit.com/r/cryptoeconomics/" },
      { "name": "crypto", "logo": platformsLogos + 'b36.webp', "link": "https://www.reddit.com/r/crypto/" },
      { "name": "cryptoadvice", "logo": platformsLogos + 'b83.webp', "link": "https://www.reddit.com/r/cryptoadvice/" },
      { "name": "cryptopumps", "logo": platformsLogos + 'b4.webp', "link": "https://www.reddit.com/r/cryptopumps/" },
      { "name": "CryptoMining", "logo": platformsLogos + 'b123.webp', "link": "https://www.reddit.com/r/CryptoMining/" },
      { "name": "CryptoCurrencyTrading", "logo": platformsLogos + 'b184.webp', "link": "https://www.reddit.com/r/CryptoCurrencyTrading/" },
      { "name": "cryptofund", "logo": platformsLogos + 'b88.webp', "link": "https://www.reddit.com/r/cryptofund/" },
      { "name": "cryptogains", "logo": platformsLogos + 'b210.webp', "link": "https://www.reddit.com/r/cryptogains/" }



    ]
  },


  {
    "SN": 3,
    "name": "Telegram",
    backComImage: communities + 'telegram.png',
    "code": "Telegram",
    "description": "A messaging app that has become a popular space for cryptocurrency trading groups, communities, and project updates.",
    "global_dominance": 3.8,
    "general_usage": "Private group messaging, crypto trading signals, community engagement",
    "monthly_active_users": 700,
    "average_daily_posts": 1000000,
    "age_demographic": "16-40",
    "market_share_in_social_media": 1.1,
    "platform_growth_rate": 12.4,
    "pages_groups": [
      {"name": "BitDegree", "logo": platformsLogos + "p68.webp", "link": "https://t.me/BitDegree"},
      {"name": "Crypto Pump Club", "logo": platformsLogos + "p72.webp", "link": "https://t.me/+Uv1Gfc7WmzhhYThk"},
      {"name": "Ian Crypto Trades", "logo": platformsLogos + "p52.webp", "link": "https://t.me/iancryptotrades"},
      {"name": "Crypto Inner Circle", "logo": platformsLogos + "p25.webp", "link": "https://t.me/+91qKtqNz4YUzZGI9"},
      {"name": "Wallstreet Queen Official", "logo": platformsLogos + "p116.webp", "link": "https://t.me/s/wallstreetqueenofficial"},
      {"name": "", "logo": platformsLogos + "p5.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p101.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p136.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p29.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p79.webp", "link": ""},

      {"name": "", "logo": platformsLogos + "p70.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p45.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p103.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p138.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p30.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p67.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p131.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p4.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p134.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p21.webp", "link": ""},


    ]
  },
  {
    "SN": 4,
    "name": "Discord",
    backComImage: communities + 'discord.webp',
    "code": "Discord",
    "description": "A communication app that is widely used for gaming, but has a growing number of crypto and NFT communities.",
    "global_dominance": 5.2,
    "general_usage": "Real-time communication, crypto communities, NFT projects, gaming",
    "monthly_active_users": 350,
    "average_daily_posts": 700000,
    "age_demographic": "16-35",
    "market_share_in_social_media": 0.6,
    "platform_growth_rate": 8.5,
    "pages_groups": [
      {"name": "", "logo": platformsLogos + "p73.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p39.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p6.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p47.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p81.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p49.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p126.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p56.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p140.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "p108.webp", "link": ""}


    ]
  },
  {
    "SN": 5,
    "name": "YouTube",
    backComImage: communities + 'youTube.png',
    "code": "YouTube",
    "description": "The world's largest video-sharing platform, often used for crypto education, news, and influencer-driven content.",
    "global_dominance": 79.2,
    "general_usage": "Video sharing, crypto education, tutorials, influencer content",
    "monthly_active_users": 2500,
    "average_daily_posts": 2000000,
    "age_demographic": "18-45",
    "market_share_in_social_media": 29.4,
    "platform_growth_rate": 7.0,
    "pages_groups": [
      { "name": "Coin Bureau", "link": "https://www.youtube.com/c/CoinBureau", "logo": platformsLogos + 'b112.webp', "SN": 1 },
      { "name": "Altcoin Daily", "link": "https://www.youtube.com/c/AltcoinDaily", "logo": platformsLogos + 'b90.webp', "SN": 2 },
      { "name": "Benjamin Cowen", "link": "https://www.youtube.com/c/BenjaminCowen", "logo": platformsLogos + 'b21.webp', "SN": 5 },
      { "name": "Sheldon Evans", "link": "https://www.youtube.com/c/SheldonEvans", "logo": platformsLogos + 'b41.webp', "SN": 6 },
      { "name": "99Bitcoins", "link": "https://www.youtube.com/c/99Bitcoins", "logo": platformsLogos + 'b149.webp', "SN": 7 },
      { "name": "Crypto Banter", "link": "https://www.youtube.com/c/CryptoBanter", "logo": platformsLogos + 'b167.webp', "SN": 8 },
      { "name": "The Moon", "link": "https://www.youtube.com/c/TheMoonCarl", "logo": platformsLogos + 'b49.webp', "SN": 9 },
      { "name": "Kitco NEWS", "link": "https://www.youtube.com/c/KitcoNews", "logo": platformsLogos + 'b4.webp', "SN": 10 },
      { "name": "DataDash", "link": "https://www.youtube.com/c/DataDash", "logo": platformsLogos + 'b97.webp', "SN": 11 },
      { "name": "Ivan On Tech", "link": "https://www.youtube.com/c/IvanOnTech", "logo": platformsLogos + 'b72.webp', "SN": 12 },
      { "name": "Lark Davis", "link": "https://www.youtube.com/c/LarkDavis", "logo": platformsLogos + 'b108.webp', "SN": 13 },
      { "name": "Crypto Casey", "link": "https://www.youtube.com/c/CryptoCasey", "logo": platformsLogos + 'b61.webp', "SN": 14 },
      { "name": "CoinMarketCap", "link": "https://www.youtube.com/c/CoinMarketCap", "logo": platformsLogos + 'b85.webp', "SN": 15 },
      { "name": "Joe Parys Crypto", "link": "https://www.youtube.com/c/JoeParys", "logo": platformsLogos + 'b198.webp', "SN": 16 },
      { "name": "BitBoy X", "link": "https://www.youtube.com/c/BitBoyX", "logo": platformsLogos + 'b126.webp', "SN": 17 },
      { "name": "aantonop", "link": "https://www.youtube.com/c/aantonop", "logo": platformsLogos + 'b166.webp', "SN": 18 },
      { "name": "Crypto Zombie", "link": "https://www.youtube.com/c/CryptoZombie", "logo": platformsLogos + 'b127.webp', "SN": 19 },
      { "name": "Altcoin Today", "link": "https://www.youtube.com/c/AltcoinToday", "logo": platformsLogos + 'b17.webp', "SN": 20 },
      { "name": "The Cryptoverse", "link": "https://www.youtube.com/c/TheCryptoverse", "logo": platformsLogos + 'b182.webp', "SN": 21 },
      { "name": "Crypto Lark", "link": "https://www.youtube.com/c/CryptoLark", "logo": platformsLogos + 'b74.webp', "SN": 22 },
      { "name": "Tommy Crypto", "link": "https://www.youtube.com/c/TommyCrypto", "logo": platformsLogos + 'b28.webp', "SN": 23 },
      { "name": "CryptosRUs", "link": "https://www.youtube.com/c/CryptosRUs", "logo": platformsLogos + 'b164.webp', "SN": 24 },
      { "name": "Crypto Crew University", "link": "https://www.youtube.com/c/CryptoCrewUniversity", "logo": platformsLogos + 'b179.webp', "SN": 25 },
      { "name": "Crypto Empire", "link": "https://www.youtube.com/c/CryptoEmpire", "logo": platformsLogos + 'b114.webp', "SN": 26 },
      { "name": "The Modern Investor", "link": "https://www.youtube.com/c/TheModernInvestor", "logo": platformsLogos + 'b69.webp', "SN": 27 },
      { "name": "Crypto Wires", "link": "https://www.youtube.com/c/CryptoWires", "logo": platformsLogos + 'b136.webp', "SN": 28 },
      { "name": "Crypto News", "link": "https://www.youtube.com/c/CryptoNews", "logo": platformsLogos + 'b199.webp', "SN": 29 },
      { "name": "Crypto Daily", "link": "https://www.youtube.com/c/CryptoDaily", "logo": platformsLogos + 'b112.webp', "SN": 30 }
    ]




  },
  {
    "SN": 6,
    "name": "X (formerly Twitter)",
    backComImage: communities + 'x.png',
    "code": "X",
    "description": "A platform for real-time interactions, rebranded from Twitter, with increasing focus on decentralized technologies and Web3.",
    "global_dominance": 13.1,
    "general_usage": "News sharing, quick updates, crypto-related threads, discussions",
    "monthly_active_users": 350,
    "average_daily_posts": 400000,
    "age_demographic": "18-34",
    "market_share_in_social_media": 2.9,
    "platform_growth_rate": 6.5,
    "pages_groups": [
      {"name": "", "logo": platformsLogos + "b93.webp", "link": ""},


    ]
  },
  {
    "SN": 7,
    "name": "LinkedIn",
    backComImage: communities + 'linkein.png',
    "code": "LinkedIn",
    "description": "A professional networking platform, also used for blockchain and crypto business networking and thought leadership.",
    "global_dominance": 7.2,
    "general_usage": "Professional networking, industry news, job searching, blockchain business",
    "monthly_active_users": 900,
    "average_daily_posts": 300000,
    "age_demographic": "25-45",
    "market_share_in_social_media": 3.5,
    "platform_growth_rate": 4.1,
    "pages_groups": [
      { "name": "Coinbase", "link": "https://www.linkedin.com/company/coinbase", "logo": platformsLogos + 'b141.webp', "SN": 1 },
      { "name": "Binance", "link": "https://www.linkedin.com/company/binance", "logo": platformsLogos + 'b196.webp', "SN": 2 },
      { "name": "Kraken", "link": "https://www.linkedin.com/company/krakenfx", "logo": platformsLogos + 'b220.webp', "SN": 3 },
      { "name": "Gemini", "link": "https://www.linkedin.com/company/gemini", "logo": platformsLogos + 'b122.webp', "SN": 4 },
      { "name": "Bitfinex", "link": "https://www.linkedin.com/company/bitfinex", "logo": platformsLogos + 'b25.webp', "SN": 5 },
      { "name": "Bitstamp", "link": "https://www.linkedin.com/company/bitstamp", "logo": platformsLogos + 'b142.webp', "SN": 6 },
      { "name": "eToro", "link": "https://www.linkedin.com/company/etoro", "logo": platformsLogos + 'b143.webp', "SN": 7 },
      { "name": "Blockchain.com", "link": "https://www.linkedin.com/company/blockchain", "logo": platformsLogos + 'b17.webp', "SN": 8 },
      { "name": "Ledger", "link": "https://www.linkedin.com/company/ledgerhq", "logo": platformsLogos + 'b129.webp', "SN": 9 },
      { "name": "Circle", "link": "https://www.linkedin.com/company/circle", "logo": platformsLogos + 'b143.webp', "SN": 10 },
      { "name": "CoinMarketCap", "link": "https://www.linkedin.com/company/coinmarketcap", "logo": platformsLogos + 'b118.webp', "SN": 11 },
      { "name": "CoinGecko", "link": "https://www.linkedin.com/company/coingecko", "logo": platformsLogos + 'b175.webp', "SN": 12 },
      { "name": "Chainalysis", "link": "https://www.linkedin.com/company/chainalysis", "logo": platformsLogos + 'b163.webp', "SN": 13 },
      { "name": "Ripple", "link": "https://www.linkedin.com/company/ripple-labs", "logo": platformsLogos + 'b65.webp', "SN": 14 },
      { "name": "BlockFi", "link": "https://www.linkedin.com/company/blockfi", "logo": platformsLogos + 'b100.webp', "SN": 15 },
      { "name": "BitPay", "link": "https://www.linkedin.com/company/bitpay", "logo": platformsLogos + 'b14.webp', "SN": 16 },
      { "name": "CoinDesk", "link": "https://www.linkedin.com/company/coindesk", "logo": platformsLogos + 'b37.webp', "SN": 17 },
      { "name": "KuCoin", "link": "https://www.linkedin.com/company/kucoin", "logo": platformsLogos + 'b173.webp', "SN": 18 },
      { "name": "Huobi", "link": "https://www.linkedin.com/company/huobi", "logo": platformsLogos + 'b105.webp', "SN": 19 },
      { "name": "OKX", "link": "https://www.linkedin.com/company/okx", "logo": platformsLogos + 'b67.webp', "SN": 20 },
      { "name": "Paxos", "link": "https://www.linkedin.com/company/paxos", "logo": platformsLogos + 'b103.webp', "SN": 21 },
      { "name": "Trust Wallet", "link": "https://www.linkedin.com/company/trust-wallet", "logo": platformsLogos + 'b167.webp', "SN": 22 },
      { "name": "Tether", "link": "https://www.linkedin.com/company/tether", "logo": platformsLogos + 'b213.webp', "SN": 23 },
      { "name": "Zcash", "link": "https://www.linkedin.com/company/zcash", "logo": platformsLogos + 'b2.webp', "SN": 24 },
      { "name": "Polygon", "link": "https://www.linkedin.com/company/polygon", "logo": platformsLogos + 'b45.webp', "SN": 25 },
      { "name": "Chainlink", "link": "https://www.linkedin.com/company/chainlink", "logo": platformsLogos + 'b16.webp', "SN": 26 },
      { "name": "SushiSwap", "link": "https://www.linkedin.com/company/sushiswap", "logo": platformsLogos + 'b180.webp', "SN": 27 },
      { "name": "Uniswap", "link": "https://www.linkedin.com/company/uniswap", "logo": platformsLogos + 'b9.webp', "SN": 28 },
      { "name": "Gemini Trust Company", "link": "https://www.linkedin.com/company/gemini-trust-company", "logo": platformsLogos + 'b12.webp', "SN": 29 },
      { "name": "Celsius Network", "link": "https://www.linkedin.com/company/celsius-network", "logo": platformsLogos + 'b109.webp', "SN": 30 }
    ]


  },

  {
    "SN": 9,
    "name": "GitHub",
    backComImage: communities + 'null3.png',
    "code": "GitHub",
    "description": "A platform for software development and version control, used widely by blockchain and crypto developers to host projects.",
    "global_dominance": 22.7,
    "general_usage": "Code hosting, project development, open-source collaboration, blockchain development",
    "monthly_active_users": 350,
    "average_daily_posts": 80000,
    "age_demographic": "20-40",
    "market_share_in_social_media": 1.5,
    "platform_growth_rate": 10.0,
    "pages_groups": [
      { "name": "Internet Computer", "link": "https://github.com/dfinity", "logo": platformsLogos + ' ', "SN": 1 },
      { "name": "Corda", "link": "https://github.com/corda", "logo": platformsLogos + ' ', "SN": 2 },
      { "name": "NEO", "link": "https://github.com/neo-project", "logo": platformsLogos + ' ', "SN": 3 },
      { "name": "Binance Smart Chain", "link": "https://github.com/bnb-chain", "logo": platformsLogos + ' ', "SN": 4 },
      { "name": "Ethereum", "link": "https://github.com/ethereum", "logo": platformsLogos + ' ', "SN": 5 },
      { "name": "Bitcoin", "link": "https://github.com/bitcoin/bitcoin", "logo": platformsLogos + ' ', "SN": 6 },
      { "name": "Solana", "link": "https://github.com/solana-labs/solana", "logo": platformsLogos + ' ', "SN": 7 },
      { "name": "Polkadot", "link": "https://github.com/paritytech/polkadot", "logo": platformsLogos + ' ', "SN": 8 },
      { "name": "Cardano", "link": "https://github.com/input-output-hk/cardano-node", "logo": platformsLogos + ' ', "SN": 9 },
      { "name": "Avalanche", "link": "https://github.com/ava-labs/avalanchego", "logo": platformsLogos + ' ', "SN": 10 },
      { "name": "Tezos", "link": "https://github.com/tezos/tezos", "logo": platformsLogos + ' ', "SN": 11 },
      { "name": "EOSIO", "link": "https://github.com/EOSIO/eos", "logo": platformsLogos + ' ', "SN": 12 },
      { "name": "Tron", "link": "https://github.com/tronprotocol", "logo": platformsLogos + ' ', "SN": 13 },
      { "name": "Cosmos", "link": "https://github.com/cosmos/cosmos-sdk", "logo": platformsLogos + ' ', "SN": 14 },
      { "name": "Algorand", "link": "https://github.com/algorand", "logo": platformsLogos + ' ', "SN": 15 },
      { "name": "Filecoin", "link": "https://github.com/filecoin-project", "logo": platformsLogos + ' ', "SN": 16 },
      { "name": "Zcash", "link": "https://github.com/zcash/zcash", "logo": platformsLogos + ' ', "SN": 17 },
      { "name": "Litecoin", "link": "https://github.com/litecoin-project", "logo": platformsLogos + ' ', "SN": 18 },
      { "name": "Chainlink", "link": "https://github.com/smartcontractkit/chainlink", "logo": platformsLogos + ' ', "SN": 19 },
      { "name": "Stellar", "link": "https://github.com/stellar", "logo": platformsLogos + ' ', "SN": 20 },
      { "name": "VeChain", "link": "https://github.com/vechain", "logo": platformsLogos + ' ', "SN": 21 },
      { "name": "Aave", "link": "https://github.com/aave", "logo": platformsLogos + ' ', "SN": 22 },
      { "name": "MakerDAO", "link": "https://github.com/makerdao", "logo": platformsLogos + ' ', "SN": 23 },
      { "name": "Uniswap", "link": "https://github.com/Uniswap", "logo": platformsLogos + ' ', "SN": 24 },
      { "name": "SushiSwap", "link": "https://github.com/sushiswap", "logo": platformsLogos + ' ', "SN": 25 },
      { "name": "PancakeSwap", "link": "https://github.com/pancakeswap", "logo": platformsLogos + ' ', "SN": 26 },
      { "name": "Yearn Finance", "link": "https://github.com/yearn", "logo": platformsLogos + ' ', "SN": 27 },
      { "name": "Compound", "link": "https://github.com/compound-finance", "logo": platformsLogos + ' ', "SN": 28 },
      { "name": "Balancer", "link": "https://github.com/balancer-labs", "logo": platformsLogos + ' ', "SN": 29 },
      { "name": "Synthetix", "link": "https://github.com/Synthetixio", "logo": platformsLogos + ' ', "SN": 30 }
    ]

  },
  {
    "SN": 10,
    "name": "Signal",
    backComImage: communities + 'windows.png',
    "code": "Signal",
    "description": "A secure messaging app used by crypto communities for private communication and sharing trading signals.",
    "global_dominance": 0.6,
    "general_usage": "Encrypted messaging, private trading signals, crypto discussion",
    "monthly_active_users": 50,
    "average_daily_posts": 20000,
    "age_demographic": "18-40",
    "market_share_in_social_media": 0.1,
    "platform_growth_rate": 15.2,
    "pages_groups": []
  },
  {
    "SN": 11,
    "name": "Facebook",
    backComImage: communities + 'facebook.png',
    "code": "Facebook",
    "description": "One of the largest social media platforms, with numerous groups dedicated to cryptocurrency news, discussions, and projects.",
    "global_dominance": 59.5,
    "general_usage": "Social networking, news sharing, crypto groups",
    "monthly_active_users": 2900,
    "average_daily_posts": 1500000,
    "age_demographic": "18-65",
    "market_share_in_social_media": 24.4,
    "platform_growth_rate": 2.3,
    "pages_groups": [
      { "name": "Bitcoin", "link": "https://www.facebook.com/bitcoin", "logo": platformsLogos + ' ', "SN": 1 },
      { "name": "Ethereum", "link": "https://www.facebook.com/ethereum", "logo": platformsLogos + ' ', "SN": 2 },
      { "name": "Binance", "link": "https://www.facebook.com/binance", "logo": platformsLogos + ' ', "SN": 3 },
      { "name": "CryptoCurrency News", "link": "https://www.facebook.com/CryptoCurrencyNewsOfficial", "logo": platformsLogos + ' ', "SN": 4 },
      { "name": "Bitcoin Magazine", "link": "https://www.facebook.com/BitcoinMagazine", "logo": platformsLogos + ' ', "SN": 5 },
      { "name": "Cointelegraph", "link": "https://www.facebook.com/Cointelegraph", "logo": platformsLogos + ' ', "SN": 6 },
      { "name": "Blockchain", "link": "https://www.facebook.com/Blockchain", "logo": platformsLogos + ' ', "SN": 7 },
      { "name": "Crypto Investor", "link": "https://www.facebook.com/CryptoInvestor", "logo": platformsLogos + ' ', "SN": 8 },
      { "name": "Coinbase", "link": "https://www.facebook.com/coinbase", "logo": platformsLogos + ' ', "SN": 9 },
      { "name": "Bitcoin Cash", "link": "https://www.facebook.com/BitcoinCash", "logo": platformsLogos + ' ', "SN": 10 },
      { "name": "Litecoin", "link": "https://www.facebook.com/Litecoin", "logo": platformsLogos + ' ', "SN": 11 },
      { "name": "Ripple", "link": "https://www.facebook.com/Ripple", "logo": platformsLogos + ' ', "SN": 12 },
      { "name": "Tezos", "link": "https://www.facebook.com/Tezos", "logo": platformsLogos + ' ', "SN": 13 },
      { "name": "Cardano", "link": "https://www.facebook.com/Cardano", "logo": platformsLogos + ' ', "SN": 14 },
      { "name": "Polkadot", "link": "https://www.facebook.com/Polkadot", "logo": platformsLogos + ' ', "SN": 15 },
      { "name": "Avalanche", "link": "https://www.facebook.com/Avalanche", "logo": platformsLogos + ' ', "SN": 16 },
      { "name": "Solana", "link": "https://www.facebook.com/Solana", "logo": platformsLogos + ' ', "SN": 17 },
      { "name": "Chainlink", "link": "https://www.facebook.com/chainlink", "logo": platformsLogos + ' ', "SN": 18 },
      { "name": "Polkadot Network", "link": "https://www.facebook.com/PolkadotNetwork", "logo": platformsLogos + ' ', "SN": 19 },
      { "name": "CryptoPunks", "link": "https://www.facebook.com/cryptopunks", "logo": platformsLogos + ' ', "SN": 20 },
      { "name": "Crypto Kitties", "link": "https://www.facebook.com/CryptoKitties", "logo": platformsLogos + ' ', "SN": 21 },
      { "name": "Crypto.com", "link": "https://www.facebook.com/Crypto.com", "logo": platformsLogos + ' ', "SN": 22 },
      { "name": "Bitfinex", "link": "https://www.facebook.com/bitfinex", "logo": platformsLogos + ' ', "SN": 23 },
      { "name": "Bitstamp", "link": "https://www.facebook.com/bitstamp", "logo": platformsLogos + ' ', "SN": 24 },
      { "name": "CoinMarketCap", "link": "https://www.facebook.com/CoinMarketCap", "logo": platformsLogos + ' ', "SN": 25 },
      { "name": "CoinGecko", "link": "https://www.facebook.com/CoinGecko", "logo": platformsLogos + ' ', "SN": 26 },
      { "name": "Binance Academy", "link": "https://www.facebook.com/binance.academy", "logo": platformsLogos + ' ', "SN": 27 },
      { "name": "Ethereum Classic", "link": "https://www.facebook.com/EthereumClassic", "logo": platformsLogos + ' ', "SN": 28 },
      { "name": "Decentraland", "link": "https://www.facebook.com/Decentraland", "logo": platformsLogos + ' ', "SN": 29 },
      { "name": "Zcash", "link": "https://www.facebook.com/Zcash", "logo": platformsLogos + ' ', "SN": 30 }
    ]

  },
  {
    "SN": 12,
    "name": "Instagram",
    backComImage: communities + 'Instagram.png',
    "code": "Instagram",
    "description": "A photo and video sharing platform, widely used for crypto influencers, educational content, and NFT projects.",
    "global_dominance": 50.1,
    "general_usage": "Image/video sharing, influencer marketing, crypto tutorials",
    "monthly_active_users": 2200,
    "average_daily_posts": 1800000,
    "age_demographic": "18-34",
    "market_share_in_social_media": 21.3,
    "platform_growth_rate": 4.2,
    "pages_groups": [


    ]
  },
  {
    "SN": 13,
    "name": "Devs",
    backComImage: communities + 'null2.png',
    "code": "Devs",
    "description": "A platform where blockchain developers share knowledge, tutorials, and resources related to blockchain technology and crypto projects.",
    "global_dominance": 0.9,
    "general_usage": "Developer resources, blockchain tutorials, coding challenges",
    "monthly_active_users": 25,
    "average_daily_posts": 10000,
    "age_demographic": "22-40",
    "market_share_in_social_media": 0.05,
    "platform_growth_rate": 10.1,
    "pages_groups": []
  },

  {
    "SN": 15,
    "name": "Snapchat",
    backComImage: communities + 'SNap.webp',
    "code": "Snapchat",
    "description": "A multimedia messaging app gaining traction among younger crypto enthusiasts who share crypto-related stories and updates.",
    "global_dominance": 6.5,
    "general_usage": "Short-form content, news sharing, crypto memes",
    "monthly_active_users": 400,
    "average_daily_posts": 1500000,
    "age_demographic": "13-34",
    "market_share_in_social_media": 3.2,
    "platform_growth_rate": 8.1,
    "pages_groups": [
      {"name": "", "logo": platformsLogos + "b17.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b155.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b109.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b189.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b158.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b72.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b90.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b110.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b184.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b141.webp", "link": ""},
      ]
  },
  {
    "SN": 16,
    "name": "YouTube",
    backComImage: communities + 'youTube.png',
    "code": "YouTube",
    "description": "The world's largest video-sharing platform, often used for crypto education, news, and influencer-driven content.",
    "global_dominance": 79.2,
    "general_usage": "Video sharing, crypto education, tutorials, influencer content",
    "monthly_active_users": 2500,
    "average_daily_posts": 2000000,
    "age_demographic": "18-45",
    "market_share_in_social_media": 29.4,
    "platform_growth_rate": 7.0,
    "pages_groups": [
      {"name": "", "logo": platformsLogos + "b118.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b150.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b140.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b75.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b106.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b173.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b77.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b150.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b122.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b144.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b94.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b162.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b102.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b55.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b139.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b136.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b169.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b172.webp", "link": ""},

    ]
  },
  {
    "SN": 17,
    "name": "Mastodon",
    backComImage: communities + 'mastodon.png',
    "code": "Mastodon",
    "description": "A decentralized social network with a focus on privacy and open-source values, growing within crypto circles.",
    "global_dominance": 0.4,
    "general_usage": "Decentralized social networking, privacy-focused crypto discussions",
    "monthly_active_users": 8,
    "average_daily_posts": 5000,
    "age_demographic": "18-40",
    "market_share_in_social_media": 0.02,
    "platform_growth_rate": 18.0,
    "pages_groups": []
  },

  {
    "SN": 19,
    "name": "Pinterest",
    backComImage: communities + 'printrest.webp',
    "code": "Pinterest",
    "description": "A visual discovery engine used by crypto enthusiasts to share infographics, charts, and crypto-related imagery.",
    "global_dominance": 3.8,
    "general_usage": "Image sharing, crypto infographics, educational content",
    "monthly_active_users": 480,
    "average_daily_posts": 450000,
    "age_demographic": "18-44",
    "market_share_in_social_media": 2.5,
    "platform_growth_rate": 3.5,
    "pages_groups": []
  },
  {
    "SN": 20,
    "name": "TikTok",
    backComImage: communities + 'tiktok.webp',
    "code": "TikTok",
    "description": "A video-sharing app where crypto influencers, traders, and enthusiasts share short-form content, news, and viral crypto challenges.",
    "global_dominance": 46.0,
    "general_usage": "Short videos, viral crypto content, crypto challenges",
    "monthly_active_users": 1500,
    "average_daily_posts": 1000000,
    "age_demographic": "16-30",
    "market_share_in_social_media": 12.7,
    "platform_growth_rate": 22.3,
    "pages_groups": []
  },
  {
    "SN": 20,
    "name": "Web",
    backComImage: communities + 'wb.webp',
    "code": "TikTok",
    "description": "A video-sharing app where crypto influencers, traders, and enthusiasts share short-form content, news, and viral crypto challenges.",
    "global_dominance": 46.0,
    "general_usage": "Short videos, viral crypto content, crypto challenges",
    "monthly_active_users": 1500,
    "average_daily_posts": 1000000,
    "age_demographic": "16-30",
    "market_share_in_social_media": 12.7,
    "platform_growth_rate": 22.3,
    "pages_groups": [
      {
        "name": "r/CryptoCurrency",
        "link": "https://www.reddit.com/r/CryptoCurrency/",
        "SN": 1,
        "logo": platformsLogos + ""
      },
      {
        "name": "r/Bitcoin",
        "link": "https://www.reddit.com/r/Bitcoin/",
        "SN": 2,
        "logo": platformsLogos + ""
      },
      {
        "name": "Elite Crypto Signals",
        "link": "https://ninjapromo.io/best-crypto-discord-servers-to-join",
        "SN": 3,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cryptohub",
        "link": "https://ninjapromo.io/best-crypto-discord-servers-to-join",
        "SN": 4,
        "logo": platformsLogos + ""
      },
      {
        "name": "AXION Crypto-Community",
        "link": "https://helalabs.com/blog/12-best-crypto-communities-to-join-in-2024/",
        "SN": 5,
        "logo": platformsLogos + ""
      },
      {
        "name": "NFT World",
        "link": "https://helalabs.com/blog/12-best-crypto-communities-to-join-in-2024/",
        "SN": 6,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cracking Crypto",
        "link": "https://helalabs.com/blog/12-best-crypto-communities-to-join-in-2024/",
        "SN": 7,
        "logo": platformsLogos + ""
      },
      {
        "name": "r/Wallstreetbets",
        "link": "https://www.reddit.com/r/wallstreetbets/",
        "SN": 8,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Nation",
        "link": "https://helalabs.com/blog/12-best-crypto-communities-to-join-in-2024/",
        "SN": 9,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cryptex Commonwealth",
        "link": "https://helalabs.com/blog/12-best-crypto-communities-to-join-in-2024/",
        "SN": 10,
        "logo": platformsLogos + ""
      },
      {
        "name": "Ethereum London",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 11,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cardano Blockchain London",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 12,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain London",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 13,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchains For Good Crypto Bootcamp and Investment Club",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 14,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin & Blockchain Leadership Forum",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 15,
        "logo": platformsLogos + ""
      },
      {
        "name": "Virtual Enterprise Ethereum Alliance Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 16,
        "logo": platformsLogos + ""
      },
      {
        "name": "London Cryptocurrency Club",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 17,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin and Blockchain London",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 18,
        "logo": platformsLogos + ""
      },
      {
        "name": "Ho Chi Minh City Blockchain Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/vn/",
        "SN": 19,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bundle Africa",
        "link": "https://en.wikipedia.org/wiki/Bundle_Africa",
        "SN": 20,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Nigeria User Group",
        "link": "https://www.bitcoin.org.ng/",
        "SN": 21,
        "logo": platformsLogos + ""
      },
      {
        "name": "South Africa Bitcoin Meetup",
        "link": "https://www.meetup.com/South-Africa-Bitcoin-Meetup/",
        "SN": 22,
        "logo": platformsLogos + ""
      },
      {
        "name": "Kenya Blockchain Meetup",
        "link": "https://www.meetup.com/Kenya-Blockchain-Meetup/",
        "SN": 23,
        "logo": platformsLogos + ""
      },
      {
        "name": "Ghana Blockchain Conference",
        "link": "https://www.ghanablockchainconference.com/",
        "SN": 24,
        "logo": platformsLogos + ""
      },
      {
        "name": "Morocco Blockchain Meetup",
        "link": "https://www.meetup.com/Morocco-Blockchain-Meetup/",
        "SN": 25,
        "logo": platformsLogos + ""
      },
      {
        "name": "Egypt Blockchain Community",
        "link": "https://www.meetup.com/Egypt-Blockchain-Community/",
        "SN": 26,
        "logo": platformsLogos + ""
      },
      {
        "name": "Zimbabwe Blockchain Meetup",
        "link": "https://www.meetup.com/Zimbabwe-Blockchain-Meetup/",
        "SN": 27,
        "logo": platformsLogos + ""
      },
      {
        "name": "Uganda Blockchain Association",
        "link": "https://ugandablockchainassociation.org/",
        "SN": 28,
        "logo": platformsLogos + ""
      },
      {
        "name": "Tanzania Blockchain Meetup",
        "link": "https://www.meetup.com/Tanzania-Blockchain-Meetup/",
        "SN": 29,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Coin Society (USA)",
        "link": "https://cryptocoinsociety.com/",
        "SN": 30,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Miami (USA)",
        "link": "https://www.bitcoinmiami.com/",
        "SN": 31,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Vancouver (Canada)",
        "link": "https://www.meetup.com/Crypto-Vancouver/",
        "SN": 32,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoChicks (Canada)",
        "link": "https://www.crypto-chicks.ca/",
        "SN": 33,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain NYC (USA)",
        "link": "https://www.meetup.com/Blockchain-NYC/",
        "SN": 34,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Valley (USA)",
        "link": "https://www.meetup.com/crypto-valley/",
        "SN": 35,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Embassy (Canada)",
        "link": "https://bitcoinembassy.ca/",
        "SN": 36,
        "logo": platformsLogos + ""
      },
      {
        "name": "DeFi (USA)",
        "link": "https://www.defi.org/",
        "SN": 37,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Manchester",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 38,
        "logo": platformsLogos + ""
      },
      {
        "name": "EdTech Insiders; The Leading Education Technology Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/gb/",
        "SN": 39,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Singapore Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/sg/",
        "SN": 40,
        "logo": platformsLogos + ""
      },
      {
        "name": "Hong Kong Blockchain Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/hk/",
        "SN": 41,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto India Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/in/",
        "SN": 42,
        "logo": platformsLogos + ""
      },
      {
        "name": "Tokyo Bitcoin Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/jp/",
        "SN": 43,
        "logo": platformsLogos + ""
      },
      {
        "name": "Kuala Lumpur Blockchain Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/my/",
        "SN": 44,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bangkok Blockchain Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/th/",
        "SN": 45,
        "logo": platformsLogos + ""
      },
      {
        "name": "Seoul Crypto Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/kr/",
        "SN": 46,
        "logo": platformsLogos + ""
      },
      {
        "name": "Manila Blockchain Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/ph/",
        "SN": 47,
        "logo": platformsLogos + ""
      },
      {
        "name": "Jakarta Blockchain Meetup",
        "link": "https://www.meetup.com/topics/cryptocurrency/id/",
        "SN": 48,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Argentina (Argentina)",
        "link": "https://www.bitcoinargentina.org/",
        "SN": 49,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Mexico (Mexico)",
        "link": "https://www.meetup.com/blockchain-mexico/",
        "SN": 50,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Investor Network (USA)",
        "link": "https://www.cryptoinvestornetwork.com/",
        "SN": 51,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Houston (USA)",
        "link": "https://www.meetup.com/Blockchain-Houston/",
        "SN": 52,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Toronto (Canada)",
        "link": "https://www.meetup.com/Blockchain-Toronto/",
        "SN": 53,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Guadalajara (Mexico)",
        "link": "https://www.meetup.com/crypto-guadalajara/",
        "SN": 54,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Buenos Aires (Argentina)",
        "link": "https://www.meetup.com/bitcoin-buenos-aires/",
        "SN": 55,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto San Francisco (USA)",
        "link": "https://www.meetup.com/Crypto-San-Francisco/",
        "SN": 56,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Costa Rica (Costa Rica)",
        "link": "https://www.meetup.com/blockchain-costa-rica/",
        "SN": 57,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Nova Scotia (Canada)",
        "link": "https://www.meetup.com/Crypto-Nova-Scotia/",
        "SN": 58,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Bogotá (Colombia)",
        "link": "https://www.meetup.com/bitcoin-bogota/",
        "SN": 59,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Miami (USA)",
        "link": "https://www.meetup.com/Blockchain-Miami/",
        "SN": 60,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin São Paulo (Brazil)",
        "link": "https://www.meetup.com/bitcoin-sao-paulo/",
        "SN": 61,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Brazil (Brazil)",
        "link": "https://www.cryptobrazil.com.br/",
        "SN": 62,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Rio de Janeiro (Brazil)",
        "link": "https://www.meetup.com/Blockchain-Rio-de-Janeiro/",
        "SN": 63,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Recife (Brazil)",
        "link": "https://www.meetup.com/crypto-recife/",
        "SN": 64,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Porto Alegre (Brazil)",
        "link": "https://www.meetup.com/bitcoin-porto-alegre/",
        "SN": 65,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Latin America (Mexico)",
        "link": "https://www.meetup.com/Blockchain-Latin-America/",
        "SN": 66,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Chile (Chile)",
        "link": "https://www.meetup.com/crypto-chile/",
        "SN": 67,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Buenos Aires (Argentina)",
        "link": "https://www.meetup.com/crypto-buenos-aires/",
        "SN": 68,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Lima (Peru)",
        "link": "https://www.meetup.com/bitcoin-lima/",
        "SN": 69,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockchain Colombia (Colombia)",
        "link": "https://www.meetup.com/Blockchain-Colombia/",
        "SN": 70,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinDesk",
        "link": "https://www.coindesk.com/",
        "SN": 71,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cointelegraph",
        "link": "https://cointelegraph.com/",
        "SN": 72,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Magazine",
        "link": "https://bitcoinmagazine.com/",
        "SN": 73,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoPotato",
        "link": "https://cryptopotato.com/",
        "SN": 74,
        "logo": platformsLogos + ""
      },
      {
        "name": "NewsBTC",
        "link": "https://www.newsbtc.com/",
        "SN": 75,
        "logo": platformsLogos + ""
      },
      {
        "name": "BeInCrypto",
        "link": "https://beincrypto.com/",
        "SN": 76,
        "logo": platformsLogos + ""
      },
      {
        "name": "DailyCoin",
        "link": "https://dailycoin.com/",
        "SN": 77,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinGecko",
        "link": "https://www.coingecko.com/",
        "SN": 78,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinMarketCap",
        "link": "https://coinmarketcap.com/",
        "SN": 79,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoBriefing",
        "link": "https://cryptobriefing.com/",
        "SN": 80,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto.News",
        "link": "https://crypto.news/",
        "SN": 81,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin.com",
        "link": "https://www.bitcoin.com/",
        "SN": 82,
        "logo": platformsLogos + ""
      },
      {
        "name": "Forbes Crypto & Blockchain",
        "link": "https://www.forbes.com/crypto-blockchain/",
        "SN": 83,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Daily",
        "link": "https://cryptodaily.co.uk/",
        "SN": 84,
        "logo": platformsLogos + ""
      },
      {
        "name": "Kraken Blog",
        "link": "https://blog.kraken.com/",
        "SN": 85,
        "logo": platformsLogos + ""
      },
      {
        "name": "Ethereum Blog",
        "link": "https://blog.ethereum.org/",
        "SN": 86,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cryptonews",
        "link": "https://cryptonews.com/",
        "SN": 87,
        "logo": platformsLogos + ""
      },
      {
        "name": "Brave New Coin",
        "link": "https://bravenewcoin.com/",
        "SN": 88,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Adventure",
        "link": "https://cryptoadventure.org/",
        "SN": 89,
        "logo": platformsLogos + ""
      },
      {
        "name": "99Bitcoins",
        "link": "https://99bitcoins.com/",
        "SN": 90,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoSlate",
        "link": "https://cryptoslate.com/",
        "SN": 91,
        "logo": platformsLogos + ""
      },
      {
        "name": "Decrypt",
        "link": "https://decrypt.co/",
        "SN": 92,
        "logo": platformsLogos + ""
      },
      {
        "name": "The Block",
        "link": "https://www.theblock.co/",
        "SN": 93,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinSpeaker",
        "link": "https://www.coinspeaker.com/",
        "SN": 94,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoCompare",
        "link": "https://www.cryptocompare.com/",
        "SN": 95,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinPedia",
        "link": "https://coinpedia.org/",
        "SN": 96,
        "logo": platformsLogos + ""
      },
      {
        "name": "AMBCrypto",
        "link": "https://ambcrypto.com/",
        "SN": 97,
        "logo": platformsLogos + ""
      },
      {
        "name": "U.Today",
        "link": "https://u.today/",
        "SN": 98,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoNewsZ",
        "link": "https://www.cryptonewsz.com/",
        "SN": 99,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinJournal",
        "link": "https://coinjournal.net/",
        "SN": 100,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoNews",
        "link": "https://cryptonews.com/",
        "SN": 101,
        "logo": platformsLogos + ""
      },
      {
        "name": "LiveBitcoinNews",
        "link": "https://www.livebitcoinnews.com/",
        "SN": 102,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cryptovest",
        "link": "https://cryptovest.com/",
        "SN": 103,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockgeeks",
        "link": "https://blockgeeks.com/",
        "SN": 104,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinDesk Learning",
        "link": "https://www.coindesk.com/learn/",
        "SN": 105,
        "logo": platformsLogos + ""
      },
      {
        "name": "BitcoinChaser",
        "link": "https://bitcoinchaser.com/",
        "SN": 106,
        "logo": platformsLogos + ""
      },
      {
        "name": "Investopedia (Crypto)",
        "link": "https://www.investopedia.com/cryptocurrency-4427699",
        "SN": 107,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinMarketCap Blog",
        "link": "https://blog.coinmarketcap.com/",
        "SN": 108,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoTrader.Tax Blog",
        "link": "https://cryptotrader.tax/blog",
        "SN": 109,
        "logo": platformsLogos + ""
      },
      {
        "name": "The Defiant",
        "link": "https://thedefiant.io/",
        "SN": 110,
        "logo": platformsLogos + ""
      },
      {
        "name": "99 Bitcoins",
        "link": "https://99bitcoins.com/",
        "SN": 111,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitrates",
        "link": "https://www.bitrates.com/",
        "SN": 112,
        "logo": platformsLogos + ""
      },
      {
        "name": "Token Daily",
        "link": "https://www.tokendaily.co/",
        "SN": 113,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoTips",
        "link": "https://cryptotips.eu/",
        "SN": 114,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoin Exchange Guide",
        "link": "https://bitcoinexchangeguide.com/",
        "SN": 115,
        "logo": platformsLogos + ""
      },
      {
        "name": "Coinspeaker Markets",
        "link": "https://markets.coinspeaker.com/",
        "SN": 116,
        "logo": platformsLogos + ""
      },
      {
        "name": "BTCManager",
        "link": "https://btcmanager.com/",
        "SN": 117,
        "logo": platformsLogos + ""
      },
      {
        "name": "AltcoinTrader Blog",
        "link": "https://www.altcointrader.co.za/blog/",
        "SN": 118,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcointalk Forum",
        "link": "https://bitcointalk.org/",
        "SN": 119,
        "logo": platformsLogos + ""
      },
      {
        "name": "Altcoin Buzz",
        "link": "https://www.altcoinbuzz.io/",
        "SN": 120,
        "logo": platformsLogos + ""
      },
      {
        "name": "Reddit Cryptocurrency",
        "link": "https://www.reddit.com/r/cryptocurrency/",
        "SN": 121,
        "logo": platformsLogos + ""
      },
      {
        "name": "The Crypto Updates",
        "link": "https://www.thecryptoupdates.com/",
        "SN": 122,
        "logo": platformsLogos + ""
      },
      {
        "name": "Bitcoinist",
        "link": "https://bitcoinist.com/",
        "SN": 123,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoMode",
        "link": "https://cryptomode.com/",
        "SN": 124,
        "logo": platformsLogos + ""
      },
      {
        "name": "Blockonomi",
        "link": "https://blockonomi.com/",
        "SN": 125,
        "logo": platformsLogos + ""
      },
      {
        "name": "HackerNoon (Crypto)",
        "link": "https://hackernoon.com/tagged/cryptocurrency",
        "SN": 126,
        "logo": platformsLogos + ""
      },
      {
        "name": "TradingView Crypto Ideas",
        "link": "https://www.tradingview.com/ideas/cryptocurrency/",
        "SN": 127,
        "logo": platformsLogos + ""
      },
      {
        "name": "Medium Cryptocurrency",
        "link": "https://medium.com/topic/cryptocurrency",
        "SN": 128,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoManiaks",
        "link": "https://cryptomaniaks.com/",
        "SN": 129,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoSlate Projects",
        "link": "https://cryptoslate.com/cryptos/",
        "SN": 130,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoCompare Blogs",
        "link": "https://www.cryptocompare.com/",
        "SN": 131,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoWorld News",
        "link": "https://cryptoworldnews.us/",
        "SN": 132,
        "logo": platformsLogos + ""
      },
      {
        "name": "Ledger Insights",
        "link": "https://www.ledgerinsights.com/",
        "SN": 133,
        "logo": platformsLogos + ""
      },
      {
        "name": "TokenPost",
        "link": "https://www.tokenpost.com/",
        "SN": 134,
        "logo": platformsLogos + ""
      },
      {
        "name": "BitcoinWiki",
        "link": "https://en.bitcoinwiki.org/",
        "SN": 135,
        "logo": platformsLogos + ""
      },
      {
        "name": "ICO Drops",
        "link": "https://icodrops.com/",
        "SN": 136,
        "logo": platformsLogos + ""
      },
      {
        "name": "Crypto Gurus",
        "link": "https://www.cryptogurus.com/",
        "SN": 137,
        "logo": platformsLogos + ""
      },
      {
        "name": "BitDegree Blog",
        "link": "https://www.bitdegree.org/crypto/blog",
        "SN": 138,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cryptocurrency Checkout",
        "link": "https://www.cryptocurrencycheckout.com/",
        "SN": 139,
        "logo": platformsLogos + ""
      },
      {
        "name": "Coinsutra",
        "link": "https://coinsutra.com/",
        "SN": 140,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoSlate Events",
        "link": "https://cryptoslate.com/events/",
        "SN": 141,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinCodex",
        "link": "https://coincodex.com/",
        "SN": 142,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinCentral",
        "link": "https://coincentral.com/",
        "SN": 143,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoZink",
        "link": "https://cryptozink.io/",
        "SN": 144,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoVantage",
        "link": "https://www.cryptovantage.com/",
        "SN": 145,
        "logo": platformsLogos + ""
      },
      {
        "name": "Ethereum World News",
        "link": "https://ethereumworldnews.com/",
        "SN": 146,
        "logo": platformsLogos + ""
      },
      {
        "name": "Cryptrade Blog",
        "link": "https://cryptrade.io/",
        "SN": 147,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoPanic",
        "link": "https://cryptopanic.com/",
        "SN": 148,
        "logo": platformsLogos + ""
      },
      {
        "name": "CoinTelegraph",
        "link": "https://cointelegraph.com/",
        "SN": 149,
        "logo": platformsLogos + ""
      },
      {
        "name": "CryptoGlobe",
        "link": "https://cryptoglobe.com/",
        "SN": 150,
        "logo": platformsLogos + ""
      },
      {
        "name": "The Crypto Basic",
        "link": "https://thecryptobasic.com/",
        "SN": 151,
        "logo": platformsLogos + ""
      }
    ]
  },
  {
    "SN": 20,
    "name": "Google",
    backComImage: communities + 'google.webp',
    "code": "TikTok",
    "description": "A video-sharing app where crypto influencers, traders, and enthusiasts share short-form content, news, and viral crypto challenges.",
    "global_dominance": 46.0,
    "general_usage": "Short videos, viral crypto content, crypto challenges",
    "monthly_active_users": 1500,
    "average_daily_posts": 1000000,
    "age_demographic": "16-30",
    "market_share_in_social_media": 12.7,
    "platform_growth_rate": 22.3,
    "pages_groups": [
      {"name": "", "logo": platformsLogos + "b122.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b117.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b60.webp", "link": ""},

      {"name": "", "logo": platformsLogos + "b103.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b105.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b137.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b166.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b79.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b119.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b70.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b90.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b141.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b83.webp", "link": ""},

      {"name": "", "logo": platformsLogos + "b43.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b111.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b110.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b55.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b59.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b48.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b121.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b77.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b105.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b63.webp", "link": ""},

      {"name": "", "logo": platformsLogos + "b65.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b32.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b35.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b84.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b39.webp", "link": ""},


    ]
  },
  {
    "SN": 20,
    "name": "Programmers Com",
    backComImage: communities + 'codinstudio.webp',
    "code": "TikTok",
    "description": "A video-sharing app where crypto influencers, traders, and enthusiasts share short-form content, news, and viral crypto challenges.",
    "global_dominance": 46.0,
    "general_usage": "Short videos, viral crypto content, crypto challenges",
    "monthly_active_users": 1500,
    "average_daily_posts": 1000000,
    "age_demographic": "16-30",
    "market_share_in_social_media": 12.7,
    "platform_growth_rate": 22.3,
    "pages_groups": [

      {"name": "", "logo": platformsLogos + "b109.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b186.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b66.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b184.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b67.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b43.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b97.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b50.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b40.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b154.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b163.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b51.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b190.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b68.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b72.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b133.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b103.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b167.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b133.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b92.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b115.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b120.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b99.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b108.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b53.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b71.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b48.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b60.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b38.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b138.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b43.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b84.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b161.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b130.webp", "link": ""},
    ]
  },
  {
    "SN": 20,
    "name": "Android Apps",
    backComImage: communities + 'andriod.png',
    "code": "TikTok",
    "description": "A video-sharing app where crypto influencers, traders, and enthusiasts share short-form content, news, and viral crypto challenges.",
    "global_dominance": 46.0,
    "general_usage": "Short videos, viral crypto content, crypto challenges",
    "monthly_active_users": 1500,
    "average_daily_posts": 1000000,
    "age_demographic": "16-30",
    "market_share_in_social_media": 12.7,
    "platform_growth_rate": 22.3,
    "pages_groups": []
  },


]





