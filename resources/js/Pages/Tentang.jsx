import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";

export default function Tentang() {
    return (
        <SiteLayout>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
                <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-indigo-900 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        Tentang Kami
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        Membangun Kompetensi <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                            Profesional Perbankan
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        PT Raharja Duta Solusindo (RDS) hadir sebagai mitra
                        strategis dalam pengembangan sumber daya manusia di
                        sektor keuangan, dengan fokus pada integritas, kualitas,
                        dan hasil nyata.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="mx-auto max-w-6xl px-6 py-16 bg-white dark:bg-slate-950">
                {/* Intro Section */}
                <section className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            Profil Perusahaan
                        </h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                            <p>
                                PT Raharja Duta Solusindo (RDS) adalah lembaga
                                training yang didirikan oleh para praktisi
                                berpengalaman. Kami menggabungkan keahlian dari
                                dunia perbankan multinasional, BUMN, hingga
                                lembaga sertifikasi profesi.
                            </p>
                            <p>
                                Didirikan oleh <strong>Soeyamto, SE</strong>{" "}
                                (Praktisi Perbankan & LSPP) dan{" "}
                                <strong>Ratih Dewi, S.Sos, MM</strong> (Praktisi
                                Telekomunikasi & LSPP), RDS membawa standar
                                tinggi dalam setiap program pelatihannya.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                            <CardHeader>
                                <CardTitle className="text-purple-700 dark:text-purple-400">
                                    Pengalaman
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-600 dark:text-slate-400">
                                Melayani lebih dari 20 bank (Asing, BUMN,
                                Swasta, BPD) sejak 2016.
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                            <CardHeader>
                                <CardTitle className="text-purple-700 dark:text-purple-400">
                                    Kualitas
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-600 dark:text-slate-400">
                                Tingkat kelulusan 95%-100% untuk ujian
                                sertifikasi Manajemen Risiko.
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Visi Misi */}
                <section className="mt-20">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
                            <h3 className="text-2xl font-bold mb-4">
                                Visi Kami
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Menjadi partner terpercaya dan{" "}
                                <em>problem solver</em> utama dalam pembekalan
                                ujian, refreshment, dan training perbankan di
                                Indonesia.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Misi Kami
                            </h3>
                            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold">
                                        •
                                    </span>
                                    Membantu kelulusan ujian sertifikasi hingga
                                    100%.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold">
                                        •
                                    </span>
                                    Mendukung pemenuhan regulasi Bank Indonesia
                                    & OJK.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 font-bold">
                                        •
                                    </span>
                                    Menjalin sinergi erat dengan BSMR dan LSPP.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="mt-20">
                    <div className="text-center mb-12">
                        <Badge
                            variant="outline"
                            className="mb-3 border-purple-600 text-purple-600"
                        >
                            Leadership
                        </Badge>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Dewan Direksi
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        <Card className="overflow-hidden border-0 shadow-lg group">
                            <div className="relative h-80 overflow-hidden bg-slate-200">
                                <img
                                    src="/images/komisaris-rds.jpg"
                                    alt="Soeyamto, SE"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <p className="font-bold text-xl">
                                        Soeyamto, SE
                                    </p>
                                    <p className="text-sm text-slate-300 uppercase tracking-wider">
                                        Komisaris Utama
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-0 shadow-lg group">
                            <div className="relative h-80 overflow-hidden bg-slate-200">
                                <img
                                    src="/images/direktur-rds.jpg"
                                    alt="Ratih Dewi, S.Sos, MM"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <p className="font-bold text-xl">
                                        Ratih Dewi, S.Sos, MM
                                    </p>
                                    <p className="text-sm text-slate-300 uppercase tracking-wider">
                                        Direktur Utama
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Timeline */}
                <section className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-16">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                        Jejak Langkah
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-0 space-y-12">
                            {[
                                {
                                    year: "Januari 2016",
                                    title: "Awal Perjalanan",
                                    desc: "Mulai melayani bank dan lembaga keuangan di Indonesia dengan visi meningkatkan kompetensi SDM.",
                                },
                                {
                                    year: "April 2019",
                                    title: "Pertumbuhan Pesat",
                                    desc: "Dipercaya oleh 20 bank besar (Asing, BUMN, BPD) sebagai mitra training utama.",
                                },
                                {
                                    year: "Capaian Signifikan",
                                    title: "Ribuan Alumni",
                                    desc: "Mencetak 2.022 peserta sertifikasi dengan kelulusan >95% dan 8.500+ peserta refreshment.",
                                },
                                {
                                    year: "Sekarang",
                                    title: "Ekspansi Layanan",
                                    desc: "Mengembangkan modul Soft Skill & Leadership untuk solusi SDM yang lebih holistik.",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-8 md:pl-12"
                                >
                                    <span className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-purple-600 shadow-sm" />
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {item.year}
                                    </h3>
                                    <p className="font-semibold text-purple-600">
                                        {item.title}
                                    </p>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
