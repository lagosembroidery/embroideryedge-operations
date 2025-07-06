import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // This part is a placeholder for a real verify endpoint
      // For now, we'll assume the token is valid if it exists
      // In a real app, you'd fetch('/api/auth/verify')
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-nigeria-green mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading EmbroideryEdge Operations...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  )
}
