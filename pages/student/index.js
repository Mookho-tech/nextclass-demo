import { useAuth } from '../../context/AuthContext';
import AuthRoute from '../../components/AuthRoute';
import { FiBook, FiAward, FiCalendar, FiClock } from 'react-icons/fi';

export default function StudentDashboard() {
  const { user } = useAuth();

  // Sample data - replace with real API calls
  const courses = [
    { name: "Mathematics", teacher: "Mr. Tsie", grade: "79%", assignments: 3 },
    { name: "Science", teacher: "Ms. Sam", grade: "90%", assignments: 2 },
    { name: "English", teacher: "Mr. Baatjies", grade: "82%", assignments: 1 }
  ];

  const upcomingAssignments = [
    { course: "Mathematics", title: "Algebra Test", due: "2025-06-26" },
    { course: "Science", title: "Lab Report", due: "2025-06-22" }
  ];

  return (
    <AuthRoute requiredRole="student">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Student Dashboard</h1>
          
          {/* Welcome Card */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <FiBook className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Welcome, {user?.name}</h2>
                <p className="text-gray-600">Track your courses and assignments</p>
              </div>
            </div>
          </div>

          {/* Courses Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.teacher}</p>
                <div className="flex justify-between mb-2">
                  <span>Current Grade:</span>
                  <span className="font-medium">{course.grade}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Pending Assignments:</span>
                  <span>{course.assignments}</span>
                </div>
                <button className="btn-primary w-full">
                  View Course
                </button>
              </div>
            ))}
          </div>

          {/* Assignments and Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming Assignments */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <FiClock className="mr-2" />
                Upcoming Assignments
              </h3>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h4 className="font-medium">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">{assignment.course}</p>
                    <p className="text-sm text-gray-600">Due: {assignment.due}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* School Calendar */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <FiCalendar className="mr-2" />
                School Calendar
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-600">Calendar integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
}