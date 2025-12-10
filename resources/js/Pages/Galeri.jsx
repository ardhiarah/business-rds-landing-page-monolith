import SiteLayout from "../Layouts/SiteLayout";
import { Badge } from "../Components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../Components/ui/card";
import { usePage } from "@inertiajs/react";

export default function Galeri() {
    const { items = [] } = usePage().props;

    return (
        <SiteLayout>
            <main className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex items-center justify-between">
                    <div>
                        <Badge>Galeri</Badge>
                        <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
                            Dokumentasi Kegiatan
                        </h1>
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                            Cuplikan kegiatan refreshment, seminar, dan
                            pembekalan RDS bersama berbagai bank di Indonesia.
                        </p>
                    </div>
                </div>

                <section className="mt-10">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        {items.map((item) => (
                            <Card key={item.id} className="overflow-hidden">
                                <div className="h-40 w-full bg-neutral-100 dark:bg-neutral-900">
                                    {item.image_url ? (
                                        <img
                                            src={item.image_url}
                                            alt={
                                                item.caption || "Foto Kegiatan"
                                            }
                                            className="size-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src="/window.svg"
                                            alt="Foto Kegiatan"
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:invert"
                                        />
                                    )}
                                </div>
                                {/* <CardHeader>
                                        <CardTitle>Foto Kegiatan</CardTitle>
                                    </CardHeader> */}
                                <CardContent className="text-center font-semibold text-sm text-neutral-600 dark:text-neutral-400">
                                    {item.caption || ""}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
