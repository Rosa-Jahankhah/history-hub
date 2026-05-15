import type { Metadata } from "next";
import { PhotoCarousel } from "@/components/PhotoCarousel";

export const metadata: Metadata = {
  title: "She'erit Hapletah — Jewish Displaced Persons in Postwar Europe",
  description:
    "A Yiddish 103 final project on Jewish Displaced Persons in postwar Europe, drawn from the USHMM Experiencing History collection.",
};

const COLLECTION =
  "https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe";

type HistoryObject = {
  n: number;
  title: string;
  type: string;
  year: string;
  source: string;
  images?: { src: string; caption: string }[];
  translation?: { heading: string; letter: string; song: string };
  body: string[];
};

const objects: HistoryObject[] = [
  {
    n: 1,
    title: "Herbert Friedman, Purim Play Photograph",
    type: "Photograph",
    year: "April 15, 1946",
    source:
      "https://perspectives.ushmm.org/item/herbert-friedman-purim-play-photograph/collection/jewish-displaced-persons-in-postwar-europe",
    images: [
      { src: "/images/purim-photo.jpeg", caption: "Purim play at Landsberg DP camp, 1946" },
    ],
    body: [
      "Even as DP camps struggled to meet basic physical needs, Jewish survivors set out to rebuild Jewish culture. Their efforts took many forms — cultural events, education, political activism. One key question this raises: how did these camps, despite all their hardships, become centers of Jewish life after the Holocaust?",
      "Two holidays carried special meaning in the camps: Hanukkah and Purim. Both had direct parallels to what survivors had just lived through. Purim celebrates the rescue of Jews from a genocidal Persian official. In 1946, in a DP camp, that story did not need much explanation. Scholars note that even secular Jews embraced these holidays as expressions of Jewish identity and collective survival.",
      "The Purim play — the purimshpil — had traditionally been a way for Jewish communities to mock their oppressors. In the DP camps, some plays became outright revenge fantasies: Hitler on the gallows, Nazi leaders begging in the street. Herbert Friedman photographed one such performance at the Landsberg DP camp on April 15, 1946. The photograph is evidence that joy and defiance coexisted in the camps — sometimes on the same stage.",
    ],
  },
  {
    n: 2,
    title: "Song from Deggendorf DP Camp",
    type: "Pamphlet",
    year: "1945",
    source: COLLECTION,
    images: [
      { src: "/images/deggendorf-1.jpeg", caption: "1" },
      { src: "/images/deggendorf-2.jpeg", caption: "2" },
      { src: "/images/deggendorf-3.jpeg", caption: "3" },
      { src: "/images/deggendorf-4.jpeg", caption: "4" },
    ],
    translation: {
      heading: "Translation of the pamphlet",
      letter: `Dear Mr. Atkin,\n\nHalf a year has passed since Germany capitulated. Europe is on the way of being rebuilt. The nations which fought for liberty and democracy lend their hands to those who were victims of Nazi policy. For this purpose a special organization has been established — the UNRRA. Its goal can be expressed simply: fulfilling human duties, helping those who are in want of help.\n\nOur community here was not a community before it has grown into one — because a great part of its members realized that a reconstructing life can be made possible only if everybody feels some responsibility towards the others. This is called community spirit. Whenever and wherever community spirit is ruling, there is justified hope of progress and success.`,
      song: `Deggendorf, you are the nicest camp for Jewish DPs,\nDeggendorf, and everybody here is happy to be.\nWhen one day we start from here away,\nWe all sing very sadly:\nWe meet again in short time again with you!`,
    },
    body: [
      "After the war ended in May 1945, Allied forces set up Displaced Persons camps across Germany and Austria. Jewish survivors were in especially poor health and could not simply go home — many found their houses taken, their families gone, and antisemitism still present in their old towns. Many wanted to emigrate to Palestine, but British immigration quotas blocked them.",
      "The Deggendorf camp, home to about 2,000 Jewish DPs — many of them survivors of Theresienstadt — became a center of postwar Jewish cultural life. It had two newspapers, a library of 1,700 books, a theater group, a kosher kitchen, and a ritual bath. Survivors were not only waiting. They were rebuilding.",
      "This pamphlet was made by camp residents as a gift for Carl Atkin, the director of the UNRRA team running the camp. It contains a letter about community spirit and a song — written in English — celebrating Deggendorf as 'the nicest camp for Jewish DPs.' Small as it is, the pamphlet is evidence that survivors were already creating culture, expressing gratitude, and imagining a future.",
    ],
  },
  {
    n: 3,
    title: "Letter from Julius Lewy to \"the liberators\"",
    type: "Letter",
    year: "May 30, 1945",
    source:
      "https://perspectives.ushmm.org/item/letter-from-julius-lewy-to-the-liberators/collection/jewish-displaced-persons-in-postwar-europe",
    images: [
      { src: "/images/lewy-letter1.jpeg", caption: "1" },
      { src: "/images/lewy-letter2.jpeg", caption: "2" },
      { src: "/images/lewy-letter3.jpeg", caption: "3" },
      { src: "/images/lewy-letter4.jpeg", caption: "4" },
      { src: "/images/lewy-letter5.jpeg", caption: "5" },
      { src: "/images/lewy-letter6.jpeg", caption: "6" },
    ],
    body: [
      "For many Holocaust survivors, liberation did not feel like freedom. They were exhausted, sick, hundreds of miles from home, and had no way to get back. Many found their homes destroyed or taken. Most had lost family members. Primo Levi, who survived Auschwitz, called this feeling the \"pain of exile\" — free in name, but lost in practice.",
      "Julius Lewy was born in Kraków in 1917. He survived forced labor camps including Płaszów and Mauthausen, and was liberated in Linz, Austria. On May 30, 1945 — less than a month after the war ended — he wrote this letter. He addressed it to the Allied forces, calling them \"the liberators,\" and described what he found in the hospital where he was recovering: no medicine, almost no food, and German staff treating Jewish survivors. He asked pointedly: \"An enemy of yesterday should be your benefactor of today?\"",
      "The letter is not just a complaint. Lewy describes himself as educated, multilingual, and ready to work. He asks to be transferred to an Allied hospital and to be given a purpose. He signs off calling himself \"an orphan of the world\" — and asks for \"an immediate written answer; ill men are so impatient.\" The letter ended up with a U.S. Army captain who had helped liberate a camp. It is a rare document: a survivor speaking directly to power, in his own voice, in the first weeks after the war.",
    ],
  },
  {
    n: 4,
    title: "Photograph of Performance of \"This Is How It Began\"",
    type: "Photograph",
    year: "1947",
    source: COLLECTION,
    images: [
      { src: "/images/359.jpeg", caption: "Kazet Theater performance at Bergen-Belsen DP camp" },
    ],
    body: [
      "Theater became one of the most important ways for Holocaust survivors to begin processing what had happened. Performances in DP camps started as early as the summer of 1945. Religious, secular, Zionist, and Bundist groups all put on plays — ranging from classic Yiddish theater to entirely new works written about the Holocaust itself.",
      "These productions gave survivors a way to rework their immediate past on stage — to interpret it, assert some control over it, and imagine a future. At the same time, they raised hard questions: Should plays show armed resistance as heroic? How honestly should the concentration camp experience be depicted? How graphic was too graphic for a survivor audience? These questions had no easy answers in 1945, and they still don't.",
      "This photograph shows a scene from \"This Is How It Began,\" performed by the Kazet Theater at Bergen-Belsen. The play follows a small Jewish community in the early days of Nazi oppression and the tension between those who want to endure quietly and young partisans who want to fight back. The production was funded by the Central Committee of Liberated Jews in the British Zone. Survivors were not just watching history — they were performing it, debating it, and deciding how it should be remembered.",
    ],
  },
  {
    n: 5,
    title: "Moyshe Feygnboym: \"Why Historical Commissions?\"",
    type: "Newspaper Article",
    year: "1946",
    source:
      "https://perspectives.ushmm.org/item/moyshe-feygnboym-why-historical-commissions/collection/jewish-displaced-persons-in-postwar-europe",
    images: [
      { src: "/images/188.png", caption: "1" },
      { src: "/images/189.png", caption: "2" },
    ],
    translation: {
      heading: "Translation of the article (from Yiddish)",
      letter: `M. Y. Feygnboym, Head of the Historical Commission\n\nMany among us still ask: Why do we need the Historical Commissions? Is the Nuremberg trial not inundated with a deluge of documents on the Jews? What can we poor Jews contribute?\n\nAfter liberation we were quickly disappointed. Our neighbors were unwilling to give objective accounts — on the contrary, they tried to diminish the Jewish tragedy, to whitewash it. Churchill told the English Parliament in February 1945 that the Nazis "as people were saying" had supposedly murdered upwards of three million Polish Jews. The Jewish Central Committee had to correct him: it is not "as people were saying" — the Nazis killed 3,250,000 Polish Jews.\n\nThe great powers compiled a lot of material. But they did not have the Jewish problem in mind. Many documents that pertain directly to us are not being compiled by the great powers at all. And even the documents they do have only show how the murderers dealt with us — not how we lived, how we suffered, how we resisted.\n\nWe, the survivors, the living witnesses, must create a foundation for the historians. Therefore, the testimony of every surviving Jew is of immense value. Every song, every photograph, every joke, every creative work — anything that can illuminate the martyrdom of our tragic generation.\n\nIt is the duty of every Jew who survived to make themselves available to the Historical Commissions whenever asked.`,
      song: `"We, the survivors, the surviving witnesses, must create a foundation for the historian that will take the place of the aforementioned sources so that he may create for himself a clear picture of what happened to us and among us."\n\n— Moyshe Feygnboym, Fun letstn khurbn ("From the Last Extermination"), Munich, 1946`,
    },
    body: [
      "After liberation, Jewish survivors realized quickly that the world was not going to document their experience for them. Neighbors were unwilling to speak honestly. Governments had their own interests. Even the Nuremberg trials, Feygnboym argued, only captured how the murderers acted — not how Jewish people actually lived, resisted, mourned, and held on.",
      "Moyshe Feygnboym was a survivor of two ghettos in occupied Poland and deportation to Treblinka. In 1946 he became director of the Central Historical Commission in Munich, which collected 2,500 testimonies between 1946 and 1948 — in Yiddish, German, Polish, and Hebrew. This article was published as the opening piece of the commission's journal, Fun letstn khurbn (\"From the Last Extermination\"). His argument was simple: survivors are here now, together, and their testimony is irreplaceable. If it is not collected now, it never will be.",
      "The institutions Feygnboym was calling for did not yet exist when he wrote — Yad Vashem, the USHMM, the USC Shoah Foundation would all come later. He was right about the urgency. This article, preserved in the USHMM collection, is itself one of the answers to his call.",
    ],
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl gap-10 px-4 py-12 sm:px-6">

      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-1 text-sm">
          <a
            href="#introduction"
            className="block rounded px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Introduction
          </a>

          <div>
            <a
              href="#evidence"
              className="block rounded px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              Evidence
            </a>
            <div className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-3">
              {objects.map((obj) => (
                <a
                  key={obj.n}
                  href={`#object-${obj.n}`}
                  className="block rounded py-1 text-xs text-slate-500 hover:text-slate-900"
                >
                  {obj.n}. {obj.title.length > 35 ? obj.title.slice(0, 35) + "…" : obj.title}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#interview"
            className="block rounded px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Interview
          </a>

          <a
            href="https://perspectives.ushmm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Sources ↗
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 text-slate-800">

        {/* Dedication */}
        <div className="mb-12 border-l-4 border-slate-300 pl-6">
          <p className="text-sm leading-relaxed text-slate-600">
            This presentation is dedicated to the innocent men, women, and children who lost their
            lives in the Holocaust. It is offered in the hope that their stories, and the stories of
            those who survived, continue to be read, taught, and remembered.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Special thanks to Professor{" "}
            <span className="font-semibold text-slate-700">Miriam Borden</span> for her teaching
            and guidance throughout this course.
          </p>
        </div>

        {/* Introduction */}
        <section id="introduction" className="mb-14 scroll-mt-24">
          <h2 className="font-serif text-3xl text-slate-900">Introduction</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
            <p>
              When World War II ended in Europe in May 1945, roughly 20 million people were
              displaced across the continent. Most returned home within weeks. But approximately
              1.5 million remained in occupied Germany and Austria by September 1945 — people who
              could not, or would not, go back. Of these, around 300,000 were Jewish survivors of
              the Holocaust.
            </p>
            <p>
              They were designated "Displaced Persons" — a legal and bureaucratic category created
              to manage an unprecedented humanitarian crisis. They lived in former military
              barracks, commandeered villages, and, in some cases, the same concentration camp
              buildings where they had been imprisoned. The camps were designed to last months.
              Many lasted until 1951.
            </p>
            <p>
              The five objects below are drawn from the USHMM{" "}
              <em>Experiencing History: Holocaust Sources in Context</em> collection on Jewish
              Displaced Persons in Postwar Europe. Each object was made, sent, or published by the
              survivors themselves — not by observers or aid workers. That is what connects them.
              They are primary documents of people insisting on their own presence in history.
            </p>
          </div>
        </section>

        {/* Evidence */}
        <section id="evidence" className="mb-14 scroll-mt-24">
          <h2 className="font-serif text-3xl text-slate-900">Evidence</h2>
          <nav className="mt-6 space-y-2 border-l-4 border-slate-200 pl-5">
            {objects.map((obj) => (
              <a
                key={obj.n}
                href={`#object-${obj.n}`}
                className="flex flex-wrap items-baseline gap-2 text-sm text-slate-600 hover:text-slate-900"
              >
                <span className="shrink-0 font-semibold text-slate-400">{obj.n}.</span>
                <span className="underline underline-offset-4">{obj.title}</span>
                <span className="text-slate-400">— {obj.type}, {obj.year}</span>
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-16">
            {objects.map((obj) => (
              <article key={obj.n} id={`object-${obj.n}`} className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Object {obj.n} · {obj.type} · {obj.year}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-slate-900">{obj.title}</h3>

                {obj.images && obj.images.length > 0 && (
                  <PhotoCarousel photos={obj.images} title={obj.title} />
                )}

                {obj.translation && (
                  <div className="mt-6 rounded border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {obj.translation.heading}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                      {obj.translation.letter}
                    </p>
                    <div className="mt-5 border-t border-slate-200 pt-5">
                      <p className="mt-2 whitespace-pre-line font-serif text-sm italic leading-7 text-slate-700">
                        {obj.translation.song}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
                  {obj.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-400">
                  Source:{" "}
                  <a
                    href={obj.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 underline underline-offset-4 hover:text-slate-900"
                  >
                    USHMM — Jewish Displaced Persons in Postwar Europe
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Interview */}
        <section id="interview" className="mb-14 scroll-mt-24">
          <h2 className="font-serif text-3xl text-slate-900">Interview</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            The following interview provides a survivor's firsthand account. Listen carefully to
            the language used to describe the experience of displacement, loss, and rebuilding —
            these are details that documents alone cannot convey.
          </p>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded border border-slate-200 bg-slate-900 shadow-sm">
            <iframe
              src="https://www.youtube.com/embed/xzeXaqf-xWM"
              title="Survivor interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-8 text-xs text-slate-400">
          <p>
            Prepared for Yiddish 103. With gratitude to Professor{" "}
            <span className="text-slate-500">Miriam Borden</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}
