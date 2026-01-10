# ⚡️ svpb-tmpl

A modern, high-performance **Fullstack Template** for building rapid products. Powered by **Svelte 5** and **PocketBase (Go)**.

This template is designed for developers who want a "lean and mean" stack: Single binary deployment, ultra-fast reactive UI, and a powerful Go-extended backend. No bloat, just the essentials for a production-ready WebApp.

## ✨ Features

- **Frontend**: [Svelte 5](https://svelte.dev) with Runes (`$state`, `$derived`) for next-gen reactivity.
- **Backend**: [PocketBase](https://pocketbase.io) extended in **Go**. Write your business logic in Go, not just JS hooks.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) + [DaisyUI 5](https://daisyui.com). The latest and greatest for rapid UI development.
- **Type Safety**: End-to-end types with `pocketbase-typegen`.
- **PWA**: Ready-to-install Progressive Web App with offline support via `vite-pwa`.
- **Analytics**: Built-in [PostHog](https://posthog.com) integration.
- **Deployment**: Optimized for single-binary deployment (Go serves the SvelteKit SPA).

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/your-username/svpb-tmpl.git
cd svpb-tmpl
pnpm install
```

### 2. Backend Setup (Go)

Ensure you have [Go](https://go.dev) installed.

```bash
cd pb
go run main.go serve
```

_The admin UI will be available at `http://127.0.0.1:8090/_/`.\_

### 3. Frontend Development

In the root directory:

```bash
pnpm dev
```

_Your app will be running at `http://localhost:5173`._

## 🛠 Project Structure

- `pb/` — PocketBase source code, migrations, and custom Go logic.
- `src/lib/shared` — Universal UI components, PB client, and utilities.
- `src/lib/apps` — Domain-specific logic (e.g., `user` app, stores).
- `src/routes/` — SvelteKit routes (SPA mode).

## 📦 Building for Production

This template is optimized to be served by the PocketBase binary.

1. Build the frontend:
   ```bash
   pnpm build
   ```
2. Copy the contents of the `/build` directory to `pb/pb_public`.
3. Build the Go binary:
   ```bash
   cd pb
   go build -o ../myapp
   ```
4. Run your entire app as a single file:
   ```bash
   ./myapp serve
   ```

## 📜 License

MIT. Use it for your next big thing!
