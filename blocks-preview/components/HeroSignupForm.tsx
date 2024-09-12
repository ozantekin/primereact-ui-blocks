import React from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export default function HeroSignupForm() {
  const [passwordValue, setPasswordValue] = React.useState("");

  return (
    <section className="grid lg:grid-cols-2 gap-8 place-items-center">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Lorem ipsum
          </h1>
          <p className="text-xl text-muted-foreground">
            Venenatis ultrices torquent vehicula massa morbi pulvinar laoreet
            fringilla leo.
          </p>

          <Button
            outlined
            icon="pi pi-google"
            label="Sign up with Google"
            severity="danger"
            className="w-full"
            aria-label="Sign up with Google"
          />
        </div>

        <Divider layout="horizontal" className="w-full">
          <b>OR</b>
        </Divider>

        <form className="space-y-4" aria-label="Signup Form">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <InputText
              id="username"
              aria-describedby="username-help"
              placeholder="Username"
              className="w-full"
              aria-label="Username"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <InputText
              id="email"
              aria-describedby="email-help"
              placeholder="Email"
              className="w-full"
              aria-label="Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Password
              id="password"
              placeholder="Password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              className="grid"
              aria-label="Password"
            />
          </div>

          <Button label="Sign up" className="w-full" type="submit" />
        </form>
      </div>

      <Image
        src="https://placehold.co/600x700"
        alt="Signup illustration"
        width="600"
        className="hidden lg:block"
      />
    </section>
  );
}
