const fakeData = {
  logos: [
    { 
      label: "None",
      value: "none",
    },
    { 
      label: "DT9",
      value: "https://wei-zang.com/png/dt9.png",
    },
    { 
      label: "Comparabet",
      value: "https://wei-zang.com/png/comparabet.png",
    },
    { 
      label: "SNAI",
      value: "https://wei-zang.com/png/snai.png",
    },
    { 
      label: "Swedish Chef",
      value: "https://wei-zang.com/png/swedish-chef.png",
    },
    { 
      label: "Bet 365",
      value: "https://wei-zang.com/png/bet365.png",
    },
    { 
      label: "Lambda",
      value: "https://wei-zang.com/svg/lambda.svg",
    },
    { 
      label: "Casino",
      value: "https://wei-zang.com/png/casino.png",
    },
    { 
      label: "Weedy Seadragon",
      value: "https://wei-zang.com/png/weedy.png",
    },
    { 
      label: "Anonymous",
      value: "https://wei-zang.com/png/anon.png",
    },
  ],
  backgroundImages: [
    {
      label: "None",
      value: "none",
    },
    {
      label: "Banner",
      value: "https://wei-zang.com/jpg/traditional.jpg",
    },
    {
      label: "Casino",
      value: "https://wei-zang.com/jpg/casino.jpg",
    },
    {
      label: "Sports Betting",
      value: "https://wei-zang.com/jpg/sport.jpg",
    },
    {
      label: "Forex",
      value: "https://wei-zang.com/jpg/forex.jpg",
    },
  ],
  awsRegionNames: {
    "us-east-1": "US East (N. Virginia)",
    "us-east-2": "US East (Ohio)",
    "us-west-1": "US West (N. California)",
    "us-west-2": "US West (Oregon)",
    "ca-central-1": "Canada (Central)",
    "eu-west-1": "EU (Ireland)",
    "eu-central-1": "EU (Frankfurt)",
    "eu-west-2": "EU (London)",
    "eu-west-3": "EU (Paris)",
    "eu-north-1": "EU (Stockholm)",
    "ap-northeast-1": "Asia Pacific (Tokyo)",
    "ap-northeast-2": "Asia Pacific (Seoul)",
    "ap-southeast-1": "Asia Pacific (Singapore)",
    "ap-southeast-2": "Asia Pacific (Sydney)",
    "ap-south-1": "Asia Pacific (Mumbai)",
    "sa-east-1": "South America (São Paulo)",
    "us-gov-west-1": "US Gov West 1",
    "us-gov-east-1": "US Gov East 1"
  },
  
  brands: [
    {
      label: "Comparabet",
      sk: "comparabet",
      url: "https://comparabet.it/",
      logo: "https://comparabet.it/wp-content/uploads/2021/01/footer_logo.png",
    },
    {
      label: "DT9 Affiliations",
      sk: "devSKValue",
      url: "https://dt9affiliations.com",
      logo: "https://dt9affiliations.com/wp-content/themes/dt9-theme/img/favicon/apple-icon-180x180.png",
    },
    {
      label: "Listingslab",
      sk: "listingslab",
      url: "https://listingslab.com",
      logo: "https://listingslab.com/apple-touch-icon.png",
    },
  ],
  sizes: [
    {
      label: "Banner",
      value: "banner",
      width: 728,
      height: 90,
    },
    {
      label: "Box",
      value: "box",
      width: 300,
      height: 250,
    },
    {
      label: "Skyscraper",
      value: "skyscraper",
      width: 300,
      height: 600,
    },
    {
      label: "Large Banner",
      value: "large_banner",
      width: 970,
      height: 250,
    },
  ],
  langauges: [
    {
      label: "English",
      value: "en",
    },
    {
      label: "French",
      value: "fr",
    },
    {
      label: "Italian",
      value: "it",
    },
    {
      label: "Brazilian",
      value: "pt",
    },
    {
      label: "Spanish",
      value: "es",
    },
  ],

  sitesEndpoints: {
    create: {
      url: `${process.env.REACT_APP_BASE_URL}workspace-sites/create`,
      method: "POST",
    },
    read: {
      url: `${process.env.REACT_APP_BASE_URL}workspace-sites`,
      method: "GET"
    },
    update: {
      url: `${process.env.REACT_APP_BASE_URL}workspace-sites/update`,
      method: "PUT"
    },
  },

  bannersEndpoints: {
    create: {
      url: `${process.env.REACT_APP_BASE_URL}workspace-banners/create`,
      method: "POST",
    },
    read: {
      url: `${process.env.REACT_APP_BASE_URL}workspace-banners`,
      method: "GET"
    },
    update: {
      url: `${process.env.REACT_APP_BASE_URL}workspace-banners/update`,
      method: "PUT"
    },
  },
}

export { fakeData }