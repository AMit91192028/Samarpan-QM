import {Link} from 'react-router-dom'

export default function QueueEzy() {
    return (
        
        <div className="w-full bg-[#FAFAFA]">
            <div className="flex flex-col justify-center items-center pt-[60px]">
                <div className="border-[2px] border-[#000] border-solid w-[150px]"></div>
                <h1 className="text-[35px] text-[#000000] font-Poppins font-sans font-bold mt-[20px]">Simplify Queue Management for Every Sector!</h1>
            </div>
            <div className="flex gap-[25px] justify-center text-[16px] text-[#7F7F7F] mt-[50px]">
                <div className="flex flex-col text-[20px] text-[#020202] font-bold justify-center items-center">
                    <Link to='/retail'>
                    <img src="/ALL-IMAGES/retail.png" alt="retail" className="cursor-pointer"/>
                    <h1 className="mt-[10px] text-center">Retail</h1>
                    </Link>
                </div>
                <div className="flex flex-col text-[20px] text-[#020202] font-bold justify-center items-center">
                    <Link to="/healthcare">
                    <img src="/ALL-IMAGES/healthcare_img.png" alt="healthcare" className="cursor-pointer"/>
                    <h1 className="mt-[10px] text-center">Healthcare</h1>
                    </Link>
                </div>
                <div className="flex flex-col text-[20px] text-[#020202] font-bold justify-center items-center">
                    <Link to ="/banking">
                    <img src="/ALL-IMAGES/banking_img.png" alt="banking" className="cursor-pointer"/>
                    <h1 className="mt-[10px] text-center">Banking</h1>
                    </Link>
                </div>
                <div className="flex flex-col text-[20px] text-[#020202] font-bold justify-center items-center">
                    <img src="/ALL-IMAGES/public.png" alt="public" className="cursor-pointer"/>
                    <h1 className="mt-[10px] text-center">Public</h1>
                </div>
            </div>
        </div>
    )
}




