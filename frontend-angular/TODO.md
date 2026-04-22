# Fix Angular ng serve Errors - Implementation Plan

## Status: In Progress

### Step 1: Install missing Tailwind plugin [SKIPPED - shell syntax]
- Will retry with Windows CMD syntax later.
- package.json verification pending.

### Step 2: Create postcss.config.js [COMPLETE ✅]
- Created frontend-angular/postcss.config.js with Tailwind + autoprefixer.

### Step 3: Fix login.component.ts - Remove unused RouterLink [COMPLETE ✅]
- Removed RouterLink import and from imports array in src/app/login/login.component.ts.

### Step 4: Refactor region-medicale-5.html [COMPLETE ✅]
- Created clean template without HTML wrapper/CDN/@layer in src/app/region-medicale-5/region-medicale-5.html.

### Step 5: Update styles.css with Material Symbols [COMPLETE ✅]
- Added .material-symbols-outlined styles to @layer base in src/styles.css.

### Step 6: Test ng serve [PENDING]
- Run `ng serve` in frontend-angular.
- Update status on success.

### Step 7: Check for similar issues in other files [PENDING]
- Search other HTML for Tailwind CDN/@layer.

**Next action: Step 3 (fix login.component.ts).**
