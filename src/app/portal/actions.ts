"use server";

export async function submitQuoteRequest(formData: FormData) {
  // Simüle edilmiş sunucu gecikmesi
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  const data = Object.fromEntries(formData.entries());
  console.log("Teklif Talebi Alındı:", data);

  // Burada normalde bir CRM API'sine (örn: HubSpot, Salesforce, veya özel Blain CRM) veya e-posta servisine post atılır.
  
  return { success: true, message: "Teklif talebiniz başarıyla alındı. Mühendislerimiz en kısa sürede sizinle iletişime geçecektir." };
}

export async function submitServiceRequest(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  const data = Object.fromEntries(formData.entries());
  console.log("Servis Talebi Alındı:", data);

  return { success: true, ticketId: `BLN-${Math.floor(Math.random() * 100000)}`, message: "Servis veya destek kaydınız oluşturuldu." };
}

export async function submitDealerLogin(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  const email = formData.get("email");
  // Mock login: Eğer yetkili değilse hata döndürür, normalde NextAuth/Auth.js ile yönetilir.
  return { success: false, error: "Girdiğiniz bayi e-posta adresi sistemde bulunamadı veya yetkiniz yok." };
}