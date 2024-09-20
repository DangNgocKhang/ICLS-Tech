import Link from "next/link";

interface ISubNavigate {
  path: string;
  title: string;
}

interface SubNavigateMblProps {
  listSubNav: ISubNavigate[];
  colorVisit: string;
  colorNoneVisit: string;
  currentPath: string;
}

const SubNavigateMbl: React.FC<SubNavigateMblProps> = ({
  listSubNav,
  colorVisit,
  colorNoneVisit,
  currentPath,
}) => {
  return (
    <div className="h-max w-full pl-6 pt-3 flex flex-col gap-5 tracking-tighter">
      {listSubNav.map((nav) => (
        <div key={nav.path} onClick={(event)=>{event.stopPropagation()}}>
          <Link href={`/${nav.path}`}>
            <span
              className={`${
                currentPath === `/${nav.path}` ? colorVisit : colorNoneVisit
              } break-normal`}
            >
              {nav.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubNavigateMbl;
