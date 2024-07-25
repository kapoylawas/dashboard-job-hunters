"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import {
  MdOutlineDisplaySettings,
  MdOutlineDocumentScanner,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TiMessageTyping } from "react-icons/ti";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();

  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "Job Listings") {
      router.push("/job-listings");
    } else if (buttonName === "Home") {
      router.push("/");
    } else if (buttonName === "Settings") {
      router.push("/settings");
    }
  };

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-3 py-3">
        <div className="px-3 py-2">
          <h2 className="mb-1 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className={`w-full justify-start rounded-none hover:text-primary ${
                activeButton === "Home" ? "bg-blue-100 text-primary" : ""
              }`}
              onClick={() => handleButtonClick("Home")}
            >
              <IoHomeOutline className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <TiMessageTyping className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineBuildingOffice className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaUsersViewfinder className="mr-2 text-lg" />
              All Aplplications
            </Button>
            <Button
              variant={"ghost"}
              className={`w-full justify-start rounded-none hover:text-primary ${
                activeButton === "Job Listings"
                  ? "bg-blue-100 text-primary rounded-none"
                  : ""
              }`}
              onClick={() => handleButtonClick("Job Listings")}
            >
              <MdOutlineDocumentScanner className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <SlCalender className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-3 py-3">
          <div className="px-3 py-2">
            <h2 className="mb-1 px-4 text-lg font-semibold">Settings</h2>
            <Button
              variant={"ghost"}
              className={`w-full justify-start rounded-none hover:text-primary ${
                activeButton === "Settings" ? "bg-blue-100 text-primary" : ""
              }`}
              onClick={() => handleButtonClick("Settings")}
            >
              <MdOutlineDisplaySettings className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none text-red-500 hover:bg-red-200 hover:text-red-500"
              onClick={() => signOut()}
            >
              <IoLogOutOutline className="mr-2 text-lg" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
