import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import ContactForm from "../Components/ContactForm";
import { CheckCircle2, BookOpen, Users, TrendingUp } from "lucide-react";

export default function Program() {
    return (
        <SiteLayout>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
                <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-900 opacity-20 blur-3xl filter" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-900 opacity-20 blur-3xl filter" />

                <div className="relative mx-auto max-w-6xl px-6 text-center">
                    <Badge className="mb-6 bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 border-purple-700/50 px-4 py-1.5 text-sm uppercase tracking-wider">
                        Kurikulum & Silabus
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl text-white">
                        Program Pendidikan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                            Berkualitas Tinggi
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Kami menyusun kurikulum yang relevan dengan standar
                        industri perbankan modern, memastikan setiap peserta
                        memiliki kompetensi yang unggul.
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-6 py-16 bg-white dark:bg-slate-950">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Program 1 */}
                    <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg transition-all">
                        <CardHeader className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-purple-600" />
                                </div>
                                <CardTitle className="text-xl text-slate-900 dark:text-white">
                                    Training Pembekalan Ujian SMR
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                Program intensif untuk persiapan ujian
                                sertifikasi Level 1–5.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                                    Target Kelulusan 100%
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                                    Materi LSPP & BSMR
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                                    Try Out Berbasis Komputer
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Program 2 */}
                    <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg transition-all">
                        <CardHeader className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-amber-600" />
                                </div>
                                <CardTitle className="text-xl text-slate-900 dark:text-white">
                                    Seminar & Refreshment
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                Update pengetahuan terkini untuk perpanjangan
                                sertifikat.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500" />{" "}
                                    Topik Strategic Risk
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500" />{" "}
                                    Topik Credit & Operational Risk
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500" />{" "}
                                    Pembicara Level Eksekutif
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                    {/* Program 3 */}
                    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg text-purple-700 dark:text-purple-400">
                                Consulting Services
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Advisor pengelolaan database pemegang
                                sertifikat, pengingat kadaluarsa, dan strategi
                                pemenuhan KPI Learning Center. (Free of Charge
                                untuk mitra).
                            </p>
                        </CardContent>
                    </Card>

                    {/* Program 4 */}
                    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg text-purple-700 dark:text-purple-400">
                                General Banking
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Pelatihan teknis mencakup Treasury Dealer,
                                Credit Analysis, Funding & Services,
                                Operational, Internal Audit, hingga Compliance.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Program 5 */}
                    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg text-purple-700 dark:text-purple-400">
                                Soft Skill Development
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Membangun karakter SDM melalui Leadership,
                                Selling Skill, Negotiation Skill, dan Customer
                                Service Excellence.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <section className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-slate-900 z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Butuh Proposal Lengkap?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                            Kami siap mengirimkan silabus detail dan penawaran
                            harga terbaik untuk institusi Anda.
                        </p>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl text-left max-w-lg mx-auto shadow-2xl">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
