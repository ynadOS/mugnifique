<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $role)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Non autorisé'], 401);
        }

        $user = Auth::user();

        // Vérifier le rôle
        if ($role === 'admin' && !$user->hasRole('admin')) {
            return abort(403);
        }

        return $next($request);
    }
}
