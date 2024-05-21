'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
           title="Starknet Academy"
           description="Starknet Academy is a one stop place to learn everything about programming in cairo and the starknet ecosystem"
           keywords="Programming, Web3, Crypto, Cairo, Starknet"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
           <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page