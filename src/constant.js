import logoImg from "./assets/logo/logo.webp";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe,
  FaGamepad,
  FaPalette,
  FaBitcoin,
  FaRobot,
} from "react-icons/fa";
// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Chatbots.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
// blogs image
import blogone from "./assets/blogs/blogone.png";
import blogtwo from "./assets/blogs/blogtwo.png";
import blogthree from "./assets/blogs/blogthree.png";
import blogfour from "./assets/blogs/blogfour.png";
import blogfive from "./assets/blogs/blogfive.png";
import blogsix from "./assets/blogs/blogsix.png";
import blogseven from "./assets/blogs/blogseven.png";
export { logoImg };

export const companyDetails = {
  phone: "+91-6309711233",
  address: "ABC Street, City, Country",
  email: "support@pramantech.com",
  leademail: "pramantech96@gmail.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Frontend Development",
    icon: webServiceIcon1,
    description:
      "Crafting visually stunning and highly responsive frontends that enhance user experience. We ensure seamless performance across all devices and browsers.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: webServiceIcon2,
    description:
      "Building robust and scalable backend systems that power your applications. Our solutions ensure security, performance, and seamless data management.",
  },
  {
    id: 3,
    title: "Database Schema",
    icon: webServiceIcon3,
    description:
      "Designing efficient and optimized database schemas to store, retrieve, and manage your data effectively. Ensuring structured and scalable data management.",
  },
  {
    id: 4,
    title: "UI / UX",
    icon: webServiceIcon4,
    description:
      "Creating intuitive and aesthetically pleasing UI/UX designs that captivate users and enhance engagement. Focused on usability, accessibility, and innovation.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Development",
    icon: appServiceIcon1,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient iOS applications. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android Development",
    icon: appServiceIcon2,
    description:
      "We design and develop tailor-made Android applications that align with your vision and business goals. Proficient in both Java and Kotlin, we build scalable and efficient apps.",
  },
  {
    id: 3,
    title: "PWA Apps",
    icon: appServiceIcon3,
    description:
      "Progressive Web Apps (PWAs) provide a seamless experience across web and mobile, offering the best of both worlds. We develop fast, reliable, and engaging PWAs that enhance user interaction.",
  },
  {
    id: 4,
    title: "Hybrid Apps",
    icon: appServiceIcon4,
    description:
      "We build feature-rich hybrid applications tailored to your business needs. Our solutions ensure smooth performance and compatibility across both iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "Operations Manager at EcoFlow Systems",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Praman Tech's web development service is top-notch. They built a responsive, user-friendly website that reflects our brand perfectly. Great job!”",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Marketing Director at PlayForge Studios",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Praman Tech's AI solutions are cutting-edge, driving our business forward. Their app development team exceeded expectations. Highly recommended!”",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Operations Manager at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The AI solutions from Praman Tech have revolutionized our operations. Their expertise and support are invaluable. A truly strategic partner.”",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Manager of Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“Praman Tech's app development team delivered a seamless, feature-rich application on time and within budget. Fantastic experience overall”",
  },
  {
    id: 5,
    name: "Jessica M",
    position: "COO of Creative Solutions",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“Impressed with Praman Tech's creativity in app development. They turned our vision into reality flawlessly. Exceptional service!”",
  },
];

// all services
export const allServicess = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Design and develop responsive, SEO-friendly websites that effectively represent your brand and engage your audience.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At Praman Tech, we build more than just websites—we create digital experiences that are crafted to perform. Whether you're a small business looking to establish an online presence or a larger company needing a full-featured, scalable platform, our web development services are designed to meet your specific needs. Our team of developers, designers, and strategists work together to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/> No cookie-cutter solutions here. We build each site from the ground up, ensuring it aligns with your brand and business goals.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b> <br/> Performance matters. We ensure your website loads fast and is equipped with the latest security features to protect your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>  As your business grows, your website should too. Our websites are built to handle increased traffic and scale with your success.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services deliver results that enhance your online visibility and user engagement.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "Develop robust, user-friendly mobile apps for iOS and Android platforms that meet your business needs.",
    icon: allServiceIcon2,
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At Praman Tech, we specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals. Our app development services cover everything from concept to deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you’re targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We’re not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
  },
  {
    id: 3,
    title: "UX/UI Design",
    description:
      "Create intuitive and visually appealing user interfaces and experiences that enhance usability and customer satisfaction.",
    icon: allServiceIcon3,
    detailHeading: "UX/UI Design: Crafting Seamless and Engaging User Journeys",
    detailContent: `<p>A great digital product is nothing without an exceptional user experience. Our UX/UI design services focus on creating intuitive, user-centered designs that make it easy for your customers to engage with your business. Here's how we bring your vision to life:</p>
      <br/>
      <ol>
        <li><b>User-Centered Design:</b><br/>We take the time to understand your users—their needs, behaviors, and goals—so we can design interfaces that feel natural and engaging.</li>
        <br/>
        <li><b>Prototyping and Testing:</b> <br/> Before anything goes live, we create interactive prototypes to test and gather feedback. This ensures that the final design is both functional and delightful to use.</li>
        <br/>
        <li><b>Beautiful and Functional Interfaces:</b><br/>  Our UI designers craft stunning visuals that not only look great but also provide a smooth, seamless experience for your users.</li>
      </ol>
      <br/>
      <br/>
      <p>From websites to mobile apps, we design user experiences that lead to higher engagement, satisfaction, and loyalty.</p>`,
  },
  {
    id: 4,
    title: "Chatbots",
    description:
      "Craft intuitive chatbot solutions to enhance customer engagement and streamline business operations with automated interactions.",
    icon: allServiceIcon4,
    detailHeading: "Chatbots: Automate and Enhance Customer Interaction",
    detailContent: `<p>Chatbots are revolutionizing the way businesses interact with their customers, offering instant support and engagement at any time of day. At Praman Tech, we develop intelligent, AI-driven chatbots that help streamline customer service, boost conversions, and reduce operational costs. Our chatbot services include:</p>
      <br/>
      <ol>
        <li><b>Natural Language Processing (NLP):</b><br/>We use advanced AI and NLP to build chatbots that understand and respond to user queries in a conversational, human-like way.</li>
        <br/>
        <li><b>Custom Workflows:</b> <br/> Whether you're looking to automate customer support, generate leads, or assist in e-commerce, we design chatbots tailored to your specific business goals.</li>
        <br/>
        <li><b>Multi-Platform Integration:</b><br/>  Our chatbots can be integrated across various platforms, including your website, Facebook Messenger, WhatsApp, and more, ensuring you meet customers wherever they are.</li>
      </ol>
      <br/>
      <br/>
      <p>We focus on delivering solutions that enhance customer satisfaction and drive results, while giving you more time to focus on growing your business.</p>`,
  },
  {
    id: 5,
    title: "AI Development Solutions",
    description:
      "Harness the power of AI to innovate and automate processes, driving efficiency and intelligent decision-making.",
    icon: allServiceIcon5,
    detailHeading:
      "AI Development Solutions: Empowering Innovation with Artificial Intelligence",
    detailContent: `<p>In the age of artificial intelligence (AI), leveraging AI technologies can revolutionize your business operations. At Praman Tech, we specialize in developing AI solutions that help businesses innovate, automate, and make intelligent decisions. Our AI services include:</p>
      <br/>
      <ol>
        <li><b>Intelligent Automation:</b><br/> Harness the power of AI to streamline workflows, reduce manual effort, and improve operational efficiency through intelligent process automation.</li>
        <br/>
        <li><b>Predictive Insights:</b> <br/> Use advanced AI models to uncover patterns, predict outcomes, and drive data-informed decisions with greater accuracy.</li>
        <br/>
        <li><b>Personalized Experiences:</b><br/> Enhance user engagement and satisfaction by delivering AI-driven personalized experiences tailored to individual needs and preferences.</li>
      </ol>
      <br/>
      <br/>
      <p>Our AI development solutions are designed to transform data into actionable insights, foster innovation, and enable sustainable business growth.</p>`,
  },
  {
    id: 6,
    title: "Game Development",
    description:
      "Creating immersive and engaging gaming experiences through advanced design, development, and technology for various platforms and audiences.",
    icon: allServiceIcon6,
    detailHeading:
      "Game Development: Bringing Your Ideas to Life with Interactive Experiences",
    detailContent: `<p>Whether you're an indie developer with a fresh idea or a large studio looking to expand your portfolio, we offer comprehensive game development services to bring your vision to life. At Praman Tech, we specialize in creating immersive, engaging games for mobile, console, and PC platforms. Our game development services include:</p>
      <br/>
      <ol>
        <li><b>Concept and Story Development:</b><br/>We work with you to develop compelling narratives, unique characters, and engaging gameplay mechanics that keep players coming back.</li>
        <br/>
        <li><b>Multi-Platform Development:</b> <br/> Whether it’s Unity or Unreal Engine, we use the latest tools and technologies to ensure your game runs smoothly on all platforms, including iOS, Android, PC, and consoles.</li>
        <br/>
        <li><b>2D/3D Design and Animation:</b><br/> Our artists and animators create stunning graphics and immersive environments that enhance the gameplay experience.</li>
      </ol>
      <br/>
      <br/>
      <p>From mobile games to AAA titles, we are committed to delivering high-quality games that resonate with players and stand out in the market.</p>`,
  },
];

export const allServices = [
  {
    id: 1,
    title: "App Development",
    link: "/app-development",

    description:
      "Innovative app development services designed to create engaging, high-performance mobile applications that meet business objectives and provide exceptional user experiences across platforms.",
    features: [
      "Native iOS App Development",
      "Native Android App Development",
      "Cross-Platform App Development",
      "Progressive Web App Development",
      "App Testing & Quality Assurance",
      "App Maintenance & Feature Upgrades",
    ],
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At Praman Tech, we specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals. Our app development services cover everything from concept to deployment:</p>
    <br/>
    <ol>
      <li><b>iOS and Android Apps:</b><br/>Whether you’re targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
      <br/>
      <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
      <br/>
      <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
    </ol>
    <br/>
    <br/>
    <p>We’re not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
    icon: <FaMobileAlt className="z-[2] w-[4rem] h-[4rem]" />,
  },
  {
    id: 2,
    title: "Web Development",
    link: "/web-development",

    description:
      "Advanced website development with integrated AI-powered chatbots and voice bots, delivering responsive, user-friendly sites that enhance customer interaction and automate service delivery.",
    features: [
      "Custom Website Design & Development",
      "AI Chatbot Development & Integration",
      "Voice Bot Development & Integration",
      "E-commerce Website Development",
      "CMS Development & Management",
      "Website Maintenance & Optimization",
    ],
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At Praman Tech, we build more than just websites—we create digital experiences that are crafted to perform. Whether you're a small business looking to establish an online presence or a larger company needing a full-featured, scalable platform, our web development services are designed to meet your specific needs. Our team of developers, designers, and strategists work together to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/> No cookie-cutter solutions here. We build each site from the ground up, ensuring it aligns with your brand and business goals.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b> <br/> Performance matters. We ensure your website loads fast and is equipped with the latest security features to protect your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>  As your business grows, your website should too. Our websites are built to handle increased traffic and scale with your success.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services deliver results that enhance your online visibility and user engagement.</p>`,
    icon: <FaGlobe className="z-[2] w-[4rem] h-[4rem]" />,
  },
  {
    id: 3,
    title: "CRM Development",
    description:
      "Expertly crafted CRM services that streamline customer relationships, enhance data management, and drive business growth through personalized solutions tailored to your unique needs.",
    features: [
      "CRM Customization & Development",
      "CRM Integration with Third-Party Apps",
      "CRM Migration & Data Management",
      "CRM Implementation & Deployment",
      "CRM Support & Troubleshooting",
      "CRM Training & Consulting",
    ],
    icon: <FaLaptopCode className="z-[2] w-[4rem] h-[4rem]" />,
  },
  {
    id: 4,
    title: "Game Development",
    description:
      "Creative game development services that bring your vision to life, offering immersive and interactive experiences across mobile, AR/VR, and PC platforms.",
    features: [
      "Mobile Game Design & Development",
      "AR/VR Game Development",
      "2D/3D Game Art and Animation",
      "Game Mechanics & Level Design",
      "Multiplayer Game Development",
      "Game Testing & Debugging",
    ],
    icon: <FaGamepad className="z-[2] w-[4rem] h-[4rem]" />,
  },
  {
    id: 5,
    title: "UI/UX",
    description:
      "Comprehensive UI/UX design services focused on creating intuitive, aesthetically pleasing interfaces that enhance user engagement and elevate the overall digital experience.",
    features: [
      "User Research & Persona Development",
      "Information Architecture & Wireframing",
      "Interactive Prototyping",
      "Visual Design & Branding",
      "Usability Testing & Optimization",
      "UI/UX Strategy & Consulting",
    ],
    icon: <FaPalette className="z-[2] w-[4rem] h-[4rem]" />,
  },
  {
    id: 6,
    title: "Blockchain Development",
    description:
      "We provide cutting-edge Blockchain development services tailored to meet modern business challenges. From secure and scalable blockchain solutions to user-centric designs.",
    features: [
      "Smart Contract Development",
      "Decentralized App (DApp) Development",
      "Blockchain Integration",
      "Cryptocurrency Development",
      "Private & Public Blockchain Solutions",
      "UI/UX Strategy & Optimization",
    ],
    icon: <FaBitcoin className="z-[2] w-[4rem] h-[4rem]" />,
  },
  {
    id: 7,
    title: "AI Development",
    description:
      "We offer state-of-the-art AI development services designed to help businesses unlock their full potential. Our expertise spans various AI domains, delivering intelligent, data-driven solutions that transform operations and drive innovation.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Predictive Analytics",
      "AI-Powered Automation",
      "Custom AI Solutions",
    ],
    icon: <FaRobot className="z-[2] w-[4rem] h-[4rem]" />,
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blogsDetails = [
  {
    id: 1,
    image: blogone,
    title: "AI Agents in Real Estate",
    description:
      "Artificial Intelligence (AI) is transforming the real estate industry, making property buying, selling, and management more efficient and data-driven. While traditional real estate processes often involve manual work, AI agents are now taking center stage, streamlining operations and enhancing decision-making. Whether you're a buyer, seller, or investor, AI-driven solutions are changing the way real estate transactions happen.",
    link: "https://pramantechappdevelopment.blogspot.com/2025/02/ai-agents-in-real-estate.html",
  },
  {
    id: 2,
    image: blogtwo,
    title: "AI in Healthcare: Transforming Patient Care & Medical Innovation",
    description:
      "Artificial Intelligence (AI) is revolutionizing the healthcare industry, offering unprecedented advancements in diagnostics, treatment, patient management, and operational efficiency. From predictive analytics to robotic surgeries, AI-driven solutions are reshaping the way medical professionals deliver care. As the demand for smarter, faster, and more accurate healthcare solutions grows, AI is becoming the backbone of modern medicine.",
    link: "https://pramantechappdevelopment.blogspot.com/2025/02/ai-in-healthcare-transforming-patient.html",
  },
  {
    id: 3,
    image: blogthree,
    title:
      "The AI Revolution in Real Estate: Transforming the Industry with PramanTech Solutions",
    description:
      "The real estate industry, traditionally characterized by face-to-face interactions and manual processes, is undergoing a significant transformation. Artificial Intelligence (AI) is driving this change, offering innovative solutions to enhance efficiency, improve user experience, and create smarter workflows. At PramanTech, we’re at the forefront of this revolution, empowering real estate businesses with cutting-edge AI tools to stay competitive in a fast-evolving market.blo",
    link: "https://pramantechappdevelopment.blogspot.com/2024/12/AIinrealestate.html",
  },
  {
    id: 4,
    image: blogfour,
    title:
      "Exploring the Future of Gaming with Virtual Reality (VR): A Game-Changer in the Industry",
    description:
      "In the past few decades, technology has made leaps and bounds, transforming almost every aspect of our lives. One of the most exciting innovations that has taken the world by storm is Virtual Reality (VR). Once considered a futuristic concept, VR is now a reality that is shaping multiple industries, including gaming, healthcare, education, and even real estate. Among these, gaming stands out as one of the most prominent fields to benefit from VR, providing a truly immersive experience that transports players into another world.",
    link: "https://pramantechappdevelopment.blogspot.com/2024/12/gamdevelopment.html",
  },
  {
    id: 5,
    image: blogfive,
    title:
      "Cybersecurity in the Digital Age: Protecting Your Data in an Evolving Threat Landscape",
    description:
      "In today’s hyper-connected world, cybersecurity is no longer a luxury; it is a necessity. With the exponential growth of technology, the risks to individuals, businesses, and governments have surged. From phishing attacks to ransomware, cybercriminals are evolving, finding innovative ways to exploit vulnerabilities. For organizations, the challenge is clear: stay ahead of the curve or risk losing everything.",
    link: "https://pramantechappdevelopment.blogspot.com/2024/11/cybersecurityblog.html",
  },
  {
    id: 6,
    image: blogsix,
    title: "Why Custom App Development is the Key to Business Growth in 2024",
    description:
      "In today’s fast-paced digital economy, having a unique app tailored to your business needs is no longer a luxury—it’s a necessity. Off-the-shelf solutions may offer quick fixes, but they often lack the flexibility, scalability, and uniqueness that modern businesses require to thrive.",
    link: "https://pramantechappdevelopment.blogspot.com/2024/11/Appdevelopmentblog.html",
  },
  {
    id: 7,
    image: blogseven,
    title: "How Blockchain Secures Data Like Never Before",
    description:
      "Blockchain technology is redefining the digital landscape by providing secure, transparent, and tamper-proof solutions. Initially created as the backbone for cryptocurrencies like Bitcoin, blockchain's potential now extends to industries such as finance, real estate, healthcare, and beyond. At PramanTech, we leverage blockchain to empower businesses with next-gen solutions, unlocking unmatched security and efficiency.",
    link: "https://pramantechappdevelopment.blogspot.com/2024/12/Blockchaindevelopment.html",
  },
];
