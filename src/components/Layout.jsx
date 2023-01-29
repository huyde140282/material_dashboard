import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, ThemeSettings, Footer, Sidebar } from "../components";
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react";

const Layout = (props) => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  {
    /* Get the latest colorMode and themeMode when loading the page for the first time.*/
  }
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* Setting Button  */}
        <div className="fixed right-4 bottom-4" style={{ zIndex: "100000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              className="text-3xl p-3 hover:drop-shadow-xl text-white rounded-full"
              style={{ background: currentColor }}
              onClick={() => {
                setThemeSettings(true);
              }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {/* Sidebar  */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
        )}
        {/* Navbar  */}
        <div
          className={` dark:bg-main-dark-bg navbar bg-red-300 min-h-screen ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
            <Navbar />
          </div>
          {/* Routes  */}

          <main>
            {themeSettings && <ThemeSettings />}
            {props.children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
