import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push(`/${user.role}`);
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">NextClass</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          The modern platform for academic excellence and collaboration
        </p>
        <div className="space-x-4">
          <Link href="/login" className="btn-primary">
            Sign In
          </Link>
          <Link href="/register" className="btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}