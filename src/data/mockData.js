export const accounts = [
  {
    id: 1,
    type: 'current',
    name: 'Current Account',
    balance: 950.00,
    accountNumber: '****4652',
    sortCode: '12-34-56',
    color: '#FFB800',
    icon: '💳'
  },
  {
    id: 2,
    type: 'savings',
    name: 'Savings account',
    balance: 18250.00,
    accountNumber: '****7891',
    sortCode: '12-34-56',
    color: '#8B7BFF',
    icon: '💰'
  },
  {
    id: 3,
    type: 'pension',
    name: 'Pension',
    balance: 48750.00,
    accountNumber: 'Your Pension and Investments',
    color: '#2A2A2A',
    icon: '🏦'
  }
];

export const transactions = [
  { id: 1, type: 'Withdrawal', amount: -250.00, date: '28 Oct 2025, 17:31', account: 'current' },
  { id: 2, type: 'Top up', amount: 300.00, date: '15 Oct 2025, 19:18', account: 'current' },
  { id: 3, type: 'Withdrawal', amount: -80.00, date: '12 Oct 2025, 15:45', account: 'current' },
  { id: 4, type: 'Top up', amount: 300.00, date: '11 Oct 2025, 19:18', account: 'current' },
  { id: 5, type: 'Withdrawal', amount: -80.00, date: '10 Oct 2025, 15:45', account: 'savings' },
  { id: 6, type: 'Transfer', amount: -50.00, date: '09 Oct 2025, 23:01', account: 'savings' },
  { id: 7, type: 'Top up', amount: 300.00, date: '08 Oct 2025, 19:18', account: 'pension' },
];

export const promotions = [
  { 
    id: 1, 
    title: 'Boost Your Retirement Savings by 15%', 
    badge: 'Limited offer',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
  },
  { 
    id: 2, 
    title: 'Limited Time Offer on Corporate Bonds', 
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  }
];

export const learningResources = [
  {
    id: 1,
    title: '5 Questions to Ask Before Accessing Your Pension Early',
    readTime: '5 minute read',
    date: '30 Oct 2025',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'The Secret to Growing Your Retirement Fund',
    readTime: '8 minute read',
    date: '28 Oct 2025',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop'
  }
];

export const quickActions = [
  { id: 1, name: 'Transfer', icon: '↗️' },
  { id: 2, name: 'Request', icon: '↙️' },
  { id: 3, name: 'Exchange', icon: '🔄' },
  { id: 4, name: 'Top up', icon: '⬆️' },
  { id: 5, name: 'Withdraw', icon: '⬇️' },
];


