export const TOAST_DURATION = 3000;
export const COOKIE_EXPIRATION = 7;

export const ROUTES = {
  LOGIN: "/auth/login",
  BLACK_LIST: "/blacklist",
  BLACK_LIST_ADD: "/blacklist/add",
  FORECAST: "/forecast",
};

// Layout dimensions
export const HEADER_MAX_WIDTH = 1200; // px
export const HEADER_HEIGHT = 64; // px

export const FOOTER_MAX_WIDTH = 1200; // px
export const FOOTER_HEIGHT = 56; // px

// Toast messages
export const TOAST_MESSAGES = {
  SUCCESS: {
    LOGIN: "Giriş başarılı!",
    BLACKLIST_ADD: "Kara listeye başarıyla eklendi!",
    BLACKLIST_UPDATE: "Kara liste başarıyla güncellendi!",
    BLACKLIST_DELETE: "Kara listeden başarıyla silindi!",
    FORECAST_LOAD: "Tahmin verisi başarıyla yüklendi!",
    GENERIC: "İşlem başarıyla tamamlandı!",
  },
  ERROR: {
    LOGIN: "Giriş başarısız! Lütfen bilgilerinizi kontrol edin.",
    BLACKLIST_ADD: "Kara listeye ekleme başarısız!",
    BLACKLIST_UPDATE: "Kara liste güncelleme başarısız!",
    BLACKLIST_DELETE: "Kara listeden silme başarısız!",
    FORECAST_LOAD: "Tahmin verisi yüklenemedi!",
    NETWORK_ERROR: "Bağlantı hatası! Lütfen tekrar deneyin.",
    GENERIC: "Bir hata oluştu! Lütfen tekrar deneyin.",
    UNAUTHORIZED: "Yetkiniz bulunmamaktadır!",
    FORBIDDEN: "Bu işlem için yetkiniz yok!",
    NOT_FOUND: "İstenen kayıt bulunamadı!",
    SERVER_ERROR: "Sunucu hatası! Lütfen daha sonra tekrar deneyin.",
  },
};
