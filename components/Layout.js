import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Notification from './Notification';
import Chatbot from './Chatbot';

export default function Layout({ children }) {
  const router = useRouter();
  const isAuthPage = ['/login', '/register'].includes(router.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        {children}
        <Chatbot />
      </main>
      <Notification />
    </div>
  );
}