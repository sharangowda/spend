import { AddExpenses } from "./AddExpenses/Expenses";
// import { ProfileDropdown } from "./ProfileDropdown";

export function Navbar() {
  return (
    <div className="flex py-5 justify-between">
      <div>
        <p className="font-semibold text-2xl pt-1">Spend</p>
      </div>
      <div className="flex">
        {/* <div className="mx-4">
          <ProfileDropdown />
        </div> */}
        <div className="">
          <AddExpenses />
        </div>
      </div>
    </div>
  );
}
