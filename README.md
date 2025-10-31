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
<img width="1283" height="778" alt="image" src="https://github.com/user-attachments/assets/0dc8fbdc-9a6a-4b48-8a4d-5a58e4398821" />
<img width="346" height="622" alt="image" src="https://github.com/user-attachments/assets/25f13ed4-36e3-40f2-8e8b-36ff6bbcb457" />
<img width="920" height="584" alt="image" src="https://github.com/user-attachments/assets/72730353-3781-4a3e-a989-e9d7ac88bff4" />
<img width="341" height="369" alt="image" src="https://github.com/user-attachments/assets/3117b866-c086-4a2b-93c3-5219918c25e9" />
<img width="316" height="77" alt="image" src="https://github.com/user-attachments/assets/6902b73b-ff17-4c2c-8a67-5e14c46a6c8c" />
<img width="365" height="328" alt="image" src="https://github.com/user-attachments/assets/d7f083dd-1759-4f14-af1f-630fa78d769f" />
<img width="1312" height="683" alt="image" src="https://github.com/user-attachments/assets/376bf3c7-c9c7-4225-9b2b-e2ae25f87c1f" />
<img width="1319" height="684" alt="image" src="https://github.com/user-attachments/assets/151b0679-e00f-49bc-8445-89ee218fc984" />
<img width="342" height="614" alt="image" src="https://github.com/user-attachments/assets/b5c162b5-614d-4621-995a-f5f9727258cc" />
<img width="336" height="569" alt="image" src="https://github.com/user-attachments/assets/ac6baade-9bb1-478d-8b1b-1a15e52d881d" />
<img width="1352" height="595" alt="image" src="https://github.com/user-attachments/assets/683f555a-c6f4-425c-ae91-73e9068d7678" />
<img width="1153" height="847" alt="image" src="https://github.com/user-attachments/assets/b487e48f-17fd-4386-8716-b439df5d32d9" />
<img width="340" height="657" alt="image" src="https://github.com/user-attachments/assets/59d31c32-a377-4d0c-b4bc-4184f1bc374f" />






