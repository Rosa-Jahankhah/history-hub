import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "She'erit Hapletah — Jewish Displaced Persons in Postwar Europe",
  description:
    "A Yiddish 103 final project on Jewish Displaced Persons in postwar Europe, drawn from the USHMM Experiencing History collection.",
};

const COLLECTION =
  "https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe";

const objects = [
  {
    n: 1,
    title: "Herbert Friedman, Purim Play Photograph",
    type: "Photograph",
    year: "1945",
    source: COLLECTION,
    body: [
      "On Purim — the Jewish holiday that commemorates survival against an ancient persecutor — survivors in a DP camp staged a play and dressed in costume. Herbert Friedman photographed the performance. The image shows laughter, improvised costumes, and people crowded together on a makeshift stage.",
      "What makes this object remarkable is its timing. The photograph was taken in 1945, within months of liberation, while survivors were still living in the same buildings that had served as instruments of persecution. Choosing to celebrate Purim in that space was not an accident. Purim's central theme — the defeat of an enemy who sought to destroy the Jewish people — carried an unmistakable resonance.",
      "The photograph is evidence that survivors did not wait to begin rebuilding religious and communal life. It is also a reminder that joy and grief are not opposites. They coexisted in the camps, sometimes on the same day.",
    ],
  },
  {
    n: 2,
    title: "Song from Deggendorf DP Camp",
    type: "Pamphlet",
    year: "1945",
    source: COLLECTION,
    body: [
      "In the Deggendorf DP camp, survivors printed a pamphlet that included a song written and performed by camp residents. The lyrics were in Yiddish — the everyday language of Eastern European Jewish life — and the themes were homesickness, hope, and the uncertain road ahead.",
      "The object is small and practical: a printed page, not a monument. But its existence answers an important question. What did survivors do with their first months of freedom? In part, they made culture. They printed things, performed things, and passed them around.",
      "The choice of Yiddish is itself significant. By 1945, the communities that had spoken Yiddish as their native language — the shtetlekh, the cities, the neighborhoods — had been largely destroyed. To write and sing in Yiddish in a displaced persons camp was to insist that the language, and everything it carried, had survived.",
    ],
  },
  {
    n: 3,
    title: "Letter from Julius Lewy to \"the liberators\"",
    type: "Letter",
    year: "1945",
    source: COLLECTION,
    body: [
      "Julius Lewy wrote this letter to the Allied soldiers — the people he addresses as \"the liberators\" — in the months after the end of the war. He describes food shortages, bureaucratic obstacles, inadequate sanitation, and the experience of being technically free while remaining trapped in conditions that felt, in many practical ways, continuous with what had come before.",
      "The letter is written not as a plea but as a demand. Lewy does not ask for sympathy. He points to specific failures and holds the liberating forces accountable for them. This is a document of agency: a survivor who survived the Holocaust and then immediately turned to arguing for the basic conditions of a dignified life.",
      "The Harrison Report — delivered to President Truman in September 1945 — would make similar arguments at the level of policy. Lewy's letter makes them at the level of a person. Read together, they show that pressure for reform came both from official observers and from survivors themselves.",
    ],
  },
  {
    n: 4,
    title: "Zvi Gurvits, \"The Book of Life in the Zeilsheim Camp\"",
    type: "Album",
    year: "1945",
    source: COLLECTION,
    body: [
      "Zvi Gurvits created an illustrated album documenting daily life in the Zeilsheim DP camp. The album combines visual art with Hebrew and Yiddish text and records scenes of communal activity: people eating together, children at lessons, adults in conversation, religious observance.",
      "The title — \"The Book of Life\" — is a deliberate echo of the Sefer HaChayyim, the Jewish liturgical concept of a book in which names are inscribed for the coming year. To call a record of DP camp life a \"Book of Life\" is to make a theological claim: that these people, in this place, were living. Not surviving in a minimal sense, but living in a full one.",
      "Albums like this one were made not for outside audiences but for the communities themselves. They are internal documents — records that a community kept of its own existence. That is what makes them unusual as historical sources. They were not produced to persuade or to report. They were produced to remember.",
    ],
  },
  {
    n: 5,
    title: "Moyshe Feygnboym, \"Why Historical Commissions?\"",
    type: "Newspaper Article",
    year: "1946",
    source: COLLECTION,
    body: [
      "Moyshe Feygnboym published this article in the Yiddish-language press of the DP camps. The article argues for the necessity of organized historical commissions — bodies dedicated to collecting survivor testimony, preserving documents, and creating an archive of what had happened.",
      "His central argument is one of urgency. The witnesses are alive and in one place. The documents exist. The memory is fresh. If this work is not done now, it will not be done at all. Survivors will scatter. Documents will be lost. The world will be left with silence.",
      "What Feygnboym describes in 1946 would eventually become the Yad Vashem archive in Israel, the USHMM collections in Washington, and the USC Shoah Foundation testimony project — institutions that did not yet exist when he wrote. He was right about the urgency. Reading his article now, it is impossible not to notice that his call was answered, and that you are looking at one of the answers.",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14 text-slate-800">

      {/* Dedication */}
      <section className="mb-14 border-l-4 border-slate-300 pl-6">
        <p className="text-sm leading-relaxed text-slate-600">
          This presentation is dedicated to the innocent men, women, and children who lost their
          lives in the Holocaust. It is offered in the hope that their stories, and the stories of
          those who survived, continue to be read, taught, and remembered.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Special thanks to Professor{" "}
          <span className="font-semibold text-slate-700">Miriam Borden</span> for her teaching and
          guidance throughout this course.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-14">
        <h2 className="font-serif text-3xl text-slate-900">Introduction</h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
          <p>
            When World War II ended in Europe in May 1945, roughly 20 million people were displaced
            across the continent. Most returned home within weeks. But approximately 1.5 million
            remained in occupied Germany and Austria by September 1945 — people who could not, or
            would not, go back. Of these, around 300,000 were Jewish survivors of the Holocaust.
          </p>
          <p>
            They were designated "Displaced Persons" — a legal and bureaucratic category created to
            manage an unprecedented humanitarian crisis. They lived in former military barracks,
            commandeered villages, and, in some cases, the same concentration camp buildings where
            they had been imprisoned. The camps were designed to last months. Many lasted until 1951.
          </p>
          <p>
            The five objects below are drawn from the USHMM{" "}
            <em>Experiencing History: Holocaust Sources in Context</em> collection on Jewish
            Displaced Persons in Postwar Europe. Each object was made, sent, or published by the
            survivors themselves — not by observers or aid workers. That is what connects them. They
            are primary documents of people insisting on their own presence in history.
          </p>
        </div>
      </section>

      {/* Objects */}
      <section className="mb-14">
        <h2 className="font-serif text-3xl text-slate-900">Five Objects from the Camps</h2>
        <div className="mt-8 space-y-16">
          {objects.map((obj) => (
            <article key={obj.n} id={`object-${obj.n}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Object {obj.n} · {obj.type} · {obj.year}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-slate-900">{obj.title}</h3>
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

      {/* Conclusion */}
      <section className="mb-14">
        <h2 className="font-serif text-3xl text-slate-900">Conclusion</h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
          <p>
            These five objects share a quality that is easy to overlook: they were all made in 1945
            or 1946, within the first year after liberation. Survivors did not wait for historians to
            arrive. They photographed Purim plays, printed songs, wrote letters of complaint, drew
            illustrated albums, and argued in newspapers for the creation of archives. Memory, for
            them, was not a future project. It was an immediate one.
          </p>
          <p>
            Moyshe Feygnboym asked in 1946 why historical commissions were necessary. His answer
            was: because the witnesses are here now, and they will not always be. That answer has
            not changed. The witnesses are gone. What remains are these objects, and the
            institutions — including the USHMM — that answered his call.
          </p>
          <p>
            To remember them as humanity means to continue that work: to name the people behind
            the documents, to read the sources in the languages they chose, and to pass the
            evidence on to the next person who needs it.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-14">
        <h2 className="font-serif text-3xl text-slate-900">Sources</h2>
        <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
          <p>
            All five objects are from:{" "}
            <a
              href={COLLECTION}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-900"
            >
              USHMM, <em>Experiencing History: Holocaust Sources in Context</em> — Jewish Displaced
              Persons in Postwar Europe
            </a>
            .
          </p>
          <p>
            Background context:{" "}
            <a
              href="https://encyclopedia.ushmm.org/content/en/article/displaced-persons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-900"
            >
              USHMM Holocaust Encyclopedia — Displaced Persons
            </a>
            .
          </p>
          <p>
            For the Harrison Report:{" "}
            <a
              href="https://encyclopedia.ushmm.org/content/en/article/the-harrison-report"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-900"
            >
              USHMM Holocaust Encyclopedia — The Harrison Report
            </a>
            .
          </p>
          <p>
            Scholarly context:{" "}
            <a
              href="https://yivoencyclopedia.org/article.aspx/Displaced_Persons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-900"
            >
              YIVO Encyclopedia — Displaced Persons
            </a>
            .
          </p>
          <p>
            Oral history archive:{" "}
            <a
              href="https://collections.ushmm.org/search/?f%5Bavailability%5D%5B%5D=Online&q=displaced+persons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-900"
            >
              USHMM Oral History Collection (online)
            </a>
            .
          </p>
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
  );
}
