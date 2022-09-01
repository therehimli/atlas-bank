import React from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'

import { useDispatch, useSelector } from 'react-redux'
import { setToogle } from '../redux/slices/NavbarSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const toogle = useSelector((state) => state.navbar.toogle)

  function MenuFc() {
    dispatch(setToogle(!toogle))
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center">
        <img src={logo} alt="atlas logo" className="w-[60px] h-[60px]" />
        <h1 className="text-4xl ml-5  text-white ">
          Atlas <span className="text-blue-300"> bank</span>
        </h1>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          onClick={() => MenuFc()}
          src={toogle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />

        <div
          className={`${
            toogle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
