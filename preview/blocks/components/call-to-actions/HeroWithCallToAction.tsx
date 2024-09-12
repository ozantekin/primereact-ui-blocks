import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

export default function HeroWithCallToAction() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <Chip
        label="primereact/ blocks - Meet us!"
        image="https://i.pravatar.cc/300"
      />

      <div className="mt-5 space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lorem ipsum
        </h1>
        <p className="text-xl text-muted-foreground">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis
          ultrices torquent vehicula massa morbi pulvinar laoreet fringilla leo.
        </p>
      </div>

      <div className="mt-6 space-x-3">
        <Button label="Get started" />
        <Button label=" Contact us" outlined />
      </div>
    </div>
  );
}
