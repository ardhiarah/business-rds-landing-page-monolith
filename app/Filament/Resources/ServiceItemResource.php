<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ServiceItemResource\Pages;
use App\Models\ServiceItem;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ServiceItemResource extends Resource
{
    protected static ?string $model = ServiceItem::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';
    protected static ?string $navigationGroup = 'Layanan';
    protected static ?int $navigationSort = 10;

    public static function getNavigationLabel(): string
    {
        return 'Public Class';
    }

    public static function getModelLabel(): string
    {
        return 'Public Class';
    }

    public static function getPluralModelLabel(): string
    {
        return 'Public Class';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Layanan')
                    ->schema([
                        Forms\Components\FileUpload::make('image_path')
                            ->image()
                            ->directory('services')
                            ->imageEditor()
                            ->required(),
                        Forms\Components\Select::make('type')
                            ->options([
                                'schedule' => 'Schedule',
                                'event' => 'Event',
                            ])
                            ->required(),
                        Forms\Components\TextInput::make('caption')->maxLength(255),
                        Forms\Components\Toggle::make('is_published')->label('Publish')->default(true),
                    ])
                    ->columns(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')->label('Gambar')->square(),
                Tables\Columns\BadgeColumn::make('type')
                    ->label('Tipe')
                    ->colors([
                        'primary' => 'schedule',
                        'success' => 'event',
                    ]),
                Tables\Columns\TextColumn::make('caption')->limit(30),
                Tables\Columns\IconColumn::make('is_published')->boolean(),
                Tables\Columns\TextColumn::make('sort_order')->label('Urutan')->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'schedule' => 'Schedule',
                        'event' => 'Event',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->reorderable('sort_order')
            ->headerActions([
                Tables\Actions\Action::make('bulkUpload')
                    ->label('Bulk Upload')
                    ->form([
                        Forms\Components\Select::make('type')
                            ->label('Tipe')
                            ->options([
                                'schedule' => 'Schedule',
                                'event' => 'Event',
                            ])
                            ->required(),
                        Forms\Components\FileUpload::make('images')
                            ->image()
                            ->multiple()
                            ->appendFiles()
                            ->preserveFilenames()
                            ->directory('services')
                            ->required(),
                    ])
                    ->action(function (array $data) {
                        $paths = $data['images'] ?? [];
                        $type = $data['type'] ?? null;
                        $start = (int) ServiceItem::max('sort_order');
                        $order = $start;

                        foreach ($paths as $path) {
                            $order++;
                            ServiceItem::create([
                                'image_path' => $path,
                                'type' => $type,
                                'caption' => null,
                                'is_published' => true,
                                'sort_order' => $order,
                            ]);
                        }
                    }),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServiceItems::route('/'),
            'create' => Pages\CreateServiceItem::route('/create'),
            'edit' => Pages\EditServiceItem::route('/{record}/edit'),
        ];
    }
}
