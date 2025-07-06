export default async function handler(req, res) {
  if (req.method === 'GET') {
    const plans = [
      {
        id: 'starter',
        name: 'Starter',
        price: 5000,
        currency: 'NGN',
        interval: 'monthly',
        features: {
          machines: 2,
          operators: 2,
          reports: 'basic',
          support: 'email',
        },
      },
      {
        id: 'growth',
        name: 'Growth',
        price: 7000,
        currency: 'NGN',
        interval: 'monthly',
        features: {
          machines: 5,
          operators: 3,
          reports: 'advanced',
          support: 'email + phone',
        },
      },
      {
        id: 'established',
        name: 'Established',
        price: 10000,
        currency: 'NGN',
        interval: 'monthly',
        features: {
          machines: 8,
          operators: 5,
          reports: 'premium',
          support: 'priority',
        },
      },
    ];
    res.status(200).json({ success: true, plans });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
