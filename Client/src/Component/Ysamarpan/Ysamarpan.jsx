import List from "../Header/List/List"

export default function Ysamarpan() {
    

    return (
        <>
                <div className="flex flex-col items-center justify-center mt-[60px] whySamarpan shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0">
                    <div className="flex pt-[50px] gap-[25px]">
                        <div className="text-[56px] font-bold flex flex-col text-[#000] font-Poppins mt-[60px] mr-[20px]">
                            <h1 className="leading-[30px]">
                            &nbsp;&nbsp;&nbsp;&nbsp;Why
                            </h1>
                            <h1>
                            Samarpan?
                            </h1>
                        </div>
                        <div className="border-[3px] border-[#5c4ae4] h-[250px] w-[0px]"></div>
                        <div className="mt-[23px] flex flex-col gap-[8px] ml-[8px]">
                            <List list="Cut down on long wait times and control crowded areas."/>
                            <List list="Make queuing faster and easier."/>
                            <List list="Handle all parts of your business with our easy solution."/>
                            <List list="Make customers happy with quicker service and smoother flow."/>
                            <List list="Get better results and grow your business with Qwaiting."/>
                        </div>
                    </div>
                </div>
        </>
    )
}
