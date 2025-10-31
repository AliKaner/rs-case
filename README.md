#SC Management Dashboard

Bu proje, kullanıcıların listelenmesi, filtrelenmesi ve düzenlenmesini sağlayan bir **Next.js 14+ (App Router)** tabanlı yönetim panelidir.  
Case projesi kapsamında modern frontend prensipleri (React Query, Debounce, Responsive tasarım, State management) uygulanmıştır.

## Zamanım Olsa Eklemek İsteyeceğim Şeyler

Daha kaliteli, merkezi bir API istek yapısı
Kendi backend servisimin entegrasyonu
Çoklu dil desteği (i18n)
Tema / renk yönetimi sistemi (dark-light mod + renk varyantları)

## Kullanılan Teknolojiler

- **Next.js 14 (App Router)** – modern routing yapısı
- **React Query** – veri yönetimi ve caching
- **Formik + Yup** – form yönetimi ve doğrulama
- ""Tailwind""

## Kurulum

```bash
git clone https://github.com/alikaner/sc-case.git
cd sc-case
npm install
npm run dev
```

Ardından tarayıcıdan http://localhost:3000 adresine gidin.

## Klasör yapısı

Klasör yapısı için kendi Medium yazımdan esinlendim.  
**Yazı Linki:** [Organizing Next.js Project Folder Structure](https://medium.com/@alikaner.dev/organizing-next-js-project-folder-structure-b87f1e10f844)

```
src/
┣ api/
┃ ┣ auth/
┃ ┃ ┗ index.ts
┃ ┣ blacklist/
┃ ┃ ┗ index.ts
┃ ┣ forecast/
┃ ┃ ┗ index.ts
┃ ┣ index.ts
┃ ┗ types.ts
┣ app/
┃ ┣ blacklist/
┃ ┃ ┣ add/
┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┗ page.tsx
┃ ┣ forecast/
┃ ┃ ┗ page.tsx
┃ ┣ login/
┃ ┃ ┗ page.tsx
┃ ┣ globals.css
┃ ┣ layout.tsx
┃ ┣ not-found.tsx
┃ ┣ page.tsx
┃ ┣ robots.ts
┃ ┗ sitemap.ts
┣ constants/
┃ ┗ index.ts
┣ contexts/
┃ ┣ CookieContext.tsx
┃ ┣ ToastContext.tsx
┃ ┗ UserContext.tsx
┣ lib/
┃ ┣ toast.ts
┃ ┗ utils.ts
┣ providers/
┃ ┣ index.tsx
┃ ┗ QueryProvider.tsx
┣ proxy.ts
┣ ssl/
┣ types/
┃ ┗ toast.ts
┗ ui/
  ┣ common/
  ┃ ┣ display-switch/
  ┃ ┃ ┗ index.tsx
  ┃ ┗ logo/
  ┃   ┗ index.tsx
  ┣ components/
  ┃ ┣ button.tsx
  ┃ ┣ input.tsx
  ┃ ┣ label.tsx
  ┃ ┣ select.tsx
  ┃ ┣ table.tsx
  ┃ ┣ textarea.tsx
  ┃ ┣ toast-container.tsx
  ┃ ┗ toast.tsx
  ┣ forms/
  ┃ ┣ blacklist-form/
  ┃ ┃ ┣ index.tsx
  ┃ ┃ ┣ initial-values.ts
  ┃ ┃ ┗ schema.ts
  ┃ ┗ login-form/
  ┃   ┣ index.tsx
  ┃   ┣ initial-values.ts
  ┃   ┗ schema.ts
  ┗ layouts/
    ┣ body/
    ┃ ┗ index.tsx
    ┣ footer/
    ┃ ┗ index.tsx
    ┣ footer-content/
    ┃ ┗ index.tsx
    ┣ header/
    ┃ ┗ index.tsx
    ┗ header-content/
      ┗ index.tsx
```

Ayrıca component yapısı da kendi Medium yazımda açıkladığım yapıyı takip eder.  
**Yazı Linki:** [Coding Perfect Component Structure](https://medium.com/@alikaner.dev/coding-perfect-component-870d6920ee2b)

# Görseller:
