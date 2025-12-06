import { Suspense } from "react";
import GuestDetails from "./GuestDetails"; // ✅ default import

export default function DetailsPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Đang tải...</p>}>
      <GuestDetails />
    </Suspense>
  );
}