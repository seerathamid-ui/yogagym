import Link from "next/link";

export default function Home() {
  return (
    <div>
      <>
        <div className="absolute inset-0 z-[-1] w-screen h-screen">
          <img
            className="w-full h-full object-cover bg-no-repeat"
            src="/image/png-clipart-shopping-silhouette-shopping-logo-woman.png"
            alt="no image"
          />
        </div>

        {/* <div className="flex justify-between">
          <div>
            <Image
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
        </div> */}
        <h1 className="flex justify-center items-center	text-wrap	  decoration-1	text-[80px] mt-36  text-center text-black-50 bg-gradient-to-r from-sky-500 to-indigo-500">
          WELCOME TO <br></br>
          FASHION ARTS
        </h1>
        <Link
          className="border border-yellow-600 bg-yellow-600 ml-[620px] p-2 rounded-sm justify-center items-center flex mt-5"
          href={"/products"}
        >
          products
        </Link>
      </>
    </div>
  );
}
