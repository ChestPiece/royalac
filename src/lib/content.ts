export const site = {
  name: "Royal Cool FZCO",
  tagline:
    "HVAC & Refrigeration Equipment for Commercial and Industrial Applications",
  description:
    "Royal Cool FZCO is an industrial and trading company established in 2001 in Jebel Ali Free Zone, Dubai. We manufacture and distribute air-conditioning equipment and supply HVAC/R equipment and components from established manufacturers.",
  email: "sales@royalcool.ae",
  phone: "+971 4 883 3785",
  phoneHref: "tel:+97148833785",
} as const;

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Brands", href: "/#brands" },
  { label: "Markets", href: "/#markets" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
] as const;

export const capacityData = [
  { value: "3–80 TONS", label: "DX Air Conditioning" },
  { value: "1.5–25 TONS", label: "VRF Systems" },
  { value: "1.5–5 TR", label: "Water Chillers" },
] as const;

export const productPillars = [
  {
    id: "air-conditioning",
    title: "Air Conditioning",
    description:
      "Royal Cool manufactures and distributes DX air-conditioning units for residential and commercial applications.",
    image: "/images/ac-range.png",
    imageAlt: "Royal Cool air conditioning range including wall mounted, floor standing, and duct type units",
    categories: [
      "Residential AC",
      "Commercial AC",
      "Wall Mounted Split",
      "Floor Ceiling",
      "Free Standing Split",
      "Window Type",
      "Duct Type",
      "Package Type A/C",
      "VRF Systems",
      "Air/Water-Cooled Chillers",
      "Water Chillers",
      "Water Dispensers",
      "Dehumidifiers",
    ],
  },
  {
    id: "refrigeration",
    title: "Refrigeration",
    description:
      "Industrial refrigeration equipment and components for commercial and heavy-duty applications.",
    image: "/images/refrigeration-system.png",
    imageAlt: "Industrial refrigeration compressor rack and condenser system",
    categories: [
      "Tecumseh Compressors",
      "Hitachi Compressors",
      "RefComp Screw Compressors",
      "RefComp Reciprocating Compressors",
      "RefComp Condensing Units",
      "RefComp Compressor Racks",
      "SRM Ammonia Compressor Packages",
      "SnowKey Evaporative Condensers",
    ],
  },
  {
    id: "controls-refrigerants",
    title: "Controls & Refrigerants",
    description:
      "HVAC/R controls and refrigerant gases from established manufacturers.",
    image: "/images/screw-compressor.png",
    imageAlt: "Industrial screw compressor unit with copper piping",
    categories: [
      "Johnson Controls / PENN",
      "Refrigerant Gas",
      "HVAC/R Controls and Components",
    ],
  },
] as const;

export const commercialAcTypes = [
  "Duct Type",
  "Cassette Type",
  "VRF System",
  "Package Units",
  "AC Chillers",
] as const;

export const distributedBrands = [
  "Tecumseh",
  "Johnson Controls / PENN",
  "Hitachi",
  "RefComp",
  "SRM",
  "SnowKey",
] as const;

export const distributedNote =
  "Royal Cool supplies HVAC/R equipment and components from established manufacturers documented on royalcool.ae. Contact sales for current availability.";

export const taglineReveal = {
  line1: "Air-conditioning and refrigeration equipment",
  line2: "for commercial and industrial applications since 2001.",
} as const;

export const authority = {
  established: "2001",
  location: "Jebel Ali Free Zone, Dubai, UAE",
  identity: "Industrial and Trading Company",
  footnote:
    "Royal Cool is the mother company of White Falcon in Dubai since 2004.",
} as const;

export const offices = [
  {
    name: "Royal Cool FZCO",
    location: "Jebel Ali Free Zone, Dubai, UAE",
    phone: "+971 4 883 3785",
    phoneHref: "tel:+97148833785",
    email: "sales@royalcool.ae",
  },
  {
    name: "Iraq Branch",
    location:
      "Baghdad, University Region, District 631, Alley 73, Building 16",
    phone: "+964 786 323 0088",
    phoneHref: "tel:+9647863230088",
    email: "royalfzc@emirates.net.ae",
  },
] as const;

export const projectMarkets = [
  "UAE",
  "Iraq",
  "Jordan",
  "Qatar",
  "Lebanon",
  "Algeria",
  "Ethiopia",
] as const;

export const marketsNote =
  "Project markets documented on royalcool.ae. Contact details above are for Dubai and Iraq.";

export const services = [
  {
    title: "AC Installation",
    description:
      "Installation support for air-conditioning equipment supplied through Royal Cool sales contact.",
  },
  {
    title: "AC Maintenance",
    description:
      "Maintenance support documented for Royal Cool AC types: Wall Mounted Split, Floor Ceiling, Free Standing, Window Type, and Duct Type.",
  },
] as const;

export const benefits = [
  {
    title: "One supplier for manufactured and distributed equipment",
    description:
      "Source Royal Cool air conditioning units alongside Tecumseh, RefComp, Hitachi, and Johnson Controls components through a single commercial contact.",
  },
  {
    title: "Capacity coverage from 1.5 to 80 tons",
    description:
      "Match residential splits, commercial VRF, package units, and water chillers to project load requirements without switching vendors.",
  },
  {
    title: "JAFZA distribution hub since 2001",
    description:
      "Dubai headquarters in Jebel Ali Free Zone supports export and regional project supply across documented Middle East and Africa markets.",
  },
  {
    title: "Installation and maintenance on supplied equipment",
    description:
      "Coordinate installation and documented maintenance support when you purchase air conditioning equipment through Royal Cool sales.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Share your requirement",
    description:
      "Contact sales by email or phone with project scope, capacity needs, and target delivery location.",
  },
  {
    step: "02",
    title: "Receive product selection",
    description:
      "Royal Cool identifies suitable equipment from manufactured air conditioning ranges and distributed HVAC/R brands.",
  },
  {
    step: "03",
    title: "Confirm supply and delivery",
    description:
      "Commercial terms, availability, and logistics are confirmed before order placement and shipment from Dubai.",
  },
] as const;

export const faqItems = [
  {
    question: "What brands does Royal Cool distribute?",
    answer:
      "Royal Cool supplies HVAC/R equipment and components from Tecumseh, Johnson Controls / PENN, Hitachi, RefComp, SRM, and SnowKey. Contact sales for current availability on specific models.",
  },
  {
    question: "Which regions does Royal Cool supply?",
    answer:
      "Royal Cool is headquartered in Jebel Ali Free Zone, Dubai, with an Iraq branch in Baghdad. Documented project markets include UAE, Iraq, Jordan, Qatar, Lebanon, Algeria, and Ethiopia.",
  },
  {
    question: "Does Royal Cool provide installation support?",
    answer:
      "Installation support is available for air conditioning equipment supplied through Royal Cool. Discuss scope and scheduling with sales when requesting a quotation.",
  },
  {
    question: "What maintenance services are available?",
    answer:
      "Maintenance support is documented for Royal Cool AC types including Wall Mounted Split, Floor Ceiling, Free Standing Split, Window Type, and Duct Type units supplied through sales.",
  },
  {
    question: "What capacity ranges does Royal Cool cover?",
    answer:
      "Documented ranges include DX air conditioning from 3 to 80 tons, VRF systems from 1.5 to 25 tons, and water chillers from 1.5 to 5 TR.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Email sales@royalcool.ae or call +971 4 883 3785 with your equipment list, quantities, and project location. The contact page inquiry form prepares a structured email.",
  },
  {
    question: "What are typical lead times?",
    answer:
      "Lead times depend on product type, configuration, and current stock availability. Sales confirms estimated delivery when you submit a requirement.",
  },
  {
    question: "Can Royal Cool provide product documentation?",
    answer:
      "Technical specifications, datasheets, and compliance documentation are provided per product on request. Contact sales for documentation on specific equipment.",
  },
] as const;

export const images = {
  hero: "/images/hero-outdoor-unit.png",
  heroAlt: "Large industrial air conditioning unit at a distribution facility",
  commercialVrf: "/images/commercial-vrf.png",
  commercialVrfAlt: "Commercial rooftop VRF and duct type air conditioning units",
  chillers: "/images/chillers.png",
  chillersAlt: "Air cooled industrial chiller with stainless steel piping",
  ammonia: "/images/ammonia-package.png",
  ammoniaAlt: "Industrial ammonia compressor package in a facility",
  port: "/images/port-warehouse.png",
  portAlt: "Industrial warehouse and port distribution environment",
  macro: "/images/engineering-macro.png",
  macroAlt: "Close up of copper refrigeration piping and heat exchanger coils",
} as const;
