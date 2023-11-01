import { List } from "../atoms/List";
import { NavLink } from "react-router-dom";
import OutsideClickListenner from "./OutisideClickListenner";
type DropdownProps = {
  menuItems: { name: string; url: string; type: "Building" | "House"; }[];
  isOpen: boolean;
  onClose: () => void;
};
export default function Dropdown(props: DropdownProps) {
  return (
    <>
      {props.isOpen &&
        <OutsideClickListenner onOutsideClick={props.onClose}>
          <div className="fixed lg:top-28 md:top-24 top-20 right-52 mt-2 origin-top-right divide-y divide-gray-100  shadow-lg focus:outline-none">
            <div className="lg:flex hidden items-center h-full gap-20" onClick={props.onClose}>
              <ul className="flex flex-col items-center justify-center h-full relative before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-zinc-400">
                {props.menuItems
                  .map((navlink, index) => (
                    <List className="w-full bg-zinc-500 text-base hover:bg-zinc-300 p-3 text-center" key={index}>
                      <NavLink to={navlink.url} className={`w-full relative inline-block whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500 before:w-0 before:h-0.5 before:left-0 before:transition-all before:duration-200 before:ease-in hover:before:left-0.5`}>{navlink.name}</NavLink>
                    </List>
                  ))
                }
              </ul>
            </div>

          </div>
        </OutsideClickListenner>
      }
    </>
  )
}