"use client";
import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { AiOutlineSchedule } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import Link from "next/link";

const BottomBar = () => {
  const [isActive, setIsActive] = useState("#home");

  return (
    <nav className="w-full flex items-center justify-center p-10">
      <div className="spatial px-5 py-5 flex items-center justify-center gap-10 rounded-full text-2xl">
        <a
          href="#hero"
          onClick={() => setIsActive("#hero")}
          className={isActive === "#hero" ? "active" : ""}
        >
          <CiHome />
        </a>
        <AiOutlineSchedule />
        <CiSettings />
        <CiUser />
        <FiActivity />
      </div>
    </nav>
  );
};

export default BottomBar;
