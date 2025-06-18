import { useAuth } from '../../context/AuthContext';
import AuthRoute from '../../components/AuthRoute';
import { FiUser, FiBook, FiAward, FiCalendar } from 'react-icons/fi';

export default function ParentDashboard() {
  const { user } = useAuth();

  // Sample data - replace with real data from your API
  const children = [
    { name: "Mookho Makutsoane", grade: "Grade 12", attendance: "92%", performance: "79%" },
    { name: "Lerato Makutsoane", grade: "Grade 10", attendance: "88%", performance: "96%" }
  ];

  const upcomingEvents = [
    { title: "Parent-Teacher Meeting", date: "2025-06-15" },
    { title: "School Concert", date: "2025-06-20" }
  ];

  return (
    <AuthRoute requiredRole="parent">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Parent Dashboard</h1>
          
          {/* Welcome Card */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <FiUser className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Welcome, {user?.name}</h2>
                <p className="text-gray-600">View your children's progress and school updates</p>
              </div>
            </div>
          </div>

          {/* Children Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {children.map((child, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">{child.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grade:</span>
                    <span>{child.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attendance:</span>
                    <span>{child.attendance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Performance:</span>
                    <span>{child.performance}</span>
                  </div>
                  <button className="btn-primary mt-4 w-full">
                    View Full Report
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <FiCalendar className="mr-2" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-b pb-3 last:border-0">
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
}