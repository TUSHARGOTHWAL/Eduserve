"use client"

import { Dispatch, SetStateAction, useState } from "react"
import ReactDOM from "react-dom"

// Import icons and data
import { ArrowBack, MenuBar, X } from "@/shared/components/atoms/icons"
import { carers, courses, forBusinesses, menuItems } from "../../data"
import { Dropdown } from ".."

// Define the props for the Menu component
interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

// Function to render the desktop menu content
function renderDesktopContent(mobileHidden: boolean) {
  return menuItems.map((item, index) => (
    <div key={index} className={mobileHidden ? "hidden lg:block" : "block"}>
      {!item.items ? (
        <span className="mb-2 text-dark-tertiary hover:underline hover:text-brand-green-main cursor-pointer">
          {item.category} {/* Display the category */}
        </span>
      ) : (
        <div className="mt-5 border-t border-t-dark-secondary">
          <h4 className="mt-5 mb-3 text-lg">{item.category}</h4> {/* Category title */}
          <ul>
            {item.items.map((listItem, index) => (
              <li
                key={index}
                className="mb-2 text-dark-tertiary hover:underline hover:text-brand-green-main cursor-pointer"
              >
                {listItem} {/* Display the list item */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ));
}

// Function to render the mobile menu content
function renderMobileContent({
  menuItem,
  setMenuItem,
}: {
  menuItem: "Courses" | "Careers" | "For Companies" | undefined
  setMenuItem: Dispatch<SetStateAction<"Courses" | "Careers" | "For Companies" | undefined>>
}) {
  // Function to handle sending data to the dropdown based on the selected menu item
  function handleSendDataToDropdown() {
    if (menuItem === "Courses") {
      return courses; // Return courses data
    }
    if (menuItem === "Careers") {
      return carers; // Return careers data
    }
    if (menuItem === "For Companies") {
      return forBusinesses; // Return data for companies
    }
  }

  return (
    <ul className="block lg:hidden">
      {!menuItem && (
        <div className="px-3">
          {renderDesktopContent(false)} {/* Render desktop content for mobile view */}
          <li
            onClick={() => setMenuItem("Courses")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Courses {/* Courses menu item */}
          </li>
          <li
            onClick={() => setMenuItem("Careers")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Careers {/* Careers menu item */}
          </li>
          <li
            onClick={() => setMenuItem("For Companies")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            For Companies {/* For companies menu item */}
          </li>
        </div>
      )}
      {menuItem && (
        <Dropdown
          data={handleSendDataToDropdown()!} // Send data to the dropdown
          type={menuItem} // Type of dropdown based on menu item
          resetState={!menuItem} // Reset state when no menu item is selected
        />
      )}
    </ul>
  );
}

// Main Menu component
export const Menu = (props: MenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false); // State for menu visibility
  const [menuItem, setMenuItem] = useState<"Courses" | "Careers" | "For Companies" | undefined>(undefined); // State for selected menu item

  // Function to handle showing or hiding the menu
  function handleShowMenu(isShow: boolean) {
    setShowMenu(isShow);
    setMenuItem(undefined); // Reset menu item when showing/hiding
  }

  // Function to render the menu
  function renderMenu() {
    if (typeof document === "undefined") {
      return null; // Return null if document is undefined
    }

    return ReactDOM.createPortal(
      <>
        <div
          onClick={() => handleShowMenu(false)} // Close menu when clicking backdrop
          data-is-show={showMenu}
          className="data-[is-show=true]:block data-[is-show=false]:hidden w-screen h-screen z-[1000] fixed inset-0 text-brand-light bg-dark-main/50 backdrop-blur-sm"
        />
        <div
          data-is-show={showMenu}
          className="data-[is-show=true]:block data-[is-show=false]:hidden fixed z-[1000] lg:px-6 py-8 lg:py-16 bg-[#262626] text-brand-light top-0 right-0 w-screen md:w-[430px] lg:w-[330px] h-screen"
        >
          {menuItem && (
            <div
              onClick={() => setMenuItem(undefined)} // Go back to main menu
              className="absolute left-5 top-5 cursor-pointer"
            >
              <ArrowBack size="24" />
            </div>
          )}
          <div
            onClick={() => handleShowMenu(false)} // Close menu when clicking close icon
            className="absolute right-5 top-5 cursor-pointer"
          >
            <X size="24" />
          </div>
          {renderDesktopContent(true)} {/* Render desktop content */}
          {renderMobileContent({ menuItem, setMenuItem })} {/* Render mobile content */}
        </div>
      </>,
      document.body // Render menu as a portal in the body
    );
  }

  return (
    <div>
      <div onClick={() => handleShowMenu(true)}> {/* Open menu when clicked */}
        <MenuBar color="#FFFFFF" className="cursor-pointer" />
      </div>
      {showMenu && renderMenu()} {/* Render menu if it is visible */}
    </div>
  );
}
