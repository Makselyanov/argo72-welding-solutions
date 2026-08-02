# Интеграция Аргон-Мастер72 с SVRQ

Форма на `argon-master72.ru` отправляет заявку в локальный
`/api/svrq-lead.php`. Relay добавляет согласованные версии документов,
подписывает запрос отдельным HMAC-секретом и передаёт его в кабинет
`argon-master72`.

## Границы

- секрет хранится только в server-only конфигурации над `public_html` и в
  `.env` SVRQ;
- браузер не получает секрет и не обращается к закрытому API напрямую;
- цена рассчитывается только SVRQ по активным настройкам мастера;
- маркированные QA-заявки не считаются настоящими заказами;
- повтор одного request ID должен вернуть `duplicate=true` и не создать второй
  заказ.

## Production build

Локальный `.env.production.local` не коммитится. Для сборки задаются:

```dotenv
VITE_SVRQ_LEAD_URL=/api/svrq-lead.php
VITE_SITE_OPERATOR_NAME=
VITE_SITE_OPERATOR_INN=
VITE_SITE_PRIVACY_EMAIL=info@argon-master72.ru
```

В server-only `.svrq-pilot.php` требуются endpoint, key ID, HMAC secret, host и
версии политики/согласия. Точные значения и реквизиты в Git не сохраняются.
