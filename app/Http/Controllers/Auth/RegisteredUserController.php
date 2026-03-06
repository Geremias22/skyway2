<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', /* Password rules */],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // 1) Rol por defecto (si usas Spatie)
        if (method_exists($user, 'assignRole')) {
            $user->assignRole('user');
        }

        // 2) Preferencias por defecto
        $user->preferences()->create([
            'currency' => 'EUR',
            'interests' => [],
            'vibes' => [],
            'budget_min' => null,
            'budget_max' => null,
            'home_airport_iata' => null,
        ]);

        event(new Registered($user));
        Auth::login($user);

        return redirect()->intended(route('home'));
    }
}
