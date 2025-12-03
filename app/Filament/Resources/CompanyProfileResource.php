<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CompanyProfileResource\Pages;
use App\Filament\Resources\CompanyProfileResource\RelationManagers;
use App\Models\CompanyProfile;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CompanyProfileResource extends Resource
{
    protected static ?string $model = CompanyProfile::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Profil')
                    ->schema([
                        Forms\Components\TextInput::make('company_name')->required()->maxLength(255),
                        Forms\Components\TextInput::make('tagline')->maxLength(255),
                        Forms\Components\Textarea::make('about')->rows(5),
                    ])
                    ->columns(1),
                Forms\Components\Section::make('Kontak')
                    ->schema([
                        Forms\Components\Textarea::make('address')->rows(3),
                        Forms\Components\TextInput::make('phone')->maxLength(255),
                        Forms\Components\TextInput::make('email')->email()->maxLength(255),
                    ])
                    ->columns(1),
                Forms\Components\Section::make('Media & Sosial')
                    ->schema([
                        Forms\Components\FileUpload::make('hero_image')
                            ->image()
                            ->directory('company')
                            ->imageEditor(),
                        Forms\Components\TextInput::make('facebook_url')->url()->maxLength(255),
                        Forms\Components\TextInput::make('instagram_url')->url()->maxLength(255),
                        Forms\Components\TextInput::make('linkedin_url')->url()->maxLength(255),
                    ])
                    ->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('company_name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('tagline')->limit(30),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCompanyProfiles::route('/'),
            'create' => Pages\CreateCompanyProfile::route('/create'),
            'edit' => Pages\EditCompanyProfile::route('/{record}/edit'),
        ];
    }
}
