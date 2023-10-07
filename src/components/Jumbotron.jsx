import heroImage from '../assets/img/hero-image.png'

export function Jumbotron() {
    return <main className='h-full flex justify-center items-center'>
        <div className='flex justify-around w-full'>
            {/* Main title */}
            <div className='flex flex-col justify-center'>
                <h1 className='text-8xl font-extralight'>Lorem x Ipsum</h1>

                {/* Main message */}
                <p className='text-lg mt-8 text-indigo-800'>Quisque laoreet maximus pretium. Mauris vitae posuere odio, id varius eros.</p>
            </div>
            <div className='w-80'>
                <img src={heroImage} alt="A sample hero image" className='w-full' />
            </div>
        </div>
    </main>
}