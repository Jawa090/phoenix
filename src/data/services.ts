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
        slug: "commercial-estimating-services",
        icon: Building2,
        title: "Commercial Estimating Services Phoenix",
        shortDesc: "Accurate commercial construction estimates with cost intelligence and complete understanding of building systems",
        description: "Commercial construction projects demand more than basic estimating services. We need strategies of cost intelligence and a complete understanding of building systems. The commercial service is built around these factors to deliver clear and transparent results. We also support contractors and financial institutions with structure models and breakdowns. We make every estimate on the latest platforms and experienced professionals from the industry. Our team has a background in corporate interiors and upgrades among other things. This enables us to evaluate commercial scopes from different view points. Each of our reports goes through an internal review process for consistency.",
        heroImage: commercialBuilding,
        features: ["Preliminary Estimates", "Final Commercial Estimates", "Conceptual Estimates (SD)", "Design Development Estimates (DD)", "Construction Document Estimates (CD)", "Material and Labour Takeoffs", "Bid Estimate and Bid Support"],
        benefits: [
            "Skilled and certified Estimators",
            "Detailed cost analysis",
            "Reliable pricing",
            "Constant Client Support",
            "Competitive Pricing",
            "20 years of experience",
            "Quality Checks",
            "Strong knowledge of local codes",
            "Customized reports"
        ],
        process: [
            { title: "Upload your Plans", description: "First share your project drawings which you can upload or email us. We accept various plan types and support many formats. You should include all details, instructions and scope of work." },
            { title: "Plan a Review and Receive a Quote", description: "The estimators will analyze the plans and review them one by one. We cater to the unique needs of every project for accurate commercial construction estimates. Your quote will have service cost and delivery time." },
            { title: "Settle Invoice and Confirm Project", description: "Now, you will pay the invoice to schedule your project with professionals. After this, our team will begin the estimating process without delay." },
            { title: "Receive Detailed Estimate", description: "Finally, you will get your complete material and takeoff list. You will receive a spreadsheet with all items listed. You will get a PDF version for sharing as well." }
        ],
        faqs: [
            { question: "Do you provide cost comparison reports?", answer: "Yes, we give comparison reports to measure price difference and alternates. Thus, you can identify cost gaps and choose the best option. Our comparison reports have clear formatting for bidding." },
            { question: "How many revisions can I get in my commercial cost estimations?", answer: "We give revision according to the need of the task. Minor adjustments and updates have no extra cost. For major changes, we will offer you affordable revision packages." },
            { question: "How fast can I receive my estimate?", answer: "For most plans, you can get one within 24 to 48 hours with commercial estimating services Phoenix. Nevertheless, it depends on the complexity and scope of your project, which may take longer." },
            { question: "Do your estimates follow the industry standards?", answer: "Yes, we stick to industry standards that include CSI MasterFormat and AACE. This ensures structure and transparency in your bidding and planning." },
            { question: "What will I get in your deliverables?", answer: "You receive comprehensive cost breakdown covering all divisions, inclusion and exclusion details, labor hour breakdown, overhead equipment consideration, complete bid package for submission, cost comparison with alternate reports, updated pricing based on market trends, potential savings with engineering advice, and clarity notes with professional drawings." },
            { question: "Do you support different types of commercial clients?", answer: "Yes, we serve commercial developers, architects and designers, and commercial contractors with tailored estimating solutions for each client type." }
        ],
        whyImportant: {
            title: "Supporting your Commercial Project Challenges",
            description: "If your team lacks knowledge to handle cost matters, we will take care of it. In complex commercial work, we will be your partners. Our team of commercial estimating services Phoenix will help you if: You wrestle with project phasing and scope identification, Your team is unsure of drawings or your designs are incomplete, Tracking alternates and revisions is a struggle for you, Bid preparation and submission is overwhelming for you. Our experienced team will handle all of this and give you insight.",
            image: commercialBuilding
        },
        rangeOfServices: {
            title: "Our Commercial Estimating Portfolio",
            description: "We serve commercial developers, architects and designers, and commercial contractors.",
            items: [
                "Office Buildings", "Retail Shopping Centers", "Restaurants & Bars",
                "Hotels & Hospitality", "Medical & Healthcare", "Educational Facilities",
                "Warehouses & Industrial", "Mixed-Use Developments", "Religious Buildings",
                "Government Facilities", "Parking Structures", "Sports Complexes"
            ]
        },
        stats: [
            { value: "24-48h", label: "Fast Turnaround", icon: Clock },
            { value: "20yr", label: "Experience", icon: Award },
            { value: "High", label: "Bid Winning Rate", icon: Target },
            { value: "24/7", label: "Support", icon: Users }
        ]
    },
    {
        slug: "industrial-estimating-services",
        icon: Factory,
        title: "Industrial Estimating Services Phoenix",
        shortDesc: "Complete understanding of heavy structures and layouts with practical and precise pricing estimates",
        description: "Industrial construction estimating needs complete understanding of heavy structures and layouts. We give pricing estimates that are practical and precise. Our estimating services will bring clear and structured estimates to support developers. We will prepare every calculation of costs with the latest platforms. A team of experts reviews it after that at our industrial estimation Phoenix. These industry professionals are at your service to increase your chances of success. We have direct experience with production sites and industrial plants. This allows us to review scope from a construction perspective. All our given expenses go through quality checks for optimal results.",
        heroImage: heroConstruction,
        features: ["Industrial Structural Estimating Services", "Industrial Mechanical Estimating Services", "Industrial Steel Estimating Services", "HVAC and Ventilation Systems", "Process Piping", "Heavy Equipment Installation"],
        benefits: [
            "Experienced team",
            "Deep analysis",
            "Constant client support",
            "Decades of Experience",
            "Customized results",
            "Local code study",
            "Shorter turnaround time from 24 to 48 hours",
            "Honest and transparent pricing with no hidden charges",
            "Strict data protection",
            "Flexible Revision Support"
        ],
        process: [
            { title: "Upload your Project Plans", description: "Share your drawings and building details with us to start. We analyze scope and trade to prepare commercial estimates. In this way, we understand the needs of the plan better for best results." },
            { title: "Review and Receive a Quote", description: "We will review your drawings with other details as a first step. Industrial construction estimating services in Phoenix will meet all the needs of your construction task. Thus, our team will give you a clear quote with pricing and timeline in it." },
            { title: "Confirm Project and Settle Invoice", description: "After the quote, pay the invoice to set a schedule for your calculation. At this point, our team will begin working on it with the latest tools and costs." },
            { title: "Receive the Final Report", description: "Finally, you will get a complete report of all the costs and takeoffs. These reports will be in a spreadsheet with PDF files in it. Also, Phoenix industrial estimating services will change the format of your report to your liking." }
        ],
        faqs: [
            { question: "Can you prepare estimates for heavy industries?", answer: "Yes, our team prepares estimates for heavy buildings like plants and warehouses. Our team rstands these structures and delivers the right numbers for cost." },
            { question: "Do you follow local codes and industry standards while you do calculations?", answer: "Yes, we prepare our calculations according to local needs and regulations. So, we always follow industry standards to make your process smoother." },
            { question: "Can you provide trade-specific cost projections instead of full expense?", answer: "Certainly! Our experts do these trade calculations like steel, piping or others. You do not need a full project level estimation to benefit from the best industrial estimating company in Phoenix." },
            { question: "Do your prices follow current industrial market rates?", answer: "Yes, we base our pricing on the latest market data. We update this data on a regular basis to follow the exact market prices." },
            { question: "What mechanical systems do you cover?", answer: "Our accurate construction industrial estimates in mechanics cover: HVAC and Ventilation Systems, Gas Distribution and Fuel Piping System, Ductwork and Mechanical Support, Pressure Vessels and Tanks, Fire Protection and Sprinkler System, Instrumentations and Control System, Storage Systems and safety Components." },
            { question: "What steel estimating services do you provide?", answer: "Our affordable industrial construction estimating services for steel include: Structural Steel, Rebar and Siding Steel, Roofing Support, Platforms and Stairs, Fabrications and Erections." }
        ],
        whyImportant: {
            title: "Situations Where Our Estimating Support Helps",
            description: "We understand the high investments and strict timelines for industrial work. Your team may lack skill for cost analysis but we are here as your estimation partner. Phoenix industrial estimating services will support your industrial work if: It is difficult for you to define the project and divide it for a timeline, Market price changes create difficulty for your calculations, You cannot control the budget during the design making process, Making revisions and finding alternates is hard for you. We will take care of these challenges for you and give clear data.",
            image: heroConstruction
        },
        rangeOfServices: {
            title: "Proven Industrial Estimating Expertise",
            description: "We provide comprehensive industrial estimating services across all sectors.",
            items: [
                "Manufacturing Plants", "Food & Beverage Processing", "Oil & Gas Facilities",
                "Chemical Plants", "Power Generation", "Water Treatment",
                "Mining & Metals", "Distribution Centers", "Data Centers",
                "Pharmaceutical Labs", "Cold Storage", "Recycling Facilities"
            ]
        },
        stats: [
            { value: "24-48h", label: "Fast Turnaround", icon: Clock },
            { value: "High", label: "Bid-Winning Rate", icon: Target },
            { value: "500+", label: "Industrial Projects", icon: Users },
            { value: "Expert", label: "Team", icon: Award }
        ]
    },
    {
        slug: "residential-estimating-services",
        icon: Home,
        title: "Residential Estimating Services",
        shortDesc: "Accurate budget and cash flow planning for any residential project with precise cost data",
        description: "You need an accurate budget and cash flow for any residential project. To get those numbers, a right estimation value is important. Early cost planning will help you understand expenses and make better decisions. Our residential estimating services include accurate cost data that reduces uncertainty for your projects. We prepare each calculator after a complete review. Our experts use digital tools to measure the labor and material costs. We then analyze these to match standard rates and local conditions. In this way, you can move forward with your project without any surprise losses.",
        heroImage: residentialHome,
        features: ["Residential Estimating for Contractors", "Residential Estimating for Developers", "Residential Estimating for Architects and Designers", "Preliminary Residential Estimates", "Final pre-construction Residential Estimates", "Conceptual and feasibility estimates"],
        benefits: [
            "Skilled Estimators",
            "Detailed Cost Analysis",
            "Reliable and Location-Based Pricing",
            "Constant Client Support",
            "Competitive Pricing Without Quality Loss",
            "20+ Years of Industry Experience",
            "Strict Quality Checks at Every Stage",
            "Strong Knowledge of Local Codes and Standards",
            "Customized Reports for Easy Review",
            "Advanced Digital Takeoff and Estimating Software",
            "Fast Turnaround Times to Meet Tight Deadlines",
            "Trade-Specific and Full-Scope Estimating Options",
            "Secure Data Handling and NDA Availability"
        ],
        process: [
            { title: "Plan Intake", description: "Send us your architectural and structural residential plans." },
            { title: "Spec Review", description: "We clarify finishes, fixtures, and allowance items." },
            { title: "Takeoff & Price", description: "Complete material list and labor pricing for all trades." },
            { title: "Final Review", description: "A builder-ready budget or bid proposal." }
        ],
        faqs: [
            { question: "Do you offer trade residential estimates or only complete estimations?", answer: "We give both options to meet your preference. You can get a full cost projection or trade estimates like concrete and HVAC. This flexibility lets you order what matches your needs." },
            { question: "How accurate are your residential construction estimates?", answer: "Our estimations are very accurate because we use digital tools. Our cost projections use the latest material and labor pricing to reduce mistakes." },
            { question: "How long does it take to get a complete residential cost projection?", answer: "Turnaround time at our firm is usually between one to four working days. If your project is big and complex, it will take longer. In any case, we always clarify the timelines before the process." },
            { question: "In what format will I receive the final report of estimate?", answer: "You will get your final report in EXCEL and PDF formats. This will contain detailed breakdowns of expenses with labor hours and material pricing." },
            { question: "What residential trades do you support?", answer: "We support cost analysis and takeoff for: Excavation and Sitework, Earthwork and Landscaping, Drywall, painting, flooring and tiling, Carpentry, lumber and Joining, Electrical, mechanical and Plumbing work, Renovations, remodelling and additions, Insulations, doors and windows." },
            { question: "Do you provide estimates for different stages of design?", answer: "Yes, we provide: Conceptual and feasibility estimates test early designs for the given budget, Schematic design estimates show layout changes and building systems, Design development estimates give trade quantities and cost adjustments, Construction Document Estimates align the final drawings with specifications." }
        ],
        whyImportant: {
            title: "When Our Residential Estimating Support Is Most Helpful",
            description: "Residential construction seems simpler than industrial work on the surface. It still involves budget planning, deadlines and design changes. If right cost planning is hard for you, our estimation services will help you. We will be especially helpful if: You are not sure of the project scope and cost plans, Budgeting is difficult with changing material prices, You need cost alternatives to stay on track with the work, Clear numbers for financing and bidding are lacking.",
            image: residentialHome
        },
        rangeOfServices: {
            title: "Our Residential Construction Estimating Services",
            description: "We serve contractors, developers, architects and designers with comprehensive residential estimating.",
            items: [
                "Single Family Tract Homes", "High-End Custom Homes", "Multi-Family Apartments",
                "Townhouses & Condos", "Accessory Dwelling Units (ADUs)", "Home Renovations",
                "Kitchen & Bath Remodels", "Deck & Patio Additions", "Basement Finishing",
                "Disaster Restoration", "Green Building Projects", "Modular Homes"
            ]
        },
        stats: [
            { value: "1-4d", label: "Turnaround Time", icon: Clock },
            { value: "20+", label: "Years Experience", icon: Award },
            { value: "3k+", label: "Homes Estimated", icon: Target },
            { value: "100%", label: "Lender Accepted", icon: Users }
        ]
    }
];
