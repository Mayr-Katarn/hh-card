# hh-card

SPA-визитка/резюме на **Vite + React + TypeScript + MUI** с локализацией **RU/EN**.

## Требования

- Node.js (LTS)
- npm

## Запуск

```bash
npm install
npm run dev
```

Если у вас в npm включено “пропускать devDependencies” (например, `npm config get omit` возвращает `dev`), используйте:

```bash
npm install --include=dev
```

## Качество кода (Biome)

Проект использует **Biome** как единый инструмент для **lint/format**.

```bash
# линт
npm run lint

# форматирование
npm run format

# lint + format + organizeImports (проверка без auto-fix)
npm run check
```

## Сборка

```bash
npm run build
npm run preview
```

## Деплой

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Для SPA-роутинга добавлен файл `public/_redirects` (попадёт в `dist/_redirects`).

### GitHub Pages

GitHub Pages обычно публикуется из поддиректории `/<repo>/`, поэтому нужно выставить базовый путь:

```bash
# PowerShell пример:
$env:VITE_BASE="/<repo>/"
npm run build
```

- В `vite.config.ts` используется `VITE_BASE` как `base`.
- Для SPA-роутинга добавлен `public/404.html` + восстановление пути в `index.html`.

