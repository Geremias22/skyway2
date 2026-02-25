<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SavedGuideController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Público (sin login)
Route::get('/', fn () => Inertia::render('Home'))->name('home');

Route::get('/flights', fn () => Inertia::render('Flights/Index'))->name('flights.index');
Route::get('/hotels', fn () => Inertia::render('Hotels/Index'))->name('hotels.index');
Route::get('/activities', fn () => Inertia::render('Activities/Index'))->name('activities.index');
Route::get('/cars', fn () => Inertia::render('Cars/Index'))->name('cars.index');

// Acciones privadas (aunque la página sea pública)
Route::post('/saved-guides', [SavedGuideController::class, 'store'])
    ->middleware('auth')
    ->name('saved.store');

// Área privada
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/saved', fn () => Inertia::render('Saved/Index'))->name('saved.index');
    Route::get('/settings', fn () => Inertia::render('Settings/Index'))->name('settings.index');
});

// Perfil (Breeze suele usar solo auth)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin
Route::middleware(['auth', 'verified', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/panel', fn () => Inertia::render('Admin/Panel'))->name('panel');
    });

require __DIR__.'/auth.php';
