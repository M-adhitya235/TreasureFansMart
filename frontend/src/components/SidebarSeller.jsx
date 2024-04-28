import React from 'react'
import { Sidebar } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { HiCurrencyDollar, HiShoppingBag, HiOutlineClipboardList, HiUser } from 'react-icons/hi';

const SidebarSeller = () => {
  const { user } = useSelector((state) => state.auth);

    return (
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
            {user.role === 'admin' && (
            <Sidebar.Item href="#" icon={''}>
                <span className="font-bold text-2xl">ADMIN</span>
              </Sidebar.Item>)}
              <Sidebar.Item href="/products_seller" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiOutlineClipboardList}>
                Pemesanan
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      );
    }

export default SidebarSeller