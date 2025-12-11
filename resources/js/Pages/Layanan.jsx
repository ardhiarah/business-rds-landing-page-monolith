import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import { useRef, useMemo } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import ContactForm from "../Components/ContactForm";
import { usePage, Link } from "@inertiajs/react";
import {
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
    Users,
    Calendar,
    BookOpen,
} from "lucide-react";

export default function Layanan() {
    const { schedules = [], events = [] } = usePage().props;
    const sLgRef = useRef(null);
    const eLgRef = useRef(null);

    const toStorageUrl = (p) => {
        if (!p) return null;
        if (p.startsWith("http://") || p.startsWith("https://")) return p;
        if (p.startsWith("/storage/")) return p;
        return "/storage/" + encodeURI(p);
    };

    const gridClass = (count) => {
        if (count <= 1) return "grid grid-cols-1";
        if (count === 2) return "grid gap-6 sm:grid-cols-2";
        if (count === 3) return "grid gap-6 sm:grid-cols-2 md:grid-cols-3";
        if (count >= 4) return "grid gap-6 sm:grid-cols-2 md:grid-cols-4";
        return "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    };

    const sGalleryItems = useMemo(
        () =>
            schedules
                .map((item, idx) => ({
                    idx,
                    url: toStorageUrl(item.image_url),
                    caption: item.caption || "",
                }))
                .filter((x) => !!x.url),
        [schedules]
    );
    const sIndexMap = useMemo(
        () => new Map(sGalleryItems.map((g, j) => [g.idx, j])),
        [sGalleryItems]
    );

    const eGalleryItems = useMemo(
        () =>
            events
                .map((item, idx) => ({
                    idx,
                    url: toStorageUrl(item.image_url),
                    caption: item.caption || "",
                }))
                .filter((x) => !!x.url),
        [events]
    );
    const eIndexMap = useMemo(
        () => new Map(eGalleryItems.map((g, j) => [g.idx, j])),
        [eGalleryItems]
    );

    return (
        <SiteLayout>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-slate-800 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        Layanan Profesional
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        Solusi Kompetensi <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                            Terintegrasi
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Kami menyediakan program pelatihan komprehensif mulai
                        dari persiapan sertifikasi, refreshment, hingga
                        pengembangan soft skill untuk eksekutif perbankan.
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-6 py-16 bg-white dark:bg-slate-950">
                {/* CORE SERVICES */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Program Utama
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Dirancang khusus untuk memenuhi standar kompetensi
                            regulator (BI & OJK) dan kebutuhan industri.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Service 1 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Sertifikasi Manajemen Risiko
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Training intensif untuk persiapan ujian Level
                                1–5 (LSPP/BSMR). Tingkat kelulusan terbukti
                                tinggi.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                                <BookOpen className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Executive Refreshment
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Seminar dan workshop untuk memperpanjang masa
                                berlaku sertifikat dengan topik-topik terkini.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Users className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Soft Skill & Leadership
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Pengembangan karakter dan kemampuan manajerial:
                                Leadership, Negotiation, Selling Skill, Service
                                Excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ADDITIONAL PROGRAMS */}
                <section className="mb-20">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Layanan Konsultasi & In-House
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    Selain public class, kami menyediakan
                                    layanan in-house training yang disesuaikan
                                    dengan budaya dan kebutuhan spesifik
                                    perusahaan Anda.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Consulting (Free of Charge) untuk pengelolaan database sertifikasi",
                                        "Training Treasury, Credit, & Audit",
                                        "General Banking & Compliance",
                                        "Try Out & Bank Soal (2000+ butir)",
                                    ].map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 dark:text-slate-200">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid gap-6">
                                <Card className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Fasilitas Lengkap
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 dark:text-slate-400 text-sm">
                                        Modul materi komprehensif, latihan soal
                                        intensif, sertifikat, dan laporan
                                        evaluasi peserta.
                                    </CardContent>
                                </Card>
                                <Card className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Trainer Praktisi
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 dark:text-slate-400 text-sm">
                                        Didampingi oleh praktisi yang masih
                                        aktif menjabat di perbankan
                                        nasional/multinasional.
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SCHEDULE & EVENTS */}
                <div className="space-y-20">
                    {/* Schedule Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Calendar className="w-8 h-8 text-purple-600" />
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                Jadwal Training
                            </h2>
                        </div>

                        {schedules.length === 0 ? (
                            <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-500 italic">
                                    Belum ada jadwal yang ditampilkan saat ini.
                                </p>
                            </div>
                        ) : (
                            <div className={gridClass(schedules.length)}>
                                {schedules.map((item, i) => {
                                    const url = toStorageUrl(item.image_url);
                                    return (
                                        <div
                                            key={item.id}
                                            className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
                                        >
                                            <div className="relative aspect-[3/4] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                                {url ? (
                                                    <a
                                                        href={url}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const gi =
                                                                sIndexMap.get(
                                                                    i
                                                                );
                                                            if (
                                                                gi !== undefined
                                                            )
                                                                sLgRef.current?.openGallery(
                                                                    gi
                                                                );
                                                        }}
                                                        className="block h-full w-full"
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={
                                                                item.caption ||
                                                                "Schedule"
                                                            }
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-slate-400">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            {item.caption && (
                                                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                                                        {item.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>

                    {/* Events Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <TrendingUp className="w-8 h-8 text-amber-600" />
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                Event Terbaru
                            </h2>
                        </div>

                        {events.length === 0 ? (
                            <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-500 italic">
                                    Belum ada event yang ditampilkan saat ini.
                                </p>
                            </div>
                        ) : (
                            <div className={gridClass(events.length)}>
                                {events.map((item, i) => {
                                    const url = toStorageUrl(item.image_url);
                                    return (
                                        <div
                                            key={item.id}
                                            className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all"
                                        >
                                            <div className="relative aspect-[3/4] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                                {url ? (
                                                    <a
                                                        href={url}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const gi =
                                                                eIndexMap.get(
                                                                    i
                                                                );
                                                            if (
                                                                gi !== undefined
                                                            )
                                                                eLgRef.current?.openGallery(
                                                                    gi
                                                                );
                                                        }}
                                                        className="block h-full w-full"
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={
                                                                item.caption ||
                                                                "Event"
                                                            }
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-slate-400">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            {item.caption && (
                                                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                                                        {item.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-24">
                    <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 sm:px-16 sm:py-24 shadow-2xl">
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Siap untuk Memulai?
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
                                Hubungi kami untuk penawaran training in-house
                                atau informasi jadwal public class terbaru.
                            </p>
                            <div className="mt-10 bg-white dark:bg-slate-900 p-6 rounded-xl text-left shadow-lg border border-slate-200 dark:border-slate-800">
                                <ContactForm />
                            </div>
                        </div>
                        {/* Decor */}
                        <div
                            className="absolute -top-24 left-0 -z-10 transform-gpu blur-3xl"
                            aria-hidden="true"
                        >
                            <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"></div>
                        </div>
                    </div>
                </section>

                <LightGallery
                    onInit={(detail) => {
                        sLgRef.current = detail.instance;
                    }}
                    dynamic
                    dynamicEl={sGalleryItems.map((g) => ({
                        src: g.url,
                        thumb: g.url,
                        subHtml: g.caption,
                    }))}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    download={false}
                    showThumbByDefault={true}
                />
                <LightGallery
                    onInit={(detail) => {
                        eLgRef.current = detail.instance;
                    }}
                    dynamic
                    dynamicEl={eGalleryItems.map((g) => ({
                        src: g.url,
                        thumb: g.url,
                        subHtml: g.caption,
                    }))}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    download={false}
                    showThumbByDefault={true}
                />
            </main>
        </SiteLayout>
    );
}
