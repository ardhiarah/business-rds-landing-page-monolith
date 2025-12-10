export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    © {new Date().getFullYear()} PT Raharja Duta Solusindo.
                    Semua hak dilindungi.
                </p>
            </div>
        </footer>
    );
}
