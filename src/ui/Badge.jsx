const Badge = ({ reference, title }) => {
    return (
      <button
        className="flex  items-center justify-center gap-2 rounded-lg border border-violet-200 bg-gray-50 p-2 text-violet-700 dark:border-2 dark:border-violet-400 dark:bg-transparent dark:text-white lg:cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: reference.current.offsetTop - 180,
          })
        }
      >
        {title}
      </button>
    );
  };
  
  export default Badge;