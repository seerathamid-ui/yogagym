import React from 'react'
import Link from 'next/link'
export default function Page() {
  return (
    <div>
       <h1 className="flex justify-center items-center	text-wrap	  decoration-1	text-[40px] mt-36  text-center text-black-50 bg-gradient-to-r from-sky-500 to-indigo-500 underline">
          CHOOSE FASHION FOR YOUR CHOICES  <br></br>
        </h1>
             
        <Link
          className="border border-yellow-600 bg-yellow-600 ml-[620px] p-2 rounded-sm justify-center items-center flex mt-5"
          href={"/lipsticks"}
        >
          lipsticks
        </Link>
        <Link
          className="border border-yellow-600 bg-yellow-600 ml-[620px] p-2 rounded-sm justify-center items-center flex mt-5"
          href={"/eyeshade"}
        >
          eyeshade
        </Link>
        <Link
          className="border border-yellow-600 bg-yellow-600 ml-[620px] p-2 rounded-sm justify-center items-center flex mt-5"
          href={"/lipglose"}
        >
          lipglose
        </Link>
        <Link
          className="border border-yellow-600 bg-yellow-600 ml-[620px] p-2 rounded-sm justify-center items-center flex mt-5"
          href={"/nailpolishes"}
        >
        nailpolishes
        </Link>
    </div>
  )
}
