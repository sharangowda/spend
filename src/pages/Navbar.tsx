import { DialogBox } from "./DialogBox";
import { Dropdown } from "./Dropdown";

export function Navibar() {
  return (
    <div className="flex py-5 justify-between">
      <div>
        <p className="font-semibold text-2xl pt-1">Spend</p>
      </div>
      <div className="flex">
        <div className="mx-4">
          <Dropdown />
        </div>
        <div className="">
          <DialogBox />
        </div>
      </div>
    </div>
  );
}

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
