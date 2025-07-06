<<<<<<< HEAD

        import { useState, useEffect } from 'react' export default function Dashboard({ user, setUser }) { const
        [activeTab, setActiveTab] = useState('overview') const [stats, setStats] = useState({ totalJobs: 0, activeJobs:
        0, totalMachines: 0, activeMachines: 0, totalOperators: 0, activeOperators: 0 }) const logout = () => {
        localStorage.removeItem('token') setUser(null) } const tabs = [ { id: 'overview', name: 'Overview', icon: '📊'
        }, { id: 'jobs', name: 'Jobs', icon: '📋' }, { id: 'machines', name: 'Machines', icon: '🏭' }, { id:
        'operators', name: 'Operators', icon: '👥' }, { id: 'reports', name: 'Reports', icon: '📈' }, { id: 'settings',
        name: 'Settings', icon: '⚙️' } ] return ( <div className="min-h-screen bg-gray-50"> {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4
        sm:px-6 lg:px-8"> <div className="flex justify-between items-center py-6"> <div className="flex
        items-center"> <h1 className="text-2xl font-bold text-nigeria-green">EmbroideryEdge
        Operations</h1> <span className="ml-3 px-2 py-1 bg-nigeria-green text-white text-sm rounded">
        {user.plan.toUpperCase()} </span> </div> <div className="flex items-center space-x-4">
        <span className="text-gray-700">{user.businessName}</span> <button onClick={logout}
        className="text-gray-500 hover:text-gray-700" > Logout </button> </div> </div> </div>
        </header> {/* Navigation */} <nav className="bg-white shadow-sm"> <div className="max-w-7xl
        mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex space-x-8"> {tabs.map(tab => ( <button
        key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-1 border-b-2 font-medium text-sm ${
        activeTab === tab.id ? 'border-nigeria-green text-nigeria-green' : 'border-transparent text-gray-500
        hover:text-gray-700' }`} > {tab.icon} {tab.name} </button> ))} </div> </div> </nav>
        {/* Content */} <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> {activeTab === 'overview' && (
        <div className="px-4 py-6 sm:px-0"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Business
        Overview</h2> {/* Stats Grid */} <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow"> <h3 className="text-lg font-semibold
        text-gray-900">Jobs</h3> <p className="text-3xl font-bold
        text-nigeria-green">{stats.activeJobs}</p> <p className="text-gray-600">Active of
        {stats.totalJobs} total</p> </div> <div className="bg-white p-6 rounded-lg shadow"> <h3
        className="text-lg font-semibold text-gray-900">Machines</h3> <p className="text-3xl font-bold
        text-nigeria-green">{stats.activeMachines}</p> <p className="text-gray-600">Active of
        {stats.totalMachines} total</p> </div> <div className="bg-white p-6 rounded-lg shadow"> <h3
        className="text-lg font-semibold text-gray-900">Operators</h3> <p className="text-3xl font-bold
        text-nigeria-green">{stats.activeOperators}</p> <p className="text-gray-600">Working of
        {stats.totalOperators} total</p> </div> </div> {/* Nigerian Pricing Display */} <div
        className="bg-white p-6 rounded-lg shadow mb-6"> <h3 className="text-lg font-semibold text-gray-900
        mb-4">Your Subscription</h3> <div className="flex justify-between items-center"> <div>
        <p className="text-xl font-bold text-nigeria-green"> {user.plan === 'starter' && '₦5,000/month'}
        {user.plan === 'growth' && '₦7,000/month'} {user.plan === 'established' && '₦10,000/month'} </p> <p
        className="text-gray-600"> Machines: {user.planLimits?.machines} | Operators: {user.planLimits?.operators}
        </p> </div> <button className="bg-nigeria-green text-white px-4 py-2 rounded
        hover:bg-nigeria-dark-green"> Upgrade Plan </button> </div> </div> </div> )} {/*
        Other tab content would go here */} {activeTab !== 'overview' && ( <div className="px-4 py-6 sm:px-0">
        <div className="bg-white p-8 rounded-lg shadow text-center"> <h2 className="text-2xl font-bold
        text-gray-900 mb-4"> {tabs.find(t => t.id === activeTab)?.name} Module </h2> <p
        className="text-gray-600"> This section is under development. Advanced features coming soon! </p>
        </div> </div> )} </main> </div> ) }
=======

        import { useState, useEffect } from 'react' export default function Dashboard({ user, setUser }) { const
        [activeTab, setActiveTab] = useState('overview') const [stats, setStats] = useState({ totalJobs: 0, activeJobs:
        0, totalMachines: 0, activeMachines: 0, totalOperators: 0, activeOperators: 0 }) const logout = () => {
        localStorage.removeItem('token') setUser(null) } const tabs = [ { id: 'overview', name: 'Overview', icon: '📊'
        }, { id: 'jobs', name: 'Jobs', icon: '📋' }, { id: 'machines', name: 'Machines', icon: '🏭' }, { id:
        'operators', name: 'Operators', icon: '👥' }, { id: 'reports', name: 'Reports', icon: '📈' }, { id: 'settings',
        name: 'Settings', icon: '⚙️' } ] return ( <div className="min-h-screen bg-gray-50"> {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4
        sm:px-6 lg:px-8"> <div className="flex justify-between items-center py-6"> <div className="flex
        items-center"> <h1 className="text-2xl font-bold text-nigeria-green">EmbroideryEdge
        Operations</h1> <span className="ml-3 px-2 py-1 bg-nigeria-green text-white text-sm rounded">
        {user.plan.toUpperCase()} </span> </div> <div className="flex items-center space-x-4">
        <span className="text-gray-700">{user.businessName}</span> <button onClick={logout}
        className="text-gray-500 hover:text-gray-700" > Logout </button> </div> </div> </div>
        </header> {/* Navigation */} <nav className="bg-white shadow-sm"> <div className="max-w-7xl
        mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex space-x-8"> {tabs.map(tab => ( <button
        key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-1 border-b-2 font-medium text-sm ${
        activeTab === tab.id ? 'border-nigeria-green text-nigeria-green' : 'border-transparent text-gray-500
        hover:text-gray-700' }`} > {tab.icon} {tab.name} </button> ))} </div> </div> </nav>
        {/* Content */} <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> {activeTab === 'overview' && (
        <div className="px-4 py-6 sm:px-0"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Business
        Overview</h2> {/* Stats Grid */} <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow"> <h3 className="text-lg font-semibold
        text-gray-900">Jobs</h3> <p className="text-3xl font-bold
        text-nigeria-green">{stats.activeJobs}</p> <p className="text-gray-600">Active of
        {stats.totalJobs} total</p> </div> <div className="bg-white p-6 rounded-lg shadow"> <h3
        className="text-lg font-semibold text-gray-900">Machines</h3> <p className="text-3xl font-bold
        text-nigeria-green">{stats.activeMachines}</p> <p className="text-gray-600">Active of
        {stats.totalMachines} total</p> </div> <div className="bg-white p-6 rounded-lg shadow"> <h3
        className="text-lg font-semibold text-gray-900">Operators</h3> <p className="text-3xl font-bold
        text-nigeria-green">{stats.activeOperators}</p> <p className="text-gray-600">Working of
        {stats.totalOperators} total</p> </div> </div> {/* Nigerian Pricing Display */} <div
        className="bg-white p-6 rounded-lg shadow mb-6"> <h3 className="text-lg font-semibold text-gray-900
        mb-4">Your Subscription</h3> <div className="flex justify-between items-center"> <div>
        <p className="text-xl font-bold text-nigeria-green"> {user.plan === 'starter' && '₦5,000/month'}
        {user.plan === 'growth' && '₦7,000/month'} {user.plan === 'established' && '₦10,000/month'} </p> <p
        className="text-gray-600"> Machines: {user.planLimits?.machines} | Operators: {user.planLimits?.operators}
        </p> </div> <button className="bg-nigeria-green text-white px-4 py-2 rounded
        hover:bg-nigeria-dark-green"> Upgrade Plan </button> </div> </div> </div> )} {/*
        Other tab content would go here */} {activeTab !== 'overview' && ( <div className="px-4 py-6 sm:px-0">
        <div className="bg-white p-8 rounded-lg shadow text-center"> <h2 className="text-2xl font-bold
        text-gray-900 mb-4"> {tabs.find(t => t.id === activeTab)?.name} Module </h2> <p
        className="text-gray-600"> This section is under development. Advanced features coming soon! </p>
        </div> </div> )} </main> </div> ) }
>>>>>>> b1175ce (Fix package.json typo)
      