<<<<<<< HEAD
    import { useState } from 'react' export default function Login({ setUser }) { const [email, setEmail] =
        useState('') const [password, setPassword] = useState('') const [loading, setLoading] = useState(false) const
        [error, setError] = useState('') const handleLogin = async (e) => { e.preventDefault() setLoading(true)
        setError('') try { const response = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type':
        'application/json' }, body: JSON.stringify({ email, password }) }) const data = await response.json() if
        (data.success) { localStorage.setItem('token', data.token) setUser(data.user) } else { setError(data.error ||
        'Login failed') } } catch (error) { setError('Network error. Please try again.') } finally { setLoading(false) }
        } return ( <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6
        lg:px-8"> <div className="max-w-md w-full space-y-8"> <div> <h1 className="text-center
        text-3xl font-bold text-nigeria-green"> EmbroideryEdge Operations </h1> <h2 className="mt-6
        text-center text-2xl font-bold text-gray-900"> Sign in to your account </h2> <p className="mt-2
        text-center text-sm text-gray-600"> Nigerian Embroidery Business Management </p> </div> <form
        className="mt-8 space-y-6" onSubmit={handleLogin}> {error && ( <div className="bg-red-50 border
        border-red-200 rounded p-4"> <p className="text-red-800 text-sm">{error}</p> </div> )}
        <div className="rounded-md shadow-sm -space-y-px"> <div> <input type="email" required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
        placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-nigeria-green
        focus:border-nigeria-green focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) =>
        setEmail(e.target.value)} /> </div> <div> <input type="password" required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
        placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-nigeria-green
        focus:border-nigeria-green focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) =>
        setPassword(e.target.value)} /> </div> </div> <div> <button type="submit"
        disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent
        text-sm font-medium rounded-md text-white bg-nigeria-green hover:bg-nigeria-dark-green focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-nigeria-green disabled:opacity-50" > {loading ? 'Signing in...' :
        'Sign in'} </button> </div> <div className="text-center"> <p className="text-sm
        text-gray-600"> Demo credentials: admin@test.com / password123 </p> </div> </form> {/*
        Pricing Display */} <div className="mt-8 bg-white p-6 rounded-lg shadow"> <h3 className="text-center
        text-lg font-semibold text-gray-900 mb-4"> Nigerian Pricing Plans </h3> <div
        className="space-y-3"> <div className="flex justify-between"> <span>Starter (2 machines, 2
        operators)</span> <span className="font-semibold text-nigeria-green">₦5,000/month</span>
        </div> <div className="flex justify-between"> <span>Growth (5 machines, 3
        operators)</span> <span className="font-semibold text-nigeria-green">₦7,000/month</span>
        </div> <div className="flex justify-between"> <span>Established (8 machines, 5
        operators)</span> <span className="font-semibold text-nigeria-green">₦10,000/month</span>
        </div> </div> </div> </div> </div> ) }
=======
    import { useState } from 'react' export default function Login({ setUser }) { const [email, setEmail] =
        useState('') const [password, setPassword] = useState('') const [loading, setLoading] = useState(false) const
        [error, setError] = useState('') const handleLogin = async (e) => { e.preventDefault() setLoading(true)
        setError('') try { const response = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type':
        'application/json' }, body: JSON.stringify({ email, password }) }) const data = await response.json() if
        (data.success) { localStorage.setItem('token', data.token) setUser(data.user) } else { setError(data.error ||
        'Login failed') } } catch (error) { setError('Network error. Please try again.') } finally { setLoading(false) }
        } return ( <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6
        lg:px-8"> <div className="max-w-md w-full space-y-8"> <div> <h1 className="text-center
        text-3xl font-bold text-nigeria-green"> EmbroideryEdge Operations </h1> <h2 className="mt-6
        text-center text-2xl font-bold text-gray-900"> Sign in to your account </h2> <p className="mt-2
        text-center text-sm text-gray-600"> Nigerian Embroidery Business Management </p> </div> <form
        className="mt-8 space-y-6" onSubmit={handleLogin}> {error && ( <div className="bg-red-50 border
        border-red-200 rounded p-4"> <p className="text-red-800 text-sm">{error}</p> </div> )}
        <div className="rounded-md shadow-sm -space-y-px"> <div> <input type="email" required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
        placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-nigeria-green
        focus:border-nigeria-green focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) =>
        setEmail(e.target.value)} /> </div> <div> <input type="password" required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
        placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-nigeria-green
        focus:border-nigeria-green focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) =>
        setPassword(e.target.value)} /> </div> </div> <div> <button type="submit"
        disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent
        text-sm font-medium rounded-md text-white bg-nigeria-green hover:bg-nigeria-dark-green focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-nigeria-green disabled:opacity-50" > {loading ? 'Signing in...' :
        'Sign in'} </button> </div> <div className="text-center"> <p className="text-sm
        text-gray-600"> Demo credentials: admin@test.com / password123 </p> </div> </form> {/*
        Pricing Display */} <div className="mt-8 bg-white p-6 rounded-lg shadow"> <h3 className="text-center
        text-lg font-semibold text-gray-900 mb-4"> Nigerian Pricing Plans </h3> <div
        className="space-y-3"> <div className="flex justify-between"> <span>Starter (2 machines, 2
        operators)</span> <span className="font-semibold text-nigeria-green">₦5,000/month</span>
        </div> <div className="flex justify-between"> <span>Growth (5 machines, 3
        operators)</span> <span className="font-semibold text-nigeria-green">₦7,000/month</span>
        </div> <div className="flex justify-between"> <span>Established (8 machines, 5
        operators)</span> <span className="font-semibold text-nigeria-green">₦10,000/month</span>
        </div> </div> </div> </div> </div> ) }
>>>>>>> b1175ce (Fix package.json typo)
      