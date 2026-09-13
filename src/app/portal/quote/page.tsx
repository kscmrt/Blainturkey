"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitQuoteRequest } from "../actions";

export default function QuotePage() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    return await submitQuoteRequest(formData);
  }, null);

  return (
    <div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-center justify-center font-sans py-12">
      <div className="w-full max-w-[800px] p-6 sm:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <Link href="/portal" className="group mb-8 sm:mb-12 flex items-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-brand-600 dark:text-steel-400 dark:hover:text-brand-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Geri Dön
        </Link>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-steel-900 dark:text-white mb-8 sm:mb-12">
          Teklif İste.
        </h2>

        {state?.success ? (
          <div className="rounded-2xl border border-brand-200 bg-brand-50/50 p-8 text-center dark:border-brand-900/40 dark:bg-brand-950/20">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900 dark:text-brand-400 mb-4">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl font-bold text-steel-900 dark:text-white mb-2">Talebiniz Alındı</h3>
            <p className="text-steel-600 dark:text-steel-400">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Firma Adı</label>
              <input type="text" name="companyName" required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Kapasite (Kişi/kg)</label>
                <input type="text" name="capacity" required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Seyir Mesafesi (Durak/mm)</label>
                <input type="text" name="travel" required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Kabin Hızı (m/s)</label>
                <input type="text" name="speed" required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Regülasyon</label>
                <select name="regulation" className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white appearance-none">
                  <option value="machine">Makine Direktifi</option>
                  <option value="en81">TS EN 81-20/50</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="mt-4 flex items-center justify-center rounded-xl bg-brand-600 px-6 py-4 font-bold text-white transition hover:bg-brand-700 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? "Gönderiliyor..." : "Teklif İsteğini Gönder"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}