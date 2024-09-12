import { LuMilestone } from "react-icons/lu";

interface CourseBenefitProps {
  listBenefit: string[];
  title?: string;
}

const CourseBenefit: React.FC<CourseBenefitProps> = ({
  listBenefit,
  title,
}) => {
  return (
    <div className="col-span-full xl:col-span-6 border-2 border-primary-blue-lighter p-4 rounded-xl">
      <h1 className="self-center text-2xl md:text-3xl font-bold text-center text-primary-blue-lighter ">
        {title ? title : "LỢI ÍCH SAU KHÓA HỌC"}
      </h1>
      <div className="flex flex-col gap-2 mt-2 md:mt-4">
        {listBenefit.map((target, index) => (
          <div
            key={index}
            className={`flex gap-4 justify-start items-center ${
              index !== listBenefit.length - 1
                ? "border-b border-b-primary-blue-lighter pb-2 border-opacity-45"
                : ""
            }`}
          >
            <LuMilestone className=" text-2xl shrink-0 text-primary-blue-lighter" />
            <p className=" text-xl text-justify  max-md:max-w-full">{target}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefit;
