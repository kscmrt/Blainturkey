"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitDealerLogin } from "../actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    return await submitDealerLogin(formData);
  }, null);

  return (
    <div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-center justify-center font-sans py-12">
      <div className="w-full max-w-[500px] p-6 sm:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <Link href="/portal" className="group mb-8 sm:mb-12 flex items-center justify-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-emerald-600 dark:text-steel-400 dark:hover:text-emerald-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Geri Dön
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-steel-900 dark:text-white">
            Bayi Girişi.
          </h2>
        </div>

        {state && !state.success && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
            {state.error}
          </div>
        )}

        <form action={formAction} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-steel-700 dark:text-steel-300">E-posta Adresi</label>
            <input type="email" name="email" required placeholder="bayi@firma.com.tr" className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Şifre</label>
              <span className="text-xs text-emerald-600 font-semibold cursor-pointer hover:underline dark:text-emerald-400">Şifremi Unuttum</span>
            </div>
            <input type="password" name="password" required className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-steel-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-steel-700 dark:bg-steel-900 dark:text-white" />
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? "Doğrulanıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}