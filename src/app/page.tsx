import Image from "next/image";

export default function Home() {
  return (
    <body className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={0}
          height={0}
          priority
        />
        <form method="post" action="#">
          <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={0}
          height={0}
          priority
        />
          <div>
            <label htmlFor="preference">Quelles sont vos préférences ?</label>
            <input type="text" id="preference" value="preference>
          </div>
          <div>
            <label htmlFor="temps">Combien de temps voulez-vous y consacrer ?</label>
            <input type="text" id="temps" value="temps">
          </div>
          <input type="submit" value="envoyer">Envoyer</input>
        </form>
      </main>
    </body>
  );
}
