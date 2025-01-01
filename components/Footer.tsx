import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import logoImage from "../public/dollar1.png"; // Adjust path as needed

export const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8">
      <div className="h-1 mb-10 bg-gray-400 shadow-blurred-white"></div>
      <div className="flex  flex-col justify-between px-6 gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Contact Information */}
          <div className="flex flex-col items-center md:items-start gap-1 text-gray-400 mb-6 md:mb-0">
            <span className="text-lg md:text-xl">money@pacemorby.com</span>
          </div>

          {/* Center Section - Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={220} // Adjust size as needed
              height={80}
              priority
            />
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/pacemorby/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-green-600" />
            </a>
            <a
              href="https://www.facebook.com/groups/creativefinancewithpacemorby"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Group"
            >
              <FaFacebook className="text-2xl hover:text-green-600" />
            </a>
            <a
              href="https://www.youtube.com/@PaceMorby"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl hover:text-green-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/pacejordanmorby/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl hover:text-green-600" />
            </a>
            <a
              href="https://www.tiktok.com/@pacemorby?_t=8sU4knXn9Gp&_r=1"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok className="text-2xl hover:text-green-600" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-xs">
          © 2024 Creative Funding™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
