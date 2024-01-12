import { useState, useEffect } from "react";
import SidebarTab from "./SidebarTab";
import { BiSolidLeftArrow } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);
  const [rotate, setRotate] = useState(false);
  const { logout } = useLogout();
  const [use, setUser] = useState({});

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function toggleSidebar() {
    setRotate((prev) => !prev);
    if (hide) {
      setHide(false);
      await timeout(10);
      setOpen(true);
    } else {
      setOpen(false);
      await timeout(500);
      setHide(true);
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem("use");
    if (storedData && storedData === process.env.REACT_APP_VAL) {
      setUser((prevUser) => ({ ...prevUser, isBoard: true }));
    }
  }, []);
  return (
    <>
      <button
        className="right-10 top-8 w-10 bg-blue-400 h-10 z-30 fixed rounded-full "
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <BiSolidLeftArrow
          className={`absolute duration-300 ${
            rotate
              ? "rotate-180 top-[30%] left-[30%]"
              : "left-[26%] top-[31%] rotate-0"
          }`}
        />
      </button>
      <div
        className={`${
          hide ? "hidden" : "block"
        }  z-20 w-full h-screen bg-black ${
          open ? "bg-opacity-40" : "delay-200 bg-opacity-0"
        } duration-200 fixed`}
      >
        <div
          className={`duration-300 flex h-screen fixed right-0 ${
            open ? "w-[25%] " : "w-0"
          } bg-white py-[80px]`}
        >
          <div
            className={`flex flex-col duration-100 w-full gap-4 ${
              open ? "delay-300 opacity-100" : "opacity-0"
            } z-20 left-8 mx-12 text-black`}
          >
            <SidebarTab text="Home" path="/" onClick={toggleSidebar} />
            <SidebarTab text="About" path="/about" onClick={toggleSidebar} />
            <SidebarTab text="Join" path="/join" onClick={toggleSidebar} />
            <SidebarTab text="Purchase" path="/purchase" onClick={toggleSidebar} />
            {!use.isBoard ? (
              <SidebarTab text="Login" path="/login" onClick={toggleSidebar} />
            ) : (
              <div className="w-full ">
                <h1 className=" font-productsans text-xl uppercase">
                  Internal
                </h1>

                <div className="flex flex-col ml-[20px] gap-4 py-4">
                  {use.isBoard && (
                    <SidebarTab
                      text="Dashboard"
                      path="/dashboard"
                      onClick={toggleSidebar}
                    />
                  )}

                  <SidebarTab
                    text="Account"
                    path="/account"
                    onClick={toggleSidebar}
                  />
                </div>
                <button
                  className="bg-blue-400 px-4 py-2 font-productsans text-white text-md rounded w-fit"
                  id="but"
                  onClick={() => {
                    logout();
                    toggleSidebar();
                  }}
                >
                  
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
