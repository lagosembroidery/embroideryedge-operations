<<<<<<< HEAD

        import { useState, useEffect } from 'react' import Dashboard from '../components/Dashboard' import Login from
        '../components/Login' export default function Home() { const [user, setUser] = useState(null) const [loading,
        setLoading] = useState(true) useEffect(() => { const token = localStorage.getItem('token') if (token) { //
        Verify token and get user data fetch('/api/auth/verify', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.json()) .then(data => { if (data.success) { setUser(data.user) } else {
        localStorage.removeItem('token') } setLoading(false) }) .catch(() => { localStorage.removeItem('token')
        setLoading(false) }) } else { setLoading(false) } }, []) if (loading) { return ( <div className="min-h-screen
        flex items-center justify-center bg-gray-50"> <div className="text-center"> <div
        className="animate-spin rounded-full h-32 w-32 border-b-2 border-nigeria-green mx-auto"></div> <p
        className="mt-4 text-xl text-gray-600">Loading EmbroideryEdge Operations...</p> </div>
        </div> ) } return ( <div className="min-h-screen bg-gray-50"> {user ? ( <Dashboard user={user}
        setUser={setUser} /> ) : ( <Login setUser={setUser} /> )} </div> ) }
=======

        import { useState, useEffect } from 'react' import Dashboard from '../components/Dashboard' import Login from
        '../components/Login' export default function Home() { const [user, setUser] = useState(null) const [loading,
        setLoading] = useState(true) useEffect(() => { const token = localStorage.getItem('token') if (token) { //
        Verify token and get user data fetch('/api/auth/verify', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.json()) .then(data => { if (data.success) { setUser(data.user) } else {
        localStorage.removeItem('token') } setLoading(false) }) .catch(() => { localStorage.removeItem('token')
        setLoading(false) }) } else { setLoading(false) } }, []) if (loading) { return ( <div className="min-h-screen
        flex items-center justify-center bg-gray-50"> <div className="text-center"> <div
        className="animate-spin rounded-full h-32 w-32 border-b-2 border-nigeria-green mx-auto"></div> <p
        className="mt-4 text-xl text-gray-600">Loading EmbroideryEdge Operations...</p> </div>
        </div> ) } return ( <div className="min-h-screen bg-gray-50"> {user ? ( <Dashboard user={user}
        setUser={setUser} /> ) : ( <Login setUser={setUser} /> )} </div> ) }
>>>>>>> b1175ce (Fix package.json typo)
      