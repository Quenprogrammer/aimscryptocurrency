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


      {"name": "", "logo": platformsLogos + "b19.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b85.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b203.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b84.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b151.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b56.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b92.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b150.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b157.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b147.webp", "link": ""},

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
    "SN": 14,
    "name": "GitHub",
    backComImage: communities + 'null3.png',
    "code": "GitHub",
    "description": "A code hosting platform widely used by blockchain developers to collaborate on open-source crypto and blockchain projects.",
    "global_dominance": 22.7,
    "general_usage": "Code sharing, software development, blockchain projects",
    "monthly_active_users": 350,
    "average_daily_posts": 80000,
    "age_demographic": "20-40",
    "market_share_in_social_media": 1.5,
    "platform_growth_rate": 10.0,
    "pages_groups": [
      {"name": "", "logo": platformsLogos + "b151.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b125.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b161.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b105.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b142.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b72.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b140.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b97.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b60.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b175.webp", "link": ""},

    ]
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
      {"name": "", "logo": platformsLogos + "b198.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b160.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b162.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b175.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b85.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b110.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b32.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b22.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b118.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b56.webp", "link": ""},

      {"name": "", "logo": platformsLogos + "b169.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b45.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b137.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b71.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b52.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b136.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b141.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b69.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b60.webp", "link": ""},
      {"name": "", "logo": platformsLogos + "b200.webp", "link": ""},


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





