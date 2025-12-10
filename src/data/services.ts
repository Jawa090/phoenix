import {
    Building2, Home, Factory, HardHat, Zap, Layers,
    Target, Clock, Users, Award
} from "lucide-react";
import heroConstruction from "@/assets/hero-construction.jpg";
import residentialHome from "@/assets/residential-home.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import estimatingPlans from "@/assets/estimating-plans.jpg";
import servicesHero from "@/assets/services-hero.jpg";

export interface ServiceData {
    slug: string;
    icon: any;
    title: string;
    shortDesc: string;
    description: string;
    heroImage: string;
    features: string[];
    benefits: string[];
    process: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    whyImportant: { title: string; description: string; image: string };
    rangeOfServices: { title: string; description: string; items: string[] };
    stats: { value: string; label: string; icon: any }[];
}

export const services: ServiceData[] = [
    {
        slug: "construction-takeoff-services",
        icon: Layers,
        title: "Construction Takeoff Services",
        shortDesc: "Detailed material quantity takeoffs for all construction trades",
        description: "Maximize your bid winning potential with our precise construction takeoff services. We provide comprehensive material lists and quantity surveys that help contractors and developers budget accurately.",
        heroImage: estimatingPlans,
        features: ["Material Quantity Surveys", "Cost Estimation", "Bid Preparation", "Value Engineering"],
        benefits: [
            "Eliminate material shortages and waste",
            "Speed up your bidding process significantly",
            "Detailed breakdown of every material needed",
            "Cloud-based access to all takeoff data",
            "Compatible with major estimation software",
            "Verified by senior cost estimators"
        ],
        process: [
            { title: "Upload Plans", description: "Submit your drawings and specifications via our secure portal." },
            { title: "Scope Review", description: "Our team reviews the scope to ensure all trades are covered." },
            { title: "Quantity Survey", description: "We perform a digitial takeoff of all materials required." },
            { title: "Delivery", description: "Receive a detailed Excel/PDF report ready for pricing." }
        ],
        faqs: [
            { question: "What file formats do you accept for plans?", answer: "We accept PDF, DWG, TIFF, and all major CAD file formats for performing takeoffs." },
            { question: "Can you use my specific material pricing?", answer: "Yes, we can plug in your local vendor pricing if provided, or use regional averages." },
            { question: "What trades do you cover in takeoffs?", answer: "We cover all CSI divisions including concrete, masonry, metals, wood, thermal, finishes, and MEP." },
            { question: "How do you handle plan addendums?", answer: "We quickly revise takeoffs to incorporate any addendums or changes issued during the bid process." },
            { question: "Is the takeoff list compatible with Excel?", answer: "Yes, we provide fully editable Excel spreadsheets with formulas included." },
            { question: "What is your typical turnaround time?", answer: "Small projects take 24-48 hours, while complex commercial takeoffs may take 3-5 days." }
        ],
        whyImportant: {
            title: "Why Accurate Takeoffs Matter",
            description: "A precise takeoff is the foundation of a profitable project. Overestimating leads to lost bids, while underestimating eats into your profits. Our construction takeoff services ensure you have the exact quantities needed, minimizing risk and maximizing efficiency from day one.",
            image: servicesHero
        },
        rangeOfServices: {
            title: "Our Takeoff Capabilities",
            description: "We cover every aspect of the construction project lifecycle.",
            items: [
                "Sitework & Excavation", "Concrete & Rebar", "Masonry & Stone",
                "Lumber & Framing", "Drywall & Acoustics", "Flooring & Tile",
                "Painting & Coatings", "Roofing & Siding", "Doors & Windows",
                "Millwork & Cabinetry", "Insulation & Fireproofing", "Landscaping"
            ]
        },
        stats: [
            { value: "99%", label: "Accuracy", icon: Target },
            { value: "24h", label: "Fastest Turnaround", icon: Clock },
            { value: "10k+", label: "Takeoffs Delivered", icon: Users },
            { value: "100%", label: "Client Satisfaction", icon: Award }
        ]
    },
    {
        slug: "commercial-estimating-services",
        icon: Building2,
        title: "Commercial Estimating Services",
        shortDesc: "Complete cost estimating for commercial building projects",
        description: "From retail build-outs to high-rise offices, our commercial estimating team delivers detailed cost assessments that account for labor, materials, equipment, and overhead.",
        heroImage: commercialBuilding,
        features: ["Conceptual Estimates", "Hard Bid Estimates", "Budget Development", "Change Order Analysis"],
        benefits: [
            "Deep understanding of commercial building codes",
            "Integration of union and non-union labor rates",
            "Detailed Division 1-16 breakdwon",
            "Support for GMP and Cost-Plus contracts",
            "Identification of long-lead items",
            "Risk assessment and contingency planning"
        ],
        process: [
            { title: "Project Assessment", description: "We evaluate the complexity and scale of your commercial project." },
            { title: "Detailed Estimation", description: "Our team calculates costs for all CSI divisions relevant to the scope." },
            { title: "Review & Refine", description: "Quality control check to ensure all commercial standards are met." },
            { title: "Final Report", description: "A comprehensive bid package ready for submission." }
        ],
        faqs: [
            { question: "Do you handle TI (Tenant Improvement) estimates?", answer: "Yes, we specialize in office, retail, and medical tenant improvement estimates." },
            { question: "Can you help with preliminary budgets for financing?", answer: "Absolutely, we create conceptual estimates to help you secure bank financing." },
            { question: "Are your estimates suitable for government contracts?", answer: "Yes, we are experienced with federal, state, and municipal bid formats." },
            { question: "How do you account for market volatility?", answer: "We use real-time material pricing and consult with local vendors to ensure accuracy." },
            { question: "Do you provide value engineering?", answer: "Yes, we identify alternative materials and methods to save costs without sacrificing quality." },
            { question: "What is your experience with high-rise buildings?", answer: "We have estimated numerous multi-story commercial projects including hotels and office towers." }
        ],
        whyImportant: {
            title: "Winning Commercial Bids",
            description: "Commercial construction is a high-stakes game where precision is key. Our estimating process not only gives you the numbers but also the strategic insight to bid competitively. We help you understand the true cost of construction so you can protect your margins.",
            image: commercialBuilding
        },
        rangeOfServices: {
            title: "Types of Commercial Projects",
            description: "We service a wide array of commercial sectors.",
            items: [
                "Office Buildings", "Retail Shopping Centers", "Restaurants & Bars",
                "Hotels & Hospitality", "Medical & Healthcare", "Educational Facilities",
                "Warehouses & Industrial", "Mixed-Use Developments", "Religious Buildings",
                "Government Facilities", "Parking Structures", "Sports Complexes"
            ]
        },
        stats: [
            { value: "$2B+", label: "Est. Value", icon: Target },
            { value: "48h", label: "Avg Turnaround", icon: Clock },
            { value: "2500+", label: "Commercial Bids", icon: Users },
            { value: "Top", label: "Industry Rated", icon: Award }
        ]
    },
    {
        slug: "industrial-estimating-services",
        icon: Factory,
        title: "Industrial Estimating Services",
        shortDesc: "Specialized estimating for heavy industrial and manufacturing",
        description: "Industrial projects require specialized knowledge. Our team creates accurate estimates for plants, refineries, warehouses, and heavy infrastructure projects.",
        heroImage: heroConstruction,
        features: ["Process Piping", "Heavy Equipment", "Structural Steel", "MEP Systems"],
        benefits: [
            "Expertise in complex mechanical systems",
            "Accurate heavy structural steel takeoffs",
            "Knowledge of industrial safety mandates",
            "Equipment installation and rigging costs",
            "Shutdown and turnaround planning",
            "Detailed civil and concrete estimates"
        ],
        process: [
            { title: "Site Analysis", description: "Understanding the logistics and site conditions of the industrial facility." },
            { title: "System Breakdown", description: "Isolating complex mechanical, electrical, and structural components." },
            { title: "Cost Modeling", description: "Applying industrial-specific labor rates and productivity factors." },
            { title: "Bid Delivery", description: "Fully integrated estimate covering all industrial disciplines." }
        ],
        faqs: [
            { question: "Do you estimate process piping?", answer: "Yes, we have deep experience in carbon steel, stainless, and specialty alloy piping." },
            { question: "Can you handle wastewater treatment plants?", answer: "We have estimated WWTPs, pumping stations, and associated civil works." },
            { question: "How do you estimate shutdown work?", answer: "We factor in overtime, shift differentials, and productivity loss for fast-track shutdowns." },
            { question: "Do you cover heavy equipment installation?", answer: "Yes, including millwright labor, crane rentals, and rigging requirements." },
            { question: "Are electrical controls included?", answer: "We estimate power distribution, instrumentation, and control systems." },
            { question: "What about pre-engineered metal buildings?", answer: "We estimate both PEMB and conventional structural steel buildings." }
        ],
        whyImportant: {
            title: "Precision in Heavy Industry",
            description: "Industrial projects often involve millions of dollars in equipment and materials. A small error can cost a fortune. Our industrial estimating team uses specialized tools and historical data to ensure your bid covers every bolt, flange, and hour of labor.",
            image: heroConstruction
        },
        rangeOfServices: {
            title: "Industrial Sectors Served",
            description: "Our expertise spans across heavy industries.",
            items: [
                "Manufacturing Plants", "Food & Beverage Processing", "Oil & Gas Facilities",
                "Chemical Plants", "Power Generation", "Water Treatment",
                "Mining & Metals", "Distribution Centers", "Data Centers",
                "Pharmaceutical Labs", "Cold Storage", "Recycling Facilities"
            ]
        },
        stats: [
            { value: "98%", label: "Accuracy", icon: Target },
            { value: "3-5d", label: "Turnaround", icon: Clock },
            { value: "500+", label: "Industrial Projects", icon: Users },
            { value: "15yr", label: "Sector Exp", icon: Award }
        ]
    },
    {
        slug: "residential-estimating-services",
        icon: Home,
        title: "Residential Estimating Services",
        shortDesc: "Estimates for single-family, multi-family, and custom homes",
        description: "Whether you are building a custom dream home or a multi-unit complex, our residential estimates provide the detail homeowners and lenders require.",
        heroImage: residentialHome,
        features: ["New Construction", "Remodels & Additions", "Insurance Claims", "Lender Budgets"],
        benefits: [
            "Tailored for builders and homeowners",
            "Detailed finish schedules (flooring, tile, paint)",
            "Lumber package optimization",
            "Accurate labor rates for residential crews",
            "Separate owner-supplied items from contractor scope",
            "Quick turnaround for tight deadlines"
        ],
        process: [
            { title: "Plan Intake", description: "Send us your architectural and structural residential plans." },
            { title: "Spec Review", description: "We clarify finishes, fixtures, and allowance items." },
            { title: "Takeoff & Price", description: "Complete material list and labor pricing for all trades." },
            { title: "Final Review", description: "A builder-ready budget or bid proposal." }
        ],
        faqs: [
            { question: "How much does a residential estimate cost?", answer: "Cost depends on square footage and complexity, but we offer competitive fixed pricing." },
            { question: "Do you estimate home additions?", answer: "Yes, we handle additions, garage conversions, and second-story pop-tops." },
            { question: "Can I use your estimate for a bank loan?", answer: "Our detailed estimates are widely accepted by construction lenders." },
            { question: "Do you do insurance claim estimates?", answer: "Yes, we use Xactimate and industry standards to verify insurance scopes." },
            { question: "Do you help with owner-builder projects?", answer: "Absolutely, we help owner-builders understand their true project costs." },
            { question: "How detailed is the lumber takeoff?", answer: "We provide a cut list including studs, headers, joists, rafters, and sheathing." }
        ],
        whyImportant: {
            title: "Building with Confidence",
            description: "Residential construction margins can be tight. Knowing your exact costs before you break ground allows you to manage your budget, select the right subcontractors, and avoid running out of funds halfway through the build.",
            image: residentialHome
        },
        rangeOfServices: {
            title: "Residential Project Types",
            description: "Detailed estimates for all living spaces.",
            items: [
                "Single Family Tract Homes", "High-End Custom Homes", "Multi-Family Apartments",
                "Townhouses & Condos", "Accessory Dwelling Units (ADUs)", "Home Renovations",
                "Kitchen & Bath Remodels", "Deck & Patio Additions", "Basement Finishing",
                "Disaster Restoration", "Green Building Projects", "Modular Homes"
            ]
        },
        stats: [
            { value: "3k+", label: "Homes Estimated", icon: Target },
            { value: "24h", label: "Standard Turnaround", icon: Clock },
            { value: "100%", label: "Lender Accepted", icon: Users },
            { value: "5 Star", label: "Reviews", icon: Award }
        ]
    },
    {
        slug: "mep-estimating-services",
        icon: HardHat,
        title: "MEP Estimating Services",
        shortDesc: "Mechanical, Electrical, and Plumbing integrated estimation",
        description: "MEP systems often make up 30-40% of a building's cost. Our integrated MEP estimating ensures these critical systems are accurately budgeted and coordinated.",
        heroImage: heroConstruction,
        features: ["HVAC Systems", "Electrical Power", "Plumbing & Piping", "Fire Protection"],
        benefits: [
            "Coordinated estimation of conflicting systems",
            "Reduced change orders from clashes",
            "Accurate equipment and fixture counts",
            "Detailed labor hours for installation",
            "Vendor quote validation",
            "Comprehensive system analysis"
        ],
        process: [
            { title: "System Review", description: "Analyzing single-line diagrams and MEP schedules." },
            { title: "Component Takeoff", description: "Counting every fixture, fitting, valve, and foot of wire/pipe." },
            { title: "Labor Application", description: "Applying MCAA/NECA labor standards." },
            { title: "Final MEP Bid", description: "A combined or separate bid for Mechanical, Electrical, and Plumbing." }
        ],
        faqs: [
            { question: "Do you use MCAA labor units?", answer: "Yes, we typically use MCAA for mechanical and NECA for electrical labor factors." },
            { question: "Can you estimate design-build MEP?", answer: "We can provide budget estimates based on schematic design narratives." },
            { question: "Do you cover fire sprinkler systems?", answer: "Yes, we estimate wet, dry, and pre-action fire suppression systems." },
            { question: "How do you handle equipment quotes?", answer: "We list all equipment specs for you to get accurate vendor pricing, or use database pricing." },
            { question: "Is insulation included?", answer: "We estimate duct and pipe insulation as part of the mechanical scope." },
            { question: "Do you estimate low voltage systems?", answer: "Yes, including data, security, fire alarm, and nurse call systems." }
        ],
        whyImportant: {
            title: "The Heart of the Building",
            description: "MEP systems bring a building to life. Because they are complex and often hidden, they are prone to budget overruns. Our specialized MEP estimators ensure that your heating, cooling, power, and water systems are priced right, preventing costly surprises during installation.",
            image: heroConstruction
        },
        rangeOfServices: {
            title: "MEP Disciplines",
            description: "Complete coverage of building systems.",
            items: [
                "HVAC Ductwork & Piping", "Plumbing & Drainage", "Electrical Power & Lighting",
                "Fire Protection Sprinklers", "Low Voltage & Data", "Building Controls (BMS)",
                "Medical Gas Systems", "Process Piping", "Emergency Power Gen",
                "Site Utilities", "Geothermal Systems", "Solar PV Systems"
            ]
        },
        stats: [
            { value: "98%", label: "Accuracy", icon: Target },
            { value: "48h", label: "Turnaround", icon: Clock },
            { value: "1000+", label: "MEP Bids", icon: Users },
            { value: "Expert", label: "Team", icon: Award }
        ]
    },
    {
        slug: "electrical-estimating-services",
        icon: Zap,
        title: "Electrical Estimating Services",
        shortDesc: "High-precision electrical estimation for commercial and residential",
        description: "From simple wiring to complex switchgear, our electrical estimating services provide the detail you need to win bids and manage projects profitably.",
        heroImage: heroConstruction,
        features: ["Lighting & Controls", "Switchgear & Panels", "Low Voltage Systems", "Site Electrical"],
        benefits: [
            "Detailed conduit and wire runs",
            "Accurate fixture counts and schedules",
            "NECA labor unit standards",
            "Feeders and branch circuit analysis",
            "Fire alarm and security system estimates",
            "Comprehensive proposal generation"
        ],
        process: [
            { title: "Circuit Analysis", description: "Tracing panel schedules and power distribution." },
            { title: "Fixture Count", description: "Accounting for all lighting, switches, and devices." },
            { title: "Feeder Takeoff", description: "Measuring runs for main distribution and equipment power." },
            { title: "Bid Summary", description: "Complete material and labor breakdown by system." }
        ],
        faqs: [
            { question: "Do you include temporary power?", answer: "Yes, we can estimate temporary power requirements for construction sites." },
            { question: "How accurate are your wire lengths?", answer: "We measure runs accurately including drops, rises, and makeup waste factors." },
            { question: "Do you estimate solar projects?", answer: "Yes, we handle residential and commercial PV solar system estimates." },
            { question: "Can you estimate lighting controls?", answer: "We are experienced with complex dimming, daylighting, and automated control systems." },
            { question: "What about generator installations?", answer: "We estimate transfer switches, generators, and associated pads/connections." },
            { question: "Do you provide labor only estimates?", answer: "We can separate labor and material costs to suit your bidding strategy." }
        ],
        whyImportant: {
            title: "Powering Your Profits",
            description: "Electrical estimating requires extreme attention to detail. A missed run of heavy feeder cable can cost thousands. We meticulously measure every component to ensure your bid covers the full scope of work, protecting your bottom line.",
            image: heroConstruction
        },
        rangeOfServices: {
            title: "Electrical Scope",
            description: "Covering the full spectrum of electrical work.",
            items: [
                "Lighting & Fixtures", "Power Distribution", "Switchgear & Panels",
                "Low Voltage & Data", "Fire Alarm Systems", "Security & Access Control",
                "Site Lighting", "Emergency Generators", "Lightning Protection",
                "Nurse Call Systems", "Audio/Visual", "Smart Home Automation"
            ]
        },
        stats: [
            { value: "99%", label: "Accuracy", icon: Target },
            { value: "24h", label: "Turnaround", icon: Clock },
            { value: "4000+", label: "Elec. Estimates", icon: Users },
            { value: "NECA", label: "Standards", icon: Award }
        ]
    }
];
