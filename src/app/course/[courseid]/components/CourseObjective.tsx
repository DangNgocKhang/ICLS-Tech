import { TbTargetArrow } from "react-icons/tb";

interface Objective {
  title: string;
  items: string[];
}

interface CourseObjectiveProps {
  listObjective: Objective[];
}

const CourseObjective: React.FC<CourseObjectiveProps> = ({ listObjective }) => {
  return (
    <div className="col-span-full border-2 border-primary-blue-lighter p-4 rounded-xl">
      <h1 className="self-center text-2xl md:text-3xl font-bold text-center text-primary-blue-lighter max-md:max-w-full">
        MỤC TIÊU KHÓA HỌC
      </h1>
      <div className="flex flex-col gap-4 mt-2 md:mt-4 text-xl">
        {listObjective.map((objective, index) => (
          <div key={index} className="flex flex-col gap-4">
            {objective.title && (
              <h2 className="font-semibold text-primary-blue-lighter uppercase">
                {objective.title}:
              </h2>
            )}
            {objective.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-4 items-center">
                <TbTargetArrow className="text-2xl shrink-0 text-primary-blue-lighter" />
                <p className="text-justify max-md:max-w-full">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseObjective;
