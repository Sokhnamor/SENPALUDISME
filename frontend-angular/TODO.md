# Auth Implementation Plan

## Steps:
- [x] 1. Create frontend-angular/src/app/core/models/user.model.ts
- [x] 2. Create frontend-angular/src/app/core/services/auth.service.ts
- [x] 3. Create frontend-angular/src/app/core/guards/auth.guard.ts
- [x] 4. Edit backend-laravel/app/Http/Controllers/Api/AuthController.php (add logout)
- [x] 5. Edit backend-laravel/routes/api.php (add /auth/logout)
- [x] 6. Edit frontend-angular/src/app/app.routes.ts (protect routes with authGuard)
- [x] 7. Edit frontend-angular/src/app/app.ts (add HttpClient providers)
- [x] 8. Edit frontend-angular/src/app/nav/nav.ts (show user info, logout)
- [x] Test: login via Postman, ng serve, check guard redirects.

✅ Authentication complete!

Backend: login, logout, user endpoints ready.
Frontend: models, service, guard, protected routes, nav with logout.

To test:
1. Backend: php artisan serve
2. Test login POST http://localhost:8000/api/login {"email": "user@example.com", "password": "password"}
3. Frontend: cd frontend-angular && ng serve
4. Open http://localhost:4200 - should redirect to login since no token, but since no login page, add token to localStorage manually for test.

Next: Layout + dashboard data.
