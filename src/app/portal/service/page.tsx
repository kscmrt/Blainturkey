"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitServiceRequest } from "../actions";

export default function ServicePage() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    return await submitServiceRequest(formData);
  }, null);

  return (
    <div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-center justify-center font-sans py-12">
      <div className="w-full max-w-[800px] p-6 sm:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <Link href="/portal" className="group mb-8 sm:mb-12 flex items-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-orange-500 dark:text-steel-400 dark:hover:text-orange-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Geri Dön
        </Link>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-steel-900 dark:text-white mb-8 sm:mb-12">
          Teknik Servis Talebi.
        </h2>

        {state?.success ? (
          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-8 text-center dark:border-orange-900/40 dark:bg-orange-950/20">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400 mb-4">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl font-bold text-steel-900 dark:text-white mb-2">Talebiniz Alındı (Kayıt No: {state.ticketId})</h3>
            <p className="text-steel-600 dark:text-steel-400">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Firma veya Kişi Adı</label>
                <input type="text" name="name" required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Seri Numarası (Opsiyonel)</label>
                <input type="text" name="serial" className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Talep/Arıza Detayı</label>
              <textarea name="description" rows={5} required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white resize-y" />
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="mt-4 flex items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? "Gönderiliyor..." : "Destek Talebi Oluştur"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}