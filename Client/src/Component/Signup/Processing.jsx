const ProcessingCard = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="w-80 p-6 bg-[#1c2b34] rounded-lg shadow-xl flex flex-col items-center">
          {/* Spinner */}
          <div className="w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-bold text-white mb-2">Processing...</h2>
          <p className="text-gray-300 text-center font-semibold">
            Please wait while we log you in
          </p>
        </div>
      </div>
    );
  };
  
  export default ProcessingCard;
  