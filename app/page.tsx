import Image from "next/image";
import { FireButton } from "./components/fireButton/fireButton";
import { FireTasksWithPics } from "./components/fireTasksWithPics/fireTasksWithPics";
import { FireCompanyLanding } from "./components/fireCompanyPage/fireCompanyLanding";
import { FireOnTheMarket } from "./components/fireOnTheMarket/fireOnTheMarket";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-24">
      <FireCompanyLanding />
      <div className="mt-20">
        <FireOnTheMarket />
      </div>
      <FireTasksWithPics />
    </main>
  );
}
