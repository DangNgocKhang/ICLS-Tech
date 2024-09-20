// SubNavigate.tsx

import Link from "next/link";

interface ISubNavigate {
  path: string;
  title: string;
}

interface SubNavigateProps {
  listSubNav: ISubNavigate[];
  colorVisit: string;
  colorNoneVisit: string;
  currentPath: string;
}

const SubNavigate: React.FC<SubNavigateProps> = ({
  listSubNav,
  colorVisit,
  colorNoneVisit,
  currentPath,
}) => {
  return (
    <div className="absolute top-7 -left-6 h-max w-max max-w-[400px] px-6 pb-4 pt-4 flex flex-col gap-4 bg-primary-blue-lighter rounded-b-lg">
      {listSubNav.map((nav) => (
        <div key={nav.path}>
          <Link href={`/${nav.path}`}>
            <span
              className={`${
                currentPath === `/${nav.path}` ? colorVisit : colorNoneVisit
              }`}
            >
              {nav.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubNavigate;
