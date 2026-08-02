import { Helmet } from "react-helmet";
import { siteOperator } from "@/config/siteOperator";

const PersonalDataConsent = () => (
  <div className="min-h-screen bg-gray-50 pt-20">
    <Helmet>
      <title>Согласие на обработку персональных данных | Аргон-Мастер72</title>
      <meta name="description" content="Согласие на обработку данных для расчёта и связи по заявке Аргон-Мастер72." />
      <link rel="canonical" href="https://argon-master72.ru/consent" />
    </Helmet>
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Согласие на обработку персональных данных</h1>
      <div className="prose prose-blue max-w-none rounded-lg bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm text-gray-500">Редакция от 2 августа 2026 года</p>
        <p>
          Отправляя форму на argon-master72.ru и устанавливая отметку согласия, я свободно и в своём интересе разрешаю оператору {siteOperator.name}
          {siteOperator.inn ? `, ИНН ${siteOperator.inn}` : ''} обрабатывать указанные мной данные.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Данные и цели</h2>
        <p>Согласие распространяется на имя, телефон, электронную почту, описание задачи и параметры расчёта. Цели: ответ на обращение, расчёт стоимости, подготовка коммерческого предложения, согласование и ведение заказа.</p>
        <h2 className="mt-6 text-xl font-semibold">Действия и обработчик</h2>
        <p>Разрешены сбор, запись, уточнение, хранение, использование, передача в CRM SVRQ на svrq.ru как обработчику по поручению оператора, блокирование и удаление данных. Передача выполняется по защищённому серверному каналу.</p>
        <h2 className="mt-6 text-xl font-semibold">Срок и отзыв</h2>
        <p>Согласие действует до достижения целей обработки либо до его отзыва. Отозвать согласие можно письмом на <a href={`mailto:${siteOperator.email}`}>{siteOperator.email}</a>. После получения отзыва обработка прекращается, кроме случаев, когда закон разрешает продолжить её без согласия.</p>
        <p className="mt-6">Подробные правила указаны в <a href="/privacy">политике обработки персональных данных</a>.</p>
      </div>
    </div>
  </div>
);

export default PersonalDataConsent;
