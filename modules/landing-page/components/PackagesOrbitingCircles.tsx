import { ReactIcon, TailwindIcon } from "@/pr/assets/icons";
import OrbitingCircles from "@/pr/ui-kit/magicui/OrbitingCircles";

export default function PackagesOrbitingCircles() {
  return (
    <div className="relative lg:block hidden">
      <OrbitingCircles
        className="border-none bg-transparent"
        radius={50}
        duration={25}
        delay={0}
      >
        <TailwindIcon className="size-9" fill="#2dd4bf" />
      </OrbitingCircles>

      <OrbitingCircles
        className="border-none bg-transparent"
        radius={100}
        duration={35}
        delay={5}
      >
        <i className="pi pi-prime text-[40px] text-indigo-600" />
      </OrbitingCircles>

      <OrbitingCircles
        className="border-none bg-transparent"
        radius={150}
        duration={40}
        delay={10}
      >
        <ReactIcon className="size-16" fill="#61DBFB" />
      </OrbitingCircles>
    </div>
  );
}
