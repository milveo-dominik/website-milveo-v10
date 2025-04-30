"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ChartNoAxesCombined } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconChartBar, IconMoneybag } from "@tabler/icons-react";

interface MilveoFrameworkProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    zero: string;
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const MilveoFramework = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: MilveoFrameworkProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[400px] md:h-[500px] w-full flex-col items-center -mt-24 md:-mt-0",
        className
      )}
    >
      {/* SVG Paths  */}
      <svg
        className="sm:w-full h-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          {/* MIRRORED AT THE X AXIS */}
          <g
            stroke="currentColor"
            fill="none"
            strokeWidth="0.4"
            strokeDasharray="100 100"
            pathLength="100"
          >
            <path d="M 31 40 v -15 q 0 -5 5 -5 h 59 q 5 0 5 -5 v -10" />
            <path d="M 77 40 v -10 q 0 -5 5 -5 h 13 q 5 0 5 -5 v -10" />
            <path d="M 124 40 v -10 q 0 -5 -5 -5 h -14 q -5 0 -5 -5 v -10" />
            <path d="M 170 40 v -15 q 0 -5 -5 -5 h -60 q -5 0 -5 -5 v -10" />
            
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="1s"
              begin="0.5s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.25,0.1,0.5,1"
              keyTimes="0; 1"
            />
          </g>
          {/* Original downward paths */}
          <g
            stroke="currentColor"
            fill="none"
            strokeWidth="0.4"
            strokeDasharray="100 100"
            pathLength="100"
          >
            <path d="M 31 40 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
            <path d="M 77 40 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
            <path d="M 124 40 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
            <path d="M 170 40 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
            
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="1s"
              begin="0s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.25,0.1,0.5,1"
              keyTimes="0; 1"
            />
          </g>
          {/* Blue Lights */}
          <g mask="url(#db-mask-1)">
            <circle
              className="database db-light-1"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          <g mask="url(#db-mask-2)">
            <circle
              className="database db-light-2"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          <g mask="url(#db-mask-3)">
            <circle
              className="database db-light-3"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          <g mask="url(#db-mask-4)">
            <circle
              className="database db-light-4"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          {/* Blue Lights */}
          <g mask="url(#db-mask-5)">
            <circle
              className="database-reverse db-light-5"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          <g mask="url(#db-mask-6)">
            <circle
              className="database-reverse db-light-6"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          <g mask="url(#db-mask-7)">
            <circle
              className="database-reverse db-light-7"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          <g mask="url(#db-mask-8)">
            <circle
              className="database-reverse db-light-8"
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
            />
          </g>
          {/* Buttons */}
          <g stroke="currentColor" fill="none" strokeWidth="0.4">
            {/* First Button */}
            <g>
              <rect
                fill="#18181B"
                x="77"
                y="0"
                width="48"
                height="10"
                rx="5"
              ></rect>
              <text
                x="86"
                y="6"
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="500"
              >
                {badgeTexts?.zero || "Growth Strategie"}
              </text>
            </g>
            {/* First Button */}
            <g>
              <rect
                fill="#18181B"
                x="0"
                y="35"
                width="46"
                height="10"
                rx="5"
              ></rect>
              <text
                x="7"
                y="41"
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="500"
              >
                {badgeTexts?.first || "Digital Marketing"}
              </text>
            </g>
            {/* Second Button */}
            <g>
              <rect
                fill="#18181B"
                x="50"
                y="35"
                width="42"
                height="10"
                rx="5"
              ></rect>
              <text
                x="60"
                y="41"
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="500"
              >
                {badgeTexts?.second || "Entwicklung"}
              </text>
            </g>
            {/* Third Button */}
            <g>
              <rect
                fill="#18181B"
                x="108"
                y="35"
                width="40"
                height="10"
                rx="5"
              ></rect>
              <text
                x="115"
                y="41"
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="500"
              >
                {badgeTexts?.third || "SEO & Content"}
              </text>
            </g>
            {/* Fourth Button */}
            <g>
              <rect
                fill="#18181B"
                x="155"
                y="35"
                width="45"
                height="10"
                rx="5"
              ></rect>
              <text
                x="160"
                y="41"
                fill="white"
                stroke="none"
                fontSize="4"
                fontWeight="500"
              >
                {badgeTexts?.fourth || "Analytics & Logistik"}
              </text>
            </g>
          </g>
          <defs>
            {/* 1 -  user list */}
            <mask id="db-mask-1">
              <path
                d="M 31 40 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 2 - task list */}
            <mask id="db-mask-2">
              <path
                d="M 77 40 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 3 - backlogs */}
            <mask id="db-mask-3">
              <path
                d="M 124 40 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 4 - misc */}
            <mask id="db-mask-4">
              <path
                d="M 170 40 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 5 - mirrored user list */}
            <mask id="db-mask-5">
              <path
                d="M 31 40 v -15 q 0 -5 5 -5 h 59 q 5 0 5 -5 v -10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 6 - mirrored task list */}
            <mask id="db-mask-6">
              <path
                d="M 77 40 v -10 q 0 -5 5 -5 h 13 q 5 0 5 -5 v -10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 7 - mirrored backlogs */}
            <mask id="db-mask-7">
              <path
                d="M 124 40 v -10 q 0 -5 -5 -5 h -14 q -5 0 -5 -5 v -10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* 8 - mirrored misc */}
            <mask id="db-mask-8">
              <path
                d="M 170 40 v -15 q 0 -5 -5 -5 h -60 q -5 0 -5 -5 v -10"
                strokeWidth="0.5"
                stroke="white"
              />
            </mask>
            {/* Blue Grad */}
            <radialGradient id="db-blue-grad" fx="1">
              <stop offset="0%" stopColor={lightColor || "#00A6F5"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </g>
      </svg>
      {/* Main Box */}
      <div className="bottom-0 absolute flex flex-col items-center w-full overflow-visible">
        {/* bottom shadow */}
        <div className="hidden -bottom-4 absolute bg-accent/30 rounded-lg w-[62%] h-[100px]" />
        {/* box title */}
        <div className="-top-3 sm:-top-4 z-20 absolute flex justify-center items-center bg-[#101112] px-2 py-1 sm:py-1.5 border border-[#00A6F5] rounded-lg">
          <ChartNoAxesCombined className="size-5" />
          <span className="ml-2 text-md md:text-xl">
            {title ? title : "Profitables Wachstum"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="-bottom-8 z-30 absolute place-items-center grid bg-[#141516] border-t rounded-full w-[60px] h-[60px] font-semibold text-lg">
          {circleText ? circleText : <Building2 className="size-4" />}
        </div>
        {/* box content */}
        <div className="z-10 relative flex justify-center items-center bg-background shadow-md border border-[#00A6F5] rounded-lg w-full max-w-[600px] h-[150px] overflow-hidden">
          {/* Badges */}
          <div className="bottom-8 left-16 md:left-24 z-10 absolute flex items-center gap-2 bg-[#101112] px-3 border rounded-full h-7 text-xs">
            <IconMoneybag className="size-4" />
            <span>{buttonTexts?.first || "Mehr Umsatz"}</span>
          </div>
          <div className="right-10 md:right-32 z-10 absolute flex sm:flex items-center gap-2 gap-2 bg-[#101112] px-3 border rounded-full h-7 text-xs">
            <IconChartBar className="size-4" />
            <span>{buttonTexts?.second || "Kostenreduktion"}</span>
          </div>
          {/* Circles */}
          <motion.div
            className="-bottom-14 absolute bg-accent/5 border-t rounded-full w-[100px] h-[100px]"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="-bottom-20 absolute bg-accent/5 border-t rounded-full w-[145px] h-[145px]"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="-bottom-[100px] absolute bg-accent/5 border-t rounded-full w-[190px] h-[190px]"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="-bottom-[120px] absolute bg-accent/5 border-t rounded-full w-[235px] h-[235px]"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default MilveoFramework;
