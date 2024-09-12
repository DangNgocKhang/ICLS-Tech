// NavLink.tsx
import { FaAngleDown } from "react-icons/fa6";
import SubNavigateMbl from "./SubNavigateMbl";
import Link from "next/link";
interface ISubNavigate {
  path: string;
  title: string;
}

interface NavLinkMblProps {
  path: string;
  title: string;
  colorVisit: string;
  colorNoneVisit: string;
  currentPath: string;
  openSubNavigate: string;
  handleOpenSub: (type: string) => void;
  subNavList?: ISubNavigate[];
}

const NavLinkMbl: React.FC<NavLinkMblProps> = ({
  path,
  title,
  colorVisit,
  colorNoneVisit,
  currentPath,
  openSubNavigate,
  handleOpenSub,
  subNavList,
}) => {
  const isCurrentPath = currentPath.startsWith(`/${path}`);

  return (
    <span
      className={`${
        isCurrentPath ? colorNoneVisit : colorNoneVisit
      } relative`}
      onClick={() => handleOpenSub(path)}
    >
      {subNavList ? (
        <>
          {title} <FaAngleDown className="inline font-normal" />
          {openSubNavigate === path && subNavList && (
            <SubNavigateMbl
              listSubNav={subNavList}
              colorVisit={colorVisit}
              colorNoneVisit={colorNoneVisit}
              currentPath={currentPath}
            />
          )}
        </>
      ) : (
        <Link href={`/${path}`}>{title}</Link>
      )}
    </span>
  );
};

export default NavLinkMbl;
