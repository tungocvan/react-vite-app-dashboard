import { useState } from "react";
import logo from '~/assets/react.svg';

function DropdownMenu({ logout }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='flex flex-col sm:flex-row items-center'>
          <img
            src={logo}
            alt='Profile'
            className='rounded-full w-10 h-10 object-cover mr-4 hover:scale-75'
          />
        </div>
      </div>

      {isOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="origin-top-right absolute right-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
        >
          <div className="py-1 bg-slate-800"> 
            <a href="/users" className="block px-4 py-2 text-sm text-white-700 hover:bg-slate-400">Hồ sơ</a>
            <a href="/settings" className="block px-4 py-2 text-sm text-white-700 hover:bg-slate-400">Cài đặt</a>
            <button onClick={() => logout()} className="block px-4 py-2 text-sm text-white-700 hover:bg-slate-400 hover:w-full hover:text-left">Đăng xuất</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
