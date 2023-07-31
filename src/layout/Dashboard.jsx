import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-sky-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white underline'>Fundamentos</h2>
            </div>
            <div className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard