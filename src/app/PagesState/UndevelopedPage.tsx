import { assets } from "../../assets/assets";

const UndevelopedPage = () => {
  return (
    <div className="h-[calc(100vh)] w-screen bg-gradient-to-t from-gnosis-primary-blue-th1 to-gnosis-primary-blue-th2 flex flex-col-reverse lg:flex-row items-center justify-end lg:justify-center">
      <div className="text-4xl md:text-6xl lg:text-7xl flex flex-col gap-2 lg:gap-4 my-10 lg:my-0">
        <span className="font-bold text-primary-blue-darker">Website is</span>
        <span className="font-normal text-primary-blue-lighter">under construction</span>
      </div>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          loading="lazy"
          src={assets.pageConstruction.src}
          alt="pageConstruction"
          title="pageConstruction"
          className="w-4/5 md:w-2/3 h-auto lg:h-1/2 lg:w-auto mt-[120px] lg:mt-0"
        />
      }
    </div>
  );
};

export default UndevelopedPage;
