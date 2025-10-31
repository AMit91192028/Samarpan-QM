import List from "../Header/List/List";

export default function Card({ feature, image, lists }) {
  return (
    <div className="w-full sm:w-[380px] h-auto sm:h-[330px] bg-[#f4f4f4] rounded-2xl shadow-md p-6 text-center relative">
      {/* Icon Section */}
      <div className="absolute -top-[50px] sm:-top-[70px] left-1/2 transform -translate-x-1/2">
        <div className="h-[100px] sm:h-[140px] w-[100px] sm:w-[140px] rounded-full bg-[#f4f4f4] shadow-lg flex items-center justify-center border-[5px] border-white">
          <img src={image} alt={feature} className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px]" />
        </div>
      </div>

      {/* Title & List Section */}
      <div className="mt-12">
        <h3 className="text-[20px] sm:text-[25px] font-bold text-[#494949] pr-[10px]">
          {feature}
        </h3>
        <ul className="mt-4 space-y-2">
          {
          lists.map((item, index) => (
            <List key={index} list={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}