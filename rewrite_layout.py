import re

calc_path = 'src/app/portal/calculator/page.tsx'

with open(calc_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

form_html = "".join(lines[225:431])  # From `<form...` to `</form>`
results_html = "".join(lines[433:617]) # From `<div style={{ animation: ... }}` to `</div>`

# We remove the "Değiştir" button inside the results because the form will always be visible on the left.
results_html = re.sub(r'<button onClick=\{.*?setCalcResult\(\s*null\s*\).*?>.*?</button>', '', results_html)

new_layout = f"""
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start relative w-full">
          
          <div className="xl:col-span-5 w-full">
            {form_html}
          </div>
          
          <div className="xl:col-span-7 w-full sticky top-8">
            <div className="bg-white dark:bg-steel-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-steel-200/60 dark:border-steel-800/80 w-full min-h-[400px]">
              {{!calcResult ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-60 m-auto mt-16">
                  <div className="w-20 h-20 mb-6 bg-steel-100 dark:bg-steel-800 rounded-full flex items-center justify-center text-steel-400">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-steel-800 dark:text-steel-200 mb-2">Sistem Hesaplaması Bekleniyor</h3>
                  <p className="text-sm text-steel-500 max-w-sm">
                    Tüm değerleri sol taraftan yapılandırıp "Hesapla" butonuna bastığınızda, mühendislik onaylı valf, motor, debi ve piston sonuçlarına ulaşacaksınız.
                  </p>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {results_html}
                </div>
              )}}
            </div>
          </div>
          
        </div>
"""

# Now write back
lines = lines[:223] + [new_layout] + lines[620:]

# Also change max-w-[1000px] to max-w-[1400px] inside the top wrapper
for i in range(len(lines)):
    if 'max-w-[1000px]' in lines[i]:
        lines[i] = lines[i].replace('max-w-[1000px]', 'max-w-[1300px]')

with open(calc_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Applied robust layout patch!")
