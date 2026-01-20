import { Users, Lightbulb, Database, BarChart, Instagram, Linkedin, Users2, Sparkles, Award, Zap, TrendingUp, X } from "lucide-react"

export const blogPosts = [
  {
    id: "navigating-digital-canvas",
    title: "Navigating the Digital Canvas: Trends Shaping Graphic Design in 2025",
    excerpt:
      "Explore the forefront of graphic design trends to craft visually stunning and impactful designs that set new standards in the digital landscape.",
    category: "Culture",
    readTime: "7 min",
    image: "/images/award3_thumbnail.jpg",
  },
  {
    id: "art-of-storytelling",
    title: "The Art of Storytelling: Building Narratives Through Visual Content",
    excerpt:
      "Discover how to leverage visual storytelling to create compelling narratives that resonate with your audience and drive engagement.",
    category: "Design",
    readTime: "8 min",
    image: "/images/award2_thumbnail.jpg",
  },
  {
    id: "beyond-pixels",
    title: "Beyond Pixels: The Role of User Experience in Web Design",
    excerpt:
      "Delve into the critical importance of user experience in web design and how it impacts user engagement, conversion rates, and brand perception.",
    category: "Design",
    readTime: "10 min",
    image: "/images/award1_thumbnail.jpg",
  },
  {
    id: "visual-identity",
    title: "Crafting a Visual Identity: The Power of Branding in Design",
    excerpt:
      "Explore how a strong visual identity can differentiate your brand in a crowded marketplace and create lasting impressions with your audience.",
    category: "Design",
    readTime: "4 min",
    image: "/images/award2_thumbnail.jpg",
  },
  {
    id: "social-media-visuals",
    title: "Innovative Strategies for Social Media Visuals: Beyond the Scroll",
    excerpt:
      "Learn cutting-edge techniques to create social media visuals that stop the scroll and drive meaningful engagement with your content.",
    category: "Culture",
    readTime: "10 min",
    image: "/images/award3_thumbnail.jpg",
  },
]

// Categories for blog filtering
export const categories = ["All", "Design", "Tech", "Culture"];


export const projects = [
  {
    id: "fabb-fit",
    title: "FABB FIT FITNESS",
    links: {
      instagram: "https://www.instagram.com/fabb_fitt",
    },
    tags: "Branding, Digital Strategy, Mascot development, Lead Generation, Offline Marketing",
    image: "/images/fabb-fit.webp",
    bgColor: "bg-cyan-600",
    hexColor: "#06b6d4",
    reverse: false,
    // Adding full project details
    description: "Branding, Digital Strategy, Mascot development, Lead Generation, Offline Marketing",
    largeImage: "/images/fabb-fit-large.webp",
    secondaryImages: ["/images/fabb-fit-1.webp", "/images/fabb-fit-2.webp"],
    category: "HEALTH AND WELLNESS",
    intro:
      "Fabb Fit stands as a premium fitness destination catering exclusively to celebrity clientele, offering a luxury gym experience that blends state-of-the-art facilities with personalized services.",
    content: [
      "As the creative powerhouse behind FabbFitt, our agency orchestrated a multifaceted transformation, delivering a suite of services to enhance their brand presence, digital strategy, and overall market impact. From crafting an iconic brand identity to developing a compelling mascot, our collaboration aimed to position FabbFitt as a standout luxury fitness brand catering to an elite clientele.",
      "The collaborative efforts between our creative agency and FabbFitt resulted in a transformed brand identity, a robust digital presence, and a compelling offline marketing strategy. The cohesive integration of branding, digital strategy, mascot development, and lead generation has elevated FabbFitt's position as a sought-after luxury gym, successfully attracting and retaining high-profile clientele.",
    ],
    quote: "ONLY MASCOT NEEDED TO GET YOU MOVING AND IN SHAPE."
  },
  {
    id: "kraftodent",
    title: "Kraftodent",
    links: {
      website: "https://www.kraftodent.com/",
    },
    tags: "Website, AI Agents, CRMs For Dentists",
    image: "/images/kraftodent.jpg",
    bgColor: "bg-cyan-800",
    hexColor: "#06b6d4",
    reverse: false,
    // Adding full project details
    description: "AI Receptionist and CRM for Dental Clinics",
    largeImage: "/images/kraftodent-1.webp",
    secondaryImages: ["/images/kraftodent-2.webp", "/images/kraftodent-3.webp"],
    // category: "HEALTH AND WELLNESS",
    // intro:
    //   "Fabb Fit stands as a premium fitness destination catering exclusively to celebrity clientele, offering a luxury gym experience that blends state-of-the-art facilities with personalized services.",
    // content: [
    //   "As the creative powerhouse behind FabbFitt, our agency orchestrated a multifaceted transformation, delivering a suite of services to enhance their brand presence, digital strategy, and overall market impact. From crafting an iconic brand identity to developing a compelling mascot, our collaboration aimed to position FabbFitt as a standout luxury fitness brand catering to an elite clientele.",
    //   "The collaborative efforts between our creative agency and FabbFitt resulted in a transformed brand identity, a robust digital presence, and a compelling offline marketing strategy. The cohesive integration of branding, digital strategy, mascot development, and lead generation has elevated FabbFitt's position as a sought-after luxury gym, successfully attracting and retaining high-profile clientele.",
    // ],
    // quote: "ONLY MASCOT NEEDED TO GET YOU MOVING AND IN SHAPE."
  },
  {
    id: "kermis-events",
    title: "KERMIS EVENTS",
    links: {
      website: "https://www.kermisevents.com/",
      instagram:"https://www.instagram.com/kermiscorporateevents/",
      linkedin:"https://www.linkedin.com/company/kermis-events/"
    },
    tags: "Visual Branding, UI UX Design, Web development",
    image: "/images/kermis-events.webp",
    bgColor: "bg-pink-900",
    hexColor: "#831843",
    reverse: true,
    // Adding full project details
    description: "Visual Branding, UI UX Design, Web development",
    largeImage: "/images/kermis-events-large.webp",
    secondaryImages: [],
    category: "EVENT MANAGEMENT",
    intro:
      "Since 2019, Kermis Events has been your comprehensive one-stop partner for hosting world-class corporate events in a time-bound and systematic manner.",
    content: [
      "As the creative force behind S CUBE Interior Art's digital presence, our creative agency spearheaded the end-to-end development of their website, a virtual canvas reflecting the essence of their innovative interior artistry. Tasked with transforming concepts into a visually engaging and user-centric online platform, we embarked on a journey to redefine S CUBE's digital footprint.",
      "The collaboration with Kermis Events resulted in a transformed online platform that not only reflects the dynamism of their event services but also offers a user-friendly and visually appealing experience. The new website positions Kermis Events as a leader in the event management industry, showcasing their expertise and fostering increased engagement with clients and event enthusiasts.",
    ],
    quote:
      '"KraftX demonstrates true professionalism and mastery in their field, exhibiting meticulous attention to detail. With the completion of our dream website, we now possess an asset poised to evolve alongside us for years to come. We extend our gratitude to the exceptional team at KraftX!"'
  },
  {
    id: "s-cube-interior-art",
    title: "S CUBE INTERIOR ART",
    links: {
      website: "https://scubeinteriors.com/",
      instagram: "https://www.instagram.com/artscube.in/"
    },
    tags: "End to End Development: Product Design Branding, Custom eCommerce, Social media management, Influencer marketing",
    image: "/images/s-cube.webp",
    bgColor: "bg-red-300",
    hexColor: "#FFB56B",
    reverse: false,
    // Adding full project details
    description:
      "End to End Development: Product Design Branding, Custom eCommerce, Social media management, Influencer marketing",
    largeImage: "/images/s-cube-large.webp",
    secondaryImages: ["/images/s-cube-1.webp"],
    category: "HOME IMPROVEMENT / INTERIOR DESIGNING",
    intro:
      "S CUBE has state of art technology in printing industry with capabilities to print over any plain surfaces.",
    content: [
      "As the creative force behind S CUBE Interior Art's digital presence, our creative agency spearheaded the end-to-end development of their website, a virtual canvas reflecting the essence of their innovative interior artistry. Tasked with transforming concepts into a visually engaging and user-centric online platform, we embarked on a journey to redefine S CUBE's digital footprint.",
      "The culmination of our collaboration with S CUBE resulted in an immersive website that not only captures the essence of their interior artistry but also serves as a dynamic platform for engaging with their audience. The S CUBE Interior Art website stands as a testament to the successful fusion of creativity and technology, providing an online showcase that mirrors the innovation and craftsmanship synonymous with the S CUBE brand.",
    ],
    quote:
      '"Right from the start, it was clear that the team fully understood our requirements and vision, skillfully transforming it into an exceptional reality. The team\'s prompt responsiveness gave us a sense of assurance, as we were confident that our project was in competent hands. Establishing such a high level of trust and collaboration is a rarity when engaging with external agencies, yet Humaan has succeeded in nurturing a working relationship that surpasses expectations."'
  }
];

// Merged expertise cards data
export const mergedExpertiseCards = [
  {
    title: "Branding",
    description: "Crafting the visual identity of your brand while devising impactful strategies for the seamless deployment of products or services",
    icon: Award,
    color: "text-primary",
    hoverColor: "hover:bg-sky-600",
    image: "/images/branding.webp",
    iconClass: "text-primary",
    bgColor: "hover:bg-[#3B82F6]",
    delay: 0
  },
  {
    title: "Social Media Marketing",
    description: "Designing & Managing on social media platforms, websites, offline channels for a impactful brand representation.",
    icon: Zap,
    color: "text-primary",
    hoverColor: "hover:bg-pink-900",
    image: "/images/social-media-marketing.webp",
    iconClass: "text-primary",
    bgColor: "#EC4899",
    delay: 0
  },
  {
    title: "Performance Marketing",
    description: "Skyrocket sales and reel in top-notch leads with our tailored strategies for maximum impact.",
    icon: TrendingUp,
    color: "text-primary",
    hoverColor: "hover:bg-[#FFB56B]",
    image: "/images/performance-marketing.webp",
    iconClass: "text-primary",
    bgColor: "#60A5FA",
    delay: 0
  },
  {
    title: "Strategic Thinking",
    description: "We analyze market trends, consumer behavior, and competitive landscapes to develop strategies that position your brand for success.",
    icon: Lightbulb,
    color: "text-primary",
    hoverColor: "hover:bg-sky-600",
    image: "/images/strategic-thinking.jpg",
    iconClass: "text-primary",
    bgColor: "#3B82F6",
    delay: 0
  },
  {
    title: "Creative Design",
    description: "Our design team crafts visually compelling assets that communicate your brand's unique story and resonate with your target audience.",
    icon: Sparkles,
    color: "text-primary",
    hoverColor: "hover:bg-pink-900",
    image: "/images/creative-design.webp",
    iconClass: "text-primary",
    bgColor: "#EC4899",
    delay: 0
  },
  {
    title: "Technical Excellence",
    description: "We leverage cutting-edge technologies to build robust, scalable solutions that drive business growth and enhance user experiences.",
    icon: Database,
    color: "text-primary",
    hoverColor: "hover:bg-sky-600",
    image: "/images/technical-excellence.jpg",
    iconClass: "text-primary",
    bgColor: "#60A5FA",
    delay: 0
  },
  {
    title: "Data-Driven Approach",
    description: "We make informed decisions based on analytics and performance metrics, continuously optimizing to achieve the best possible results.",
    icon: BarChart,
    color: "text-primary",
    hoverColor: "hover:bg-pink-900",
    image: "/images/data-driven.webp",
    iconClass: "text-primary",
    bgColor: "#F472B6",
    delay: 0
  },
  {
    title: "Client Collaboration",
    description: "We work closely with our clients, valuing their input and maintaining transparent communication throughout the project lifecycle.",
    icon: Users,
    color: "text-primary",
    hoverColor: "hover:bg-sky-600",
    image: "/images/client-collab.webp",
    iconClass: "text-primary",
    bgColor: "#3B82F6",
    delay: 0
  },
  {
    title: "Continuous Innovation",
    description: "We stay ahead of industry trends, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
    icon: Users2,
    color: "text-primary",
    hoverColor: "hover:bg-pink-900",
    image: "/images/continuous-innovation.jpg",
    iconClass: "text-primary",
    bgColor: "#EC4899",
    delay: 0
  }
];

// Testimonials data
export const testimonials = [
  { name: "R Sharma", text: "To translate my brand's vision into technology so beautifully is something I never imagined." },
  { name: "Bijayeeta", text: "KraftX has a deep understanding of the market and technology. Thorough research and attention to the last detail of the project made it a successful one." },
  { name: "Subodh", text: "Incredible results! I was genuinely astonished outstanding outcomes. This experience exceeded all expectations." },
  { name: "Emanuel", text: "Team is young and vey passionate about the work they are doing. I think they are the best in what they do." }
];

// About US Papge Content
export const aboutUsPageContent = {
  hero: {
    heading: "We strive to create brands that not only provide products or services but create positive impact in people's lives.",
    image: "/images/team-working.jpg",
    text: "At KraftX, we fundamentally believe that effective technology starts with understanding people. That's why we adopt a people-centric approach at our core. Whether it's our customers or our internal team, we prioritise understanding their needs and perspectives to drive our solutions forward."
  },
  philosophy: {
    title: "Our Philosophy",
    paragraphs: [
      "We believe in creating meaningful connections between brands and their audiences through thoughtful design and strategic thinking. Our approach combines creativity with data-driven insights to deliver results that exceed expectations.",
      "Every project we undertake is an opportunity to push boundaries and explore new possibilities. We're not just service providers – we're partners in your journey toward growth and success."
    ],
    image: "/images/team-working-2.webp"
  },
  expertise: {
    title: "Our Expertise"
  },
  cta: {
    title: "Ready to transform your brand?",
    text: "Let's collaborate to create something extraordinary that resonates with your audience and drives meaningful results.",
    buttonText: "Get in Touch",
    buttonLink: "/contact"
  },
  animations: {
    duration: 0.8,
    ease: "power3.out",
    sections: {
      about: [
        { selector: ".about-heading", props: { y: 50, opacity: 0 } },
        { selector: ".about-image", props: { x: -50, opacity: 0 }, delay: 0 },
        { selector: ".about-text", props: { x: 50, opacity: 0 }, delay: 0 }
      ],
      philosophy: [
        { selector: ".philosophy-title", props: { x: -50, opacity: 0 } },
        { selector: ".philosophy-text", props: { x: 50, opacity: 0 }, delay: 0 },
        { selector: ".philosophy-image", props: { scale: 0.8, opacity: 0 }, delay: 0 }
      ],
      expertise: [
        { selector: ".expertise-title", props: { y: 50, opacity: 0 } }
        // Cards are handled dynamically in the code
      ],
      cta: [
        { selector: ".cta-title", props: { y: 50, opacity: 0 } },
        { selector: ".cta-text", props: { y: 50, opacity: 0 }, delay: 0 },
        { selector: ".cta-button", props: { y: 50, opacity: 0 }, delay: 0 }
      ]
    }
  }
};

export const services = [
  {
    id: "branding-package",
    title: "Full Branding Package",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    // price: "Rs. 24,999",
    features: [
      "Logo Design",
      "Brand Style Guide",
      "Business Card Design",
      "Letterhead & Envelope",
      "Email Signature",
      "Social Media Profile Graphics",
    ],
    image: "/images/award1_thumbnail.jpg",
    popular: true,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom website design and development with responsive layouts and modern functionality.",
    // price: "Rs. 24,999",
    features: [
      "Full Stack Responsive Websites",
      "Higly Scalable Applications",
      "Running Millions of Requests without Crashing",
      "SEO Optimisation, CDNs and CRMs",
      "Timely Maintenance and Support",
      "AI, Blockchain and other services integration",
    ],
    image: "/images/award2_thumbnail.jpg",
    popular: false,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to increase brand awareness and drive conversions.",
    // price: "Rs. 24,999",
    features: [
      "Social Media Management",
      "Content Creation",
      "Paid Advertising Campaigns",
      "Performance Analytics",
      "Monthly Strategy Sessions",
      "Competitor Analysis",
    ],
    image: "/images/award3_thumbnail.jpg",
    popular: false,
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    description: "Custom mobile application development for iOS and Android platforms with intuitive user experience.",
    // price: "Rs. 24,999",
    features: [
      "Visually Appealing UI / UX",
      "Full Stack Responsive Websites",
      "Native Development Suitable For All Devices",
      "Cross-Platform Support",
      "API Integration and User Authentication",
      "App Store Submission",
    ],
    image: "/images/award1_thumbnail.jpg",
    popular: false,
  },
];

export const servicesPageContent = {
  header: {
    title: "Our <span class=\"gradient-text\">Services</span>",
    subtitle: "Transform your business with our premium creative solutions"
  },
  custom: {
    title: "Need a custom solution?",
    description: "We understand that every business is unique. Contact us to discuss your specific requirements and we'll create a tailored solution just for you.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    image: "/images/team-working.jpg",
    imageAlt: "Custom Solutions"
  },
  faq: {
    title: "FAQs",
    items: [
      {
        question: "How long does the branding process take?",
        answer: "Our branding process typically takes 3-4 weeks from start to finish, depending on the complexity of the project and the number of revisions required.",
        hoverColor: "#1e3a8a"
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes, we offer various support packages to ensure your digital assets continue to perform optimally after launch. Our team is always available to help with updates and maintenance.",
        hoverColor: "#9d174d"
      },
      {
        question: "Can I upgrade my package later?",
        answer: "Our packages are designed to be flexible. You can start with a basic package and upgrade as your business grows and your needs evolve.",
        hoverColor: "#0e7490"
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, bank transfers, and PayPal. For larger projects, we can also arrange a payment schedule that works for your budget.",
        hoverColor: "#4f46e5"
      }
    ]
  },
  animations: {
    scrollTriggers: {
      header: { y: -50, opacity: 0 },
      services: { y: 100, opacity: 0 },
      custom: { y: 50, opacity: 0 },
      faq: { y: 50, opacity: 0 }
    }
  }
};


export const socialLinks = [
  { href: "https://www.instagram.com/kraftxworks/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/kraftxworks/", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/kraftxworks", label: "Twitter", icon: X }
];

export const locations = [
  {
    name: "BENGALURU - 560095",
    mapUrl: "https://maps.app.goo.gl/dKoyDwmRzWUkVcue9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.543624033917!2d77.62760697588698!3d12.93702751563362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14429b43dfa3%3A0x8e138f7fc031fc96!2sDSR%20Orchids%20Apartment%2C%20Chandra%20Reddy%20Layout%2C%20S%20T%20Bed%20Layout%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1744893047187!5m2!1sen!2sin"
  },
  {
    name: "Pune - 411037",
    mapUrl: "https://maps.app.goo.gl/DH9qn3Fk12PVSbgB6",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.71862188362!2d73.85671187595625!3d18.496400369910642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfefb24c04f5%3A0x12f3053bee962fea!2sKraftX%3A%20Top%20Rated%20Creative%20Marketing%20Agency%20in%20Pune!5e0!3m2!1sen!2sin!4v1744892811677!5m2!1sen!2sin"
  }
];
