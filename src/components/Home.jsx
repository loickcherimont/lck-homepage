import { Jumbotron } from './Jumbotron'
import { NavBar } from './NavBar'

export const Home = () => {
    return <div className='flex flex-col h-full'>
        <NavBar />
        <Jumbotron />
    </div>
}