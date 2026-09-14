import re

calc_path = 'src/app/portal/calculator/page.tsx'

with open(calc_path, 'r', encoding='utf-8') as f:
    text = f.read()

# We need to find the `{!calcResult ? ( ... form ... ) : ( ... results ... )}` block.
# Let's extract the form and results blocks first.

# 1. Extract the form
form_match = re.search(r'(<form onSubmit=\{handleCalculate\} className="flex flex-col gap-6">[\s\S]*?</form>)', text)
form_html = form_match.group(1)

# 2. Extract the results
results_match = re.search(r'(\( <div className="mt-8">\s*\{renderResults\(\)\}\s*</div> \)|<div className="mt-8">\s*\{renderResults\(\)\}\s*</div>)', text)
# Wait, the exact text is:
#         {!calcResult ? (
#           <form onSubmit={handleCalculate}...
#         ) : (
#           <div className="mt-8">
#             {renderResults()}
#           </div>
#         )}
results_html = """
          <div className="bg-white dark:bg-steel-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-steel-200/60 dark:border-steel-800/80 sticky top-6">
            {!calcResult ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center opacity-60">
                <div className="size-20 mb-6 bg-steel-100 dark:bg-steel-800 rounded-full flex items-center justify-center text-steel-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-steel-800 dark:text-steel-200 mb-2">Sistem Hesaplaması Bekleniyor</h3>
                <p className="text-sm text-steel-500 max-w-sm">
                  Projenize ait tüm değerleri sol taraftan yapılandırıp "Hesapla" butonuna bastığınızda, saniyeler içinde mühendislik onaylı valf, motor, debi ve piston sonuçlarına ulaşacaksınız.
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {renderResults()}
              </div>
            )}
          </div>
"""

# Let's clean up the form HTML by making the inputs smaller (text-sm, simpler padding) to fit nicely in a side column.
# Instead of complex regex replacing every Tailwind class, let's just assemble the new outer structure.

new_structure = f"""
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          <div className="xl:col-span-5 w-full">
            {form_html}
          </div>
          
          <div className="xl:col-span-7 w-full hidden sm:block relative">
            {results_html}
          </div>
          
          <div className="xl:col-span-7 w-full sm:hidden relative mt-8">
            {results_html}
          </div>
          
        </div>
"""

# Replace in file
full_block = re.search(r'\{\!calcResult \? \([\s\S]*?\n        \)\}', text)
text = text.replace(full_block.group(0), new_structure)

# Make the outer container wider
text = text.replace('max-w-[1000px]', 'max-w-[1400px]')

# One more thing: Inside `form_html`, there is a button `<button onClick={() => setCalcResult(null)} ...>← Değiştir</button>`.
# Since the form is now always visible on the left, we don't need the "Değiştir" (Change) button because they can just change values and click "Hesapla" again.
# But wait, that button is inside `renderResults()`! So we must replace it in `renderResults()`.
# Let's find `renderResults` string block and remove the 'Değiştir' button.
degistir_btn = re.search(r'<button onClick=\{.*?setCalcResult\(null\).*?>.*?Değiştir</button>', text)
if degistir_btn:
    text = text.replace(degistir_btn.group(0), '')

# Write it out
with open(calc_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Side-by-side layout generated.")
