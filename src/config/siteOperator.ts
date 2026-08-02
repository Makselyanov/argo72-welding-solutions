const envValue = (value: unknown): string => typeof value === "string" ? value.trim() : "";

export const siteOperator = {
  name: envValue(import.meta.env.VITE_SITE_OPERATOR_NAME) || "Аргон-Мастер72",
  inn: envValue(import.meta.env.VITE_SITE_OPERATOR_INN),
  email: envValue(import.meta.env.VITE_SITE_PRIVACY_EMAIL) || "info@argon-master72.ru",
};
