import { Outlet } from "remix";

export default function NewFlower() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
