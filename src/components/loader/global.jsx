const GlobalLoader = ({ size = 20 }) => {
  return (
    <div
      class={`flex justify-center items-center border-gray-300 h-${size} w-${size} animate-spin rounded-full border-4 border-t-main_color`}
    />
  );
};

export default GlobalLoader;
