import { useAuth } from '../../context/AuthContext';
import AuthRoute from '../../components/AuthRoute';
import { FiUsers, FiBook, FiBarChart2, FiInbox } from 'react-icons/fi';

export default function TeacherDashboard() {
  const { user } = useAuth();

  // Sample data - replace with real API calls
  const classes = [
    { name: "Mathematics 101", students: 24, assignments: 5, average: 78 },
    { name: "Advanced Calculus", students: 18, assignments: 3, average: 85 }
  ];

  const pendingTasks = [
    { type: "assignment", title: "Grade Algebra Tests", due: "22025-06-26" },
    { type: "meeting", title: "Department Meeting", due: "2025-06-30" }
  ];

  return (
    <AuthRoute requiredRole="teacher">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Teacher Dashboard</h1>
          
          {/* Welcome Card */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <FiUsers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Welcome, {user?.name}</h2>
                <p className="text-gray-600">Manage your classes and students</p>
              </div>
            </div>
          </div>

          {/* Classes Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {classes.map((cls, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">{cls.name}</h3>
                <div className="flex justify-between mb-2">
                  <span>Students:</span>
                  <span>{cls.students}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Assignments:</span>
                  <span>{cls.assignments}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Average Grade:</span>
                  <span>{cls.average}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      cls.average >= 80 ? 'bg-green-600' :
                      cls.average >= 70 ? 'bg-blue-600' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${cls.average}%` }}
                  ></div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <button className="btn-primary flex-1">
                    Manage Class
                  </button>
                  <button className="btn-secondary flex-1">
                    View Grades
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tasks and Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pending Tasks */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <FiInbox className="mr-2" />
                Pending Tasks
              </h3>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h4 className="font-medium">{task.title}</h4>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{task.type === 'assignment' ? 'Grading Due' : 'Meeting'}</span>
                      <span>{task.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Class Analytics */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <FiBarChart2 className="mr-2" />
                Class Analytics
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-600">Analytics dashboard coming soon</p>
                <button className="btn-primary mt-4">
                  View Detailed Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
}