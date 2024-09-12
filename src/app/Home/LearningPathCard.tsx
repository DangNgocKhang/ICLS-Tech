import Image from 'next/image';
import Link from 'next/link';

interface LearningPathCardProps {
  title: string;
  desc: string;
  image: string;
  path: string;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ title, desc, image, path }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 flex-1">
      <Image
        loading="lazy"
        src={image}
        height={368} 
        width={390}  
        alt={title}
        className="h-full w-auto px-8"
      />
      <h5 className="text-primary-blue-lighter text-center font-bold text-xl">
        {title}
      </h5>
      <p className="text-center">
        {desc}
      </p>
      <Link href={path} className="flex flex-col justify-center items-center p-5 lg:mt-8 max-w-full text-xl font-bold text-center text-white uppercase bg-primary-blue-lighter shadow-register-blue min-h-[74px] w-[230px]">
        <span className="flex-1">TÌM HIỂU THÊM</span>
        <div className="mt-2.5 w-full bg-white border-white border-solid h-[3px]" />
      </Link>
    </div>
  );
};

export default LearningPathCard;
