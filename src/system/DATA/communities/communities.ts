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
  pages_groups: Array<{ name: string; logo: string; link: string }>; // Relevant pages, groups, or hashtags related to crypto
}

export const communitiesData: SocialMediaPlatform[]=[

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
      { name: 'Platform 1', link: '', logo: 'p109.webp' },
      { name: 'Platform 2', link: '', logo: 'p135.webp' },
      { name: 'Platform 3', link: '', logo: 'p78.webp' },
      { name: 'Platform 4', link: '', logo: 'p6.webp' },
      { name: 'Platform 5', link: '', logo: 'p5.webp' },
      { name: 'Platform 6', link: '', logo: 'p64.webp' },
      { name: 'Platform 7', link: '', logo: 'p110.webp' },
      { name: 'Platform 8', link: '', logo: 'p117.webp' },
      { name: 'Platform 9', link: '', logo: 'p50.webp' },
      { name: 'Platform 10', link: '', logo: 'p123.webp' },
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
        {"name": "p77.webp", "logo": platformsLogos + "p77.webp", "link": "#"},
        {"name": "p66.webp", "logo": platformsLogos + "p66.webp", "link": "#"},
        {"name": "p115.webp", "logo": platformsLogos + "p115.webp", "link": "#"},
        {"name": "p41.webp", "logo": platformsLogos + "p41.webp", "link": "#"},
        {"name": "p32.webp", "logo": platformsLogos + "p32.webp", "link": "#"},
        {"name": "p72.webp", "logo": platformsLogos + "p72.webp", "link": "#"},
        {"name": "p139.webp", "logo": platformsLogos + "p139.webp", "link": "#"},
        {"name": "p38.webp", "logo": platformsLogos + "p38.webp", "link": "#"},
        {"name": "p54.webp", "logo": platformsLogos + "p54.webp", "link": "#"},
        {"name": "p60.webp", "logo": platformsLogos + "p60.webp", "link": "#"}
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
        {"name": "p109.webp", "logo": platformsLogos + "p109.webp", "link": "#"},
      {"name": "p8.webp", "logo": platformsLogos + "p8.webp", "link": "#"},
      {"name": "p122.webp", "logo": platformsLogos + "p122.webp", "link": "#"},
      {"name": "p49.webp", "logo": platformsLogos + "p49.webp", "link": "#"},
      {"name": "p19.webp", "logo": platformsLogos + "p19.webp", "link": "#"},
      {"name": "p2.png", "logo": platformsLogos + "p2.png", "link": "#"},
      {"name": "p18.webp", "logo": platformsLogos + "p18.webp", "link": "#"},
      {"name": "p133.webp", "logo": platformsLogos + "p133.webp", "link": "#"},
      {"name": "p114.webp", "logo": platformsLogos + "p114.webp", "link": "#"},
      {"name": "p136.webp", "logo": platformsLogos + "p136.webp", "link": "#"}
      ]
    },
    {
      "SN": 5,
      "name": "YouTube",
      backComImage: communities + 'youTube.png',
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
         {"name": "p53.webp", "logo": platformsLogos + "p53.webp", "link": "#"},
        {"name": "p64.webp", "logo": platformsLogos + "p64.webp", "link": "#"},
        {"name": "p73.webp", "logo": platformsLogos + "p73.webp", "link": "#"},
        {"name": "p68.webp", "logo": platformsLogos + "p68.webp", "link": "#"},
        {"name": "p55.webp", "logo": platformsLogos + "p55.webp", "link": "#"},
        {"name": "p111.webp", "logo": platformsLogos + "p111.webp", "link": "#"},
        {"name": "p113.webp", "logo": platformsLogos + "p113.webp", "link": "#"},
        {"name": "p134.webp", "logo": platformsLogos + "p134.webp", "link": "#"},
        {"name": "p112.webp", "logo": platformsLogos + "p112.webp", "link": "#"},
        {"name": "p46.png", "logo": platformsLogos + "p46.png", "link": "#"}
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
      "pages_groups": [

      ]
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
      {"name": "p101.webp", "logo": platformsLogos + "p101.webp", "link": "#"},
        {"name": "p9.webp", "logo": platformsLogos + "p9.webp", "link": "#"},
        {"name": "p129.webp", "logo": platformsLogos + "p129.webp", "link": "#"},
        {"name": "p120.webp", "logo": platformsLogos + "p120.webp", "link": "#"},
        {"name": "p27.webp", "logo": platformsLogos + "p27.webp", "link": "#"},
        {"name": "p3.png", "logo": platformsLogos + "p3.png", "link": "#"},
        {"name": "p28.webp", "logo": platformsLogos + "p28.webp", "link": "#"},
        {"name": "p21.webp", "logo": platformsLogos + "p21.webp", "link": "#"},
        {"name": "p43.webp", "logo": platformsLogos + "p43.webp", "link": "#"},
        {"name": "p38.webp", "logo": platformsLogos + "p38.webp", "link": "#"}
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
    "pages_groups": [
     {"name": "p6.webp", "logo": platformsLogos + "p6.webp", "link": "#"},
        {"name": "p125.webp", "logo": platformsLogos + "p125.webp", "link": "#"},
        {"name": "p140.webp", "logo": platformsLogos + "p140.webp", "link": "#"},
        {"name": "p139.png", "logo": platformsLogos + "p139.png", "link": "#"},
        {"name": "p44.webp", "logo": platformsLogos + "p44.webp", "link": "#"},
        {"name": "p52.webp", "logo": platformsLogos + "p52.webp", "link": "#"},
        {"name": "p24.webp", "logo": platformsLogos + "p24.webp", "link": "#"},
        {"name": "p35.webp", "logo": platformsLogos + "p35.webp", "link": "#"},
        {"name": "p47.webp", "logo": platformsLogos + "p47.webp", "link": "#"},
        {"name": "p81.png", "logo": platformsLogos + "p81.png", "link": "#"}
    ]
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
       {"name": "p14.webp", "logo": platformsLogos + "p14.webp", "link": "#"},
       {"name": "p14.webp", "logo": platformsLogos + "p14.webp", "link": "#"},
        {"name": "p36.webp", "logo": platformsLogos + "p36.webp", "link": "#"},
        {"name": "p107.webp", "logo": platformsLogos + "p107.webp", "link": "#"},
        {"name": "p116.webp", "logo": platformsLogos + "p116.webp", "link": "#"},
        {"name": "p80.webp", "logo": platformsLogos + "p80.webp", "link": "#"},
        {"name": "p110.webp", "logo": platformsLogos + "p110.webp", "link": "#"},
        {"name": "p13.webp", "logo": platformsLogos + "p13.webp", "link": "#"},
        {"name": "p122.webp", "logo": platformsLogos + "p122.webp", "link": "#"},
        {"name": "p58.webp", "logo": platformsLogos + "p58.webp", "link": "#"},
        {"name": "p26.webp", "logo": platformsLogos + "p26.webp", "link": "#"}
    ]
  },
  {
    "SN": 15,
    "name": "Snapchat",
    backComImage: communities + 'snap.webp',
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
      {"name": "p133.webp", "logo": platformsLogos + "p133.webp", "link": "#"},
        {"name": "p131.webp", "logo": platformsLogos + "p131.webp", "link": "#"},
        {"name": "p55.webp", "logo": platformsLogos + "p55.webp", "link": "#"},
        {"name": "p81.png", "logo": platformsLogos + "p81.png", "link": "#"},
        {"name": "p16.webp", "logo": platformsLogos + "p16.webp", "link": "#"},
        {"name": "p118.webp", "logo": platformsLogos + "p118.webp", "link": "#"},
        {"name": "p12.webp", "logo": platformsLogos + "p12.webp", "link": "#"},
        {"name": "p46.png", "logo": platformsLogos + "p46.png", "link": "#"},
        {"name": "p120.webp", "logo": platformsLogos + "p120.webp", "link": "#"},
        {"name": "p73.webp", "logo": platformsLogos + "p73.webp", "link": "#"}
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
      {"name": "p127.webp", "logo": platformsLogos + "p127.webp", "link": "#"},
        {"name": "p30.webp", "logo": platformsLogos + "p30.webp", "link": "#"},
        {"name": "p139.webp", "logo": platformsLogos + "p139.webp", "link": "#"},
        {"name": "p48.webp", "logo": platformsLogos + "p48.webp", "link": "#"},
        {"name": "p40.webp", "logo": platformsLogos + "p40.webp", "link": "#"},
        {"name": "p125.webp", "logo": platformsLogos + "p125.webp", "link": "#"},
        {"name": "p124.webp", "logo": platformsLogos + "p124.webp", "link": "#"},
        {"name": "p69.webp", "logo": platformsLogos + "p69.webp", "link": "#"},
        {"name": "p88.webp", "logo": platformsLogos + "p88.webp", "link": "#"},
        {"name": "p102.webp", "logo": platformsLogos + "p102.webp", "link": "#"}
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
    "pages_groups": [

    ]
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
    "pages_groups": [

    ]
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
    "pages_groups": [



    ]
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
   {"name": "p75.webp", "logo": platformsLogos + "p75.webp", "link": "#"},
        {"name": "p101.webp", "logo": platformsLogos + "p101.webp", "link": "#"},
        {"name": "p82.webp", "logo": platformsLogos + "p82.webp", "link": "#"},
        {"name": "p25.webp", "logo": platformsLogos + "p25.webp", "link": "#"},
        {"name": "p79.webp", "logo": platformsLogos + "p79.webp", "link": "#"},
        {"name": "p63.webp", "logo": platformsLogos + "p63.webp", "link": "#"},
        {"name": "p111.webp", "logo": platformsLogos + "p111.webp", "link": "#"},
        {"name": "p31.webp", "logo": platformsLogos + "p31.webp", "link": "#"},
        {"name": "p42.webp", "logo": platformsLogos + "p42.webp", "link": "#"},
        {"name": "p37.webp", "logo": platformsLogos + "p37.webp", "link": "#"},
         {"name": "p51.png", "logo": platformsLogos + "p51.png", "link": "#"},
        {"name": "p63.webp", "logo": platformsLogos + "p63.webp", "link": "#"},
        {"name": "p125.webp", "logo": platformsLogos + "p125.webp", "link": "#"},
        {"name": "p69.webp", "logo": platformsLogos + "p69.webp", "link": "#"},
        {"name": "p123.webp", "logo": platformsLogos + "p123.webp", "link": "#"},
        {"name": "p137.webp", "logo": platformsLogos + "p137.webp", "link": "#"},
        {"name": "p70.webp", "logo": platformsLogos + "p70.webp", "link": "#"},
        {"name": "p18.webp", "logo": platformsLogos + "p18.webp", "link": "#"},
        {"name": "p115.webp", "logo": platformsLogos + "p115.webp", "link": "#"},
        {"name": "p10.webp", "logo": platformsLogos + "p10.webp", "link": "#"}
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
    "pages_groups": [



    ]
  },


]





