import { FaLock, FaUser } from 'react-icons/fa'

export function Login() {
    return (
        <div className='relative w-[750px] h-[450px] bg-transparent border-2 border-solid border-[#0ef] overflow-hidden shadow-box-shadow-sombra '>
            <span className='absolute top-0 right-0 w-[850px] h-[600px] bg-gradient-to-br from-[#081b29] to-[#0ef] border-b-3 border-solid border-[#0ef] transform rotate-[50deg] skew-y-40 transform-origin-bottom-right'></span>
            <span></span>
            <div className='absolute top-0 w-1/2 h-full flex flex-col justify-center left-0 pr-[60px] pl-10 '>
                <h1 className='text-[32px] text-[#fff] text-center '>Login</h1>
                <form action="">
                    <div className='relative w-full h-[50px] margin-[25px] my-[25px]'>
                        <input type="text" id='username' className=' w-full h-full text-[#fff] bg-transparent outline-none border-b-2 border-solid border-b-white' required />
                        <label htmlFor='username' className='absolute top-1/2 left-0 transform -translate-y-1/2 text-[16px] text-[#fff] pointer-events-none' >Username</label>
                        <FaUser className='i absolute top-1/2 right-0 transform -translate-y-1/2 text-[18px] text-white' />
                    </div>
                    <div className='relative w-full h-[50px] margin-[25px] my-[25px]'>
                        <input type="password" id='password' className=' w-full h-full text-[#fff] bg-transparent outline-none border-b-2 border-solid border-b-white ' required />
                        <label htmlFor='password' className='absolute top-1/2 left-0 transform -translate-y-1/2 text-[16px] text-[#fff] pointer-events-none ' >Password</label>
                        <FaLock className='i absolute top-1/2 right-0 transform -translate-y-1/2 text-[18px] text-white' />
                    </div>
                    <button type='submit' className='z-[1] overflow-hidden relative w-full h-[45px] bg-transparent border-2 border-solid border-[#0ef] outline-none rounded-[40px] cursor-pointer text-[16px] text-white font-semibold ' >Login</button>
                    <div className='text-[14.5px] text-white text-center mt-5 mb-[10px] '>
                        <p className=''>Don't have an account? <a href="" className='text-[#0ef] no-underline font-semibold hover:underline '>Sign Up</a></p>
                    </div>
                </form>
            </div>
            <div className='absolute top-0 w-1/2 h-full flex flex-col justify-center right-0 text-right pr-10 pb-[60px] pl-[150px] '>
                <h2 className='text-[36px] text-white leading-[1.5] uppercase'>Welcome Back!</h2>
                <p className='text-[16px] text-white ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis veniam, officiis maiores doloremque esse tempora!</p>
            </div>

            {/* <div className='absolute top-0 w-1/2 h-full flex flex-col justify-center left-0 pr-[60px] pl-10 '>
                <h1 className='text-[32px] text-[#fff] text-center '>Login</h1>
                <form action="">
                    <div className='relative w-full h-[50px] margin-[25px] my-[25px]'>
                        <input type="text" id='username' className=' w-full h-full text-[#fff] bg-transparent outline-none border-b-2 border-solid border-b-white' required />
                        <label htmlFor='username' className='absolute top-1/2 left-0 transform -translate-y-1/2 text-[16px] text-[#fff] pointer-events-none' >Username</label>
                        <FaUser className='i absolute top-1/2 right-0 transform -translate-y-1/2 text-[18px] text-white' />
                    </div>
                    <div className='relative w-full h-[50px] margin-[25px] my-[25px]'>
                        <input type="password" id='password' className=' w-full h-full text-[#fff] bg-transparent outline-none border-b-2 border-solid border-b-white ' required />
                        <label htmlFor='password' className='absolute top-1/2 left-0 transform -translate-y-1/2 text-[16px] text-[#fff] pointer-events-none ' >Password</label>
                        <FaLock className='i absolute top-1/2 right-0 transform -translate-y-1/2 text-[18px] text-white' />
                    </div>
                    <button type='submit' className='z-[1] overflow-hidden relative w-full h-[45px] bg-transparent border-2 border-solid border-[#0ef] outline-none rounded-[40px] cursor-pointer text-[16px] text-white font-semibold ' >Login</button>
                    <div className='text-[14.5px] text-white text-center mt-5 mb-[10px] '>
                        <p className=''>Don't have an account? <a href="" className='text-[#0ef] no-underline font-semibold hover:underline '>Sign Up</a></p>
                    </div>
                </form>
            </div> */}
        </div>
    )
}