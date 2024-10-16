export const courses: Array<INavbarData> = [
  {
    category: "Trading",
    items: [
      { name: "Beginner's Guide to Stock Trading", new: true },
      { name: "Mastering Day Trading", new: false },
      { name: "Mastering Swing Trading", new: false },
      { name: "Automating Stock Trading with Algorithms", new: false },
      { name: "Technical Analysis for Trading", new: false },
    ],
  },
  {
    category: "Investing",
    items: [
      { name: "Mastering Fundamental Analysis", new: false },
      { name: "Managing Investment Portfolios", new: false },
      { name: "Trading Exchange-Traded Funds (ETFs)", new: false },
      { name: "Cryptocurrency Trading for Beginners", new: false },
      { name: "Value Investing Strategies", new: false },
    ],
  },
  {
    category: "Analysis",
    items: [
      { name: "Mastering Technical Analysis", new: false },
      { name: "Risk Management in Stock Trading", new: false },
      { name: "Understanding Behavioral Finance in Trading", new: false },
      { name: "Market Trend Analysis", new: false },
    ],
  },
  {
    category: "Options",
    items: [
      { name: "Advanced Options Trading Strategies", new: false },
      { name: "Options Basics", new: false },
      { name: "Options Pricing Models", new: false },
      { name: "Strategies for Hedging with Options", new: false },
    ],
  },
  {
    category: "Forex",
    items: [
      { name: "Forex Trading Strategies", new: false },
      { name: "Understanding Forex Markets", new: false },
      { name: "Technical Analysis in Forex", new: false },
      { name: "Fundamental Analysis in Forex", new: false },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Data Analytics for Traders", new: true },
      { name: "Python for Trading", new: false },
      { name: "Data Visualization for Stock Analysis", new: false },
      { name: "Using Excel for Financial Modeling", new: false },
    ],
  },
  {
    category: "Cryptocurrency",
    items: [
      { name: "Introduction to Cryptocurrencies", new: false },
      { name: "Crypto Portfolio Management", new: false },
      { name: "DeFi and Yield Farming Basics", new: false },
      { name: "Blockchain Fundamentals", new: false },
    ],
  },
  {
    category: "Commodities",
    items: [
      { name: "Trading Commodities Like a Pro", new: false },
      { name: "Understanding Commodity Markets", new: false },
      { name: "Commodity Futures Trading", new: false },
    ],
  },
  {
    category: "Behavioral Finance",
    items: [
      { name: "Investor Psychology", new: false },
      { name: "Cognitive Biases in Trading", new: false },
      { name: "Market Sentiment Analysis", new: false },
    ],
  },
  {
    category: "Risk Management",
    items: [
      { name: "Identifying Market Risks", new: false },
      { name: "Portfolio Diversification", new: false },
      { name: "Creating a Risk Management Plan", new: false },
    ],
  },
  {
    category: "Wealth Management",
    items: [
      { name: "Essentials of Wealth Management", new: false },
      { name: "Investment Strategies for Wealth Building", new: false },
    ],
  },
  {
    category: "Regulations",
    items: [
      { name: "Understanding Stock Market Regulations", new: false },
      { name: "Compliance and Ethics in Trading", new: false },
    ],
  },
];

export const carers: Array<INavbarData> = [
  {
    category: "Design UX/UI",
    items: [
      { name: "Carreira de Desenvolvedor UX/UI", new: false },
      { name: "Carreira de Designer UX/UI", new: false },
      { name: "Carreira de Web Product Manager", new: false },
      { name: "Carreira de Product Designer", new: false },
      { name: "Carreira de Full Stack Designer", new: false },
      { name: "Carreira de Designer UX/UI + Figma", new: false },
    ],
  },
  {
    category: "Programação",
    items: [
      { name: "Carreira de Desenvolvedor Front-End React JS", new: false },
      { name: "Carreira de Desenvolvedor UX/UI", new: false },
      { name: "Carreira de Web Product Manager", new: false },
      { name: "Carreira de Desenvolvedor Full Stack", new: false },
      { name: "Carreira de Desenvolvedor Back End", new: false },
      { name: "Carreira de Full Stack Designer", new: false },
      { name: "Carreira de Desenvolvedor Full Stack Python", new: false },
      { name: "Carreira de Programador Iniciante + Mentorias", new: false },
    ],
  },
  {
    category: "Produto",
    items: [
      { name: "Carreira de Web Product Manager", new: false },
      { name: "Carreira de Product Designer", new: false },
      { name: "Carreira de Product Manager", new: false },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Carreira de Cientista de dados", new: false },
      { name: "Carreira de Cientista de dados + Python", new: false },
      { name: "Carreira de Introdução a dados", new: false },
      { name: "Carreira de Analista de dados", new: false },
      { name: "Carreira de Analista de dados Python", new: false },
      { name: "Carreira de Desenvolvedor Full Stack Python", new: false },
    ],
  },
]

export const forBusinesses: Array<INavbarData> = [
  {
    category: "",
    items: [
      { name: "Trainings", new: false },
      { name: "Partnerships", new: true },
    ],
  },
]

export const menuItems: Array<{
  category: string
  items: Array<string> | undefined
}> = [
  {
    category: "Benifits",
    items: undefined,
  },
  {
    category: "Certification",
    items: undefined,
  },
  {
    category: "Community",
    items: ["Who we are" ," Experiences", "New partnerships"],
  },
]
