"use client";

import { Popover } from "@headlessui/react";
import Image from "next/image";
import { navLinks } from "@/app/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../logo.png";
import { Fragment } from "react";

export default function Navbar() {
  const router = usePathname();
  return (
    <Popover
      as="nav"
      className="rounded-none top-0 py-2 left-0 right-0 my-0 bg-red shadow px-5 text-black flex justify-between items-center fixed z-50"
    >
      <div className="font-domine md:py-0 py-1 text-xl md:text-2xl font-semibold items-center gap-2 inline-flex">
        <Link href="/" className="items-center gap-2 inline-flex">
          <Image
            src={logo}
            alt="Lynbrook Drama"
            className="w-9 aspect-square"
          />
          Lynbrook Drama
        </Link>
        <a
          href="https://instagram.com/lynbrookdrama"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            viewBox="0 0 24 24"
            className="text-black fill-black h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram</title>
            <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
          </svg>
        </a>
      </div>
      <div>
        <Popover.Button className="text-xl outline-none grid place-items-center h-full md:sr-only pr-2">
          {({ open }) =>
            open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )
          }
        </Popover.Button>
        <Popover.Panel className="bg-red w-full flex shadow mt-2 px-5 pt-2 pb-3 flex-col absolute left-0">
          {navLinks.map(
            (link, i) => (
              // link.href ? (
              <Popover.Button
                as={Link}
                href={link.href}
                key={i}
                className={`font-rubik text-lg md:text-xl flex flex-col group transition duration-300 ${
                  router === link.href ? "text-yellow" : "text-black"
                }`}
              >
                {link.label}
              </Popover.Button>
            )
            // ) : (
            //   <Disclosure key={i} as="div" className="relative">
            //     {({ close }) => (
            //       <>
            //         <Disclosure.Button
            //           className={`font-dekko text-xl group transition duration-300 ${
            //             link.subLinks?.find(
            //               (val) =>
            //                 val.href === router ||
            //                 router.indexOf(val.href!) != -1
            //             ) != undefined
            //               ? "text-lightblue"
            //               : "text-white"
            //           }`}
            //         >
            //           <span className="flex items-center gap-1">
            //             {link.label}
            //             <svg
            //               xmlns="http://www.w3.org/2000/svg"
            //               fill="none"
            //               viewBox="0 0 24 24"
            //               strokeWidth={1.5}
            //               stroke="currentColor"
            //               className="w-5 h-5"
            //             >
            //               <path
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            //               />
            //               <path
            //                 className="group-hover:animate-wiggle origin-center"
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //                 d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5"
            //               />
            //             </svg>
            //           </span>
            //           {/* <span
            //         className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 ${
            //           link.subLinks?.find((val) => val.href == router) !=
            //           undefined
            //             ? "text-lightblue"
            //             : "text-white"
            //         }`}
            //       /> */}
            //         </Disclosure.Button>
            //         <Disclosure.Panel className="divide-y divide-lightblue divide-opacity-30 focus:outline-none">
            //           {link.subLinks?.map((subLink, j) =>
            //             subLink.subLinks ? (
            //               <Disclosure key={j} as="div">
            //                 <Disclosure.Button
            //                   className={`font-dekko text-lg group flex flex-col w-auto pb-1 pl-2 ${
            //                     router === subLink.href ||
            //                     subLink.subLinks?.find(
            //                       (val) => val.href === router
            //                     ) != undefined
            //                       ? "text-lightblue"
            //                       : "text-white"
            //                   } pt-1.5`}
            //                 >
            //                   {subLink.label}
            //                 </Disclosure.Button>
            //                 <Transition
            //                   enter="transition duration-200 origin-top ease-out"
            //                   enterFrom="transform scale-y-50 opacity-0"
            //                   enterTo="transform scale-y-100 opacity-100"
            //                   leave="transition duration-200 origin-top ease-out"
            //                   leaveFrom="transform scale-y-100 opacity-100"
            //                   leaveTo="transform scale-y-50 opacity-0"
            //                 >
            //                   <Disclosure.Panel>
            //                     <div className="flex flex-col -mt-1 gap-1">
            //                       {subLink.subLinks.map((subSubLink, k) => (
            //                         <Popover.Button
            //                           as={Link}
            //                           href={subSubLink.href!}
            //                           key={k}
            //                           className={`${
            //                             router === subSubLink.href
            //                               ? "text-lightblue"
            //                               : "text-white"
            //                           } font-dekko text-lg group flex flex-col w-auto px-3 transition duration-300`}
            //                           onClick={() => close()}
            //                         >
            //                           <div className="py-0.5 inline-flex flex-col w-min whitespace-nowrap pl-3">
            //                             {subSubLink.label}
            //                           </div>
            //                         </Popover.Button>
            //                       ))}
            //                     </div>
            //                   </Disclosure.Panel>
            //                 </Transition>
            //               </Disclosure>
            //             ) : (
            //               <div key={j}>
            //                 {/* {() => ( */}
            //                 <Popover.Button
            //                   as={Link}
            //                   href={subLink.href!}
            //                   className={`${
            //                     router === subLink.href
            //                       ? "text-lightblue"
            //                       : "text-white"
            //                   } font-dekko text-lg flex flex-col w-auto py-0.5 pl-2 transition duration-300`}
            //                 >
            //                   <div className="inline-flex flex-col w-min whitespace-nowrap">
            //                     {subLink.label}
            //                   </div>
            //                 </Popover.Button>
            //                 {/* )} */}
            //               </div>
            //             )
            //           )}
            //         </Disclosure.Panel>
            //       </>
            //     )}
            //   </Disclosure>
            // )
          )}
        </Popover.Panel>
        <div className="sr-only md:not-sr-only flex gap-5 items-center">
          {navLinks.map(
            (link, i) => (
              // link.href ? (
              <Link
                href={link.href}
                key={i}
                className={`font-rubik text-lg md:text-xl flex flex-col group transition duration-300 ${
                  router === link.href ? "text-yellow" : "text-black"
                }`}
              >
                {link.label}
                <span
                  className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 ${
                    router === link.href ? "bg-yellow" : "bg-black"
                  }`}
                />
              </Link>
            )
            // ) : (
            //   <Menu key={i} as="div" className="relative">
            //     {({ close }) => (
            //       <>
            //         <Menu.Button
            //           className={`font-dekko text-xl group transition duration-300 ${
            //             link.subLinks?.find(
            //               (val) =>
            //                 val.href === router ||
            //                 router.indexOf(val.href!) != -1
            //             ) != undefined
            //               ? "text-lightblue"
            //               : "text-white"
            //           }`}
            //         >
            //           <span className="flex items-center gap-1">
            //             {link.label}
            //             <svg
            //               xmlns="http://www.w3.org/2000/svg"
            //               fill="none"
            //               viewBox="0 0 24 24"
            //               strokeWidth={1.5}
            //               stroke="currentColor"
            //               className="w-5 h-5"
            //             >
            //               <path
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            //               />
            //               <path
            //                 className="group-hover:animate-wiggle origin-center"
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //                 d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5"
            //               />
            //             </svg>
            //           </span>
            //           {/* <span
            //         className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 ${
            //           link.subLinks?.find((val) => val.href == router) !=
            //           undefined
            //             ? "text-lightblue"
            //             : "text-white"
            //         }`}
            //       /> */}
            //         </Menu.Button>
            //         <Transition
            //           as={Fragment}
            //           enter="transition ease-out duration-100"
            //           enterFrom="transform opacity-0 scale-95"
            //           enterTo="transform opacity-100 scale-100"
            //           leave="transition ease-in duration-75"
            //           leaveFrom="transform opacity-100 scale-100"
            //           leaveTo="transform opacity-0 scale-95"
            //         >
            //           <Menu.Items className="absolute right-0 mt-5 w-40 origin-top-right rounded-lg bg-navy border-white divide-y divide-lightblue divide-opacity-30 shadow focus:outline-none ">
            //             {link.subLinks?.map((subLink, j) =>
            //               subLink.subLinks ? (
            //                 <Disclosure key={j} as="div">
            //                   <Disclosure.Button
            //                     className={`font-dekko text-lg group flex flex-col w-auto pb-1 px-3 ${
            //                       router === subLink.href ||
            //                       subLink.subLinks?.find(
            //                         (val) => val.href === router
            //                       ) != undefined
            //                         ? "text-lightblue"
            //                         : "text-white"
            //                     } pt-1.5`}
            //                   >
            //                     {subLink.label}
            //                   </Disclosure.Button>
            //                   <Transition
            //                     enter="transition duration-200 origin-top ease-out"
            //                     enterFrom="transform scale-y-50 opacity-0"
            //                     enterTo="transform scale-y-100 opacity-100"
            //                     leave="transition duration-200 origin-top ease-out"
            //                     leaveFrom="transform scale-y-100 opacity-100"
            //                     leaveTo="transform scale-y-50 opacity-0"
            //                   >
            //                     <Disclosure.Panel>
            //                       <div className="flex flex-col -mt-1 gap-1">
            //                         {subLink.subLinks.map((subSubLink, k) => (
            //                           <Link
            //                             href={subSubLink.href!}
            //                             key={k}
            //                             className={`${
            //                               router === subSubLink.href
            //                                 ? "text-lightblue"
            //                                 : "text-white"
            //                             } font-dekko text-lg group flex flex-col w-auto px-3 transition duration-300`}
            //                             onClick={() => close()}
            //                           >
            //                             <div className="py-0.5 inline-flex flex-col w-min whitespace-nowrap pl-3">
            //                               {subSubLink.label}
            //                               <span
            //                                 className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-1 h-0.5 ${
            //                                   router === subSubLink.href
            //                                     ? "bg-lightblue"
            //                                     : "bg-white"
            //                                 }`}
            //                               />
            //                             </div>
            //                           </Link>
            //                         ))}
            //                       </div>
            //                     </Disclosure.Panel>
            //                   </Transition>
            //                 </Disclosure>
            //               ) : (
            //                 <Menu.Item key={j}>
            //                   {() => (
            //                     <Link
            //                       href={subLink.href!}
            //                       className={`${
            //                         router === subLink.href ||
            //                         subLink.subLinks?.find(
            //                           (val) => val.href === router
            //                         ) != undefined
            //                           ? "text-lightblue"
            //                           : "text-white"
            //                       } font-dekko text-lg group flex flex-col w-auto py-1 px-3 transition duration-300`}
            //                     >
            //                       <div className="py-0.5 inline-flex flex-col w-min whitespace-nowrap">
            //                         {subLink.label}
            //                         <span
            //                           className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-1 h-0.5 ${
            //                             router === subLink.href
            //                               ? "bg-lightblue"
            //                               : "bg-white"
            //                           }`}
            //                         />
            //                       </div>
            //                     </Link>
            //                   )}
            //                 </Menu.Item>
            //               )
            //             )}
            //           </Menu.Items>
            //         </Transition>
            //       </>
            //     )}
            //   </Menu>
            // )
          )}
          {/* <LinkButton
            href="/register"
            className="text-white bg-red text-xl px-5 py-3"
            hoverClass="text-white bg-black bg-opacity-30"
          >
            Register Now
          </LinkButton> */}
          {/* <a
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Button Text
            </span>
            <span class="relative invisible">Button Text</span>
          </a> */}
        </div>
      </div>
    </Popover>
  );
}
