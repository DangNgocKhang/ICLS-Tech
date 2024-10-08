import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import NavigateMbl from "./NavigateMbl";
import { assets } from "../../assets/assets";
import Link from "next/link";
import Image from "next/image";
import { PiListBold } from "react-icons/pi";
// import banner1 from "../../assets/banner1.jpg";

const HeaderMbl = () => {
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const divMenuHeaderRef = useRef<HTMLDivElement>(null);

  const handleClickOpenCategory = () => {
    setIsOpenCategory(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      divMenuHeaderRef.current &&
      !divMenuHeaderRef.current.contains(event.target as Node)
    ) {
      setIsOpenCategory(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed top-0 left-0 h-[70px] w-full bg-primary-blue-lighter px-0 md:px-4 flex items-center z-50">
      <Link href="/">
        <Image
          src={assets.logoICLS}
          alt="logoICLS"
          width={390}
          height={400}
          className="h-[40px] w-auto md:h-[55px] md:w-max bg-white p-2 md:px-10 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </Link>
      <div className="h-full w-full flex justify-between items-center shrink-0">
        <PiListBold
          className="h-3/5 w-auto shrink-0 p-1 md:p-0 text-white"
          onClick={handleClickOpenCategory}
        />

        <Image
          src={assets.iconSearch}
          alt="iconMenu"
          width={30}
          height={30}
          className="h-3/5 w-auto shrink-0 p-2 md:p-0"
        />
      </div>

      <div
        className={`${
          !isOpenCategory ? "hidden" : "flex"
        } h-screen w-80 px-5 bg-primary-blue-darker absolute top-0 left-0  flex-col gap-5 text-lg font-semibold text-white`}
        ref={divMenuHeaderRef}
      >
        <div
          className="h-max w-full pt-4 flex  items-center"
          onClick={() => {
            setIsOpenCategory(false);
          }}
        >
          <IoClose className="h-10 w-auto" />
        </div>

        <hr />
        <NavigateMbl
          colorVisit="underline underline-offset-8"
          colorNoneVisit="no-underline"
        />
      </div>
    </div>
  );
};

export default HeaderMbl;
