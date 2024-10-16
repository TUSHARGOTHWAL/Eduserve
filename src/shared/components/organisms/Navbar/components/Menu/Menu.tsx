"use client"

import { Dispatch, SetStateAction, useState } from "react"
import ReactDOM from "react-dom"

import { ArrowBack, MenuBar, X } from "@/shared/components/atoms/icons"
import { carers, courses, forBusinesses, menuItems } from "../../data"
import { Dropdown } from ".."

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

function renderDesktopContent(isMobileHidden: boolean) {
  return menuItems.map((item, index) => (
    <div key={index} className={isMobileHidden ? "hidden lg:block" : "block"}>
      {!item.items ? (
        <span className="mb-2 text-dark-tertiary hover:underline hover:text-brand-green-main cursor-pointer">
          {item.category}
        </span>
      ) : (
        <div className="mt-5 border-t border-t-dark-secondary">
          <h4 className="mt-5 mb-3 text-lg">{item.category}</h4>
          <ul>
            {item.items.map((listItem, index) => (
              <li
                key={index}
                className="mb-2 text-dark-tertiary hover:underline hover:text-brand-green-main cursor-pointer"
              >
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))
}

function renderMobileContent({
  menuItem,
  setMenuItem,
}: {
  menuItem: "Courses" | "Careers" | "For Businesses" | undefined
  setMenuItem: Dispatch<
    SetStateAction<"Courses" | "Careers" | "For Businesses" | undefined>
  >
}) {
  function handleGetDropdownData() {
    if (menuItem === "Courses") {
      return courses
    }
    if (menuItem === "Careers") {
      return carers
    }
    if (menuItem === "For Businesses") {
      return forBusinesses
    }
  }

  return (
    <ul className="block lg:hidden">
      {!menuItem && (
        <div className="px-3">
          {renderDesktopContent(false)}
          <li
            onClick={() => setMenuItem("Courses")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Courses
          </li>
          <li
            onClick={() => setMenuItem("Careers")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            Careers
          </li>
          <li
            onClick={() => setMenuItem("For Businesses")}
            className="mt-5 mb-3 text-lg cursor-pointer"
          >
            For Businesses
          </li>
        </div>
      )}
      {menuItem && (
        <Dropdown
          data={handleGetDropdownData()!}
          type={menuItem}
          resetState={!menuItem}
        />
      )}
    </ul>
  )
}

export const Menu = (props: MenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [menuItem, setMenuItem] = useState<
    "Courses" | "Careers" | "For Businesses" | undefined
  >(undefined)

  function handleToggleMenu(isVisible: boolean) {
    setShowMenu(isVisible)
    setMenuItem(undefined)
  }

  function renderMenu() {
    if (typeof document === "undefined") {
      return null
    }

    return ReactDOM.createPortal(
      <>
        <div
          onClick={() => handleToggleMenu(false)}
          data-is-show={showMenu}
          className="data-[is-show=true]:block data-[is-show=false]:hidden w-screen h-screen z-[1000] fixed inset-0 text-brand-light bg-dark-main/50 backdrop-blur-sm"
        />
        <div
          data-is-show={showMenu}
          className="data-[is-show=true]:block data-[is-show=false]:hidden fixed z-[1000] lg:px-6 py-8 lg:py-16 bg-[#262626] text-brand-light top-0 right-0 w-screen md:w-[430px] lg:w-[330px] h-screen"
        >
          {menuItem && (
            <div
              onClick={() => setMenuItem(undefined)}
              className="absolute left-5 top-5 cursor-pointer"
            >
              <ArrowBack size="24" />
            </div>
          )}
          <div
            onClick={() => handleToggleMenu(false)}
            className="absolute right-5 top-5 cursor-pointer"
          >
            <X size="24" />
          </div>
          {renderDesktopContent(true)}
          {renderMobileContent({ menuItem, setMenuItem })}
        </div>
      </>,
      document.body
    )
  }

  return (
    <div>
      <div onClick={() => handleToggleMenu(true)}>
        <MenuBar color="#FFFFFF" className="cursor-pointer" />
      </div>
      {showMenu && renderMenu()}
    </div>
  )
}
