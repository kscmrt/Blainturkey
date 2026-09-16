import re

calc_path = 'src/app/portal/calculator/page.tsx'

with open(calc_path, 'r', encoding='utf-8') as f:
    text = f.read()

# We will replace all style={...} with className="..." for the renderResults part.

old_1 = r"style=\{\{\s*display:\s*'flex',\s*justifyContent:\s*'space-between',\s*alignItems:\s*'center',\s*marginBottom:\s*'1rem'\s*\}\}"
new_1 = r'className="flex justify-between items-center mb-4"'
text = re.sub(old_1, new_1, text)

old_2 = r"style=\{\{\s*fontSize:\s*'1\.8rem',\s*fontWeight:\s*700,\s*margin:\s*0,\s*color:\s*'inherit',\s*letterSpacing:\s*'-0\.5px'\s*\}\}"
new_2 = r'className="text-2xl sm:text-3xl font-bold m-0 tracking-tight text-steel-900 dark:text-white"'
text = re.sub(old_2, new_2, text)

old_3 = r"style=\{\{\s*color:\s*'var\(--muted-foreground, #64748b\)',\s*marginBottom:\s*'2rem',\s*fontSize:\s*'1\.05rem'\s*\}\}"
new_3 = r'className="text-steel-600 dark:text-steel-400 mb-8 text-base sm:text-lg"'
text = re.sub(old_3, new_3, text)

old_4 = r"style=\{\{\s*fontSize:\s*'1\.2rem',\s*fontWeight:\s*600,\s*color:\s*'inherit',\s*marginBottom:\s*'1rem'\s*\}\}"
new_4 = r'className="text-lg sm:text-xl font-semibold mb-4 text-steel-900 dark:text-white"'
text = re.sub(old_4, new_4, text)

old_5 = r"style=\{\{\s*display:\s*'grid',\s*gridTemplateColumns:\s*'repeat\(auto-fit, minmax\(200px, 1fr\)\)',\s*gap:\s*'1rem',\s*marginBottom:\s*'2rem'\s*\}\}"
new_5 = r'className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"'
text = re.sub(old_5, new_5, text)

old_6 = r"style=\{\{\s*background:\s*'var\(--card, #fff\)',\s*padding:\s*'1\.5rem',\s*borderRadius:\s*'16px',\s*boxShadow:\s*'0 4px 20px rgba\(0,0,0,0\.05\)',\s*border:\s*'1px solid var\(--border, #e2e8f0\)',\s*display:\s*'flex',\s*flexDirection:\s*'column',\s*justifyContent:\s*'space-between'\s*\}\}"
new_6 = r'className="flex flex-col justify-between bg-white dark:bg-steel-900 p-5 sm:p-6 rounded-2xl shadow-sm border border-steel-200/60 dark:border-steel-800/60"'
text = re.sub(old_6, new_6, text)

old_7 = r"style=\{\{\s*fontSize:\s*'0\.8rem',\s*color:\s*'var\(--muted-foreground, #64748b\)',\s*textTransform:\s*'uppercase',\s*letterSpacing:\s*'1px',\s*marginBottom:\s*'0\.5rem'\s*\}\}"
new_7 = r'className="text-xs uppercase tracking-wider text-steel-500 mb-2"'
text = re.sub(old_7, new_7, text)

old_8 = r"style=\{\{\s*fontSize:\s*'1\.8rem',\s*fontWeight:\s*700,\s*color:\s*'inherit',\s*marginBottom:\s*'0\.2rem'\s*\}\}"
new_8 = r'className="text-2xl sm:text-3xl font-bold mb-1 text-steel-900 dark:text-white"'
text = re.sub(old_8, new_8, text)

old_9 = r"style=\{\{\s*fontSize:\s*'0\.9rem',\s*color:\s*'var\(--muted-foreground, #64748b\)'\s*\}\}"
new_9 = r'className="text-sm text-steel-500 dark:text-steel-400"'
text = re.sub(old_9, new_9, text)

old_10 = r"style=\{\{\s*marginTop:\s*'1rem',\s*padding:\s*'0\.5rem',\s*background:\s*'var\(--muted, #f8fafc\)',\s*borderRadius:\s*'8px',\s*fontSize:\s*'0\.85rem',\s*color:\s*'inherit',\s*fontWeight:\s*500\s*\}\}"
new_10 = r'className="mt-4 p-2.5 bg-steel-50 dark:bg-steel-800/50 rounded-lg text-sm font-medium text-steel-700 dark:text-steel-300"'
text = re.sub(old_10, new_10, text)

old_11 = r"style=\{\{\s*fontSize:\s*'1\.2rem',\s*fontWeight:\s*700,\s*color:\s*'inherit',\s*marginBottom:\s*'0\.2rem'\s*\}\}"
new_11 = r'className="text-lg sm:text-xl font-bold mb-1 text-steel-900 dark:text-white"'
text = re.sub(old_11, new_11, text)

old_12 = r"style=\{\{\s*background:\s*'linear-gradient\(145deg, #1d1d1f 0%, #434353 100%\)',\s*color:\s*'#fff',\s*padding:\s*'1\.5rem',\s*borderRadius:\s*'16px',\s*boxShadow:\s*'0 10px 30px rgba\(0,0,0,0\.15\)',\s*display:\s*'flex',\s*flexDirection:\s*'column',\s*justifyContent:\s*'space-between'\s*\}\}"
new_12 = r'className="flex flex-col justify-between bg-gradient-to-br from-steel-900 to-steel-700 text-white p-5 sm:p-6 rounded-2xl shadow-lg border border-steel-700/50"'
text = re.sub(old_12, new_12, text)

old_13 = r"style=\{\{\s*fontSize:\s*'0\.8rem',\s*color:\s*'#a1a1a6',\s*textTransform:\s*'uppercase',\s*letterSpacing:\s*'1px',\s*marginBottom:\s*'0\.5rem'\s*\}\}"
new_13 = r'className="text-xs uppercase tracking-wider text-steel-400 mb-2"'
text = re.sub(old_13, new_13, text)

old_14 = r"style=\{\{\s*fontSize:\s*'1\.8rem',\s*fontWeight:\s*700,\s*marginBottom:\s*'0\.2rem'\s*\}\}"
new_14 = r'className="text-2xl sm:text-3xl font-bold text-white mb-1"'
text = re.sub(old_14, new_14, text)

old_15 = r"style=\{\{\s*fontSize:\s*'0\.9rem',\s*color:\s*'#d2d2d7'\s*\}\}"
new_15 = r'className="text-sm text-steel-300"'
text = re.sub(old_15, new_15, text)

old_16 = r"style=\{\{\s*marginTop:\s*'1rem',\s*padding:\s*'0\.5rem',\s*background:\s*'rgba\(255,255,255,0\.1\)',\s*borderRadius:\s*'8px',\s*fontSize:\s*'0\.85rem'\s*\}\}"
new_16 = r'className="mt-4 p-2.5 bg-white/10 rounded-lg text-sm text-white font-medium"'
text = re.sub(old_16, new_16, text)

old_17 = r"style=\{\{\s*marginBottom:\s*'2rem',\s*padding:\s*'1\.5rem',\s*background:\s*'var\(--card, #fff\)',\s*borderRadius:\s*'16px',\s*border:\s*'1px solid var\(--border, #e2e8f0\)',\s*boxShadow:\s*'0 4px 20px rgba\(0,0,0,0\.02\)'\s*\}\}"
new_17 = r'className="mb-8 p-5 sm:p-6 bg-white dark:bg-steel-900 rounded-2xl border border-steel-200/60 dark:border-steel-800/60 shadow-sm"'
text = re.sub(old_17, new_17, text)

old_18 = r"style=\{\{\s*display:\s*'flex',\s*justifyContent:\s*'space-between',\s*alignItems:\s*'center',\s*marginBottom:\s*'1\.5rem'\s*\}\}"
new_18 = r'className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6"'
text = re.sub(old_18, new_18, text)

old_19 = r"style=\{\{\s*fontSize:\s*'1\.2rem',\s*fontWeight:\s*600,\s*color:\s*'inherit',\s*margin:\s*0\s*\}\}"
new_19 = r'className="text-lg font-semibold text-steel-900 dark:text-white m-0"'
text = re.sub(old_19, new_19, text)

old_20 = r"style=\{\{\s*fontSize:\s*'0\.85rem',\s*color:\s*'var\(--muted-foreground, #64748b\)',\s*background:\s*'var\(--muted, #f8fafc\)',\s*padding:\s*'0\.25rem 0\.75rem',\s*borderRadius:\s*'20px'\s*\}\}"
new_20 = r'className="text-xs self-start sm:self-auto font-medium text-steel-600 dark:text-steel-400 bg-steel-100 dark:bg-steel-800 px-3 py-1 rounded-full"'
text = re.sub(old_20, new_20, text)

old_21 = r"style=\{\{\s*display:\s*'grid',\s*gridTemplateColumns:\s*'repeat\(auto-fill, minmax\(220px, 1fr\)\)',\s*gap:\s*'1rem'\s*\}\}"
new_21 = r'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"'
text = re.sub(old_21, new_21, text)

with open(calc_path, 'w', encoding='utf-8') as f:
    f.write(text)
    
print("Replaced common inline styles with Tailwind")
