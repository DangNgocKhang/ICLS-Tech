import { FaUserCheck } from "react-icons/fa6";

interface ConditionToLearnProps {
  listCondition: string[];
}

const ConditionToLearn: React.FC<ConditionToLearnProps> = ({
  listCondition,
}) => {
  return (
    <div className="col-span-full border-2 border-primary-blue-lighter p-4 rounded-xl">
      <h1 className="self-center text-2xl md:text-3xl font-bold text-center text-primary-blue-lighter">
        ĐIỀU KIỆN THAM GIA KHÓA HỌC
      </h1>
      <div className="flex flex-col gap-2 mt-2 md:mt-4">
        {listCondition.map((target, index) => (
          <div
            key={index}
            className={`flex gap-4 justify-start items-center ${
              index !== listCondition.length - 1
                ? "border-b border-b-primary-blue-lighter pb-2 border-opacity-45"
                : ""
            }`}
          >
            <FaUserCheck className=" text-2xl shrink-0 text-primary-blue-lighter" />
            <p className=" text-xl text-justify  max-md:max-w-full">{target}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionToLearn;
