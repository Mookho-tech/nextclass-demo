import { useAuth } from '../context/AuthContext';
import AuthRoute from '../components/AuthRoute';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <AuthRoute>
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold p-4">Welcome, {user?.name}</h1>
        <div className="p-4">
          <p>You are logged in as a {user?.role}</p>
        </div>
      </div>
    </AuthRoute>
  );
}