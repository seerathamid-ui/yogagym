import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="flex justify-between">
          <div>
            <img
              className="ml-24 flex justify-center items-center  mt-11"
              src="/image/Fashion-shop-logo-vector.jpg"
              alt="no image"
              height={100}
              width={130}
            />
          </div>
          <div className=" flex gap-9 p-12 text-[20px] font-bold text-black  ">
            <Link href="/home">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          </div>
  )
}
