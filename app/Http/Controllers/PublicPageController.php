<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Models\GalleryImage;
use App\Models\ClientLogo;

class PublicPageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function layanan()
    {
        return Inertia::render('Layanan');
    }

    public function kontak()
    {
        return Inertia::render('Kontak');
    }

    public function submitContact(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email',
            'institusi' => 'nullable|string|max:255',
            'pesan' => 'required|string',
        ]);

        Log::info('Contact form submission', $data);

        return response()->json(['ok' => true]);
    }

    public function galeri()
    {
        $items = GalleryImage::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function ($img) {
                return [
                    'id' => $img->id,
                    'image_url' => url(Storage::url($img->image_path)),
                    'caption' => $img->caption,
                ];
            })
            ->values();

        return Inertia::render('Galeri', [
            'items' => $items,
        ]);
    }

    public function klien()
    {
        $items = ClientLogo::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function ($client) {
                return [
                    'id' => $client->id,
                    'logo_url' => url(Storage::url($client->logo_path)),
                    'name' => $client->name,
                ];
            })
            ->values();

        return Inertia::render('Klien', [
            'items' => $items,
        ]);
    }

    public function program()
    {
        return Inertia::render('Program');
    }

    public function tentang()
    {
        return Inertia::render('Tentang');
    }
}

