export default function Button({ buttonText, width }) {
  return (
    <button
      className="px-6 py-2 bg-[#5C4AE4] text-[#FFFFFF] font-bold rounded-md hover:bg-blue-700 transition duration-200 shadow-md
      h-[60px] text-[20px] mt-[5px]"
      style={{ width: `${width}px` }} // ✅ Set width dynamically
    >
      {buttonText}
    </button>
  );
}
