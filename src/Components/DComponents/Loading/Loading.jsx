const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F298B]"></div>
      <p className="text-[14px] text-[#0F298B]">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;

