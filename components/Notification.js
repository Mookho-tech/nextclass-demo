import { useNotification } from '../context/NotificationContext';

export default function Notification() {
  const { notifications = [], removeNotification } = useNotification(); // Default empty array

  if (!notifications.length) return null; // Don't render if no notifications

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg max-w-xs ${
            notification.type === 'error' ? 'bg-red-100 text-red-800' :
            notification.type === 'success' ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}
        >
          <div className="flex justify-between">
            <p>{notification.message}</p>
            <button 
              onClick={() => removeNotification(notification.id)}
              className="ml-4 text-gray-500 hover:text-gray-700"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}