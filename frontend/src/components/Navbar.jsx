// import React, { Fragment, useState } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { LogOut, reset } from '../features/authSlice';
// import SlideOverCarts from './SlideOverCarts'; // Import komponen SlideOverCarts

// function Navbar() {
//   const navigation = [
//     { name: 'Home', href: '/dashboard', current: false },
//     { name: 'Contact', href: '#', current: false },
//     { name: 'About', href: '#', current: false },
//     { name: 'Admin', href: '/dashboard_admin', current: false },
//   ];
//   const userNavigation = [
//     { name: 'Your Profile', href: '#' },
//     { name: 'Seller', href: '#' },
//     { name: 'Settings', href: '#' },
//     { name: 'Sign out', action: 'logout' },
//   ];

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
//   }

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

//   const handleNavigationAction = (action) => {
//     if (action === 'logout') {
//       dispatch(LogOut());
//       dispatch(reset());
//       navigate('/');
//     }
//   };

//   // State untuk mengendalikan tampilan Slide-over Shopping Carts
//   const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

//   // Fungsi untuk menampilkan atau menyembunyikan Slide-over Shopping Carts saat tombol shopping bag diklik
//   const handleShoppingBagClick = () => {
//     setIsShoppingCartOpen(prevState => !prevState); // Toggle nilai state isShoppingCartOpen
//   };

//   return (
//     <div>
//       <Disclosure as="nav" className="bg-gray-900">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="flex h-16 items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <div className="text-white text-2xl font-bold">Treasure Fans Mart</div>
//                   </div>
//                 </div>

//                 <div className="hidden md:block">
//                   <div className="ml-4 flex items-center md:ml-6">
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           (!user || (user.role !== 'admin' && user.role !== 'admin')) && item.name === 'Admin' ? null : (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className={classNames(
//                                 item.current
//                                   ? 'bg-gray-900 text-white'
//                                   : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                 'rounded-md px-3 py-2 text-sm font-medium'
//                               )}
//                               aria-current={item.current ? 'page' : undefined}
//                             >
//                               {item.name}
//                             </a>
//                           )
//                         ))}
//                       </div>
//                     </div>
                    
//                     {/* Tampilkan ikon keranjang belanja hanya jika pengguna masuk */}
//                     {user && (!user.role || (user.role !== 'admin' && user.role !== 'kurir')) && (
//                       <button
//                         type="button"
//                         className="relative flex max-w-xs items-center rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                         onClick={handleShoppingBagClick} // Panggil fungsi handleShoppingBagClick saat tombol diklik
//                       >
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">View notifications</span>
//                         <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
//                       </button>
//                     )}

//                     {/* Profile dropdown */}
//                     <Menu as="div" className="relative ml-3">
//                       <div>
//                         <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                           <span className="absolute -inset-1.5" />
//                           <span className="sr-only">Open user menu</span>
//                           <UserIcon className="h-8 w-8" aria-hidden="true" />
//                         </Menu.Button>
//                       </div>
//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           {userNavigation.map((item) => (
//                             <Menu.Item key={item.name}>
//                               {({ active }) => (
//                                 <button
//                                   onClick={() => handleNavigationAction(item.action)}
//                                   className={classNames(
//                                     active ? 'bg-gray-100' : '',
//                                     'block px-4 py-2 text-sm text-gray-700 w-full text-left'
//                                   )}
//                                 >
//                                   {item.name}
//                                 </button>
//                               )}
//                             </Menu.Item>
//                           ))}
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </div>
//                 </div>
//                 <div className="-mr-2 flex md:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                     <span                     className="absolute -inset-0.5" />
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className="md:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                 {navigation.map((item) => (
//                   (item.name === 'Admin' && user && user.role === 'admin') ? (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block rounded-md px-3 py-2 text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ) : (
//                     <Fragment key={item.name}></Fragment>
//                   )
//                 ))}
//               </div>
//               <div className="border-t border-gray-700 pb-3 pt-4">
//                 <div className="flex items-center px-5">
//                   <div className="flex-shrink-0">
//                     <UserIcon className="h-10 w-10 rounded-full text-gray-800" />
//                   </div>
//                   <div className="ml-3">
//                     <div className="text-base font-medium leading-none text-white">{user && user.name}</div>
//                     <div className="text-sm font-medium leading-none text-gray-400">{user && user.email}</div>
//                   </div>
//                 </div>
//                 <div className="mt-3 space-y-1 px-2">
//                   {userNavigation.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => handleNavigationAction(item.action)}
//                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white w-full text-left"
//                     >
//                       {item.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>

//       {/* Tampilkan Slide-over Shopping Carts jika state isShoppingCartOpen bernilai true */}
//       {isShoppingCartOpen && <SlideOverCarts onClose={() => setIsShoppingCartOpen(false)} handleShoppingBagClick={handleShoppingBagClick} />}

//     </div>
//   );
// }

// export default Navbar;

import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';
import SlideOverCarts from './SlideOverCarts'; // Import komponen SlideOverCarts
import Logo from "/src/assets/logotfm1.png"; 

function Navbar() {
  const navigation = [
    { name: 'Home', href: '/dashboard', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Admin', href: '/dashboard_admin', current: false },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNavigationAction = (action) => {
    if (action === 'logout') {
      dispatch(LogOut());
      dispatch(reset());
      navigate('/');
    }
  };

  // State untuk mengendalikan tampilan Slide-over Shopping Carts
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  // Fungsi untuk menampilkan atau menyembunyikan Slide-over Shopping Carts saat tombol shopping bag diklik
  const handleShoppingBagClick = () => {
    setIsShoppingCartOpen(prevState => !prevState); // Toggle nilai state isShoppingCartOpen
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                    <img
                    className="h-8 w-auto"
                      src={Logo}
                      alt="Treasure Fans Mart"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        (!user || (user.role !== 'admin' && user.role !== 'admin')) && item.name === 'Admin' ? null : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user && (!user.role || (user.role !== 'admin' && user.role !== 'kurir')) && (
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={handleShoppingBagClick}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )}

                  {/* Profile dropdown */}
                  {user && (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          {/* <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          /> */}
                          <UserIcon className="h-8 w-8" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          {user && (!user.role || (user.role !== 'admin' && user.role !== 'kurir')) && (
                            <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/seller"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Seller
                              </a>
                            )}
                          </Menu.Item>
                          )}
                          <Menu.Item>
                            {({ active }) => (
                              
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => handleNavigationAction('logout')}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  (!user || (user.role !== 'admin' && user.role !== 'admin')) && item.name === 'Admin' ? null : (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                  )
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isShoppingCartOpen && <SlideOverCarts onClose={() => setIsShoppingCartOpen(false)} handleShoppingBagClick={handleShoppingBagClick} />}
    </div>
  )
}

export default Navbar;
