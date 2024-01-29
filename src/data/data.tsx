import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import UpworkIcon from '../components/Icon/UpworkIcon';
// import heroImage from '../images/header-background.webp';
import heroImage from '../images/header-background1.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: `Ayush Gupta's Portfolio`,
  description: 'Portfolio Website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  // Freelance: 'freelance',
  Skills: 'skills',
  // Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ayush Gupta.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a India based <strong className="text-stone-100">Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Aimica Ltd</strong> helping build a modern, mobile-first, robust
        conversational AI chat bot. In addition to my full-time role, I also work as a{' '}
        <strong className="text-stone-100">freelancer</strong> on various projects, leveraging my skills and expertise
        in app development
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me honing my{' '}
        <strong className="text-stone-100">software engineering skills</strong> or working on{' '}
        <strong className="text-stone-100">freelance projects</strong>, exploring the countryside, diving into gaming,
        and collaborating with the dev community.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1LNb_zPPP4hF3HdgkAdATawBfcFxEfCZQ/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Ayush Gupta, a skilled software developer with a focus on mobile applications. I specialize in creating user-friendly experiences using React Native, JavaScript, Java, and Swift. Beyond my full-time role, I'm an avid freelancer in mobile app development, passionate about technology and gaming. I thrive on seeking growth and delivering exceptional results in this rapidly evolving digital landscape.`,
  aboutItems: [
    {label: 'Location', text: 'India', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Gaming, Travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'Dr. A.P.J. Abdul Kalam Technical University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Aimica Ltd.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'HTML/CSS',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Redux',
        level: 7,
      },
      {
        name: 'Swift',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      // {
      //   name: 'Spanish',
      //   level: 3,
      // },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Aimica',
    description: 'A conversational AI chat bot mobile application. ',
    url: 'https://www.aimica.co.uk/',
    image: porfolioImage1,
  },
  {
    title: 'Meals Around',
    description: 'A Restaurants browsing nearby Application.',
    url: 'https://github.com/ayushgupta-1/Meals_Around',
    image: porfolioImage2,
  },
  {
    title: 'Royals Clothing',
    description: 'An e-commerce website template.',
    url: 'https://github.com/ayushgupta-1/Royals_Clothing',
    image: porfolioImage3,
  },
  {
    title: 'Rooms',
    description: 'A video conferencing application.',
    url: 'https://github.com/ayushgupta-1/Rooms',
    image: porfolioImage4,
  },
  {
    title: 'Superchat',
    description: 'A chat Application',
    url: 'https://github.com/ayushgupta-1/Superchat',
    image: porfolioImage5,
  },
  {
    title: 'BMI Calculator',
    description: 'A Body Mass Index calculator',
    url: 'https://github.com/ayushgupta-1/BMI-calculator',
    image: porfolioImage6,
  },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2022',
    location: 'AKTU',
    title: 'Bachelors in Technology (Computer Science)',
    content: <p>Acquired my development skills during the college days.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - Present',
    location: 'Aimica Ltd UK',
    title: 'Software Developer',
    content: (
      <p>
        I have a proven track record of building mobile applications using React Native from the ground up, showcasing
        my ability to manage projects independently, especially in startup environments. My expertise extends to working
        on Large Language Models integrations, enhancing the reliability of GPT models akin to ChatGPT, and contributing
        to the LangChain framework. Additionally, I have hands-on experience in developing custom native iOS and Android
        modules using Swift, Objective-C, and Java, seamlessly integrating them into React Native applications. I take
        pride in overseeing the entire app development lifecycle, from inception to deployment on app stores, and have
        successfully integrated various AWS services, including Lambda and API Gateway, to augment app functionality and
        performance. My experience may seem like short from numbers but I have grown exponentially working by myself.
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Client (private)',
      text: 'Ayush Gupta excels in React Native mobile development, delivering efficient and polished apps with a keen eye for detail.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Click below links or fill the form to contact me',
  items: [
    {
      type: ContactType.Email,
      text: 'Email',
      href: 'mailto:ayushgupta.au@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayush-gupta-099/',
    },
    {
      type: ContactType.Instagram,
      text: 'Instagram',
      href: 'https://www.instagram.com/ayushgupta.io/',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/ayushgupta-1',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ayushgupta-1'},
  {label: 'Upwork', Icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/~011e3b0b756f8eba6a'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13903835/parzival'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ayush-gupta-099/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ayushgupta.io/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ayushgupta_7'},
];
