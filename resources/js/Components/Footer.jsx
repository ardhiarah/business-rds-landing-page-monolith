export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} PT Raharja Duta Solusindo.
                    Semua hak dilindungi.
                </p>
            </div>
        </footer>
    );
}
