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
import { usePage } from "@inertiajs/react";

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
            <main className="mx-auto max-w-6xl px-6 py-12">
                <div>
                    <Badge>Layanan</Badge>
                    <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                        Layanan Utama
                    </h1>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        Program pelatihan dan pembekalan sertifikasi Manajemen
                        Risiko untuk berbagai level.
                    </p>
                </div>
                <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-4">
                        <h3 className="font-semibold">
                            Refreshment Manajemen Risiko
                        </h3>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Program penyegaran kebijakan dan praktik terbaru
                            bagi karyawan perbankan.
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-4">
                        <h3 className="font-semibold">
                            Pembekalan Ujian Sertifikasi
                        </h3>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Materi komprehensif dan latihan soal up to date
                            untuk persiapan efektif.
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-4">
                        <h3 className="font-semibold">
                            Try Out &amp; Bank Soal
                        </h3>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Simulasi dan akses bank soal 2.000 butir untuk
                            meningkatkan kepercayaan diri.
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-300 dark:border-slate-700 p-4">
                        <h3 className="font-semibold">
                            Training Non-Risiko &amp; Soft Skill
                        </h3>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Leadership, selling skill, negotiation, dan customer
                            service.
                        </p>
                    </div>
                </section>

                <div className="mt-12 flex items-center justify-between">
                    <div>
                        <Badge>Program</Badge>
                        <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                            Program RDS
                        </h1>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Training pembekalan sertifikasi Manajemen Risiko,
                            seminar/refreshment, konsultasi, dan program
                            non-risiko serta soft skill.
                        </p>
                    </div>
                </div>
                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Training Sertifikasi Manajemen Risiko (Level
                                1–5)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Training pembekalan ujian ke LSPP atau BSMR dengan
                            tujuan utama: paham dan lulus ujian. Didampingi
                            Trainer Praktisi Perbankan berpengalaman sebagai
                            trainer sekaligus pejabat bank. Tingkat kelulusan
                            rata-rata 95%–100%.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Seminar/Refreshment Manajemen Risiko
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Program perpanjangan masa berlaku sertifikat
                            Manajemen Risiko ke LSPP/BSMR. Pembicara: ekonom
                            handal, direksi bank asing/swasta/BPD, mantan
                            direksi BUMN, pimpinan LKB, mantan menteri. Topik:
                            Strategic Risk, Credit Risk, Operational Risk,
                            FINTECH.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Consulting (Free of Charge)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Advisor pengelolaan database pemegang sertifikat,
                            pengingat refreshment agar masa berlaku tidak
                            kadaluarsa, penjadwalan. Membantu Divisi Learning
                            Center memenuhi KPI.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Training Bidang Lain</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Treasury Dealer, Credit, Funding &amp; Services,
                            Operational, Internal Audit, General Banking,
                            Compliance.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Training Soft Skill</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Leadership, Selling Skill, Negotiation Skill,
                            Customer Services.
                        </CardContent>
                    </Card>
                </section>

                <div className="mt-12">
                    <Badge>Class</Badge>
                    <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                        Public Class
                    </h1>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        Program pelatihan dan pembekalan sertifikasi Manajemen
                        Risiko untuk berbagai level.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            Schedule
                        </h2>
                        {schedules.length === 0 ? (
                            <div className="italic mt-4 text-neutral-600 dark:text-neutral-400">
                                Belum ada schedule yang tersedia.
                            </div>
                        ) : (
                            <div
                                className={`mt-4 ${gridClass(
                                    schedules.length
                                )}`}
                            >
                                {schedules.map((item, i) => {
                                    const url = toStorageUrl(item.image_url);
                                    const tall = schedules.length === 1;
                                    const h = tall ? "h-80 sm:h-96" : "h-40";
                                    return (
                                        <div
                                            key={item.id}
                                            className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700"
                                        >
                                            <div
                                                className={`relative ${h} w-full bg-neutral-100 dark:bg-neutral-900`}
                                            >
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
                                                            ) {
                                                                sLgRef.current?.openGallery(
                                                                    gi
                                                                );
                                                            }
                                                        }}
                                                        className="block"
                                                        aria-label={
                                                            item.caption ||
                                                            "Schedule"
                                                        }
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={
                                                                item.caption ||
                                                                "Schedule"
                                                            }
                                                            className={`w-full ${h} object-cover`}
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-neutral-500">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            {item.caption && (
                                                <p className="text-sm text-center text-neutral-700 dark:text-neutral-300 p-3">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            Event
                        </h2>
                        {events.length === 0 ? (
                            <div className="italic mt-4 text-neutral-600 dark:text-neutral-400">
                                Belum ada event yang tersedia.
                            </div>
                        ) : (
                            <div className={`mt-4 ${gridClass(events.length)}`}>
                                {events.map((item, i) => {
                                    const url = toStorageUrl(item.image_url);
                                    const tall = events.length === 1;
                                    const h = tall ? "h-80 sm:h-96" : "h-40";
                                    return (
                                        <div
                                            key={item.id}
                                            className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700"
                                        >
                                            <div
                                                className={`relative ${h} w-full bg-neutral-100 dark:bg-neutral-900`}
                                            >
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
                                                            ) {
                                                                eLgRef.current?.openGallery(
                                                                    gi
                                                                );
                                                            }
                                                        }}
                                                        className="block"
                                                        aria-label={
                                                            item.caption ||
                                                            "Event"
                                                        }
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={
                                                                item.caption ||
                                                                "Event"
                                                            }
                                                            className={`w-full ${h} object-cover`}
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-neutral-500">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            {item.caption && (
                                                <p className="text-sm text-center text-neutral-700 dark:text-neutral-300 p-3">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>
                </div>

                <section className="mt-20">
                    <h2 className="text-2xl text-center font-semibold text-black dark:text-white">
                        Tertarik dengan Layanan Ini?
                    </h2>
                    <p className="mt-2 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
                        Isi formulir untuk konsultasi jadwal dan penawaran yang
                        sesuai kebutuhan institusi Anda.
                    </p>
                    <div className="mt-6">
                        <ContactForm />
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
