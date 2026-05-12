import PageWrapper from "@/components/PageWrapper";
import { getPartners } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function PartnersPage() {
  const data = await getPartners();

  const intro = data?.intro || "Мои статьи и публикации также представлены на партнёрской платформе — сайте-агрегаторе для специалистов помогающих профессий.";
  const partnerUrl = data?.partnerUrl || "#";
  const btnLabel = data?.partnerButtonLabel || "Перейти к партнёрскому сайту →";
  const paymentText = data?.paymentText || "Принимаю оплату банковскими картами Visa / MasterCard через безопасный платёжный сервис. Также — PayPal, IBAN-перевод.";
  const privacyText = data?.privacyText || "Все личные данные обрабатываются в соответствии с GDPR. Никакой передачи третьим лицам.";

  return (
    <PageWrapper title="Партнёры" showBooking={false}>
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">{intro}</p>
          <a
            href={partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #4DD0E1 0%, #00BCD4 100%)", boxShadow: "0 4px 15px rgba(0,188,212,0.35)" }}
          >
            {btnLabel}
          </a>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💳</span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Оплата</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{paymentText}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Политика конфиденциальности</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{privacyText}</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
