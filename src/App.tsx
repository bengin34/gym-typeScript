import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/ourClasses"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import Hotjar from '@hotjar/browser';

import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
/**
* @description The `App` function is a React component that sets up the Hotjar
* tracking library and manages the selected page and scroll position.
* 
* @returns {  } The `App` function returns a JSX element with a ` Navbar`, `Home`,
* `Benefits`, `OurClasses`, and `ContactUs` components wrapped inside a `div` with
* the class `bg-gray-20`. The selected page is initialized to `SelectedPage.Home`
* and can be changed using the `setSelectedPage` function.
*/
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const siteId = 3827076;
  const hotjarVersion = 6;

/**
* @description This function initiates Hotjar tracking and sets up an event listener
* to listen for scroll events on the page. When the user scrolls down the page. the
* event listener sets the `isTopOfPage` state to `false` and selects the "Home" page.
* When the user scrolls back to the top of the page.
* 
* @returns {  } The function returns an object with three properties: `isTopOfPage`,
* `selectedPage`, and a cleanup function that removes the `scroll` event listener.
* 
* The output returned by the function is:
* 
* {
*   isTopOfPage: false | true (dependent on the current scroll position),
*   selectedPage: SelectedPage.Home (if the user is at the top of the page),
*   cleanup: Function (used to remove the scroll event listener)
* }
*/
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
/**
* @description This function listens for changes to the window scroll position and
* updates two state variables based on the scroll position: `isTopOfPage` and `selectedPage`.
*/
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
/**
* @description This function removes the scroll event listener named "handleScroll".
*/
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 ">
      <Navbar
      isTopOfPage= {isTopOfPage}      
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
