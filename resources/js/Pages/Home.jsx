import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import { Button } from "../Components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import ContactForm from "../Components/ContactForm";
import { Link, usePage } from "@inertiajs/react";
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react"; // Pastikan install lucide-react jika belum

export default function Home() {
    const { clientLogos = [] } = usePage().props;

    return (
        <SiteLayout>
            {/* HERO SECTION: Menggunakan Gradient & Layout yang lebih kuat */}
            <section className="relative overflow-hidden bg-slate-950 text-white">
                {/* Background Pattern Abstrak (Opsional untuk estetika) */}
                <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-purple-600 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-indigo-600 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-32">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative z-10">
                            <Badge className="mb-6 bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border-purple-500/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                                #1 Mitra Manajemen Risiko
                            </Badge>
                            <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                                Solusi Cerdas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                                    Sertifikasi Perbankan
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                                PT Raharja Duta Solusindo (RDS) membantu
                                institusi keuangan meningkatkan kompetensi
                                manajemen risiko dengan tingkat kelulusan
                                sertifikasi yang terbukti tinggi.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href="/layanan">
                                    <Button
                                        size="lg"
                                        className="bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-lg shadow-purple-900/20 h-12 px-8 text-base"
                                    >
                                        Lihat Layanan Kami
                                    </Button>
                                </Link>
                                <Link href="/tentang">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white h-12 px-8 text-base"
                                    >
                                        Tentang RDS
                                    </Button>
                                </Link>
                            </div>

                            {/* Statistik Highlight dalam Hero */}
                            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        95%+
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        Tingkat Kelulusan
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        25+
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        Mitra Bank
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        18k+
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        Alumni Peserta
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Hero dengan Frame Modern */}
                        <div className="relative hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                                <img
                                    src="/images/rds-sona-topas-tower.png"
                                    alt="RDS Office Sona Topas Tower"
                                    className="h-full w-full object-cover transform hover:scale-105 transition duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                        <ShieldCheck className="w-5 h-5 text-green-400" />
                                        <span>Trusted Risk Partner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WELCOME SECTION: Menggunakan Layout Asimetris & Icon */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                                Mengapa Memilih <br />
                                <span className="text-purple-600">
                                    Raharja Duta Solusindo?
                                </span>
                            </h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                Kami bukan sekadar penyelenggara training. Kami
                                adalah mitra strategis yang memastikan tim Anda
                                tidak hanya lulus ujian, tetapi benar-benar
                                memahami esensi Manajemen Risiko sesuai regulasi
                                Bank Indonesia & OJK.
                            </p>
                            <ul className="mt-8 space-y-4">
                                {[
                                    "Keputusan cepat (Owner as Marketer)",
                                    "Metode ramah peserta & Bank Soal up-to-date",
                                    "Trainer Praktisi Profesional",
                                    "Harga kompetitif dengan kualitas premium",
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-200">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Card className="h-fit bg-slate-50 dark:bg-slate-900 border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <TrendingUp className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle className="text-xl">
                                        Result Oriented
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-slate-600 dark:text-slate-400">
                                    Fokus utama kami adalah pemahaman mendalam
                                    yang menghasilkan kelulusan ujian 100%.
                                </CardContent>
                            </Card>
                            <Card className="h-fit bg-slate-50 dark:bg-slate-900 border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <Users className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle className="text-xl">
                                        Expert Support
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-slate-600 dark:text-slate-400">
                                    Didukung oleh supporting officer yang
                                    helpful dan berpengalaman menangani ribuan
                                    peserta.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW: Card dengan Hover Effect yang lebih baik */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 border-purple-600 text-purple-600"
                        >
                            Layanan Unggulan
                        </Badge>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Program Komprehensif
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            Dari persiapan ujian hingga level eksekutif, kami
                            menyediakan kurikulum terbaik.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Service 1 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Sertifikasi Manajemen Risiko
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Pembekalan ujian Level 1–5 (LSPP/BSMR). Garansi
                                pemahaman dengan simulasi latihan soal intensif.
                            </p>
                            <Link
                                href="/layanan"
                                className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                            >
                                Selengkapnya <span>&rarr;</span>
                            </Link>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                                <TrendingUp className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Executive Refreshment
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Seminar eksklusif dengan pembicara level
                                nasional untuk memperpanjang masa berlaku
                                sertifikat.
                            </p>
                            <Link
                                href="/layanan"
                                className="text-amber-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                            >
                                Selengkapnya <span>&rarr;</span>
                            </Link>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Users className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                Soft Skill & Leadership
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Pengembangan SDM perbankan meliputi Selling
                                Skill, Negotiation, hingga Customer Service
                                Excellence.
                            </p>
                            <Link
                                href="/layanan"
                                className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                            >
                                Selengkapnya <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLIENT SECTION: Logo Grid yang lebih rapi */}
            <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Dipercaya Oleh
                        </h2>
                        <Link
                            href="/klien"
                            className="text-purple-600 font-medium hover:underline"
                        >
                            Lihat Semua Klien
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70 hover:opacity-100 transition-opacity">
                        {clientLogos.slice(0, 6).map((logo) => (
                            <div
                                key={logo.id || Math.random()}
                                className="flex items-center justify-center h-20 border border-slate-100 rounded-lg p-4 grayscale hover:grayscale-0 transition-all"
                            >
                                {logo.logo_url ? (
                                    <img
                                        src={logo.logo_url}
                                        alt={logo.name}
                                        className="max-h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-xs text-slate-400 font-semibold">
                                        {logo.name || "CLIENT LOGO"}
                                    </span>
                                )}
                            </div>
                        ))}
                        {/* Fallback jika logo kosong, hapus di production */}
                        {clientLogos.length === 0 &&
                            Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center h-20 border border-slate-100 rounded-lg bg-slate-50 text-slate-400 font-bold text-sm"
                                >
                                    LOGO BANK
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION: Footer Call to Action yang kuat */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Siap Meningkatkan Kompetensi Tim Anda?
                    </h2>
                    <p className="text-slate-300 mb-10 text-lg">
                        Hubungi kami untuk konsultasi jadwal training in-house
                        atau public class yang sesuai dengan kebutuhan institusi
                        Anda.
                    </p>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl text-left max-w-xl mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
