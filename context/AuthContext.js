import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Updated demo users data with Mr. Tsie
  const demoUsers = {
    'teacher@demo.com': { 
      password: 'teach123', 
      role: 'teacher', 
      name: 'Mr. Tsie',  // Changed from Johnson to Tsie
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

  useEffect(() => {
    const storedUser = localStorage.getItem('nextclass-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call with demo data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      
      const user = demoUsers[email];
      if (user && user.password === password) {
        const authUser = {
          email,
          name: user.name,
          role: user.role,
          id: user.id
        };
        setUser(authUser);
        localStorage.setItem('nextclass-user', JSON.stringify(authUser));
        router.push(`/${user.role}`);
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nextclass-user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);