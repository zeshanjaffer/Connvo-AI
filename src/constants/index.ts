// Modes data
export const MODES = [
  {
    icon: 'FiPhoneCall',
    title: 'Cold Call Practice',
    description: 'Simulate real-world cold calls and get instant feedback to boost your confidence.'
  },
  {
    icon: 'FiUserCheck',
    title: 'Interview Prep',
    description: 'Practice common and tough interview questions with an AI interviewer.'
  },
  {
    icon: 'FiMessageCircle',
    title: 'Small Talk',
    description: 'Improve your conversational skills for networking, events, and daily life.'
  }
];

// Pricing tiers data
export const PRICING_TIERS = [
  {
    name: 'Starter Pass',
    price: 'Free',
    features: [
      '5 calls per month',
      'Basic feedback',
      'Access to all modes',
      'No login required'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Pro Monthly',
    price: '$9/mo',
    features: [
      'Unlimited calls',
      'Advanced feedback',
      'Priority support',
      'Access to all modes'
    ],
    cta: 'Upgrade',
    highlight: true
  },
  {
    name: 'Growth Monthly',
    price: '$19/mo',
    features: [
      'Unlimited calls',
      'Team analytics',
      'Custom scenarios',
      'Priority support'
    ],
    cta: 'Upgrade',
    highlight: false
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom integrations',
      'Dedicated support',
      'Team onboarding',
      'SLAs & compliance'
    ],
    cta: 'Contact Us',
    highlight: false
  }
];

// FAQs data
export const FAQS = [
  {
    question: 'How does Connvo work?',
    answer: 'Connvo uses AI to simulate real phone conversations. Just call the number, choose a mode, and start practicing!'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No account or login is required. Just call and start practicing instantly.'
  },
  {
    question: 'Is my data private?',
    answer: 'Yes, your calls are not recorded and your privacy is our top priority.'
  }
];
