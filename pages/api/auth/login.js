export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Demo users database (replace with real database in production)
  const demoUsers = {
    'teacher@demo.com': { 
      password: 'teach123', 
      role: 'teacher', 
      name: 'Mr. Johnson',
      id: 't1'
    },
    'student@demo.com': { 
      password: 'study123', 
      role: 'student', 
      name: 'Mookho Makutsoane',
      id: 's1'
    },
    'parent@demo.com': { 
      password: 'parent123', 
      role: 'parent', 
      name: 'Mrs. Makutsoane',
      id: 'p1'
    }
  };

  try {
    // Simulate database lookup delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const user = demoUsers[email];
    
    if (user && user.password === password) {
      return res.status(200).json({ 
        user: {
          email,
          name: user.name,
          role: user.role,
          id: user.id
        }
      });
    } else {
      return res.status(401).json({ 
        message: 'Invalid email or password' 
      });
    }
  } catch (error) {
    return res.status(500).json({ 
      message: 'An error occurred during login.' 
    });
  }
}