// components/IconBox.js
import { FiBook, FiUsers, FiBarChart2, FiMessageSquare, FiCalendar, FiAward, FiBell, FiHelpCircle } from 'react-icons/fi';

const iconComponents = {
  book: FiBook,
  users: FiUsers,
  chart: FiBarChart2,
  message: FiMessageSquare,
  calendar: FiCalendar,
  award: FiAward,
  bell: FiBell,
  help: FiHelpCircle
};

export default function IconBox({ icon, color = 'blue', children }) {
  const Icon = iconComponents[icon] || FiHelpCircle;
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className={`p-3 rounded-lg ${colorClasses[color]} flex items-center`}>
      <Icon className="w-6 h-6 mr-3" />
      <div>{children}</div>
    </div>
  );
}