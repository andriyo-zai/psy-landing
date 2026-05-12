import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  backHref?: string;
  showBooking?: boolean;
}

export default function PageWrapper({
  title,
  children,
  backHref = "/",
  showBooking = true,
}: PageWrapperProps) {
  return (
    <div className="px-5 py-5">
      {/* Page header */}
      <div className="flex items-center justify-between mb-5">
        <Link
          href={backHref}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-600 transition-colors"
        >
          <ChevronLeft size={16} />
          Назад
        </Link>
        <span className="section-pill">{title}</span>
      </div>

      {/* Content */}
      {children}

      {/* CTA */}
      {showBooking && (
        <div className="flex justify-center mt-8 mb-2">
          <a href="/#booking" className="btn-book">
            Записаться
          </a>
        </div>
      )}
    </div>
  );
}
