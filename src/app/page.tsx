export default function Home() {
  return (
    <body className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form>
          <div>
            <label htmlFor="preference">Quelles sont vos préférences ?</label>
            <textarea id="preference"></textarea>
          </div>
          <div>
            <label htmlFor="temps">Combien de temps voulez-vous y consacrer ?</label>
            <textarea id="temps"></textarea>
          </div>
          <input type="submit">Envoyer</input>
        </form>
      </main>
    </body>
  );
}
