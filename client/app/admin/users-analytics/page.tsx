'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import Heading from '../../utils/Heading';
import DashboardHeader from '../../components/Admin/DashboardHeader';
import UserAnalytics from '../../../app/components/Admin/Analytics/UserAnalytics';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
          title="Starknet Academy"
          description="Starknet Academy is a one stop place to learn everything about programming in cairo and the starknet ecosystem"
          keywords="Programming, Web3, Crypto, Cairo, Starknet"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <UserAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page