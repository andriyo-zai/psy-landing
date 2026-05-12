import PageWrapper from "@/components/PageWrapper";

export default function PartnersPage() {
  return (
    <PageWrapper title="Партнёры" showBooking={false}>
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">
            Мои статьи и публикации также представлены на партнёрской платформе —
            сайте-агрегаторе для специалистов помогающих профессий.
          </p>
          {/* Replace href with real partner URL */}
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #4DD0E1 0%, #00BCD4 100%)", boxShadow: "0 4px 15px rgba(0,188,212,0.35)" }}
          >
            Перейти к партнёрскому сайту →
          </a>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💳</span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Оплата</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                Принимаю оплату банковскими картами Visa / MasterCard через
                безопасный платёжный сервис. Также — PayPal, IBAN-перевод.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Политика конфиденциальности</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                Все личные данные обрабатываются в соответствии с GDPR. Никакой
                передачи третьим лицам.{" "}
                <a href="/privacy" className="text-cyan-600 underline hover:text-cyan-800">
                  Подробнее
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
