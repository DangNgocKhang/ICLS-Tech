import Image from "next/image";
import Link from "next/link";
import ButtonPrimaryBlue from "../components/ButtonPrimaryBlue";

interface LearningPathCardProps {
  title: string;
  desc: string;
  image: string;
  numberImage: string;
  path: string;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({
  title,
  desc,
  image,
  numberImage,
  path,
}) => {
  return (
    <div className="flex flex-col items-center justify-between md:flex-1 w-screen md:w-auto shrink-0 px-6 md:px-0">
      <Image
        loading="lazy"
        src={numberImage}
        height={133}
        width={217}
        alt={title}
        className="w-[120px]"
      />
      <div className="my-2.5 justify-self-start flex flex-col justify-start items-center gap-2 shrink-0 flex-1">
        <Image
          loading="lazy"
          src={image}
          height={368}
          width={390}
          alt={title}
          className="px-8 w-full h-auto  md:h-[200px] md:w-auto"
        />
        <h5 className="text-primary-blue-lighter text-center font-bold text-xl md:text-lg">
          {title}
        </h5>

        <p className="text-justify px-6 md:px-16">{desc}</p>
      </div>
      <Link href={path}>
        <ButtonPrimaryBlue value={"TÌM HIỂU THÊM"} stylElement=" lg:mt-2" />
      </Link>
    </div>
  );
};

export default LearningPathCard;
