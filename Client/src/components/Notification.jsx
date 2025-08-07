import { useNotify } from '../context/NotificationContext';

export default function Notification() {
  const message = useNotify();
  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 rounded-lg bg-success-600/90 px-4 py-3 text-white shadow-lg">
      {message}
    </div>
  );
}
