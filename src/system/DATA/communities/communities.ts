import {communities} from "../../variables";
interface SocialMediaPlatform {
  SN: number;
  name: string;
  logo: string; // Path to the logo image
  code: string;
  description: string;
  global_dominance: number; // Global dominance in percentage
  general_usage: string; // General usage of the platform
  monthly_active_users: number; // Monthly active users in millions
  average_daily_posts: number; // Average daily posts or content shared
  age_demographic: string; // Age group of primary users
  market_share_in_social_media: number; // Platform's market share in social media space
  platform_growth_rate: number; // Growth rate in percentage
  pages_groups: string[]; // Relevant pages, groups, or hashtags related to crypto
}
export const communitiesData: SocialMediaPlatform[]=[


    {
      "SN": 2,
      "name": "Reddit",
      logo: communities + 'reddit.png',
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
        "r/CryptoCurrency",
        "r/Bitcoin",
        "r/Ethereum",
        "r/Defi",
        "r/NFT"
      ]
    },
    {
      "SN": 3,
      "name": "Telegram",
      logo: communities + 'telegram.png',
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
        "Crypto Trading Groups",
        "DeFi Projects",
        "Airdrop Communities",
        "Blockchain Developer Groups"
      ]
    },
    {
      "SN": 4,
      "name": "Discord",
      logo: communities + 'discord.webp',
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
        "Crypto Trading Channels",
        "NFT Communities",
        "DeFi Developers",
        "Crypto Talk Rooms"
      ]
    },
    {
      "SN": 5,
      "name": "YouTube",
      logo: communities + 'youTube.png',
      "code": "YouTube",
      "description": "The world’s largest video-sharing platform, often used for crypto education, news, and influencer-driven content.",
      "global_dominance": 79.2,
      "general_usage": "Video sharing, crypto education, tutorials, influencer content",
      "monthly_active_users": 2500,
      "average_daily_posts": 2000000,
      "age_demographic": "18-45",
      "market_share_in_social_media": 29.4,
      "platform_growth_rate": 7.0,
      "pages_groups": [
        "Crypto Tutorials",
        "Blockchain Talks",
        "Crypto Influencers",
        "NFT Art Channels"
      ]
    },
    {
      "SN": 6,
      "name": "X (formerly Twitter)",
      logo: communities + 'x.png',
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
        "Crypto News",
        "Blockchain Projects",
        "NFT Creators",
        "Crypto Analysis"
      ]
    },
    {
      "SN": 7,
      "name": "LinkedIn",
      logo: communities + 'linkein.png',
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
        "Crypto Entrepreneurs",
        "Blockchain Developers",
        "Crypto Startups",
        "Decentralized Finance Groups"
      ]
    },

    {
      "SN": 9,
      "name": "GitHub",
      logo: communities + 'null3.png',
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
        "Blockchain Projects",
        "Crypto Development",
        "Smart Contracts"
      ]
    },
    {
      "SN": 10,
      "name": "Signal",
      logo: communities + 'windows.png',
      "code": "Signal",
      "description": "A secure messaging app used by crypto communities for private communication and sharing trading signals.",
      "global_dominance": 0.6,
      "general_usage": "Encrypted messaging, private trading signals, crypto discussion",
      "monthly_active_users": 50,
      "average_daily_posts": 20000,
      "age_demographic": "18-40",
      "market_share_in_social_media": 0.1,
      "platform_growth_rate": 15.2,
      "pages_groups": [
        "Crypto Discussion Groups",
        "Private Trading Signals",
        "DeFi Communities"
      ]
    },
  {
    "SN": 11,
    "name": "Facebook",
    logo: communities + 'facebook.png',
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
      "Crypto Community",
      "Bitcoin Enthusiasts",
      "Blockchain News",
      "Crypto Investors"
    ]
  },
  {
    "SN": 12,
    "name": "Instagram",
    logo: communities + 'Instagram.png',
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
      "Crypto Influencers",
      "NFT Artists",
      "Blockchain Communities"
    ]
  },
  {
    "SN": 13,
    "name": "Devs",
    logo: communities + 'null2.png',
    "code": "Devs",
    "description": "A platform where blockchain developers share knowledge, tutorials, and resources related to blockchain technology and crypto projects.",
    "global_dominance": 0.9,
    "general_usage": "Developer resources, blockchain tutorials, coding challenges",
    "monthly_active_users": 25,
    "average_daily_posts": 10000,
    "age_demographic": "22-40",
    "market_share_in_social_media": 0.05,
    "platform_growth_rate": 10.1,
    "pages_groups": [
      "Blockchain Developers",
      "Web3 Devs",
      "Crypto Code Libraries"
    ]
  },
  {
    "SN": 14,
    "name": "GitHub",
    logo: communities + 'null3.png',
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
      "Blockchain Projects",
      "Crypto Development",
      "Smart Contracts"
    ]
  },
  {
    "SN": 15,
    "name": "Snapchat",
    logo: communities + 'snap.webp',
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
      "Crypto Memes",
      "Crypto Education",
      "DeFi Updates"
    ]
  },
  {
    "SN": 16,
    "name": "YouTube",
    logo: communities + 'youTube.png',
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
      "Crypto Tutorials",
      "Blockchain Talks",
      "Crypto Influencers",
      "NFT Art Channels"
    ]
  },
  {
    "SN": 17,
    "name": "Mastodon",
    logo: communities + 'mastodon.png',
    "code": "Mastodon",
    "description": "A decentralized social network with a focus on privacy and open-source values, growing within crypto circles.",
    "global_dominance": 0.4,
    "general_usage": "Decentralized social networking, privacy-focused crypto discussions",
    "monthly_active_users": 8,
    "average_daily_posts": 5000,
    "age_demographic": "18-40",
    "market_share_in_social_media": 0.02,
    "platform_growth_rate": 18.0,
    "pages_groups": [
      "Crypto Discussions",
      "Web3 Developers",
      "Decentralized Platforms"
    ]
  },

  {
    "SN": 19,
    "name": "Pinterest",
    logo: communities + 'printrest.webp',
    "code": "Pinterest",
    "description": "A visual discovery engine used by crypto enthusiasts to share infographics, charts, and crypto-related imagery.",
    "global_dominance": 3.8,
    "general_usage": "Image sharing, crypto infographics, educational content",
    "monthly_active_users": 480,
    "average_daily_posts": 450000,
    "age_demographic": "18-44",
    "market_share_in_social_media": 2.5,
    "platform_growth_rate": 3.5,
    "pages_groups": [
      "Crypto Charts",
      "Blockchain Infographics",
      "Crypto Education Boards"
    ]
  },
  {
    "SN": 20,
    "name": "TikTok",
    logo: communities + 'tiktok.webp',
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
      "Crypto Education",
      "Crypto Trading Tips",
      "NFT Showcases"
    ]
  },
  {
    "SN": 20,
    "name": "Web",
    logo: communities + 'wb.webp',
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
      "Crypto Education",
      "Crypto Trading Tips",
      "NFT Showcases"
    ]
  },
  {
    "SN": 20,
    "name": "Google",
    logo: communities + 'google.webp',
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
      "Crypto Education",
      "Crypto Trading Tips",
      "NFT Showcases"
    ]
  },
  {
    "SN": 20,
    "name": "Programmers Com",
    logo: communities + 'codinstudio.jpg',
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
      "Crypto Education",
      "Crypto Trading Tips",
      "NFT Showcases"
    ]
  },
  {
    "SN": 20,
    "name": "Android Apps",
    logo: communities + 'andriod.png',
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
      "Crypto Education",
      "Crypto Trading Tips",
      "NFT Showcases"
    ]
  },



]
