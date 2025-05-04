'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import logo from '@/assets/logo.png';
import { MenuIcon, ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import SearchBar from '../Search/SearchBar';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalQuantity = cart.length;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  return (
    <div>
      {/* top bar */}
      <div className="flex justify-between bg-blue-900 px-5 py-2.5 text-sm text-white">
        <div>Free Shipping on Orders Over $50!</div>
        <div className="hidden gap-3 lg:flex">
          {session?.user?.role === 'admin' && (
            <Link href="/admin">Admin Dashboard</Link>
          )}
          <Link href="/profile">Profile</Link>
          {session?.user?.role === 'user' && (
            <Link href="/orders">Track Order</Link>
          )}

          {session ? (
            <button
              onClick={() => signOut()}
              className="cursor-pointer rounded bg-red-600 px-5 text-white"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>

      {/* main navbar */}
      <div className="flex items-center justify-between border border-[#ddd] bg-white px-5 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image height={300} width={300} src={logo} alt="Logo" />
          </Link>
        </div>

        <button className="block text-xl lg:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </button>

        {/* searchBar */}
        <div className="hidden w-[40%] lg:block">
          <SearchBar />
        </div>

        <Link href="/cart">
          <div className="relative hidden items-center gap-3 lg:flex">
            <ShoppingBag />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* nav Links */}
      <nav className="hidden justify-center bg-blue-900 text-white lg:flex">
        <ul className="flex justify-center gap-5 py-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          {/* <li>
            <Link href="/">Deals</Link>
          </li> */}
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* mbl Menu */}
      <div
        className={`bg-opacity-50 fixed inset-0 z-50 transition-transform lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute right-0 h-full w-64 transform bg-white p-5 text-blue-900 transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-3/4'
          }`}
        >
          <button onClick={toggleMenu} className="mb-5 text-xl">
            <X />
          </button>

          {/* mbl search */}
          <div className="mb-4">
            <SearchBar />
          </div>

          <ul className="space-y-3">
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            {/* <li>
              <Link href="/">Deals</Link>
            </li> */}
            <li>
              <Link href="/about">About</Link>
            </li>
            {session?.user?.role === 'admin' && (
              <li>
                <Link href="/admin">Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/cart">Cart ({totalQuantity})</Link>
            </li>
            <li>
              <Link href="/orders">Track Order</Link>
            </li>
            <li>
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="rounded bg-red-600 px-5 text-white"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
