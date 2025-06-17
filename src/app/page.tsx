import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Button from "./_components/button";
import Section from "./_components/section";
import Title from "./_components/title";
import Header from "./_components/header";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <div className="">
      <Section>
        <Title label="Bienvenido a la aplicación" />
        <Header label="¡Hola, mundo!" />
        <p> Hola aida</p>
        <Button label="Ubicación" />
      </Section>
    </div>
  );
}
