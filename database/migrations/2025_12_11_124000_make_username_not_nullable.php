<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // Isi username yang masih NULL agar unik sebelum dijadikan NOT NULL
        DB::table('users')->whereNull('username')->orderBy('id')->chunkById(100, function ($users) {
            foreach ($users as $u) {
                $base = 'user_' . $u->id;
                $username = $base;

                // Pastikan unik bila ada bentrok tak terduga
                $suffix = 0;
                while (DB::table('users')->where('username', $username)->exists()) {
                    $suffix++;
                    $username = $base . '_' . $suffix;
                }

                DB::table('users')->where('id', $u->id)->update(['username' => $username]);
            }
        });

        // Jadikan kolom NOT NULL
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->unique()->nullable(false)->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->unique()->nullable()->change();
        });
    }
};
