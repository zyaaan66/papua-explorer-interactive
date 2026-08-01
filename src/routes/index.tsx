import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import heroPapua from "@/assets/hero-papua.jpg";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import reef from "@/assets/section-reef.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visit Papua — Keindahan Timur Indonesia" },
      {
        name: "description",
        content:
          "Jelajahi Raja Ampat, Lembah Baliem, Danau Sentani, dan air terjun tersembunyi Papua lewat pengalaman visual interaktif.",
      },
      { property: "og:title", content: "Visit Papua — Keindahan Timur Indonesia" },
      {
        property: "og:description",
        content:
          "Jelajahi Raja Ampat, Lembah Baliem, Danau Sentani, dan air terjun tersembunyi Papua lewat pengalaman visual interaktif.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  {
    id: "01",
    image: heroPapua,
    title: ["VISIT", "PAPUA"],
    kicker: "Raja Ampat",
    columns: [
      "Raja Ampat adalah gugusan lebih dari 1.500 pulau karst di ujung barat Papua, jantung dari Coral Triangle dunia.",
      "Lautnya menyimpan lebih dari 550 jenis karang dan 1.400 spesies ikan — kekayaan laut tertinggi yang pernah tercatat.",
      "Titik terbaik untuk menikmatinya adalah puncak Piaynemo dan Wayag saat matahari mulai turun ke garis laut.",
    ],
  },
  {
    id: "02",
    image: card1,
    title: ["AIR", "TERJUN"],
    kicker: "Kali Biru & Air Terjun Tersembunyi",
    columns: [
      "Hutan hujan Papua menyimpan air terjun yang jatuh langsung dari dinding batu kapur setinggi puluhan meter.",
      "Kali Biru di Nifasi menawarkan air sebening kaca dengan warna biru alami sepanjang tahun.",
      "Perjalanan menuju lokasi melewati hutan primer, jadi bagian dari pengalamannya itu sendiri.",
    ],
  },
  {
    id: "03",
    image: card2,
    title: ["PANTAI", "PAPUA"],
    kicker: "Base G & Pasir Putih",
    columns: [
      "Garis pantai Papua panjang dan sepi, banyak di antaranya belum tersentuh pariwisata massal.",
      "Pantai Base G di Jayapura punya pasir putih halus dengan latar bukit hijau yang curam.",
      "Sore hari adalah waktu terbaik: ombak tenang dan langit berubah jingga di atas Samudra Pasifik.",
    ],
  },
  {
    id: "04",
    image: card3,
    title: ["LEMBAH", "BALIEM"],
    kicker: "Wamena, Pegunungan Tengah",
    columns: [
      "Lembah Baliem terletak 1.600 meter di atas permukaan laut, dikelilingi pegunungan yang hampir selalu berkabut.",
      "Di sinilah suku Dani tinggal, dengan honai, kebun ubi, dan tradisi yang masih hidup.",
      "Festival Lembah Baliem setiap Agustus menampilkan tarian dan perang-perangan simbolik antar suku.",
    ],
  },
  {
    id: "05",
    image: card4,
    title: ["DANAU", "SENTANI"],
    kicker: "Jayapura",
    columns: [
      "Danau Sentani membentang seluas 9.360 hektare dengan lebih dari 20 pulau kecil di dalamnya.",
      "Perkampungan di atas air masih menjadi rumah bagi masyarakat adat Sentani hingga hari ini.",
      "Puncak Tugu MacArthur memberi pemandangan penuh danau dari ketinggian.",
    ],
  },
];

const places = [
  {
    rank: "1st place",
    name: "Raja Ampat",
    image: heroPapua,
    region: "Papua Barat Daya",
    best: "Oktober – April",
    access: "Sorong → Waisai, feri ± 2 jam",
    description:
      "Gugusan 1.500 pulau karst yang menjadi pusat Coral Triangle. Lautnya menyimpan keanekaragaman hayati laut tertinggi di dunia, dengan air sebening kaca dan dinding karang yang jatuh puluhan meter ke dasar.",
    highlights: [
      "Panorama Piaynemo dan laguna Wayag",
      "Menyelam bersama pari manta di Manta Sandy",
      "Menginap di homestay apung milik warga",
    ],
  },
  {
    rank: "2nd place",
    name: "Lembah Baliem",
    image: card3,
    region: "Wamena, Pegunungan Tengah",
    best: "Juni – Agustus",
    access: "Penerbangan Jayapura → Wamena, ± 45 menit",
    description:
      "Lembah subur di ketinggian 1.600 mdpl yang dikelilingi pegunungan berkabut. Rumah bagi suku Dani yang masih menjaga honai, kebun ubi, dan ritual adat mereka.",
    highlights: [
      "Festival Lembah Baliem setiap Agustus",
      "Trekking desa Kurulu dan Jiwika",
      "Pasar tradisional Wamena di pagi hari",
    ],
  },
  {
    rank: "3rd place",
    name: "Kali Biru Nifasi",
    image: card1,
    region: "Nabire, Papua Tengah",
    best: "Mei – September",
    access: "Nabire → Nifasi, ± 2 jam darat",
    description:
      "Sungai berair biru alami di tengah hutan hujan primer, lengkap dengan air terjun yang jatuh langsung dari dinding batu kapur. Jernihnya air membuat dasar sungai terlihat sampai kedalaman beberapa meter.",
    highlights: [
      "Berenang di air tawar sebening kaca",
      "Trekking singkat menembus hutan primer",
      "Spot foto air terjun tersembunyi",
    ],
  },
  {
    rank: "4th place",
    name: "Danau Sentani",
    image: card4,
    region: "Jayapura, Papua",
    best: "Juni – Oktober",
    access: "± 30 menit dari Bandara Sentani",
    description:
      "Danau seluas 9.360 hektare dengan lebih dari 20 pulau kecil dan perkampungan di atas air yang masih dihuni masyarakat adat Sentani hingga kini.",
    highlights: [
      "Pemandangan penuh danau dari Tugu MacArthur",
      "Kampung air Asei dan lukisan kulit kayu",
      "Festival Danau Sentani setiap Juni",
    ],
  },
];

type Place = (typeof places)[number];

function Index() {
  const [active, setActive] = useState(0);
  const [detail, setDetail] = useState<Place | null>(null);
  const slide = slides[active]!;
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  const openDetail = useCallback((p: Place, el: HTMLElement) => {
    openerRef.current = el;
    setDetail(p);
  }, []);

  const closeDetail = useCallback(() => {
    setDetail(null);
    openerRef.current?.focus();
  }, []);

  const goToPrev = useCallback(() => {
    setDetail((prev) => {
      const idx = places.findIndex((p) => p.name === prev?.name);
      return places[(idx - 1 + places.length) % places.length]!;
    });
  }, []);

  const goToNext = useCallback(() => {
    setDetail((prev) => {
      const idx = places.findIndex((p) => p.name === prev?.name);
      return places[(idx + 1) % places.length]!;
    });
  }, []);


  useEffect(() => {
    if (!detail) {
      wasOpenRef.current = false;
      return;
    }

    let focusTimer: number | undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!wasOpenRef.current) {
      focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);
      wasOpenRef.current = true;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDetail();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const nodes = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((n) => n.offsetParent !== null || n === document.activeElement);
      if (nodes.length === 0) return;

      const first = nodes[0]!;
      const last = nodes[nodes.length - 1]!;
      const current = document.activeElement as HTMLElement | null;

      if (!current || !panel.contains(current)) {
        e.preventDefault();
        first.focus();
        return;
      }
      if (e.shiftKey && current === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      if (focusTimer) window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [detail, closeDetail, goToPrev, goToNext]);




  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt={s.kicker}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 scrim-bottom" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 py-6 sm:px-8">
          {/* NAV */}
          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 text-sm">
            <span className="ring-dot font-display text-base font-bold tracking-[0.2em]">
              PAPUA
            </span>
            <div className="flex gap-5 text-muted-foreground sm:gap-10">
              {["Raja Ampat", "Baliem", "Sentani"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer transition-colors hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </nav>

          {/* TITLE + STEPPER */}
          <div className="mt-12 flex flex-1 flex-col justify-center gap-10 sm:mt-16">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-accent">
                  {slide.kicker}
                </p>
                <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
                  {slide.title[0]}
                  <br />
                  {slide.title[1]}
                </h1>
              </div>

              <div className="flex flex-col items-end gap-1 pt-4 font-display text-lg font-semibold sm:text-xl">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    aria-label={`Lihat ${s.kicker}`}
                    className={`flex items-center gap-3 transition-all ${
                      i === active
                        ? "scale-125 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.id}
                    <span
                      className={`h-px bg-primary transition-all ${
                        i === active ? "w-8 sm:w-16" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
              {slide.columns.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <button
              onClick={() => setActive((active + 1) % slides.length)}
              className="w-fit font-display text-lg font-bold tracking-wide transition-transform hover:translate-x-2"
            >
              SWIPE »
            </button>
          </div>

          <div className="mt-10 h-px w-full bg-border">
            <div
              className="h-px bg-primary transition-all duration-500"
              style={{ width: `${((active + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* DESTINASI */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-center text-sm text-muted-foreground">
          Temukan destinasi favoritmu
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold sm:text-3xl">
          di tanah timur Indonesia, Papua
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {places.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={(e) => openDetail(p, e.currentTarget)}
              aria-label={`Lihat detail ${p.name}`}
              className="group relative aspect-[3/4] overflow-hidden text-left"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 scrim-bottom" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                <h3 className="font-display text-base font-bold sm:text-lg">{p.rank}</h3>
                <p className="text-xs text-muted-foreground">{p.name}</p>
                <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Lihat detail
                </span>
              </div>
              <span className="absolute inset-0 border border-transparent transition-colors group-hover:border-primary" />
            </button>
          ))}

        </div>
      </section>

      {/* BAWAH LAUT */}
      <section className="relative overflow-hidden">
        <img
          src={reef}
          alt="Terumbu karang Raja Ampat"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              JELAJAHI DAN NIKMATI
              <br />
              LIBURANMU
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Segitiga Karang dunia berpusat di perairan Papua. Menyelam di sini berarti
              berenang di antara pari manta, penyu hijau, dan ribuan ikan karang yang
              tidak ditemukan di tempat lain.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-6 self-center">
            {[
              ["1.500+", "Pulau di Raja Ampat"],
              ["550", "Jenis karang"],
              ["1.400", "Spesies ikan"],
              ["4.884 m", "Puncak Jaya"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-primary pl-4">
                <dt className="font-display text-2xl font-bold sm:text-3xl">{value}</dt>
                <dd className="text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p className="ring-dot font-display tracking-[0.3em]">VISIT PAPUA</p>
        <p className="mt-3">Dibuat oleh Sofyan</p>
      </footer>

      <AnimatePresence>
        {detail && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={detail.name}
            onClick={closeDetail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <motion.div
              ref={panelRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[90svh] w-full max-w-3xl flex-col overflow-hidden border border-border bg-card shadow-2xl"
            >
              <motion.button
                type="button"
                ref={closeRef}
                onClick={closeDetail}
                aria-label="Tutup detail"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "backOut", delay: 0.15 }}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-border bg-background/70 font-display text-lg leading-none transition-colors hover:border-primary hover:text-primary"
              >
                ×
              </motion.button>

              <div className="min-h-0 flex-1 overflow-y-auto">
                <motion.div
                  key={detail.name}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                    },
                  }}
                >
                  <div className="relative h-48 overflow-hidden sm:h-64">
                    <motion.img
                      src={detail.image}
                      alt={detail.name}
                      variants={{
                        hidden: { opacity: 0, scale: 1.1 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 scrim-bottom" />
                    <motion.div
                      aria-live="polite"
                      aria-atomic="true"
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      className="absolute inset-x-0 bottom-0 p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-accent">
                        {detail.region}
                      </p>
                      <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
                        {detail.name}
                      </h3>
                    </motion.div>
                  </div>

                  <div className="space-y-6 p-5 sm:p-7">
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {detail.description}
                    </motion.p>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      className="grid gap-4 sm:grid-cols-2"
                    >
                      <div className="border-l border-primary pl-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Waktu terbaik
                        </p>
                        <p className="font-display text-base font-bold">{detail.best}</p>
                      </div>
                      <div className="border-l border-primary pl-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Akses
                        </p>
                        <p className="font-display text-base font-bold">{detail.access}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                      }}
                    >
                      <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Yang bisa dilakukan
                      </p>
                      <ul className="space-y-2 text-sm">
                        {detail.highlights.map((h) => (
                          <li key={h} className="ring-dot text-muted-foreground">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="border-t border-border bg-card p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Sebelumnya"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border border-border py-3 font-display text-sm font-bold tracking-wide transition-colors hover:border-primary hover:text-primary"
                  >
                    <span aria-hidden="true">←</span> SEBELUMNYA
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={goToNext}
                    aria-label="Berikutnya"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border border-border py-3 font-display text-sm font-bold tracking-wide transition-colors hover:border-primary hover:text-primary"
                  >
                    BERIKUTNYA <span aria-hidden="true">→</span>
                  </motion.button>
                </div>

                <motion.button
                  type="button"
                  onClick={closeDetail}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 w-full border border-border py-3 font-display text-sm font-bold tracking-wide transition-colors hover:border-primary hover:text-primary"
                >
                  TUTUP
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
