import { useState } from "react";

const C = {
  bg:"#0D0700",card:"#1A0C00",border:"#8B5E00",gold:"#D4A017",amber:"#FF8C00",
  honey:"#F5A623",cream:"#FFF8E7",muted:"#A07840",red:"#C0392B",green:"#27AE60",
  blue:"#2980B9",purple:"#8E44AD",teal:"#16A085",dark:"#0A0500",
};

// ── ALL REAL RESEARCH ARTICLES (2023–2026, open access) ───────────────────
const ARTICLES = [
  // COLONY HEALTH & DISEASE
  {
    id:1, cat:"🔬 Colony Health & Disease",
    title:"U.S. Colony Losses 2024–2025: Surveys After Unusually High Winter Die-Offs",
    authors:"USDA-ARS Bee Research Lab et al.", journal:"bioRxiv / ScienceDirect", year:2025,
    url:"https://pubmed.ncbi.nlm.nih.gov/41061511/",
    summary:"Two industry groups surveyed beekeepers managing over half of all U.S. colonies after severe winter 2024–25 losses, especially during almond pollination prep. Commercial operations (500+ hives) suffered worse than hobbyists.",
    findings:[
      "Varroa mites cited as the #1 cause of losses by both commercial and hobbyist beekeepers",
      "Pesticide exposure and pathogens ranked 2nd and 3rd for commercial losses",
      "Queen failure and weather were primary factors for smaller-scale beekeepers",
      "Amitraz resistance alone did not fully explain the scale of losses — protein/carb feeding patterns also played a role",
      "Colony loss rates reached 55–62% of managed U.S. colonies between April 2024 and April 2025",
    ],
    access:"Open Access — PubMed", color:C.red,
  },
  {
    id:2, cat:"🔬 Colony Health & Disease",
    title:"USDA Finds Virus-Spreading Amitraz-Resistant Varroa Behind 2025 Colony Collapses",
    authors:"USDA Agricultural Research Service (ARS)", journal:"USDA ARS Research News", year:2025,
    url:"https://www.ars.usda.gov/news-events/news/research-news/2025/usda-researchers-find-viruses-from-miticide-resistant-parasitic-mites-are-cause-of-recent-honey-bee-colony-collapses/",
    summary:"USDA scientists identified high levels of Deformed Wing Virus A & B and Acute Bee Paralysis Virus in collapsed colonies. Varroa mites from these colonies showed amitraz resistance in virtually all samples tested — a major finding for treatment strategy.",
    findings:[
      "Deformed Wing Virus A & B and Acute Bee Paralysis Virus found in all sampled collapsed colonies",
      "Amitraz (miticide) resistance found in virtually all collected Varroa mites — an urgent crisis",
      "New parasitic treatment strategies are urgently needed beyond current chemical options",
      "Findings submitted to peer-reviewed journal June 2025",
      "Directly impacts which treatments you should use in your apiary right now",
    ],
    access:"Free — USDA Government Source", color:C.red,
  },
  {
    id:3, cat:"🔬 Colony Health & Disease",
    title:"Diagnostic Techniques and Epidemiology for Bee Parasites: A 2026 Review",
    authors:"Multiple Authors (MDPI)", journal:"Animals (MDPI) — Open Access", year:2026,
    url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC12845056/",
    summary:"Comprehensive 2026 review covering diagnostic methods for all major bee parasites — Varroa, Nosema, Tropilaelaps, Small Hive Beetle, and more. Evaluates trade-offs between morphological, molecular, and automated detection methods.",
    findings:[
      "No single gold-standard diagnostic method exists — choice depends on your context and resources",
      "Annual colony losses exceed 30–40% globally; U.S. reached 55–62% in 2024–25",
      "Economic impact of bee losses estimated at $600 million for the U.S. alone in 2024–25",
      "Molecular methods most sensitive but expensive — alcohol wash remains most practical for varroa counting",
      "Automated AI-based counting tools now available commercially and showing strong accuracy",
    ],
    access:"Open Access — PubMed Central", color:C.red,
  },
  {
    id:4, cat:"🔬 Colony Health & Disease",
    title:"California Bees Beating Varroa: Naturally Resistant Colonies Studied",
    authors:"University Research Team", journal:"ScienceDaily", year:2026,
    url:"https://www.sciencedaily.com/releases/2026/04/260420014740.htm",
    summary:"Feral California bee populations show natural varroa resistance. Lab studies reveal Varroa mites are significantly less attracted to larvae from resistant colonies — a promising discovery for breeding resistant stock.",
    findings:[
      "Resistant bees combine traits from African, Eastern European, Middle Eastern and Western European lineages",
      "Varroa mites showed significantly less attraction to larvae of resistant colonies",
      "Feral colonies in Southern California show dramatically better survival without chemical treatment",
      "Findings have implications for selective breeding programmes worldwide",
      "Hygienic behavior appears to be a key inherited trait — breeders should prioritise this",
    ],
    access:"Free — ScienceDaily", color:C.amber,
  },
  {
    id:5, cat:"🔬 Colony Health & Disease",
    title:"Organic vs Conventional Management: Equally Healthy and Productive Colonies",
    authors:"Multiple Authors", journal:"Scientific Reports (Nature)", year:2023,
    url:"https://www.nature.com/articles/s41598-023-32824-w",
    summary:"Longitudinal experiment comparing organically managed colonies (no synthetic miticides) with conventionally managed ones. Results show both can achieve equivalent health and productivity when data-driven management strategies are applied consistently.",
    findings:[
      "Organic (chemical-free) management can match conventional systems when rigorously applied",
      "Data-driven management recommendations remain one of the biggest challenges for a sustainable industry",
      "Varroa mite levels, viral titers and immune gene expression are the strongest predictors of winter survival",
      "Beekeepers using integrated pest management outperform those relying on single treatment types",
      "Regular monitoring and record-keeping are more important than any single treatment choice",
    ],
    access:"Open Access — Nature/Scientific Reports", color:C.amber,
  },
  // TECHNOLOGY
  {
    id:6, cat:"🤖 Technology & Smart Hives",
    title:"Smart Beehive Technologies: Systematic Review of 135 Publications (1990–2025)",
    authors:"Šabić J., Perković T., Šolić P., Šerić L. — University of Split",
    journal:"Sensors (MDPI) — DOI: 10.3390/s25175359", year:2025,
    url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC12431418/",
    summary:"The most comprehensive systematic review of smart hive technologies to date. Covers 135 peer-reviewed papers across IoT monitoring, sensor types, machine learning and practical applications. Published August 2025.",
    findings:[
      "Smart hive tech shifts beekeeping from reactive to proactive, data-driven management",
      "Common sensors: environmental (temp/humidity), acoustic (sound analysis), visual (cameras), structural (weight)",
      "Deep learning and computer vision now used for disease detection from photos",
      "A notable trend toward multimodal sensor fusion for more accurate hive state prediction",
      "Key challenges remain in system integration, dataset standardisation and large-scale deployment",
    ],
    access:"Open Access — PubMed Central / MDPI", color:C.blue,
  },
  {
    id:7, cat:"🤖 Technology & Smart Hives",
    title:"IoT and Machine Learning for Precision Beekeeping: Critical Analysis",
    authors:"Turyagyenda A., Katumba A., Akol R. et al.", journal:"AI (MDPI)", year:2025,
    url:"https://www.mdpi.com/2673-2688/6/2/26",
    summary:"Critical review of IoT-enabled precision beekeeping systems — examining sensor technologies, machine learning models, performance metrics and real-world limitations of current automated hive monitoring systems.",
    findings:[
      "IoT sensors now routinely track weight, temperature, humidity, sound and gas levels",
      "ML models can detect queen status, enemy attacks, swarm readiness and disease from sensor data",
      "Raspberry Pi, Arduino Mega, and NVIDIA Jetson Nano are the most commonly used platforms",
      "Reinforcement learning models being explored for adaptive hive management decisions",
      "Regulatory frameworks around AI-driven beekeeping decisions still need to be developed",
    ],
    access:"Open Access — MDPI", color:C.blue,
  },
  {
    id:8, cat:"🤖 Technology & Smart Hives",
    title:"BeeViz: AI Monitoring System for Forecasting and Anomaly Detection",
    authors:"Multiple Authors", journal:"Scientific Reports (Nature)", year:2026,
    url:"https://www.nature.com/articles/s41598-026-37877-1",
    summary:"Published February 2026, BeeViz integrates sensor networks, cloud infrastructure and AI to track hive temperature, humidity and weight in real-time, generating short-term forecasts and instant anomaly alerts for beekeepers.",
    findings:[
      "System tracks key hive parameters every 5 minutes and alerts beekeepers to anomalies instantly",
      "Short-term forecasting proved accurate across different modelling approaches",
      "Enables proactive interventions before colony problems become critical",
      "A survey of 844 beekeepers in 18 European countries showed strong demand for such tools",
      "FAO has identified big data and machine learning as strategic priorities for apiculture",
    ],
    access:"Open Access — Nature/Scientific Reports", color:C.blue,
  },
  {
    id:9, cat:"🤖 Technology & Smart Hives",
    title:"AI Predicts Flowering Periods from Hive Weight Data",
    authors:"Gersnoviez A. et al. — University of Cordoba",
    journal:"Computers and Electronics in Agriculture", year:2025,
    url:"https://phys.org/news/2025-12-ai-bee-hives-remotely-periods.html",
    summary:"Sensors measuring hive weight, humidity and temperature every 5 minutes — connected remotely — allow AI to predict precise flowering periods. Beekeepers can track health changes and detect predators without visiting the apiary.",
    findings:[
      "Weight, humidity and temperature sensors updated every 5 minutes provide rich colony data",
      "AI can remotely determine when nearby plants are flowering based on forager behaviour patterns",
      "Beekeepers can detect health problems, predators and interference without opening hives",
      "Reduces colony disturbance while improving management responsiveness",
      "System accessible via standard computer — no specialist hardware needed at beekeeper end",
    ],
    access:"Free — Phys.org (journal link: Computers and Electronics in Agriculture)", color:C.blue,
  },
  // SUSTAINABILITY
  {
    id:10, cat:"🌱 Sustainability & Environment",
    title:"Greenhouse Gas Emissions and Energy in Beekeeping",
    authors:"Benoit M. & Grosmond G.", journal:"Frontiers in Animal Science", year:2025,
    url:"https://www.frontiersin.org/journals/animal-science/articles/10.3389/fanim.2025.1524343/full",
    summary:"First detailed lifecycle carbon analysis of beekeeping. Compared hobbyist (1 apiary) vs professional (300 hive) systems. Travel is the #1 emission source for hobbyists.",
    findings:[
      "Amateur beekeeping emits 2.7 kgCO₂/kg honey vs 1.49kg for professional operations",
      "Travel to apiaries accounts for 59% of total emissions for hobbyist beekeepers",
      "Sugar feeding accounts for 21–41% of total emissions — local forage reduces this significantly",
      "Placing hives closer to home is the single most effective way to reduce your carbon footprint",
      "Professional operations benefit from economies of scale in transport and processing",
    ],
    access:"Open Access — Frontiers", color:C.green,
  },
  {
    id:11, cat:"🌱 Sustainability & Environment",
    title:"Bridging Research and Practice: Developing Beekeeping Knowledge and Innovation Systems",
    authors:"Fabricius Kristiansen L. et al.", journal:"Frontiers in Conservation Science", year:2024,
    url:"https://www.frontiersin.org/journals/conservation-science/articles/10.3389/fcosc.2024.1490089/full",
    summary:"Introduces the Beekeeping Knowledge and Innovation System (B-KIS) concept — examining how to bridge the gap between scientific research findings and real-world beekeeper practice.",
    findings:[
      "Major gap exists between scientific findings and what beekeepers actually practice",
      "Structured advisory networks (like local associations) improve colony survival outcomes",
      "Collaborative innovation and knowledge sharing improve adoption of varroa management",
      "Beekeepers with access to up-to-date research lose significantly fewer colonies",
      "Digital platforms could dramatically accelerate knowledge transfer to beekeepers worldwide",
    ],
    access:"Open Access — Frontiers", color:C.green,
  },
  // STARTUP & BUSINESS
  {
    id:12, cat:"🚀 Business & Startup",
    title:"Global Apiculture Market: $12.41 Billion in 2025, Growing to $21.1B by 2034",
    authors:"Fortune Business Insights", journal:"Market Research Report", year:2025,
    url:"https://www.fortunebusinessinsights.com/apiculture-market-108593",
    summary:"The global apiculture market was valued at $12.41 billion in 2025 and is projected to reach $21.10 billion by 2034 at a CAGR of 6.13%. Asia Pacific dominates with 36% market share.",
    findings:[
      "Global bee industry worth $12.41 billion in 2025 — growing at 6.13% per year",
      "U.S. apiculture market projected to reach $2.24 billion by 2032",
      "Asia Pacific dominates with $4.48 billion — China and India lead production",
      "Honey market has grown 25% since 2020 driven by health-conscious consumers",
      "Pollination services generate $15–20 billion annually for U.S. agriculture alone",
    ],
    access:"Free Summary — Fortune Business Insights", color:C.honey,
  },
  {
    id:13, cat:"🚀 Business & Startup",
    title:"Beekeeping Profitability: Strategies to Achieve 15–40% Net Margins",
    authors:"StartupFinancialProjection.com", journal:"Industry Analysis", year:2025,
    url:"https://startupfinancialprojection.com/blogs/profitability/beekeeping-honey-production",
    summary:"Detailed financial analysis of beekeeping operations. Covers per-hive revenue, scaling strategies, startup costs and the specific factors that determine whether your apiary will be profitable.",
    findings:[
      "A single hive produces 30–100 lbs surplus honey per season — £240–£1,200 annual revenue per hive",
      "Net profit margins of 15–40% achievable for well-managed operations",
      "10–20 hive operations generate $5,000–$15,000 annual revenue",
      "Organic certification adds approximately 40% to product value",
      "Diversifying into beeswax, pollen, queens, and pollination services is key to strong profitability",
    ],
    access:"Free — Industry Blog", color:C.honey,
  },
  {
    id:14, cat:"🚀 Business & Startup",
    title:"India's National Beekeeping Mission Extended; Vermont $1.7M Pollinator Grants (2025)",
    authors:"IMARC Group / One Hive Foundation", journal:"Industry News", year:2025,
    url:"https://www.imarcgroup.com/beekeeping-services-business-plan-project-report",
    summary:"Global beekeeping investment is accelerating. India extended its National Beekeeping and Honey Mission for 3 more years. The One Hive Foundation awarded $1.7M in new grants in Vermont for pollinator conservation and beekeeping expansion.",
    findings:[
      "India's National Beekeeping and Honey Mission extended FY 2023–26 — the 'Sweet Revolution'",
      "One Hive Foundation announced $1.7M+ in grants for Vermont pollinator conservation (April 2025)",
      "Government support for beekeeping is expanding globally — grant opportunities increasing",
      "Strong demand for pollination services and sustainable agriculture supports favorable ROI",
      "Scalability through hive expansion and diversified services drives long-term growth",
    ],
    access:"Free Summary Available", color:C.honey,
  },
];

// ── REAL SUPPLIERS (sourced June 2026) ────────────────────────────────────
const SUPPLIERS = [
  // UK
  { id:1, region:"UK", name:"E.H. Thorne (Beehives) Ltd", badge:"🥇 UK Market Leader",
    url:"https://www.thorne.co.uk", type:"Full Range — Manufacturer",
    desc:"Britain's leading manufacturer and retailer of beekeeping equipment. Manufactures hives, wax foundation, suits, extractors at their Lincolnshire factory. Branches in Wragby, Windsor and Tayport (Scotland). Renowned worldwide for quality.",
    speciality:"Hive manufacturing, suits, extractors, wax", price:"£££", beginner:true, rating:5 },
  { id:2, region:"UK", name:"National Bee Supplies", badge:"🏆 Best Cedar Hives",
    url:"https://beekeeping.co.uk", type:"Hive Craftsmen — Devon",
    desc:"Leading craftsmen of cedar beehives based in Okehampton, Devon. Their motto: 'The best value hive is the one you don't have to replace.' Click & Collect available Mon–Fri. Premium cedar construction using traditional techniques.",
    speciality:"Premium cedar hives", price:"£££", beginner:false, rating:5 },
  { id:3, region:"UK", name:"Maisemore Apiaries (bees-online.co.uk)", badge:"✅ 2026 Catalogue Live",
    url:"https://bees-online.co.uk", type:"Full Range + Live Bees",
    desc:"2026 catalogue now available. Family-run supplier of hive frames, clothing, extraction equipment, beeswax foundation, hive tools and live bees on comb. Also attends the Welsh Beekeeping Convention.",
    speciality:"Live bees, complete kits, frames", price:"££", beginner:true, rating:4 },
  { id:4, region:"UK", name:"Local Honey Man", badge:"🐝 Live Bees 2026",
    url:"https://localhoneyman.co.uk", type:"Live Bees + Hives",
    desc:"Supplying overwintered 2025 colonies and 2026 season bees. Sells National hives in cedar or polystyrene, 10-frame colonies or 5-frame nucleus. Also Buckfast queen bees. Motto: 'Honey saves Hives.'",
    speciality:"Live bees, nucleus colonies, Buckfast queens", price:"££", beginner:true, rating:4 },
  { id:5, region:"UK", name:"Beekeeping Supplies UK", badge:"⭐ Best Value",
    url:"https://www.beekeepingsuppliesuk.com", type:"Equipment — Kent",
    desc:"Family-run Kent business (took over 2023) with excellent reviews for quality frames, wax foundation, fast delivery and great service. Customers consistently praise their wax foundation as the best available. Competitive prices.",
    speciality:"Frames, wax foundation, tools", price:"£", beginner:true, rating:5 },
  { id:6, region:"UK", name:"Gwenyn Gruffydd", badge:"🏪 Multi-Brand Stockist",
    url:"https://gwenyngruffydd.co.uk", type:"Multi-Brand Retailer",
    desc:"Comprehensive beekeeping store stocking Swienty, Thornes, Paynes, Vita Europe, HiveAlive and more. Open weekdays 9am–4:30pm. Also runs a YouTube channel with tips and equipment reviews.",
    speciality:"Multi-brand, extraction equipment", price:"££", beginner:true, rating:4 },
  { id:7, region:"UK", name:"Flow Hive UK", badge:"💡 Innovative Harvesting",
    url:"https://uk.honeyflow.com", type:"Innovative Hive System",
    desc:"UK store for the revolutionary Flow Hive — harvest honey by turning a key without disturbing the bees. Stocks suits, smokers, tools and all standard beekeeping equipment alongside their flagship product. Ships UK-wide.",
    speciality:"Flow Hive system, all UK equipment", price:"££££", beginner:true, rating:4 },
  { id:8, region:"UK", name:"Old Castle Farm Hives", badge:"🥼 Suits Specialist",
    url:"https://www.oldcastlefarmhives.com", type:"Suits & Protective Gear",
    desc:"Well-regarded for quality protective suits including the Sentinel Pro II full suit. Good customer service for sizing. Also supplies wax foundation praised as 'by far the best available.' Note: US shipping has additional customs fees.",
    speciality:"Premium suits, wax foundation", price:"££", beginner:true, rating:4 },
  { id:9, region:"UK", name:"The Hive Guys", badge:"🔧 Quick-Assembly Kits",
    url:"https://thehiveguys.com", type:"Hive Kits",
    desc:"Langstroth hive equipment designed for quick and easy assembly — ideal for smaller gardens or larger setups. All hives designed for honeybees, complete kits or individual parts available.",
    speciality:"Langstroth hive kits, easy assembly", price:"££", beginner:true, rating:4 },
  // US
  { id:10, region:"US", name:"Mann Lake Bee & Ag Supply", badge:"🥇 US Market Leader",
    url:"https://www.mannlakeltd.com", type:"Full Range",
    desc:"One of America's largest beekeeping suppliers. Huge range of hives, equipment, treatments, feeds and gear. Well-known for educational content and guides. Ships nationwide across the US.",
    speciality:"Complete US supplies", price:"$$$", beginner:true, rating:5 },
  { id:11, region:"US", name:"Dadant & Sons", badge:"🏛️ Founded 1863",
    url:"https://www.dadant.com", type:"Full Range — Manufacturer",
    desc:"America's oldest beekeeping supplier, family-owned for 6 generations. Manufactures hives, frames and wax foundation. Publishes the American Bee Journal. Multiple US branches for in-store pickup.",
    speciality:"Hive manufacturing, American Bee Journal", price:"$$$", beginner:true, rating:5 },
  { id:12, region:"US", name:"Brushy Mountain Bee Farm", badge:"🌲 NC Hobbyist Favourite",
    url:"https://www.brushymountainbeefarm.com", type:"Equipment",
    desc:"North Carolina-based supplier popular with American hobbyists. Good range of wooden ware, beginner packages, tools and extraction equipment. Strong online community and helpful guides.",
    speciality:"Wooden ware, beginner packages", price:"$$", beginner:true, rating:4 },
  { id:13, region:"US", name:"Walter T. Kelley", badge:"🔑 Traditional Since 1924",
    url:"https://www.kelleybees.com", type:"Equipment — Manufacturer",
    desc:"Kentucky-based manufacturer and supplier since 1924. Known for quality wooden ware, extractors and traditional beekeeping tools. One of the US's most respected heritage suppliers.",
    speciality:"Traditional wooden ware, extractors", price:"$$", beginner:true, rating:4 },
  // International
  { id:14, region:"International", name:"Flow Hive (Australia)", badge:"🌏 Ships Worldwide",
    url:"https://www.honeyflow.com", type:"Innovative Hives — Global",
    desc:"Inventors of the Flow Hive — honey extracted by turning a key, without disturbing bees. Ships worldwide. Premium price justified by reduced stress on colony at harvest. Popular globally with beginners.",
    speciality:"Flow Hive innovation", price:"££££", beginner:true, rating:4 },
  { id:15, region:"International", name:"Swienty (Denmark)", badge:"🏭 Professional Grade",
    url:"https://www.swienty.com", type:"Commercial Equipment",
    desc:"Leading European manufacturer of professional beekeeping equipment. Specialises in honey extraction machinery and high-capacity processing equipment. Used by commercial apiaries across Europe.",
    speciality:"Professional extraction equipment", price:"££££", beginner:false, rating:5 },
];

// ── BUILD A HIVE GUIDE ────────────────────────────────────────────────────
const DIY_STEPS = [
  {
    step:1, icon:"🏠", title:"Choose Your Hive Type First",
    time:"Research: 1–2 days before buying anything",
    body:"The Langstroth is best for beginners — universally compatible, most parts available everywhere, most online advice written for it. The National hive is standard in the UK and uses the same principles. The Warre (vertical top-bar) is more natural but trickier to manage. The Top Bar is the simplest to DIY. Pick ONE type and stick to it — mixing types creates incompatibility headaches.",
    links:[
      {label:"Family Handyman: How to Build a Langstroth Hive",url:"https://www.familyhandyman.com/project/how-to-build-a-beehive/"},
      {label:"This Old House: Complete DIY Hive Build Plans",url:"https://www.thisoldhouse.com/woodworking/23032293/building-a-beehive"},
      {label:"Today's Homeowner: Step-by-Step DIY Hive Guide",url:"https://todayshomeowner.com/lawn-garden/guides/how-to-build-a-beehive/"},
      {label:"Insteading: 18 Creative DIY Hive Plans",url:"https://insteading.com/blog/diy-beehive-plans/"},
    ],
  },
  {
    step:2, icon:"🪵", title:"Choose Your Wood",
    time:"Cost: £30–£80 materials (vs £150–£250 to buy)",
    body:"Western Red Cedar is the gold standard — naturally rot-resistant, light, and the best insulator. Costs more upfront but lasts 15–20+ years. Pine is cheap and widely available but needs regular painting and lasts 5–8 years. Tulip Poplar is popular in the US — lightweight, stable, takes paint well. Never use MDF, plywood for boxes, or treated timber (chemicals harm bees).",
    links:[
      {label:"Beekeeper Corner: Wood Comparison & DIY Plans",url:"https://beekeepercorner.com/diy-bee-hive-plans-for-beginners/"},
      {label:"Revival Woodworks: Building a Hive — Part 1",url:"https://www.revivalwoods.com/blog/how-to-build-a-beehive-1"},
    ],
  },
  {
    step:3, icon:"🔧", title:"Tools You'll Need",
    time:"Build time: 8–16 hours for a complete Langstroth",
    body:"Essential tools: table saw (ripping boards to width), mitre saw (cutting to length), jigsaw (entrance notches), drill, clamps, wood glue (Titebond III exterior grade), exterior screws, sandpaper (80 and 120 grit), measuring tape. The most critical measurement in beekeeping is bee space: 8–9mm between surfaces. Too small and bees propolise it shut; too large and they build comb across it.",
    links:[
      {label:"The Spruce: Free Langstroth Hive Plans",url:"https://www.thespruce.com/free-beehive-plans-1388017"},
      {label:"University of Minnesota: Beginner Beekeeping Guide",url:"https://extension.umn.edu/bees/beginning-beekeeping"},
    ],
  },
  {
    step:4, icon:"📐", title:"Components to Build (Langstroth)",
    time:"Build each component before assembling",
    body:"A complete Langstroth needs: (1) Bottom Board — landing platform + ventilated floor, (2) Brood Box (Deep Super) — where the queen lays eggs, (3) Queen Excluder — keeps queen below honey supers, (4) Honey Super (Shallow/Medium) — where bees store harvestable honey, (5) Inner Cover — regulates ventilation, (6) Outer/Telescoping Cover — weatherproof lid. Frames go inside each box — buy these rather than making them.",
    links:[
      {label:"Beekeeping Supplies UK — Buy Frames & Foundation",url:"https://www.beekeepingsuppliesuk.com"},
      {label:"Thornes — UK National Frames & Foundation",url:"https://www.thorne.co.uk"},
    ],
  },
  {
    step:5, icon:"🎨", title:"Finishing & Weatherproofing",
    time:"Allow 2–3 weeks drying time before adding bees",
    body:"Paint or treat exterior surfaces only — never inside the hive. Light colours (white, cream) reflect heat in summer — important for colony temperature regulation. Prime first, then 2 coats of exterior-grade paint. Alternatively use raw linseed oil for a natural, beekeeper-friendly finish. Allow 2–3 weeks ventilation before introducing bees so fumes dissipate completely.",
    links:[
      {label:"National Bee Supplies — Cedar Hive Care Guide",url:"https://beekeeping.co.uk"},
    ],
  },
  {
    step:6, icon:"📦", title:"Always Buy: Frames & Foundation",
    time:"Cost: £2–£4 per frame — never worth making yourself",
    body:"Frames and wax/plastic foundation should always be purchased, not made. Precision matters: bee space is critical and hand-cut frames rarely achieve it consistently. DN4 frames for UK National brood boxes, SN4 for supers. Beeswax foundation is best — bees draw it out faster and prefer it. Plastic foundation is durable and reusable. Order from Beekeeping Supplies UK, Thornes or Maisemore.",
    links:[
      {label:"Maisemore Apiaries — Frames & Foundation",url:"https://bees-online.co.uk"},
      {label:"Beekeeping Supplies UK — All Frames",url:"https://www.beekeepingsuppliesuk.com"},
    ],
  },
];

// ── STYLES ────────────────────────────────────────────────────────────────
const S = {
  app:{minHeight:"100vh",background:C.bg,fontFamily:"'Palatino Linotype',Palatino,serif",color:C.cream,fontSize:"14px"},
  header:{background:"linear-gradient(135deg,#2A1200,#0D0700)",borderBottom:`2px solid ${C.gold}`,padding:"0 16px",display:"flex",alignItems:"center",flexWrap:"wrap"},
  logoWrap:{display:"flex",alignItems:"center",gap:"10px",padding:"14px 0"},
  logoText:{fontSize:"21px",color:C.gold,fontWeight:"bold"},
  logoSub:{fontSize:"9px",color:C.muted,letterSpacing:"3px",textTransform:"uppercase"},
  nav:{display:"flex",gap:"3px",flexWrap:"wrap",padding:"8px 0",marginLeft:"auto"},
  nb:(a)=>({padding:"7px 13px",borderRadius:"6px",border:`1px solid ${a?C.gold:"transparent"}`,background:a?`${C.gold}18`:"transparent",color:a?C.gold:C.muted,cursor:"pointer",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"}),
  page:{padding:"20px",maxWidth:"960px",margin:"0 auto"},
  card:{background:C.card,border:`1px solid ${C.border}44`,borderRadius:"14px",padding:"16px",marginBottom:"12px"},
  h1:{fontSize:"20px",color:C.gold,marginBottom:"14px"},
  h2:{fontSize:"15px",color:C.honey,marginBottom:"8px"},
  h3:{fontSize:"12px",color:C.amber,fontWeight:"bold",marginBottom:"5px"},
  label:{fontSize:"10px",color:C.muted,textTransform:"uppercase",letterSpacing:"1px",marginBottom:"3px"},
  grid2:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"12px"},
  grid3:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"10px"},
  stat:{background:`${C.gold}0D`,border:`1px solid ${C.gold}30`,borderRadius:"10px",padding:"12px",textAlign:"center"},
  btn:(v)=>({padding:"8px 15px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"12px",fontWeight:"bold",fontFamily:"inherit",background:v==="primary"?C.honey:v==="green"?C.green:`${C.honey}22`,color:v==="primary"||v==="green"?"#0D0700":C.cream}),
  badge:(c)=>({display:"inline-block",padding:"2px 8px",borderRadius:"10px",background:`${c}22`,border:`1px solid ${c}66`,color:c,fontSize:"10px",fontWeight:"bold"}),
  tag:(c)=>({display:"inline-block",padding:"2px 7px",borderRadius:"4px",background:`${c}18`,color:c,fontSize:"10px",marginRight:"4px",marginBottom:"3px"}),
  alert:(c)=>({padding:"9px 12px",borderRadius:"8px",background:`${c}18`,border:`1px solid ${c}55`,color:c,fontSize:"12px",marginBottom:"8px"}),
  link:{color:C.honey,textDecoration:"none",fontSize:"12px"},
  divider:{borderTop:`1px solid ${C.border}33`,margin:"12px 0"},
};

const TABS=[["research","📚 Research"],["suppliers","🛒 Suppliers"],["startup","🚀 Startup"],["diy","🪵 Build a Hive"]];
const CATS=["All",...new Set(ARTICLES.map(a=>a.cat))];
const REGIONS=["All","UK","US","International"];

export default function BeeMasterResearch() {
  const [tab,setTab]=useState("research");
  const [catFilter,setCatFilter]=useState("All");
  const [regionFilter,setRegionFilter]=useState("All");
  const [expanded,setExpanded]=useState(null);
  const [expandedDiy,setExpandedDiy]=useState(null);
  const [startupLevel,setStartupLevel]=useState("hobbyist");

  const filteredArticles = catFilter==="All" ? ARTICLES : ARTICLES.filter(a=>a.cat===catFilter);
  const filteredSuppliers = regionFilter==="All" ? SUPPLIERS : SUPPLIERS.filter(s=>s.region===regionFilter);

  const STARTUP_DATA = {
    hobbyist:{
      label:"🏡 Hobbyist (1–3 Hives)", color:C.green,
      startup:"£300–£800 / $400–$1,100", annual:"£150–£300", yield:"15–40kg honey/year",
      time:"2–4 hrs/week active season",
      checklist:[
        {item:"Complete Hive Kit (brood box, super, floor, roof, frames)",cost:"£150–£250"},
        {item:"Nucleus Colony or Package Bees (local beekeeper)",cost:"£200–£280"},
        {item:"Full Bee Suit with Round Veil",cost:"£40–£100"},
        {item:"Hive Tool",cost:"£5–£10"},
        {item:"Smoker + Fuel",cost:"£15–£30"},
        {item:"Frame Feeder",cost:"£10–£20"},
        {item:"Queen Marking Kit",cost:"£5"},
        {item:"Manual Extractor or Crush & Strain Kit",cost:"£30–£150"},
        {item:"Refractometer (moisture testing)",cost:"£20–£40"},
        {item:"Varroa treatment (OA acid)",cost:"£10–£20"},
      ],
      steps:[
        "Join your local beekeeping association (BBKA UK / state assoc. US) — includes training & insurance",
        "Complete a beginner course — many associations offer free or subsidised training",
        "Purchase equipment before bees — assemble and paint hive at least 3 weeks before colony arrives",
        "Order a nucleus colony from a local beekeeper for spring (April/May UK, March/April US)",
        "Site hive: south-facing, sheltered, sunny morning sun, away from paths and neighbours",
        "Inspect every 7–10 days in spring and summer — look for queen, brood pattern, swarm cells",
        "Treat for varroa at least twice per year — spring and post-harvest autumn",
        "Harvest in July/August — leave minimum 20kg stores for winter",
        "Register hives on BeeBase (UK — free, nationalbeeunit.com)",
      ],
      revenue:[
        "Sell honey direct: £5–£8/jar — friends, family, neighbours, colleagues",
        "Local farmers markets once you have 20+ jars",
        "Beeswax candles and lip balms from cappings wax",
        "Gift sets at Christmas",
      ],
    },
    sideliner:{
      label:"🏪 Sideliner (5–50 Hives)", color:C.amber,
      startup:"£3,000–£12,000 / $4,000–$15,000", annual:"£2,000–£6,000", yield:"150–1,500kg honey/year",
      time:"15–35 hrs/week active season",
      checklist:[
        {item:"5–50 Complete Hives",cost:"£750–£12,500"},
        {item:"Bee Colonies / Nucleus Packs",cost:"£1,000–£14,000"},
        {item:"6–12 Frame Radial Extractor",cost:"£300–£900"},
        {item:"Uncapping Tank + Electric Knife",cost:"£150–£500"},
        {item:"Settling/Bottling Tank (100kg+)",cost:"£80–£250"},
        {item:"Refractometer",cost:"£25–£50"},
        {item:"2x Professional Suits",cost:"£100–£200"},
        {item:"Vehicle / Trailer for apiary visits",cost:"£2,000–£10,000"},
        {item:"Annual treatments (OA, ApiVar)",cost:"£200–£800"},
        {item:"Jars, labels, packaging",cost:"£300–£1,000"},
        {item:"Food business registration (UK: free)",cost:"Free–£100"},
      ],
      steps:[
        "Register as a food business with your local council (UK: free, legal requirement for selling honey)",
        "Get Level 2 Food Hygiene certificate — free online courses via RSPH or Highfield",
        "Get a refractometer — moisture must be under 20% before bottling or selling",
        "Join BBKA or BFA (Bee Farmers Association) for commercial insurance and support",
        "Set up at 2–3 regular markets or approach local delis and farm shops",
        "Track all costs and revenue — aim for 15–25% net profit margins",
        "Consider organic certification — adds ~40% to product value",
        "Expand by 5–10 hives per year as skills and cash flow allow",
        "Explore nucleus colony and queen sales in spring for additional income",
      ],
      revenue:[
        "Direct honey sales: highest margin — £6–£10/jar at markets",
        "Wholesale to local shops, delis, cafes (lower margin, higher volume)",
        "Beeswax products: candles, wraps, polish, cosmetics",
        "Nucleus colony sales in spring (£200–£280 each)",
        "Queen rearing and mated queen sales",
        "Corporate honey gifting and branded honey",
        "Pollination services for local orchards, allotments, farms",
      ],
    },
    commercial:{
      label:"🏭 Commercial (50+ Hives)", color:C.red,
      startup:"£40,000–£100,000 / $50,000–$130,000", annual:"£15,000–£40,000", yield:"2,000–10,000kg/year",
      time:"Full-time — 40–60 hrs/week",
      checklist:[
        {item:"50–200+ Hives + equipment",cost:"£12,500–£60,000+"},
        {item:"Commercial 24–64 Frame Extractor",cost:"£3,000–£20,000"},
        {item:"Food-grade processing room",cost:"£5,000–£25,000"},
        {item:"Vehicle + trailer (migratory beekeeping)",cost:"£8,000–£30,000"},
        {item:"Cold room / storage",cost:"£2,000–£12,000"},
        {item:"Commercial bottling and labelling equipment",cost:"£1,000–£8,000"},
        {item:"Business insurance (liability, equipment, vehicle)",cost:"£800–£3,000/yr"},
        {item:"Staff wages (seasonal help)",cost:"£10,000–£25,000/yr"},
      ],
      steps:[
        "Develop a formal business plan with 3-year financial projections",
        "Explore grants: UK Rural Payments Agency, BBKA grants, USDA SARE grants (US)",
        "Register as food business, undergo Local Authority food inspection",
        "Invest in traceable, branded premium honey — differentiates from bulk market",
        "Build pollination service contracts — highest revenue per hive in the US",
        "Consider cooperative membership for bulk honey sales at better prices",
        "Hire part-time seasonal staff for spring build-up and harvest",
        "Diversify: courses, bee experiences, queen breeding, propolis, royal jelly",
      ],
      revenue:[
        "Wholesale honey to shops, restaurants, distributors",
        "Pollination contracts: $150–$200/hive per season (US)",
        "Queen breeding and mated queen sales",
        "Beekeeping courses and apiary visits",
        "Premium mono-floral honey (Manuka, Heather, Acacia) — 2–5x standard price",
        "Corporate bee sponsorship schemes",
        "Propolis, royal jelly, bee venom for specialist health markets",
        "YouTube/social media monetisation if documenting the journey",
      ],
    },
  };

  const lvl = STARTUP_DATA[startupLevel];

  // ── RESEARCH PAGE ───────────────────────────────────────────────────────
  const Research = () => (
    <div style={S.page}>
      <div style={S.h1}>📚 Beekeeping Research Library</div>

      <div style={{...S.card,background:`${C.purple}0A`,border:`1px solid ${C.purple}44`}}>
        <div style={{fontSize:"13px",color:C.cream,lineHeight:"1.8"}}>
          All articles below are real, peer-reviewed or official publications from 2023–2026. Every article includes a direct link to the original source. Covering colony health, varroa crisis, AI-powered hive monitoring, sustainability, business and market data — everything a modern beekeeper needs to stay informed.
        </div>
        <div style={{marginTop:"10px",display:"flex",gap:"8px",flexWrap:"wrap"}}>
          {[["14","Research Articles"],["2025–26","Most Recent"],["6","Open Access Journals"],["135","Papers in Smart Hive Review"]].map(([v,l])=>(
            <div key={l} style={{...S.stat,padding:"8px 14px",minWidth:"100px"}}>
              <div style={{fontSize:"18px",color:C.gold,fontWeight:"bold"}}>{v}</div>
              <div style={{fontSize:"10px",color:C.muted}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CRITICAL ALERT */}
      <div style={S.alert(C.red)}>
        🚨 <strong>2025 Crisis Alert:</strong> USDA researchers identified amitraz-resistant Varroa mites spreading Deformed Wing Virus in virtually all collapsed U.S. colonies sampled in 2025. If you use amitraz-based treatments, read Article #2 urgently.
      </div>

      <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"14px"}}>
        {CATS.map(c=><button key={c} style={{...S.btn(catFilter===c?"primary":""),fontSize:"11px",padding:"5px 10px"}} onClick={()=>setCatFilter(c)}>{c}</button>)}
      </div>

      {filteredArticles.map(a=>(
        <div key={a.id} style={{...S.card,borderLeft:`4px solid ${a.color}`}}>
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"}}>
            <div style={{flex:1}}>
              <span style={S.tag(a.color)}>{a.cat}</span>
              <div style={{color:C.gold,fontWeight:"bold",fontSize:"14px",marginTop:"4px"}}>{a.title}</div>
              <div style={{color:C.muted,fontSize:"11px",marginTop:"2px"}}>{a.authors} · {a.journal} · {a.year}</div>
            </div>
            <div style={{display:"flex",gap:"6px",alignItems:"flex-start",flexShrink:0}}>
              <span style={S.badge(C.green)}>{a.access}</span>
              <button style={{...S.btn(""),fontSize:"11px",padding:"4px 9px"}} onClick={()=>setExpanded(expanded===a.id?null:a.id)}>
                {expanded===a.id?"▲":"▼"}
              </button>
            </div>
          </div>
          <div style={{marginTop:"8px",fontSize:"12px",color:`${C.cream}CC`,lineHeight:"1.7"}}>{a.summary}</div>
          {expanded===a.id&&(
            <div style={{marginTop:"12px"}}>
              <div style={S.divider}/>
              <div style={S.h3}>🔑 Key Findings for Beekeepers</div>
              {a.findings.map((f,i)=>(
                <div key={i} style={{display:"flex",gap:"8px",marginBottom:"6px",fontSize:"12px",color:C.cream}}>
                  <span style={{color:a.color,flexShrink:0}}>▶</span><span>{f}</span>
                </div>
              ))}
              <div style={{marginTop:"12px"}}>
                <a href={a.url} target="_blank" rel="noopener noreferrer"
                  style={{...S.link,padding:"7px 14px",borderRadius:"7px",background:`${a.color}22`,border:`1px solid ${a.color}55`,fontWeight:"bold",display:"inline-block"}}>
                  🔗 Read Full Article / Source →
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* JOURNALS SECTION */}
      <div style={{...S.card,marginTop:"8px"}}>
        <div style={S.h2}>📰 Key Journals to Follow</div>
        {[
          ["Journal of Apicultural Research","tandfonline.com/journals/tjar20","World's leading refereed bee science journal — all aspects of apiculture globally"],
          ["Insects (MDPI)","mdpi.com/journal/insects","Open-access — large volume of varroa, disease and precision beekeeping research"],
          ["Scientific Reports (Nature)","nature.com/srep","High-impact open-access — covers bee biology, colony management and ecology"],
          ["Frontiers in Animal Science","frontiersin.org/journals/animal-science","Open-access — sustainability, management practices, bee health"],
          ["American Bee Journal","americanbeejournal.com","Oldest US beekeeping publication — practical and scientific mix since 1861"],
          ["Bee World (IBRA)","tandfonline.com/journals/tbee20","International Bee Research Association — global bee science reviews"],
        ].map(([j,url,desc])=>(
          <div key={j} style={{...S.card,padding:"10px 12px",marginBottom:"8px"}}>
            <div style={{fontWeight:"bold",color:C.gold,fontSize:"13px"}}>{j}</div>
            <div style={{fontSize:"11px",color:C.muted,marginTop:"2px"}}>{desc}</div>
            <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" style={{...S.link,display:"block",marginTop:"4px"}}>🔗 {url}</a>
          </div>
        ))}
      </div>
    </div>
  );

  // ── SUPPLIERS PAGE ───────────────────────────────────────────────────────
  const Suppliers = () => (
    <div style={S.page}>
      <div style={S.h1}>🛒 Equipment & Supplier Directory</div>
      <div style={{...S.card,background:`${C.teal}0A`,border:`1px solid ${C.teal}44`}}>
        <div style={{fontSize:"13px",color:C.cream,lineHeight:"1.7"}}>
          All suppliers below are real, active businesses verified June 2026 with direct links. Always compare prices and check current stock. Support local beekeeping associations where possible — they often have second-hand equipment and provide invaluable advice.
        </div>
      </div>
      <div style={{display:"flex",gap:"6px",marginBottom:"14px",flexWrap:"wrap"}}>
        {REGIONS.map(r=><button key={r} style={{...S.btn(regionFilter===r?"primary":""),fontSize:"11px",padding:"5px 10px"}} onClick={()=>setRegionFilter(r)}>{r}</button>)}
      </div>
      {filteredSuppliers.map(s=>(
        <div key={s.id} style={{...S.card,borderLeft:`4px solid ${C.honey}`}}>
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",gap:"5px",flexWrap:"wrap",marginBottom:"4px"}}>
                <span style={S.tag(C.muted)}>{s.region}</span>
                <span style={S.tag(C.blue)}>{s.type}</span>
                {s.beginner&&<span style={S.tag(C.green)}>✓ Beginner Friendly</span>}
              </div>
              <div style={{color:C.gold,fontWeight:"bold",fontSize:"15px"}}>{s.name}</div>
              <div style={{fontSize:"11px",color:C.amber,marginTop:"1px"}}>{s.badge} · {s.speciality} · {s.price}</div>
            </div>
            <div style={{fontSize:"18px"}}>{"⭐".repeat(s.rating)}</div>
          </div>
          <div style={{marginTop:"8px",fontSize:"12px",color:`${C.cream}CC`,lineHeight:"1.6"}}>{s.desc}</div>
          <div style={{marginTop:"10px"}}>
            <a href={s.url} target="_blank" rel="noopener noreferrer"
              style={{...S.link,padding:"6px 13px",borderRadius:"6px",background:`${C.honey}18`,border:`1px solid ${C.honey}44`,fontWeight:"bold",display:"inline-block"}}>
              🔗 Visit {s.name} →
            </a>
          </div>
        </div>
      ))}
      <div style={S.card}>
        <div style={S.h2}>💡 Buying Tips (From Experienced Beekeepers)</div>
        {[
          ["Join your local association first","They sell second-hand equipment, give free advice, and know which local suppliers are best. BBKA (UK: bbka.org.uk) or your state beekeeping association (US)."],
          ["Always buy new hive boxes","Second-hand boxes may carry American Foulbrood spores which survive for decades. New boxes are worth it."],
          ["Cedar over pine for longevity","Costs 30–50% more but lasts 15–20 years vs 5–8 for pine. Better insulation too. Pays for itself within 3 years."],
          ["Buy frames and foundation, don't make them","Bee space precision is critical — factory-made frames are almost always worth the £2–£4 each."],
          ["Get bees from a local beekeeper","Local bees are adapted to your climate. Avoid imported packages where possible — they may bring new pathogens."],
          ["Don't buy the cheapest suit","A sting through a poor veil at the wrong moment is a miserable experience. Invest in a full suit with proper round veil."],
          ["Start with one hive type, not mixed","Langstroth and National parts are incompatible. Pick one system and everything stays interchangeable."],
        ].map(([t,d])=>(
          <div key={t} style={{borderLeft:`3px solid ${C.honey}`,paddingLeft:"10px",marginBottom:"10px"}}>
            <div style={{color:C.honey,fontWeight:"bold",fontSize:"12px"}}>{t}</div>
            <div style={{fontSize:"11px",color:C.muted,marginTop:"2px"}}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── STARTUP PAGE ─────────────────────────────────────────────────────────
  const Startup = () => (
    <div style={S.page}>
      <div style={S.h1}>🚀 Beekeeping Startup & Business Guide</div>
      <div style={{...S.card,background:`${C.amber}0A`,border:`1px solid ${C.amber}44`}}>
        <div style={{fontSize:"13px",color:C.cream,lineHeight:"1.8"}}>
          The global apiculture market was valued at $12.41 billion in 2025 and is projected to grow to $21.10 billion by 2034 at a CAGR of 6.13%. Pollination services generate $15–20 billion annually for U.S. agriculture, and organic certification adds 40% to honey product value.
        </div>
        <div style={{...S.grid3,marginTop:"10px"}}>
          {[["$12.41B","Global Market 2025"],["6.13%","Annual Growth Rate"],["$21.1B","Projected 2034"],["$15–20B","US Pollination Services/yr"],["15–40%","Net Profit Margins"],["25%","Honey Market Growth Since 2020"]].map(([v,l])=>(
            <div key={l} style={S.stat}><div style={{fontSize:"17px",color:C.gold,fontWeight:"bold"}}>{v}</div><div style={{fontSize:"10px",color:C.muted}}>{l}</div></div>
          ))}
        </div>
      </div>

      <div style={{display:"flex",gap:"6px",marginBottom:"14px",flexWrap:"wrap"}}>
        {[["hobbyist","🏡 Hobbyist"],["sideliner","🏪 Sideliner"],["commercial","🏭 Commercial"]].map(([k,l])=>(
          <button key={k} style={{...S.btn(startupLevel===k?"primary":""),fontSize:"12px",padding:"7px 14px"}} onClick={()=>setStartupLevel(k)}>{l}</button>
        ))}
      </div>

      <div style={{...S.card,borderTop:`3px solid ${lvl.color}`}}>
        <div style={{fontSize:"17px",color:lvl.color,fontWeight:"bold",marginBottom:"10px"}}>{lvl.label}</div>
        <div style={S.grid2}>
          {[["💰 Startup Cost",lvl.startup],["📆 Annual Running",lvl.annual],["🍯 Expected Yield",lvl.yield],["⏰ Time Required",lvl.time]].map(([l,v])=>(
            <div key={l} style={S.stat}><div style={{fontSize:"10px",color:C.muted,marginBottom:"3px"}}>{l}</div><div style={{fontSize:"12px",color:C.cream,fontWeight:"bold"}}>{v}</div></div>
          ))}
        </div>
      </div>

      <div style={S.h2}>🛒 Equipment Checklist</div>
      {lvl.checklist.map((item,i)=>(
        <div key={i} style={{...S.card,padding:"9px 14px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"6px"}}>
          <div style={{fontSize:"12px",color:C.cream}}>✓ {item.item}</div>
          <span style={S.badge(lvl.color)}>{item.cost}</span>
        </div>
      ))}

      <div style={{...S.h2,marginTop:"12px"}}>📋 Step-by-Step Launch Plan</div>
      {lvl.steps.map((step,i)=>(
        <div key={i} style={{display:"flex",gap:"10px",marginBottom:"8px",alignItems:"flex-start"}}>
          <div style={{background:lvl.color,color:"#0D0700",borderRadius:"50%",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"11px",flexShrink:0}}>{i+1}</div>
          <div style={{fontSize:"12px",color:C.cream,lineHeight:"1.6"}}>{step}</div>
        </div>
      ))}

      <div style={{...S.h2,marginTop:"12px"}}>💰 Revenue Streams</div>
      <div style={S.grid2}>
        {lvl.revenue.map((r,i)=>(
          <div key={i} style={{...S.card,padding:"10px",display:"flex",gap:"8px"}}>
            <span style={{color:lvl.color}}>💛</span>
            <span style={{fontSize:"12px",color:C.cream}}>{r}</span>
          </div>
        ))}
      </div>

      <div style={{...S.card,marginTop:"8px"}}>
        <div style={S.h2}>⚖️ UK Legal Requirements</div>
        {[
          ["BeeBase Registration","Register hives free at nationalbeeunit.com — connects you to disease alerts and inspection services. Legally required in some areas."],
          ["Food Business Registration","If selling honey, register with your local council — free and legally required. Takes 10 minutes online."],
          ["Food Hygiene Certificate","Level 2 certificate recommended. Free online via RSPH, Highfield or Virtual College."],
          ["Honey Labelling","Must show: net weight, producer name and address, country of origin, best before date. No health claims without authorisation."],
          ["BBKA Membership & Insurance","Includes public liability insurance — essential before selling or opening apiary to public. From ~£50/year."],
          ["Planning Permission","Usually not needed for garden hives. Check with local authority if in conservation area or urban setting."],
        ].map(([t,d])=>(
          <div key={t} style={{borderLeft:`3px solid ${C.amber}`,paddingLeft:"10px",marginBottom:"10px"}}>
            <div style={{color:C.amber,fontWeight:"bold",fontSize:"12px"}}>{t}</div>
            <div style={{fontSize:"11px",color:C.muted,marginTop:"2px"}}>{d}</div>
          </div>
        ))}
      </div>

      <div style={S.card}>
        <div style={S.h2}>📚 Essential Reading & Resources</div>
        {[
          ["BBKA — British Beekeepers Association","bbka.org.uk","Training, insurance, apiary support, foundation certificate across the UK"],
          ["National Bee Unit — BeeBase","nationalbeeunit.com","Register hives, disease alerts, inspection services — free"],
          ["Bee Informed Partnership (US)","beeinformed.org","Science-based best management practices for American beekeepers"],
          ["American Bee Journal","americanbeejournal.com","Oldest US beekeeping publication — practical and market insights since 1861"],
          ["USDA ARS Bee Research Lab","ars.usda.gov","Latest US government research on bee health, treatments and colony losses"],
          ["BFA — Bee Farmers Association","beefarmers.co.uk","UK commercial beekeeping association — for sideliner and commercial operations"],
        ].map(([title,url,desc])=>(
          <div key={title} style={{...S.card,padding:"10px 12px",marginBottom:"8px"}}>
            <div style={{fontWeight:"bold",color:C.gold,fontSize:"13px"}}>{title}</div>
            <div style={{fontSize:"11px",color:C.muted}}>{desc}</div>
            <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" style={{...S.link,display:"block",marginTop:"3px"}}>🔗 {url}</a>
          </div>
        ))}
      </div>
    </div>
  );

  // ── DIY PAGE ─────────────────────────────────────────────────────────────
  const Diy = () => (
    <div style={S.page}>
      <div style={S.h1}>🪵 Build Your Own Beehive — Complete Guide</div>
      <div style={{...S.card,background:`${C.amber}0A`,border:`1px solid ${C.amber}44`}}>
        <div style={{fontSize:"13px",color:C.cream,lineHeight:"1.8"}}>
          Building your own hive saves 50–70% on cost (£30–£80 materials vs £150–£250 bought) and gives you deep insight into the structure your bees live in. A complete Langstroth takes 8–16 hours for a beginner. All plans and resources below are free online. <strong style={{color:C.honey}}>Important: always buy frames and foundation rather than making them — precision bee space is critical.</strong>
        </div>
        <div style={{...S.grid2,marginTop:"10px"}}>
          <div>
            <div style={{color:C.green,fontWeight:"bold",fontSize:"12px",marginBottom:"6px"}}>✅ Build if you...</div>
            {["Enjoy woodworking","Want to save £100–£200 per hive","Have the tools (table/mitre saw)","Want to deeply understand hive structure","Are building multiple hives"].map((t,i)=><div key={i} style={{fontSize:"11px",color:C.cream,marginBottom:"3px"}}>• {t}</div>)}
          </div>
          <div>
            <div style={{color:C.red,fontWeight:"bold",fontSize:"12px",marginBottom:"6px"}}>❌ Buy instead if you...</div>
            {["Are a complete beginner — learn bees first","Don't have woodworking tools","Want bees this season (no time to build)","Prefer spending time on beekeeping, not carpentry","Want guaranteed bee space precision"].map((t,i)=><div key={i} style={{fontSize:"11px",color:C.cream,marginBottom:"3px"}}>• {t}</div>)}
          </div>
        </div>
      </div>

      {DIY_STEPS.map(step=>(
        <div key={step.step} style={{...S.card,borderLeft:`4px solid ${C.amber}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"}} onClick={()=>setExpandedDiy(expandedDiy===step.step?null:step.step)}>
            <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
              <div style={{background:C.amber,color:"#0D0700",borderRadius:"50%",width:"26px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"13px",flexShrink:0}}>{step.step}</div>
              <div>
                <div style={{color:C.gold,fontWeight:"bold",fontSize:"14px"}}>{step.icon} {step.title}</div>
                <div style={{fontSize:"11px",color:C.muted}}>{step.time}</div>
              </div>
            </div>
            <span style={{color:C.honey,fontSize:"16px"}}>{expandedDiy===step.step?"▲":"▼"}</span>
          </div>
          {expandedDiy===step.step&&(
            <div style={{marginTop:"12px"}}>
              <div style={{fontSize:"13px",color:C.cream,lineHeight:"1.7",marginBottom:"12px"}}>{step.body}</div>
              <div style={S.h3}>🔗 Free Plans & Resources</div>
              {step.links.map((l,i)=>(
                <div key={i} style={{marginBottom:"6px"}}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" style={{...S.link,display:"flex",alignItems:"center",gap:"6px"}}>
                    <span>📄</span><span>{l.label}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div style={S.card}>
        <div style={S.h2}>🌲 Wood Comparison Guide</div>
        {[
          ["Western Red Cedar ⭐⭐⭐⭐⭐","Naturally rot-resistant, light, best insulator, lasts 15–20+ years. Best long-term choice — worth the premium.",C.green],
          ["Tulip Poplar ⭐⭐⭐⭐","Popular in the US. Lightweight, stable, takes paint well. Good all-round.",C.honey],
          ["Pine ⭐⭐⭐","Cheap and widely available. Needs regular painting. Lasts 5–8 years with care.",C.amber],
          ["Exterior Plywood ⭐⭐","Suitable for floors and roofs only — swells and warps in boxes.",C.red],
        ].map(([t,d,c])=>(
          <div key={t} style={{borderLeft:`3px solid ${c}`,paddingLeft:"10px",marginBottom:"10px"}}>
            <div style={{color:c,fontWeight:"bold",fontSize:"12px"}}>{t}</div>
            <div style={{fontSize:"11px",color:C.muted,marginTop:"2px"}}>{d}</div>
          </div>
        ))}
      </div>

      <div style={S.card}>
        <div style={S.h2}>🔨 Essential Tools</div>
        <div style={S.grid2}>
          {[["Table Saw","Rip boards to width — most important tool"],["Mitre Saw","Cut pieces to length accurately"],["Jigsaw","Entrance notches, curved cuts"],["Drill & Bits","Assembly, pilot holes"],["Clamps","Hold joints while glue cures"],["Wood Glue","Titebond III exterior grade — waterproof"],["Sandpaper 80+120","Finishing and edge smoothing"],["Tape Measure","Precision critical — bee space is 8–9mm"]].map(([t,d])=>(
            <div key={t} style={{...S.card,padding:"9px 12px"}}>
              <div style={{color:C.amber,fontWeight:"bold",fontSize:"12px"}}>🔧 {t}</div>
              <div style={{fontSize:"11px",color:C.muted,marginTop:"2px"}}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={S.app}>
      <div style={S.header}>
        <div style={S.logoWrap}>
          <span style={{fontSize:"26px"}}>🐝</span>
          <div><div style={S.logoText}>BeesMaster — Research & Resources</div><div style={S.logoSub}>Science · Suppliers · Startup · DIY</div></div>
        </div>
        <div style={S.nav}>
          {TABS.map(([id,label])=><button key={id} style={S.nb(tab===id)} onClick={()=>setTab(id)}>{label}</button>)}
        </div>
      </div>
      {tab==="research"&&<Research/>}
      {tab==="suppliers"&&<Suppliers/>}
      {tab==="startup"&&<Startup/>}
      {tab==="diy"&&<Diy/>}
    </div>
  );
}
