import { Helmet } from 'react-helmet';
import { siteOperator } from '@/config/siteOperator';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Политика обработки персональных данных | Аргон-Мастер72</title>
        <meta name="description" content="Политика обработки персональных данных сайта Аргон-Мастер72." />
        <link rel="canonical" href="https://argon-master72.ru/privacy" />
      </Helmet>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>

        <div className="prose prose-blue max-w-none rounded-lg bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm text-gray-500">Редакция от 2 августа 2026 года</p>
          <p className="mb-4">
            Настоящая политика действует в отношении данных, которые посетитель передаёт через сайт argon-master72.ru.
          </p>

          <h2 className="mt-6 text-xl font-semibold">1. Оператор</h2>
          <p>
            Оператор персональных данных: {siteOperator.name}
            {siteOperator.inn ? `, ИНН ${siteOperator.inn}` : ''}. Контакт для вопросов и отзыва согласия:{' '}
            <a href={`mailto:${siteOperator.email}`}>{siteOperator.email}</a>.
          </p>

          <h2 className="mt-6 text-xl font-semibold">2. Какие данные обрабатываются</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>имя, телефон и адрес электронной почты, если он указан;</li>
            <li>описание задачи, параметры расчёта и сведения, которые посетитель сам добавил в сообщение;</li>
            <li>технические сведения о посещении и выборе cookie, если посетитель дал отдельное согласие.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">3. Цели и действия</h2>
          <p>Данные нужны, чтобы рассчитать стоимость, связаться с клиентом, подготовить предложение и вести заказ. Оператор может собирать, записывать, уточнять, хранить, использовать, передавать обработчику и удалять данные в пределах этих целей.</p>

          <h2 className="mt-6 text-xl font-semibold">4. CRM SVRQ</h2>
          <p>Заявка передаётся в CRM SVRQ на svrq.ru по защищённому серверному каналу. SVRQ обрабатывает данные по поручению оператора только для работы с заявкой и не определяет цену: расчёт выполняется по настройкам Аргон-Мастер72.</p>

          <h2 className="mt-6 text-xl font-semibold">5. Срок и защита</h2>
          <p>Данные хранятся не дольше, чем это требуется для заявки, договора и обязательных сроков хранения. Доступ ограничен, передача выполняется по HTTPS, а серверные ключи не размещаются в браузере.</p>

          <h2 className="mt-6 text-xl font-semibold">6. Права посетителя</h2>
          <p>Посетитель может запросить сведения об обработке, уточнение, блокирование или удаление данных, а также отозвать согласие по указанному выше адресу. Отзыв не влияет на законность действий, выполненных до его получения.</p>

          <p className="mt-6">Текст отдельного согласия доступен на странице <a href="/consent">argon-master72.ru/consent</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
