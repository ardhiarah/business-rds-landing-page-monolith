<?php

namespace App\Filament\Widgets;

use App\Models\ClientLogo;
use App\Models\GalleryImage;
use App\Models\ServiceItem;
use App\Models\ContactSubmission;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Pengguna', (string) User::count())
                ->icon('heroicon-o-user'),
            Stat::make('Logo Klien', (string) ClientLogo::count())
                ->icon('heroicon-o-building-office'),
            Stat::make('Galeri', (string) GalleryImage::count())
                ->icon('heroicon-o-photo'),
            Stat::make('Public Class', (string) ServiceItem::count())
                ->icon('heroicon-o-academic-cap'),
            Stat::make('Kontak', (string) ContactSubmission::count())
                ->icon('heroicon-o-inbox-arrow-down'),
        ];
    }
}
