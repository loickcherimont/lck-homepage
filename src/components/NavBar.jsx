import { Link } from 'react-router-dom'

export const NavBar = () => {
    return <div className='flex'>
        {/* Logo */}
        <div className='text-3xl font-bold w-1/4'>
            <h1 className='text-center'>
                <a href='#'>LOGO</a>
            </h1>
        </div>

        {/* Menu */}
        <ul className='flex justify-around items-center w-3/4'>
            {/* {items.map((item, index) => <li key={index} className='text-center text-slate-800 w-32'> */}
            {/* <a href='#' className='block px-4 py-2 transition duration-150 ease-in-out rounded-full hover:font-bold hover:text-white hover:bg-indigo-800 text-base'>{item}</a> */}
            <li className='text-center text-slate-800 w-32'>
                <Link to='/'>Home</Link>
            </li>
            <li className='text-center text-slate-800 w-32'>
                <Link to='/blog'>Blog</Link>
            </li>
            <li className='text-center text-slate-800 w-32'>
                <Link to='/gallery'>Gallery</Link>
            </li>
            <li className='text-center text-slate-800 w-32'>
                <Link to='/contactus'>Contact Us</Link>
            </li>

            {/* </li>)} */}
        </ul>
    </div>
}