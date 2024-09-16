import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";

export default function HeroFormCenterAlignedWithAForm() {
  const renderAvatar = (count: number) =>
    Array.from({ length: count }, (_, index) => (
      <Avatar
        key={index}
        image={`https://i.pravatar.cc/300?img=${index + 1}`}
        size="large"
        shape="circle"
      />
    ));

  return (
    <div className="space-y-8 py-4">
      <div className="text-center text-pretty space-y-4">
        <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
          PrimeReact/ui blocks
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Connect with us, learn, and grow through our newsletter.
        </h1>
      </div>
      <div className="flex items-center justify-center text-center flex-wrap">
        <AvatarGroup>
          {renderAvatar(5)}
          <Avatar label="+2" shape="circle" size="large" />
        </AvatarGroup>
        <Divider layout="vertical" className="hidden sm:block" />
        <Divider layout="horizontal" className="sm:hidden" />
        <div>
          <div className="text-lg font-semibold">2350+ people</div>
          <div className="text-sm text-muted-foreground">
            Already in the line
          </div>
        </div>
      </div>
      <form>
        <div className="flex items-center justify-between gap-3 p-2 border rounded-md shadow flex-wrap">
          <div className="grid grid-cols-2 grow gap-2">
            <InputText type="text" id="name" placeholder="Occupation" />
            <InputText type="email" id="email" placeholder="Email address" />
          </div>
          <Button
            type="submit"
            label="Get started"
            className="w-full lg:w-auto"
          />
        </div>
      </form>
    </div>
  );
}
