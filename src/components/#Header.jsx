// 2023-09-30 : to use links to different routes and implement navigation around the app
import { Link } from 'react-router-dom'

export function Header() {

    // const items = ['Home', 'Blog', 'Gallery', 'Contact Us']

    return <header className='flex justify-around font-sans h-12 mt-2'>
        {/* Logo */}
        <div className='text-3xl font-bold'>
            <h1>
                <a href='#'>LOGO</a>
            </h1>
        </div>

        {/* Menu */}
        <ul className='flex justify-around w-[35rem]'>
            {/* {items.map((item, index) => <li key={index} className='text-center text-slate-800 w-32'> */}
            {/* <a href='#' className='block px-4 py-2 transition duration-150 ease-in-out rounded-full hover:font-bold hover:text-white hover:bg-indigo-800 text-base'>{item}</a> */}
            <li className='text-center text-slate-800 w-32'>
                {/* <Link to='/'>Home</Link> */}
                Home
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
    </header>
}