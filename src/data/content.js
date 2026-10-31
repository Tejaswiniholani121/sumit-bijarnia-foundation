import skinHealthImage from '../assets/images/focus-skin-health.png';
import healthcareImage from '../assets/images/focus-healthcare.png';
import educationImage from '../assets/images/focus-education.png';
import ruralImage from '../assets/images/focus-rural-development.png';
import communityImage from '../assets/images/focus-community-wellbeing.png';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Sumit', to: '/about-sumit' },
  { label: 'Our Initiatives', to: '/initiatives' },
  { label: 'Our Commitment', to: '/commitment' },
  { label: 'Our Promise', to: '/promise' },
  { label: 'Support Us', to: '/support' },
  { label: 'Contact ', to: '/contact' }
];

export const focusAreas = [
  {
    number: '01',
    title: 'Skin Health',
    short: 'Supporting awareness, preventive care and access to appropriate support.',
    body: 'Skin health can be overlooked until discomfort, stigma or access barriers make everyday life harder. We aim to build initiatives that make reliable awareness and appropriate care easier to reach—particularly where access is limited.',
    image: skinHealthImage,
    alt: 'A woman applying skincare at home, representing skin health awareness and everyday care.',
    status: 'Currently in development'
  },
  {
    number: '02',
    title: 'Healthcare',
    short: 'Supporting community health initiatives, awareness and access.',
    body: 'Our healthcare work will focus on preventive health awareness, community-based health initiatives and need-based interventions, developed with appropriate professionals and trusted partners.',
    image: healthcareImage,
    alt: 'A doctor speaking with a woman, representing accessible community healthcare.',
    status: 'Currently in development'
  },
  {
    number: '03',
    title: 'Education',
    short: 'Creating opportunities for learning, awareness and growth.',
    body: 'Our education work will focus on learning resources, awareness-led programmes and initiatives that help people build knowledge, skills and access to opportunities.',
    image: educationImage,
    alt: 'A teacher supporting a school student, representing learning and education.',
    status: 'Currently in development'
  },
  {
    number: '04',
    title: 'Rural Development',
    short: 'Supporting initiatives shaped around local needs and opportunities.',
    body: 'We aim to support rural communities through awareness, education, access and practical opportunities—responding to local needs with dignity and a long-term perspective.',
    image: ruralImage,
    alt: 'A conversation with a farmer in a rural field, representing rural development.',
    status: 'Currently in development'
  },
  {
    number: '05',
    title: 'Community Well-being',
    short: 'Supporting practical, people-first initiatives that strengthen everyday lives.',
    body: 'We remain open to community-led initiatives where thoughtful support can improve quality of life, dignity and everyday well-being.',
    image: communityImage,
    alt: 'A family and community conversation, representing community well-being.',
    status: 'Currently in development'
  }
];

export const principles = [
  ['Care', 'Lead with empathy, dignity and respect.'],
  ['Purpose', 'Choose work that addresses meaningful needs responsibly.'],
  ['Action', 'Turn intention into practical programmes and partnerships.'],
  ['Impact', 'Focus on outcomes that create meaningful, lasting change.']
];

export const skinAreas = [
  ['01', 'Skin-health awareness & education', 'Making everyday skin health, hygiene and preventive care easier to understand.'],
  ['02', 'Preventive care & hygiene awareness', 'Encouraging practical knowledge and healthier everyday habits.'],
  ['03', 'Dermatology support & health camps', 'Exploring opportunities for appropriate professional support and community outreach.'],
  ['04', 'Need-based access to care', 'Looking at responsible ways to improve access where support is limited.']
];

export const promisePillars = [
  {
    number: '01',
    title: 'Transparency',
    intro: 'We believe transparency should be present in everything we do.',
    copy: 'From what we share and how we work to how we use resources and communicate our progress, we aim to keep our work clear, accessible and honest.',
    promises: [
      ['Open information', 'Clearly share who we are, our registrations, objectives, programmes, partnerships and the work we undertake.'],
      ['Proper records', 'Maintain accurate records of contributions, resources and relevant activities in accordance with applicable requirements.'],
      ['Statutory compliance', 'Follow applicable laws, registrations, reporting and compliance requirements.'],
      ['Clear communication', 'Keep donors, partners, team members and the people we serve informed about our work, progress and important developments.'],
      ['Donor documentation', 'Provide appropriate donation receipts and applicable tax documentation.'],
      ['Responsible data handling', 'Handle personal information responsibly and in accordance with our Privacy Policy.'],
      ['Honest reporting', 'Share meaningful information about our progress, challenges and outcomes without overstating our impact.']
    ]
  },
  {
    number: '02',
    title: 'Thoughtful Action',
    intro: 'We will act with purpose.',
    copy: 'We will focus on genuine needs, develop initiatives thoughtfully and work with the right people and partners to ensure our efforts are purposeful, practical and responsible.',
    promises: [
      ['Listen first', 'Listen to real needs and understand the communities we hope to support before deciding where and how to act.'],
      ['Act with purpose', 'Develop initiatives with a clear purpose and a meaningful reason to exist.'],
      ['Use resources wisely', 'Use our time, funds and resources thoughtfully, with care for both immediate needs and long-term value.'],
      ['Dignity & respect', 'Treat the people and communities we work with with dignity, empathy and respect.'],
      ['Work together', 'Collaborate with trusted professionals, organisations and community partners where their knowledge and experience can strengthen our work.'],
      ['Learn & adapt', 'Listen, learn from experience and improve our approach as our work evolves.']
    ]
  },
  {
    number: '03',
    title: 'From Contribution to Impact',
    intro: 'Your support should lead to something meaningful.',
    copy: 'As our work grows, we will share where Foundation resources go, what they support, what we do and what progress they help create.',
    promises: [
      ['Where support goes', 'Share information about the programmes, initiatives and areas supported through Foundation resources.'],
      ['What we do', 'Keep supporters informed about activities undertaken, partnerships developed and communities reached.'],
      ['What changes', 'Share meaningful progress, reach and outcomes wherever they can be responsibly measured.'],
      ['What we learn', 'Be open about what we learn along the way—including what works, what needs improvement and how our approach evolves.']
    ]
  }
];
