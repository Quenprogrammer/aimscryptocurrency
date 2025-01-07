/*
// Interfaces definition

export interface allArticlesData {
  title: string;
  description: string;
  commands?: string[];  // Optional array of commands
  code?: string;        // Optional code property
  content?: string;     // Optional content property
  subSections?: { title: string, content: string }[];  // Optional subSections
  listItems?: string[];  // Optional list of items
}

export interface subSections {
  title?: string;
  content?: string;
  description?: string;
}

// Data arrays

export const A_Beginners_Guide_to_Cryptocurrency = [
  {
    title: "A Beginner's Guide to Cryptocurrency: Navigating the Digital Currency World",
    content: "Cryptocurrency has rapidly evolved from a niche concept to a mainstream financial phenomenon. For beginners, diving into this world can seem daunting. This guide simplifies the basics of cryptocurrency, helping you understand how it works and how to get started."
  },
  {
    title: "What is Cryptocurrency?",
    content: "Cryptocurrency is a digital form of money that uses cryptography to secure transactions. Unlike traditional currencies, it operates on decentralized networks, typically powered by blockchain technology. This decentralization eliminates the need for intermediaries like banks, offering users greater control over their money."
  },
  {
    title: "Key Features of Cryptocurrency",
    listItems: [
      "Decentralization: Operates without a central authority.",
      "Transparency: Blockchain technology records every transaction publicly.",
      "Immutability: Once a transaction is added to the blockchain, it cannot be altered.",
      "Global Accessibility: Anyone with an internet connection can use cryptocurrency.",
      "Security: Advanced cryptographic techniques protect user data and funds."
    ]
  },
  {
    title: "Popular Cryptocurrencies",
    listItems: [
      "Bitcoin (BTC): The first and most well-known cryptocurrency.",
      "Ethereum (ETH): Famous for enabling smart contracts and decentralized applications (dApps).",
      "Binance Coin (BNB): A utility token for the Binance ecosystem.",
      "Cardano (ADA): Focused on scalability and sustainability.",
      "Solana (SOL): Known for its high transaction speeds and low fees."
    ]
  },
  {
    title: "How to Get Started with Cryptocurrency",
    subSections: [
      { title: "Educate Yourself", content: "Research the fundamentals of blockchain and cryptocurrency. Learn about the risks and rewards." },
      { title: "Choose a Wallet", content: "A digital wallet is essential for storing and managing your cryptocurrencies. Options include:" },
      { title: "Select a Cryptocurrency Exchange", content: "Platforms like Coinbase, Binance, and Kraken allow you to buy, sell, and trade cryptocurrencies. Compare fees, features, and security measures before choosing." },
      { title: "Make Your First Purchase", content: "Deposit funds into your exchange account and purchase your chosen cryptocurrency. Start small to minimize risk." },
      { title: "Secure Your Investment", content: "Use two-factor authentication, strong passwords, and consider transferring your holdings to a cold wallet." },
      { title: "Stay Informed", content: "The cryptocurrency market is highly volatile. Keep up with news, market trends, and regulatory updates." }
    ]
  },
  {
    title: "Pros and Cons of Cryptocurrency",
    subSections: [
      { title: "Pros", content: "• Financial autonomy and freedom. • Lower transaction fees for international transfers. • Opportunities for high returns on investment." },
      { title: "Cons", content: "• Price volatility and risk of significant losses. • Regulatory uncertainty in many countries. • Potential for security breaches and scams." }
    ]
  },
  {
    title: "Common Pitfalls to Avoid",
    listItems: [
      "FOMO (Fear of Missing Out): Avoid investing based on hype without proper research.",
      "Ignoring Security: Protect your investments by using secure wallets and avoiding suspicious links or offers.",
      "Overinvesting: Never invest more than you can afford to lose."
    ]
  },
  {
    title: "The Future of Cryptocurrency",
    content: "As adoption grows, cryptocurrency is poised to revolutionize traditional finance. Innovations such as decentralized finance (DeFi), non-fungible tokens (NFTs), and central bank digital currencies (CBDCs) indicate a future where digital currencies play a pivotal role. However, scalability, regulation, and environmental concerns remain critical challenges."
  },
  {
    title: "Conclusion",
    content: "Cryptocurrency offers a world of opportunities for those willing to explore its potential. By understanding the basics, adopting a cautious approach, and staying informed, beginners can confidently navigate the digital currency landscape and participate in this financial revolution."
  }
];

export const miningTokensData = [
  {
    title: 'Introduction',
    content: `The world of cryptocurrency has experienced unprecedented growth in recent years,
                with numerous tokens and coins emerging to cater to diverse needs. Mining tokens,
                in particular, have garnered significant attention due to their unique characteristics
                and potential benefits. In this article, we will delve into the concept of mining tokens,
                their types, benefits, and challenges.`
  },
  {
    title: 'What are Mining Tokens?',
    content: `Mining tokens are a type of cryptocurrency that is specifically designed for mining purposes.
                They are created to incentivize miners to participate in the validation process of transactions
                on a blockchain network. Mining tokens are typically issued by a project or company to raise
                funds for their operations.`
  },
  {
    title: 'Types of Mining Tokens',
    content: [
      {
        name: 'Proof-of-Work (PoW) Tokens',
        description: 'These tokens require miners to solve complex mathematical puzzles to validate transactions and create new blocks.'
      },
      {
        name: 'Proof-of-Stake (PoS) Tokens',
        description: 'These tokens require miners to "stake" their own tokens to participate in the validation process.'
      },
      {
        name: 'Delegated Proof-of-Stake (DPoS) Tokens',
        description: 'These tokens allow users to vote for validators, who are responsible for creating new blocks.'
      }
    ]
  },
  {
    title: 'Benefits of Mining Tokens',
    content: [
      {
        name: 'Incentivization',
        description: 'Mining tokens provide an incentive for miners to participate in the validation process, ensuring the security and integrity of the blockchain network.'
      },
      {
        name: 'Fundraising',
        description: 'Mining tokens allow projects to raise funds for their operations, promoting innovation and growth in the cryptocurrency space.'
      },
      {
        name: 'Investment Opportunities',
        description: 'Mining tokens offer investors a new asset class, providing potential returns through price appreciation and dividend payments.'
      }
    ]
  },
  {
    title: 'Challenges Facing Mining Tokens',
    content: [
      {
        name: 'Regulatory Uncertainty',
        description: 'The regulatory environment for mining tokens is still evolving, creating uncertainty for projects and investors.'
      },
      {
        name: 'Market Volatility',
        description: 'Mining tokens are subject to market volatility, which can result in significant price fluctuations.'
      },
      {
        name: 'Security Risks',
        description: 'Mining tokens are vulnerable to security risks, such as hacking and 51% attacks.'
      }
    ]
  },
  {
    title: 'Conclusion',
    content: `Mining tokens have emerged as a vital component of the cryptocurrency ecosystem, providing incentives
                for miners and fundraising opportunities for projects. While they offer several benefits, mining tokens
                also face challenges such as regulatory uncertainty, market volatility, and security risks. As the
                cryptocurrency space continues to evolve, it is essential for stakeholders to stay informed about the
                developments and advancements in the mining token space.`
  }
];












export const miningAppSteps: allArticlesData[] = [
  {
    title: 'Step 1: Set up the project',
    description: 'Create a new directory for your project and initialize it with npm:',
    commands: [
      'mkdir mining-app',
      'cd mining-app',
      'npm init'
    ]
  },
  {
    title: 'Step 2: Install dependencies',
    description: 'Install the required dependencies, including Express.js, WebSocket, and a mining library (e.g., crypto-miner):',
    commands: [
      'npm install express ws crypto-miner'
    ]
  },
  {
    title: 'Step 3: Set up the Express.js server',
    description: 'Create a new file called server.js and add the following code:',
    code: `const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});`
  },
  {
    title: 'Step 4: Create the mining logic',
    description: 'Create a new file called miner.js and add the following code:',
    code: `const cryptoMiner = require('crypto-miner');

const miner = cryptoMiner.createMiner({
  // Set up your mining pool credentials here
  pool: 'your-pool-url',
  username: 'your-username',
  password: 'your-password',
});

miner.start();

miner.on('block', (block) => {
  console.log(\`New block found: \${block.hash}\`);
});

miner.on('error', (error) => {
  console.error(\`Mining error: \${error}\`);
});`
  },
  {
    title: 'Step 5: Create the WebSocket connection',
    description: 'Create a new file called ws.js and add the following code:',
    code: `const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(\`Received message: \${message}\`);
    // Handle incoming messages from clients here
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});`
  },
  {
    title: 'Step 6: Integrate the mining logic with the WebSocket connection',
    description: 'Modify the ws.js file to integrate the mining logic with the WebSocket connection:',
    code: `const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const miner = require('./miner');

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(\`Received message: \${message}\`);
    // Handle incoming messages from clients here
  });

  miner.on('block', (block) => {
    ws.send(\`New block found: \${block.hash}\`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});`
  },
  {
    title: 'Step 7: Create a client-side interface',
    description: 'Create a new file called index.html in the public directory and add the following code:',
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Mining App</title>
  <script>
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      console.log(\`Received message: \${event.data}\`);
      // Update the UI with the received message here
    };

    ws.onopen = () => {
      console.log('Connected to the server');
    };

    ws.onclose = () => {
      console.log('Disconnected from the server');
    };

    ws.onerror = (error) => {
      console.error(\`Error occurred: \${error}\`);
    };
  </script>
</head>
<body>
  <h1>Mining App</h1>
  <p id="message"></p>

  <script>
    // Update the UI with the received message here
    document.getElementById('message').innerHTML = 'Waiting for messages...';
  </script>
</body>
</html>`
  }
];
export const Understanding_Cryptocurrency: allArticlesData[] = [
  {
    title: "Understanding Cryptocurrency: A Digital Revolution in Finance",
    description: "Cryptocurrency has become a buzzword in the financial world over the past decade. But what exactly is it, and why has it gained such immense popularity? This article delves into the fundamentals of cryptocurrency, its benefits, risks, and its transformative potential in the global economy."
  },
  {
    title: "What is Cryptocurrency?",
    description: "Cryptocurrency is a form of digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments and central banks, cryptocurrencies operate on decentralized networks based on blockchain technology. Bitcoin, created in 2009 by an anonymous entity known as Satoshi Nakamoto, was the first cryptocurrency and remains the most well-known today. Since then, thousands of cryptocurrencies have emerged, including Ethereum, Binance Coin, and Cardano."
  },
  {
    title: "How Does Cryptocurrency Work?",
    description: "At its core, cryptocurrency relies on blockchain—a distributed ledger that records all transactions across a network of computers. Each transaction is grouped into a 'block' and added to a chronological 'chain.' This technology ensures transparency, security, and immutability.",
    subSections: [
      { title: "Blockchain Technology", content: "Blockchain ensures security and transparency of cryptocurrency transactions." },
      { title: "Mining", content: "Transactions are verified through a process called mining, where powerful computers solve complex mathematical problems." }
    ]
  },
  {
    title: "Benefits of Cryptocurrency",
    description: "Here are some key benefits of using cryptocurrency:",
    listItems: [
      "Decentralization: Cryptocurrencies operate independently of central authorities, reducing the risk of government interference or manipulation.",
      "Security: Blockchain technology provides robust protection against fraud and unauthorized access.",
      "Lower Transaction Costs: Traditional financial systems often involve intermediaries, leading to higher fees. Cryptocurrency transactions typically have minimal costs.",
      "Global Accessibility: Cryptocurrencies enable borderless transactions, making them ideal for international payments.",
      "Financial Inclusion: Digital currencies can provide financial services to unbanked populations, fostering economic growth."
    ]
  },
  {
    title: "Risks of Cryptocurrency",
    description: "Despite their many benefits, cryptocurrencies also have certain risks, such as:",
    listItems: [
      "Volatility: Cryptocurrencies are highly volatile, with prices often experiencing drastic fluctuations.",
      "Regulatory Uncertainty: Governments worldwide are still grappling with how to regulate cryptocurrencies, leading to potential legal challenges.",
      "Security Concerns: While blockchain is secure, digital wallets and exchanges can be vulnerable to hacking.",
      "Lack of Consumer Protection: Unlike traditional financial systems, cryptocurrencies lack safeguards such as insurance for losses.",
      "Environmental Impact: Mining processes for cryptocurrencies like Bitcoin consume significant energy, raising concerns about their environmental footprint."
    ]
  },
  {
    title: "The Future of Cryptocurrency",
    description: "Cryptocurrency has already begun reshaping the financial landscape. From decentralized finance (DeFi) platforms to non-fungible tokens (NFTs), the applications of blockchain technology are vast and growing. However, challenges such as scalability, regulatory compliance, and environmental sustainability need to be addressed.",
  },
  {
    title: "Conclusion",
    description: "Cryptocurrency represents a groundbreaking shift in how we perceive and interact with money. While it offers numerous benefits, it also comes with significant risks that users must navigate. As the industry matures, striking a balance between innovation and regulation will be crucial to unlocking the full potential of this digital revolution."
  }
];



export const stakingGuideData = [
  {
    title: 'Introduction to Staking',
    titles: [
      {
        title: 'What is Staking?',
        description: 'Staking is the process of participating in the network’s consensus mechanism by locking up a cryptocurrency to support the operations of a blockchain, like transaction validation, and earning rewards in return.'
      },
      {
        title: 'How Does Staking Work?',
        description: 'Staking works by holding a certain amount of cryptocurrency in a wallet to support blockchain network operations. Validators who stake coins are chosen to validate new blocks and are rewarded for doing so.'
      }
    ]
  },
  {
    title: 'Benefits of Staking',
    titles: [
      {
        title: 'Earn Passive Income',
        description: 'Staking allows you to earn rewards, typically in the form of additional tokens, which can be seen as a passive income stream.'
      },
      {
        title: 'Support Blockchain Security',
        description: 'Staking helps maintain the integrity and security of the blockchain network by encouraging participants to act honestly, as their staked funds are at risk of being slashed for malicious behavior.'
      },
      {
        title: 'Lower Entry Barrier',
        description: 'Unlike mining, which requires expensive hardware, staking only requires you to hold and lock a cryptocurrency, making it more accessible to a wider audience.'
      }
    ]
  },
  {
    title: 'Types of Staking',
    titles: [
      {
        title: 'Solo Staking',
        description: 'Solo staking means that you run your own validator node and manage the staking process yourself. It requires technical knowledge and a significant amount of cryptocurrency to become a validator.'
      },
      {
        title: 'Pool Staking',
        description: 'Pool staking allows you to pool your funds with others to stake together. This is less risky and requires less technical knowledge, but the rewards are shared among all participants.'
      },
      {
        title: 'Delegated Staking',
        description: 'In delegated staking, you delegate your stake to a validator of your choice, and they handle the technical and operational aspects. You receive a portion of the rewards, and your funds remain in your control.'
      }
    ]
  },
  {
    title: 'Setting Up Staking',
    titles: [
      {
        title: 'Choose a Staking Platform or Validator',
        description: 'First, choose a platform, a staking pool, or a validator you trust. Some popular platforms include Binance, Kraken, and Coinbase, or you can choose a validator on decentralized networks like Ethereum 2.0 or Cosmos.'
      },
      {
        title: 'Transfer Funds to a Staking Wallet',
        description: 'You’ll need to transfer your cryptocurrency into a staking wallet, either a custodial wallet (if using a platform) or a non-custodial wallet (such as MetaMask or Ledger) if staking directly.'
      },
      {
        title: 'Select Your Staking Method',
        description: 'Decide whether to stake solo, in a pool, or delegate your tokens, depending on the platform or the blockchain protocol.'
      }
    ]
  },
  {
    title: 'Rewards and Risks',
    titles: [
      {
        title: 'Staking Rewards',
        description: 'Staking rewards vary depending on the network, the amount staked, and the staking duration. You typically receive rewards in the form of the staked cryptocurrency, which is added to your staking balance.'
      },
      {
        title: 'Slashing Risks',
        description: 'In proof-of-stake networks, validators who act dishonestly or fail to properly validate transactions can face slashing, where a portion of their staked funds are forfeited.'
      },
      {
        title: 'Lock-up Periods',
        description: 'Some networks require you to lock up your staked tokens for a period, during which you cannot withdraw or transfer your tokens. Make sure you understand the lock-up terms before staking.'
      }
    ]
  },
  {
    title: 'cryptoTools for Staking',
    titles: [
      {
        title: 'Staking Wallets',
        description: 'Use staking wallets such as MetaMask (for Ethereum 2.0), Trust Wallet, or hardware wallets (such as Ledger or Trezor) to securely manage your staked assets.'
      },
      {
        title: 'Staking Platforms',
        description: 'If you prefer simplicity, use a staking platform like Coinbase, Kraken, or Binance that allows you to stake directly without the need for technical management of nodes.'
      },
      {
        title: 'Staking Calculators',
        description: 'Use staking calculators to estimate the potential rewards and compare different staking options based on network parameters and your staked amount.'
      }
    ]
  },
  {
    title: 'Security Considerations',
    titles: [
      {
        title: 'Use Reputable Validators or Platforms',
        description: 'Ensure you choose reputable validators or staking platforms with a strong track record to avoid potential loss of funds due to fraud or poor service.'
      },
      {
        title: 'Secure Your Wallet',
        description: 'Ensure that your staking wallet is protected with a strong password and, if available, two-factor authentication (2FA).'
      },
      {
        title: 'Understand the Network Risks',
        description: 'Different blockchain networks have varying risks associated with staking. Always read and understand the terms of staking and the consequences of misbehavior such as slashing.'
      }
    ]
  },
  {
    title: 'Best Practices for Staking',
    titles: [
      {
        title: 'Diversify Your Staking',
        description: 'Consider diversifying your staking across multiple tokens or platforms to reduce risk and optimize potential returns.'
      },
      {
        title: 'Monitor Your Staking Performance',
        description: 'Regularly monitor your staking rewards and check for any potential issues with your staking provider or platform.'
      },
      {
        title: 'Stay Updated with Network Changes',
        description: 'Blockchain networks and their staking terms can change. Keep up-to-date with network upgrades, staking rewards changes, and any updates related to your staked tokens.'
      }
    ]
  },
  {
    title: 'Note',
    description: 'Staking provides an opportunity to earn passive income while helping secure decentralized networks. However, it comes with risks, including slashing and lock-up periods, and requires careful selection of validators and platforms. Always conduct thorough research before participating in staking.'
  }]
export const allArticles=[

  miningAppSteps,stakingGuideData
]





const miningAppGuideData = [
  {
    title: 'Planning and Research',
    titles: [
      {
        title: 'Define your concept',
        description: 'Determine the type of mining app you want to create (e.g., cryptocurrency mining, mining simulation, or educational app).'
      },
      {
        title: 'Conduct market research',
        description: 'Analyze existing mining apps, their features, and user reviews.'
      },
      {
        title: 'Identify your target audience',
        description: 'Determine who your app is for (e.g., miners, investors, or enthusiasts).'
      },
      {
        title: 'Create a business plan',
        description: 'Outline your app\'s revenue model, marketing strategy, and financial projections.'
      }
    ]
  },
  {
    title: 'Designing Your App',
    titles: [
      {
        title: 'Develop a wireframe',
        description: 'Create a basic layout of your app\'s user interface.'
      },
      {
        title: 'Design your user interface',
        description: 'Create a visually appealing design for your app.'
      },
      {
        title: 'Plan your app\'s features',
        description: 'Determine the features and functionality you want to include in your app.'
      }
    ]
  },
  {
    title: 'Developing Your App',
    titles: [
      {
        title: 'Choose a development platform',
        description: 'Decide on a platform (e.g., native iOS and Android, or cross-platform frameworks like React Native or Flutter).'
      },
      {
        title: 'Select a programming language',
        description: 'Choose a language (e.g., Java, Swift, Kotlin, or JavaScript).'
      },
      {
        title: 'Develop your app\'s backend',
        description: 'Create a server-side infrastructure to support your app\'s features.'
      },
      {
        title: 'Implement mining functionality',
        description: 'Integrate mining algorithms, APIs, or SDKs into your app.'
      },
      {
        title: 'Add user authentication and authorization',
        description: 'Implement security measures to protect user data.'
      }
    ]
  },
  {
    title: 'Testing and Debugging',
    titles: [
      {
        title: 'Conduct unit testing',
        description: 'Test individual components of your app.'
      },
      {
        title: 'Perform integration testing',
        description: 'Test how different components interact.'
      },
      {
        title: 'Conduct user testing',
        description: 'Gather feedback from real users.'
      },
      {
        title: 'Debug and iterate',
        description: 'Fix issues and improve your app based on user feedback.'
      }
    ]
  },
  {
    title: 'Deploying Your App',
    titles: [
      {
        title: 'Prepare your app for release',
        description: 'Optimize your app\'s performance, security, and user experience.'
      },
      {
        title: 'Submit your app to app stores',
        description: 'Publish your app on the Apple App Store, Google Play Store, or other platforms.'
      },
      {
        title: 'Market and promote your app',
        description: 'Develop a marketing strategy to attract users and retain them.'
      }
    ]
  },
  {
    title: 'Additional Considerations',
    titles: [
      {
        title: 'Comply with regulations',
        description: 'Ensure your app complies with relevant laws and regulations (e.g., cryptocurrency regulations).'
      },
      {
        title: 'Monitor and update your app',
        description: 'Regularly update your app to fix issues, add new features, and improve performance.'
      },
      {
        title: 'Provide customer support',
        description: 'Offer support channels for users to report issues or ask questions.'
      }
    ]
  },
  {
    title: 'Note',
    description: 'Please note that creating a mining app can be a complex task, requiring significant expertise in programming, design, and marketing. If you\'re new to app development, it\'s recommended to start with a simpler project and work your way up to more complex applications.'
  }
];
/!*export const web3GuideData: allArticlesData[] = [
  {
    title: 'Introduction to Web3.js',
    content: 'Web3.js is a JavaScript library that allows interaction with the Ethereum blockchain. It enables developers to create decentralized applications (dApps) that interact with smart contracts, send transactions, and query blockchain data.',
    subSections: [
      { title: 'What is Web3.js?', content: 'Web3.js is a JavaScript library that allows interaction with the Ethereum blockchain...' },
      { title: 'Key Features of Web3.js', content: 'Web3.js provides the ability to communicate with Ethereum nodes...' }
    ]
  },
  {
    title: 'Setting Up Web3.js',
    subSections: [
      { title: 'Install Web3.js', content: 'To use Web3.js in your project, install it via npm with the command: `npm install web3`.' },
      { title: 'Initialize Web3.js', content: 'Create a new Web3 instance and connect it to an Ethereum provider, such as Infura...' }
    ]
  },
  {
    title: 'Working with Smart Contracts',
    subSections: [
      { title: 'Define the Contract ABI', content: 'The ABI (Application Binary Interface) is a JSON array that describes the methods and events of your contract.' },
      { title: 'Create a Contract Instance', content: 'To interact with a contract, create a contract instance using the ABI and the contract address.' },
      { title: 'Call Contract Methods', content: 'You can call functions from the smart contract using `.call()` for read-only methods...' }
    ]
  },
  {
    title: 'Conclusion',
    content: 'Web3.js provides the foundation for building decentralized applications that interact with the Ethereum blockchain...'
  }
];*!/
*/






import {platformsLogos} from "../../variables";

export const articles = [
  { image: platformsLogos +  '1.webp', title: 'Card Title 100', text: 'This is the text for card 1.' },
  { image: platformsLogos +  '2.webp', title: 'Card Title 2', text: 'This is the text for card 2.' },
  { image: platformsLogos +  '7.webp', title: 'Card Title 3', text: 'This is the text for card 3.' },
  { image: platformsLogos +  '4.webp', title: 'Card Title 4', text: 'This is the text for card 4.' },
  { image: platformsLogos +  '5.webp', title: 'Card Title 5', text: 'This is the text for card 5.' },
  { image: platformsLogos +  '6.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '8.webp', title: 'Card Title 6', text: 's the text for card 6.' },
  { image: platformsLogos +  '9.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '10.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '11.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '12.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '13.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '14.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '15.webp', title: 'Card Title 6', text: 'This is the text for card 6.' },
  { image: platformsLogos +  '16.webp', title: 'Card Title 16', text: 'This is the text for card 16.' },
  { image: platformsLogos +  '17.webp', title: 'Card Title 17', text: 'This is the text for card 17.' },
  { image: platformsLogos +  '18.webp', title: 'Card Title 18', text: 'This is the text for card 18.' },
  { image: platformsLogos +  '19.webp', title: 'Card Title 19', text: 'This is the text for card 19.' },
  { image: platformsLogos +  '20.webp', title: 'Card Title 20', text: 'This is the text for card 20.' },
  { image: platformsLogos +  '21.webp', title: 'Card Title 21', text: 'This is the text for card 21.' },
  { image: platformsLogos +  '22.webp', title: 'Card Title 22', text: 'This is the text for card 22.' },
  { image: platformsLogos +  '23.webp', title: 'Card Title 23', text: 'This is the text for card 23.' },
  { image: platformsLogos +  '24.webp', title: 'Card Title 24', text: 'This is the text for card 24.' },
  { image: platformsLogos +  '25.webp', title: 'Card Title 25', text: 'This is the text for card 25.' },
  { image: platformsLogos +  '26.webp', title: 'Blockchain Technology ', text: 'This is the text for card 26.' },
  { image: platformsLogos +  '27.webp', title: 'Card Title 27', text: 'This is the text for card 27.' },
  { image: platformsLogos +  '28.webp', title: 'Card Title 28', text: 'This is the text for card 28.' },
  { image: platformsLogos +  '29.webp', title: 'Card Title 29', text: 'This is the text for card 29.' },
  { image: platformsLogos +  '30.webp', title: 'Card Title 30', text: 'This is the text for card 30.' },
  { image: platformsLogos +  '30.webp', title: 'Card Title 30', text: 'This is the text for card 30.' },
  { image: platformsLogos +  '31.webp', title: 'Feature of cryptocurrency ', text: 'This is the text for card 31.' },
  { image: platformsLogos +  '32.webp', title: 'Card Title 32', text: 'This is the text for card 32.' },
  { image: platformsLogos +  '33.webp', title: 'Card Title 33', text: 'This is the text for card 33.' },
  { image: platformsLogos +  '34.webp', title: 'Card Title 34', text: 'This is the text for card 34.' },
  { image: platformsLogos +  '35.webp', title: 'Card Title 35', text: 'This is the text for card 35.' },
  { image: platformsLogos +  '36.webp', title: 'Card Title 36', text: 'This is the text for card 36.' },
  { image: platformsLogos +  '37.webp', title: 'Card Title 37', text: 'This is the text for card 37.' },
  { image: platformsLogos +  '38.webp', title: 'Card Title 38', text: 'This is the text for card 38.' },
  { image: platformsLogos +  '39.webp', title: 'Card Title 39', text: 'This is the text for card 39.' },
  { image: platformsLogos +  '40.webp', title: 'Card Title 40', text: 'This is the text for card 40.' },
  { image: platformsLogos +  '41.webp', title: 'Card Title 41', text: 'This is the text for card 41.' },
  { image: platformsLogos +  '42.webp', title: 'Card Title 42', text: 'This is the text for card 42.' },
  { image: platformsLogos +  '43.webp', title: 'Card Title 43', text: 'This is the text for card 43.' },
  { image: platformsLogos +  '44.webp', title: 'Card Title 44', text: 'This is the text for card 44.' },
  { image: platformsLogos +  '45.webp', title: 'Card Title 45', text: 'This is the text for card 45.' },
  { image: platformsLogos +  '46.webp', title: 'Card Title 46', text: 'This is the text for card 46.' },
  { image: platformsLogos +  '47.webp', title: 'Card Title 47', text: 'This is the text for card 47.' },
  { image: platformsLogos +  '48.webp', title: 'Card Title 48', text: 'This is the text for card 48.' },
  { image: platformsLogos +  '49.webp', title: 'Card Title 49', text: 'This is the text for card 49.' },
  { image: platformsLogos +  '50.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },




  { image: platformsLogos +  '51.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '52.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '53.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '54.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '55.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '56.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '57.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '58.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '59.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '60.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '61.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '62.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },


  { image: platformsLogos +  '63.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '64.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '65.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },


  { image: platformsLogos +  '66.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '67.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '68.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },


  { image: platformsLogos +  '69.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '70.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '71.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '72.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '73.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '74.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '75.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '76.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '77.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '78.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '79.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '80.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '81.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },

  { image: platformsLogos +  '82.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '83.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '84.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '85.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '86.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '87.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '88.8webp', title: 'Card Title 50', text: 'This is the text for card 50.' },
  { image: platformsLogos +  '89.webp', title: 'Card Title 50', text: 'This is the text for card 50.' },


  { image: platformsLogos +   '90.webp', title: 'Card Title 90', text: 'This is the text for card 90.' },
  { image: platformsLogos +   '91.webp', title: 'Card Title 91', text: 'This is the text for card 91.' },
  { image: platformsLogos +   '92.webp', title: 'Card Title 92', text: 'This is the text for card 92.' },
  { image: platformsLogos +   '93.webp', title: 'Card Title 93', text: 'This is the text for card 93.' },
  { image: platformsLogos +   '94.webp', title: 'Card Title 94', text: 'This is the text for card 94.' },
  { image: platformsLogos +   '95.webp', title: 'Card Title 95', text: 'This is the text for card 95.' },
  { image: platformsLogos +   '96.webp', title: 'Card Title 96', text: 'This is the text for card 96.' },
  { image: platformsLogos +   '97.webp', title: 'Card Title 97', text: 'This is the text for card 97.' },
  { image: platformsLogos +   '98.webp', title: 'Card Title 98', text: 'This is the text for card 98.' },
  { image: platformsLogos +   '99.webp', title: 'Card Title 99', text: 'This is the text for card 99.' },
  { image: platformsLogos +   '100.webp', title: 'Card Title 100', text: 'This is the text for card 100.' },
  { image: platformsLogos +   '101.webp', title: 'Card Title 101', text: 'This is the text for card 101.' },
  { image: platformsLogos +   '102.webp', title: 'Card Title 102', text: 'This is the text for card 102.' },
  { image: platformsLogos +   '103.webp', title: 'Card Title 103', text: 'This is the text for card 103.' },
  { image: platformsLogos +   '104.webp', title: 'Card Title 104', text: 'This is the text for card 104.' },
  { image: platformsLogos +   '105.webp', title: 'Card Title 105', text: 'This is the text for card 105.' },
  { image: platformsLogos +   '106.webp', title: 'Card Title 106', text: 'This is the text for card 106.' },
  { image: platformsLogos +   '107.webp', title: 'Card Title 107', text: 'This is the text for card 107.' },
  { image: platformsLogos +   '108.webp', title: 'Card Title 108', text: 'This is the text for card 108.' },
  { image: platformsLogos +   '109.webp', title: 'Card Title 109', text: 'This is the text for card 109.' },
  { image: platformsLogos +   '110.webp', title: 'Card Title 110', text: 'This is the text for card 110.' },
  { image: platformsLogos +   '111.webp', title: 'Card Title 111', text: 'This is the text for card 111.' },
  { image: platformsLogos +   '112.webp', title: 'Card Title 112', text: 'This is the text for card 112.' },
  { image: platformsLogos +   '113.webp', title: 'Card Title 113', text: 'This is the text for card 113.' },
  { image: platformsLogos +   '114.webp', title: 'Card Title 114', text: 'This is the text for card 114.' },
  { image: platformsLogos +   '115.webp', title: 'Card Title 115', text: 'This is the text for card 115.' },
  { image: platformsLogos +   '116.webp', title: 'Card Title 116', text: 'This is the text for card 116.' },
  { image: platformsLogos +   '117.webp', title: 'Card Title 117', text: 'This is the text for card 117.' },
  { image: platformsLogos +   '118.webp', title: 'Card Title 118', text: 'This is the text for card 118.' },
  { image: platformsLogos +   '119.webp', title: 'Card Title 119', text: 'This is the text for card 119.' },
  { image: platformsLogos +   '120.webp', title: 'Card Title 120', text: 'This is the text for card 120.' },
  { image: platformsLogos +   '121.webp', title: 'Card Title 121', text: 'This is the text for card 121.' },
  { image: platformsLogos +   '122.webp', title: 'Card Title 122', text: 'This is the text for card 122.' },
  { image: platformsLogos +   '123.webp', title: 'Card Title 123', text: 'This is the text for card 123.' },
  { image: platformsLogos +   '124.webp', title: 'Card Title 124', text: 'This is the text for card 124.' },
  { image: platformsLogos +   '125.webp', title: 'Card Title 125', text: 'This is the text for card 125.' },



  { image: platformsLogos +   '126.webp', title: 'Card Title 126', text: 'This is the text for card 126.' },
  { image: platformsLogos +   '127.webp', title: 'Card Title 127', text: 'This is the text for card 127.' },
  { image: platformsLogos +   '128.webp', title: 'Card Title 128', text: 'This is the text for card 128.' },
  { image: platformsLogos +   '129.webp', title: 'Card Title 129', text: 'This is the text for card 129.' },
  { image: platformsLogos +   '130.webp', title: 'Card Title 130', text: 'This is the text for card 130.' },
  { image: platformsLogos +   '131.webp', title: 'Card Title 131', text: 'This is the text for card 131.' },
  { image: platformsLogos +   '132.webp', title: 'Card Title 132', text: 'This is the text for card 132.' },
  { image: platformsLogos +   '133.webp', title: 'Card Title 133', text: 'This is the text for card 133.' },
  { image: platformsLogos +   '134.webp', title: 'Card Title 134', text: 'This is the text for card 134.' },
  { image: platformsLogos +   '135.webp', title: 'Card Title 135', text: 'This is the text for card 135.' },
  { image: platformsLogos +   '136.webp', title: 'Card Title 136', text: 'This is the text for card 136.' },
  { image: platformsLogos +   '137.webp', title: 'Card Title 137', text: 'This is the text for card 137.' },
  { image: platformsLogos +   '138.webp', title: 'Card Title 138', text: 'This is the text for card 138.' },
  { image: platformsLogos +   '139.webp', title: 'Card Title 139', text: 'This is the text for card 139.' },
  { image: platformsLogos +   '140.webp', title: 'Card Title 140', text: 'This is the text for card 140.' },
  { image: platformsLogos +   '141.webp', title: 'Card Title 141', text: 'This is the text for card 141.' },
  { image: platformsLogos +   '142.webp', title: 'Card Title 142', text: 'This is the text for card 142.' },
  { image: platformsLogos +   '143.webp', title: 'Card Title 143', text: 'This is the text for card 143.' },
  { image: platformsLogos +   '144.webp', title: 'Card Title 144', text: 'This is the text for card 144.' },
  { image: platformsLogos +   '145.webp', title: 'Card Title 145', text: 'This is the text for card 145.' },
  { image: platformsLogos +   '146.webp', title: 'Card Title 146', text: 'This is the text for card 146.' },
  { image: platformsLogos +   '147.webp', title: 'Card Title 147', text: 'This is the text for card 147.' },
  { image: platformsLogos +   '148.webp', title: 'Card Title 148', text: 'This is the text for card 148.' },
  { image: platformsLogos +   '149.webp', title: 'Card Title 149', text: 'This is the text for card 149.' },
  { image: platformsLogos +   '150.webp', title: 'Card Title 150', text: 'This is the text for card 150.' },
  { image: platformsLogos +   '151.webp', title: 'Card Title 151', text: 'This is the text for card 151.' },
  { image: platformsLogos +   '152.webp', title: 'Card Title 152', text: 'This is the text for card 152.' },
  { image: platformsLogos +   '153.webp', title: 'Card Title 153', text: 'This is the text for card 153.' },
  { image: platformsLogos +   '154.webp', title: 'Card Title 154', text: 'This is the text for card 154.' },
  { image: platformsLogos +   '155.webp', title: 'Card Title 155', text: 'This is the text for card 155.' },
  { image: platformsLogos +   '156.webp', title: 'Card Title 156', text: 'This is the text for card 156.' },
  { image: platformsLogos +   '157.webp', title: 'Card Title 157', text: 'This is the text for card 157.' },
  { image: platformsLogos +   '158.webp', title: 'Card Title 158', text: 'This is the text for card 158.' },
  { image: platformsLogos +   '159.webp', title: 'Card Title 159', text: 'This is the text for card 159.' },
  { image: platformsLogos +   '160.webp', title: 'Card Title 160', text: 'This is the text for card 160.' },
  { image: platformsLogos +   '161.webp', title: 'Card Title 161', text: 'This is the text for card 161.' },
  { image: platformsLogos +   '170.webp', title: 'Card Title 170', text: 'This is the text for card 170.' },
  { image: platformsLogos +   '171.webp', title: 'Card Title 171', text: 'This is the text for card 171.' },
  { image: platformsLogos +   '172.webp', title: 'Card Title 172', text: 'This is the text for card 172.' },
  { image: platformsLogos +   '173.webp', title: 'Card Title 173', text: 'This is the text for card 173.' },
  { image: platformsLogos +   '174.webp', title: 'Card Title 174', text: 'This is the text for card 174.' },
  { image: platformsLogos +   '175.webp', title: 'Card Title 175', text: 'This is the text for card 175.' },
  { image: platformsLogos +   '176.webp', title: 'Card Title 176', text: 'This is the text for card 176.' },
  { image: platformsLogos +   '177.webp', title: 'Card Title 177', text: 'This is the text for card 177.' },
  { image: platformsLogos +   '178.webp', title: 'Card Title 178', text: 'This is the text for card 178.' },
  { image: platformsLogos +   '179.webp', title: 'Card Title 179', text: 'This is the text for card 179.' },
  { image: platformsLogos +   '180.webp', title: 'Card Title 180', text: 'This is the text for card 180.' },
  { image: platformsLogos +   '181.webp', title: 'Card Title 181', text: 'This is the text for card 181.' },
  { image: platformsLogos +   '182.webp', title: 'Card Title 182', text: 'This is the text for card 182.' },
  { image: platformsLogos +   '183.webp', title: 'Card Title 183', text: 'This is the text for card 183.' },
  { image: platformsLogos +   '184.webp', title: 'Card Title 184', text: 'This is the text for card 184.' },
  { image: platformsLogos +   '185.webp', title: 'Card Title 185', text: 'This is the text for card 185.' },
  { image: platformsLogos +   '186.webp', title: 'Card Title 186', text: 'This is the text for card 186.' },
  { image: platformsLogos +   '187.webp', title: 'Card Title 187', text: 'This is the text for card 187.' },
  { image: platformsLogos +   '188.webp', title: 'Card Title 188', text: 'This is the text for card 188.' },
  { image: platformsLogos +   '189.webp', title: 'Card Title 189', text: 'This is the text for card 189.' },
  { image: platformsLogos +   '190.webp', title: 'Card Title 190', text: 'This is the text for card 190.' },
  { image: platformsLogos +   '191.webp', title: 'Card Title 191', text: 'This is the text for card 191.' },
  { image: platformsLogos +   '192.webp', title: 'Card Title 192', text: 'This is the text for card 192.' },
  { image: platformsLogos +   '193.webp', title: 'Card Title 193', text: 'This is the text for card 193.' },
  { image: platformsLogos +   '194.webp', title: 'Card Title 194', text: 'This is the text for card 194.' },
  { image: platformsLogos +   '195.webp', title: 'Card Title 195', text: 'This is the text for card 195.' },
  { image: platformsLogos +   '196.webp', title: 'Card Title 196', text: 'This is the text for card 196.' },
  { image: platformsLogos +   '197.webp', title: 'Card Title 197', text: 'This is the text for card 197.' },
  { image: platformsLogos +   '198.webp', title: 'Card Title 198', text: 'This is the text for card 198.' },
  { image: platformsLogos +   '199.webp', title: 'Card Title 199', text: 'This is the text for card 199.' },
  { image: platformsLogos +   '200.webp', title: 'Card Title 200', text: 'This is the text for card 200.' },
  { image: platformsLogos +   '201.webp', title: 'Card Title 201', text: 'This is the text for card 201.' },
  { image: platformsLogos +   '202.webp', title: 'Card Title 202', text: 'This is the text for card 202.' },
  { image: platformsLogos +   '203.webp', title: 'Card Title 203', text: 'This is the text for card 203.' },
  { image: platformsLogos +   '204.webp', title: 'Card Title 204', text: 'This is the text for card 204.' },
  { image: platformsLogos +   '205.webp', title: 'Card Title 205', text: 'This is the text for card 205.' },
  { image: platformsLogos +   '206.webp', title: 'Card Title 206', text: 'This is the text for card 206.' },
  { image: platformsLogos +   '207.webp', title: 'Card Title 207', text: 'This is the text for card 207.' },
  { image: platformsLogos +   '208.webp', title: 'Card Title 208', text: 'This is the text for card 208.' },
  { image: platformsLogos +   '209.webp', title: 'Card Title 209', text: 'This is the text for card 209.' },
  { image: platformsLogos +   '210.webp', title: 'Card Title 210', text: 'This is the text for card 210.' },
  { image: platformsLogos +   '211.webp', title: 'Card Title 211', text: 'This is the text for card 211.' },
  { image: platformsLogos +   '212.webp', title: 'Card Title 212', text: 'This is the text for card 212.' },
  { image: platformsLogos +   '213.webp', title: 'Card Title 213', text: 'This is the text for card 213.' },
  { image: platformsLogos +   '214.webp', title: 'Card Title 214', text: 'This is the text for card 214.' },
  { image: platformsLogos +   '215.webp', title: 'Card Title 215', text: 'This is the text for card 215.' },
  { image: platformsLogos +   '216.webp', title: 'Card Title 216', text: 'This is the text for card 216.' },
  { image: platformsLogos +   '217.webp', title: 'Card Title 217', text: 'This is the text for card 217.' },
  { image: platformsLogos +   '218.webp', title: 'Card Title 218', text: 'This is the text for card 218.' },
  { image: platformsLogos +   '219.webp', title: 'Card Title 219', text: 'This is the text for card 219.' },
  { image: platformsLogos +   '220.webp', title: 'Card Title 220', text: 'This is the text for card 220.' },
  { image: platformsLogos +   '221.webp', title: 'Card Title 221', text: 'This is the text for card 221.' },
  { image: platformsLogos +   '222.webp', title: 'Card Title 222', text: 'This is the text for card 222.' },
  { image: platformsLogos +   '223.webp', title: 'Card Title 223', text: 'This is the text for card 223.' },
  { image: platformsLogos +   '224.webp', title: 'Card Title 224', text: 'This is the text for card 224.' },
  { image: platformsLogos +   '225.webp', title: 'Card Title 225', text: 'This is the text for card 225.' },
  { image: platformsLogos +   '226.webp', title: 'Card Title 226', text: 'This is the text for card 226.' },
  { image: platformsLogos +   '227.webp', title: 'Card Title 227', text: 'This is the text for card 227.' },
  { image: platformsLogos +   '228.webp', title: 'Card Title 228', text: 'This is the text for card 228.' },
  { image: platformsLogos +   '229.webp', title: 'Card Title 229', text: 'This is the text for card 229.' },
  { image: platformsLogos +   '230.webp', title: 'Card Title 230', text: 'This is the text for card 230.' },
  { image: platformsLogos +   '231.webp', title: 'Card Title 231', text: 'This is the text for card 231.' },
  { image: platformsLogos +   '232.webp', title: 'Card Title 232', text: 'This is the text for card 232.' },
  { image: platformsLogos +   '233.webp', title: 'Card Title 233', text: 'This is the text for card 233.' },
  { image: platformsLogos +   '234.webp', title: 'Card Title 234', text: 'This is the text for card 234.' },
  { image: platformsLogos +   '235.webp', title: 'Card Title 235', text: 'This is the text for card 235.' },
  { image: platformsLogos +   '236.webp', title: 'Card Title 236', text: 'This is the text for card 236.' },
  { image: platformsLogos +   '237.webp', title: 'Card Title 237', text: 'This is the text for card 237.' },
  { image: platformsLogos +   '238.webp', title: 'Card Title 238', text: 'This is the text for card 238.' },
  { image: platformsLogos +   '239.webp', title: 'Card Title 239', text: 'This is the text for card 239.' },
  { image: platformsLogos +   '240.webp', title: 'Card Title 240', text: 'This is the text for card 240.' },
  { image: platformsLogos +   '241.webp', title: 'Card Title 241', text: 'This is the text for card 241.' },
  { image: platformsLogos +   '243.webp', title: 'Card Title 243', text: 'This is the text for card 243.' },
  { image: platformsLogos +   '244.webp', title: 'Card Title 244', text: 'This is the text for card 244.' },
  { image: platformsLogos +   '245.webp', title: 'Card Title 245', text: 'This is the text for card 245.' },
  { image: platformsLogos +   '246.webp', title: 'Card Title 246', text: 'This is the text for card 246.' },
  { image: platformsLogos +   '247.webp', title: 'Card Title 247', text: 'This is the text for card 247.' },
  { image: platformsLogos +   '248.webp', title: 'Card Title 248', text: 'This is the text for card 248.' },
  { image: platformsLogos +   '249.webp', title: 'Card Title 249', text: 'This is the text for card 249.' },
  { image: platformsLogos +   '250.webp', title: 'Card Title 250', text: 'This is the text for card 250.' },
  { image: platformsLogos +   '251.webp', title: 'Card Title 251', text: 'This is the text for card 251.' },
  { image: platformsLogos +   '252.webp', title: 'Card Title 252', text: 'This is the text for card 252.' },
  { image: platformsLogos +   '253.webp', title: 'Card Title 253', text: 'This is the text for card 253.' },
  { image: platformsLogos +   '254.webp', title: 'Card Title 254', text: 'This is the text for card 254.' },
  { image: platformsLogos +   '255.webp', title: 'Card Title 255', text: 'This is the text for card 255.' },
  { image: platformsLogos +   '256.webp', title: 'Card Title 256', text: 'This is the text for card 256.' },
  { image: platformsLogos +   '257.webp', title: 'Card Title 257', text: 'This is the text for card 257.' },
  { image: platformsLogos +   '258.webp', title: 'Card Title 258', text: 'This is the text for card 258.' },
  { image: platformsLogos +   '259.webp', title: 'Card Title 259', text: 'This is the text for card 259.' },
  { image: platformsLogos +   '260.webp', title: 'Card Title 260', text: 'This is the text for card 260.' },
  { image: platformsLogos +   '261.webp', title: 'Card Title 261', text: 'This is the text for card 261.' },
  { image: platformsLogos +   '262.webp', title: 'Card Title 262', text: 'This is the text for card 262.' },
  { image: platformsLogos +   '263.webp', title: 'Card Title 263', text: 'This is the text for card 263.' },
  { image: platformsLogos +   '264.webp', title: 'Card Title 264', text: 'This is the text for card 264.' },
  { image: platformsLogos +   '265.webp', title: 'Card Title 265', text: 'This is the text for card 265.' },
  { image: platformsLogos +   '266.webp', title: 'Card Title 266', text: 'This is the text for card 266.' },
  { image: platformsLogos +   '267.webp', title: 'Card Title 267', text: 'This is the text for card 267.' },
  { image: platformsLogos +   '268.webp', title: 'Card Title 268', text: 'This is the text for card 268.' },
  { image: platformsLogos +   '269.webp', title: 'Card Title 269', text: 'This is the text for card 269.' },
  { image: platformsLogos +   '270.webp', title: 'Card Title 270', text: 'This is the text for card 270.' },
  { image: platformsLogos +   '271.webp', title: 'Card Title 271', text: 'This is the text for card 271.' },
  { image: platformsLogos +   '272.webp', title: 'Card Title 272', text: 'This is the text for card 272.' },
  { image: platformsLogos +   '273.webp', title: 'Card Title 273', text: 'This is the text for card 273.' },
  { image: platformsLogos +   '274.webp', title: 'Card Title 274', text: 'This is the text for card 274.' },
  { image: platformsLogos +   '275.webp', title: 'Card Title 275', text: 'This is the text for card 275.' },
  { image: platformsLogos +   '276.webp', title: 'Card Title 276', text: 'This is the text for card 276.' },
  { image: platformsLogos +   '277.webp', title: 'Card Title 277', text: 'This is the text for card 277.' },
  { image: platformsLogos +   '278.webp', title: 'Card Title 278', text: 'This is the text for card 278.' },
  { image: platformsLogos +   '280.webp', title: 'Card Title 280', text: 'This is the text for card 280.' },
  { image: platformsLogos +   '281.webp', title: 'Card Title 281', text: 'This is the text for card 281.' },
  { image: platformsLogos +   '282.webp', title: 'Card Title 282', text: 'This is the text for card 282.' },
  { image: platformsLogos +   '283.webp', title: 'Card Title 283', text: 'This is the text for card 283.' },
  { image: platformsLogos +   '284.webp', title: 'Card Title 284', text: 'This is the text for card 284.' },
  { image: platformsLogos +   '285.webp', title: 'Card Title 285', text: 'This is the text for card 285.' },
  { image: platformsLogos +   '286.webp', title: 'Card Title 286', text: 'This is the text for card 286.' },
  { image: platformsLogos +   '287.webp', title: 'Card Title 287', text: 'This is the text for card 287.' },
  { image: platformsLogos +   '288.webp', title: 'Card Title 288', text: 'This is the text for card 288.' },
  { image: platformsLogos +   '289.webp', title: 'Card Title 289', text: 'This is the text for card 289.' },
  { image: platformsLogos +   '290.webp', title: 'Card Title 290', text: 'This is the text for card 290.' },
  { image: platformsLogos +   '291.webp', title: 'Card Title 291', text: 'This is the text for card 291.' },
  { image: platformsLogos +   '292.webp', title: 'Card Title 292', text: 'This is the text for card 292.' },
  { image: platformsLogos +   '293.webp', title: 'Card Title 293', text: 'This is the text for card 293.' },
  { image: platformsLogos +   '294.webp', title: 'Card Title 294', text: 'This is the text for card 294.' },
  { image: platformsLogos +   '295.webp', title: 'Card Title 295', text: 'This is the text for card 295.' },
  { image: platformsLogos +   '296.webp', title: 'Card Title 296', text: 'This is the text for card 296.' },
  { image: platformsLogos +   '297.webp', title: 'Card Title 297', text: 'This is the text for card 297.' },
  { image: platformsLogos +   '298.webp', title: 'Card Title 298', text: 'This is the text for card 298.' },
  { image: platformsLogos +   '299.webp', title: 'Card Title 299', text: 'This is the text for card 299.' },
  { image: platformsLogos +   '300.webp', title: 'Card Title 300', text: 'This is the text for card 300.' },
  { image: platformsLogos +   '301.webp', title: 'Card Title 301', text: 'This is the text for card 301.' },
  { image: platformsLogos +   '302.webp', title: 'Card Title 302', text: 'This is the text for card 302.' },
  { image: platformsLogos +   '303.webp', title: 'Card Title 303', text: 'This is the text for card 303.' },
  { image: platformsLogos +   '304.webp', title: 'Card Title 304', text: 'This is the text for card 304.' },
  { image: platformsLogos +   '305.webp', title: 'Card Title 305', text: 'This is the text for card 305.' },
  { image: platformsLogos +   '306.webp', title: 'Card Title 306', text: 'This is the text for card 306.' },
  { image: platformsLogos +   '307.webp', title: 'Card Title 307', text: 'This is the text for card 307.' },
  { image: platformsLogos +   '308.webp', title: 'Card Title 308', text: 'This is the text for card 308.' },
  { image: platformsLogos +   '309.webp', title: 'Card Title 309', text: 'This is the text for card 309.' },
  { image: platformsLogos +   '310.webp', title: 'Card Title 310', text: 'This is the text for card 310.' },
  { image: platformsLogos +   '311.webp', title: 'Card Title 311', text: 'This is the text for card 311.' },
  { image: platformsLogos +   '312.webp', title: 'Card Title 312', text: 'This is the text for card 312.' },
  { image: platformsLogos +   '313.webp', title: 'Card Title 313', text: 'This is the text for card 313.' },
  { image: platformsLogos +   '314.webp', title: 'Card Title 314', text: 'This is the text for card 314.' },
  { image: platformsLogos +   '315.webp', title: 'Card Title 315', text: 'This is the text for card 315.' },


];
