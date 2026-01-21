---
name: resume-card-site
overview: Создать сайт-визитку/резюме как SPA на Vite + React + TypeScript с Material Design (MUI) и переключением RU/EN.
todos:
  - id: init-vite-react-ts
    content: Инициализировать проект Vite React+TS в `C:\\_Apps\\hh-card` (npm create vite@latest) и проверить запуск dev-сервера.
    status: completed
  - id: add-core-libs
    content: "Подключить основные зависимости: MUI (+emotion), react-router-dom, i18next/react-i18next, react-helmet-async; настроить базовые провайдеры приложения."
    status: completed
  - id: mui-theme-layout
    content: "Собрать базовый layout на MUI: Header/Footer, контейнеры, типографика, адаптивность, светлая/тёмная тема (опционально)."
    status: completed
  - id: i18n-ru-en
    content: Добавить RU/EN словари и UI переключателя языка; завернуть тексты основных секций в t().
    status: completed
  - id: pages-sections-mvp
    content: Сверстать MVP секции резюме (Hero/Skills/Experience/Projects/Contacts) с аккуратным визуалом MUI.
    status: completed
  - id: todo-1768992608731-dd1zdw0n0
    content: "Изменить стиль кода: React-компоненты — на стрелочных функциях (`const X = () => ...`)."
    status: completed
  - id: quality-build-deploy
    content: Настроить Biome/Prettier, проверить build, добавить инструкции в README и (если нужно) подготовить деплой под GitHub Pages/Netlify
    status: completed
  - id: todo-1768992635291-l10uhp7k4
    content: Использовать резюме из docs. Взять информацию от туда и внести в приложение
    status: completed
  - id: todo-1768996169531-chhjs4qu3
    content: Создать репозиторий на github
    status: in_progress
---

## Цель

- С нуля поднять проект в `C:\_Apps\hh-card`.
- SPA на **Vite + React + TypeScript**.
- UI на **Material Design** через **MUI** (theme + responsive layout).
- Локализация **RU/EN** с переключателем языка.

## Выбор библиотек (по умолчанию)

- **UI (Material Design)**: `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`.
- **Роутинг**: `react-router-dom` (страницы: `/` и опционально `/projects`, `/cv`, `/contacts`).
- **Локализация**: `i18next` + `react-i18next`.
- **SEO/мета** (для SPA): `react-helmet-async`.
- **Формы (контакты)** (опционально): `react-hook-form`.
- **Качество кода**: ESLint + Prettier (через Vite пресеты и доп. конфиги).

## Стиль кода

- React-компоненты пишем **стрелочными функциями**: `export const Component = () => { ... }`.
- Предпочитаем **именованные экспорты** для компонентов (кроме `App`).

## Структура приложения (скелет)

- `src/app/` — инициализация приложения: тема MUI, провайдеры (router, i18n, helmet).
- `src/pages/` — страницы (Home/Projects/CV/Contacts).
- `src/widgets/` — крупные блоки (Header, Footer, LanguageSwitch, Sections).
- `src/shared/` — утилиты, типы, константы, i18n-ресурсы.

## Контент резюме (MVP)

- Hero: имя, роль, краткое описание, CTA кнопки (скачать CV / контакты).
- Skills: список технологий с чипами MUI.
- Experience: таймлайн/карточки.
- Projects: карточки с ссылками (GitHub/демо).
- Contacts: email/telegram/linkedin/github + форма (опционально).

## Проверки и сборка

- Запуск dev-сервера, проверка типов, линт/формат.
- Production build.

## Деплой (опционально, но заложим)

- Базовый вариант для SPA: GitHub Pages или Netlify.
- Под Vite настроить `base` (если GitHub Pages) и SPA-редиректы (если нужно).

## Ключевые файлы, которые появятся

- [`package.json`](package.json) — зависимости и скрипты.
- [`vite.config.ts`](vite.config.ts) — конфиг Vite (и `base` при деплое).
- [`src/main.tsx`](src/main.tsx) и [`src/App.tsx`](src/App.tsx) — вход и каркас.
- [`src/app/theme.ts`](src/app/theme.ts) — MUI theme.
- [`src/shared/i18n/`](src/shared/i18n/) — словари RU/EN и инициализация.

резюме