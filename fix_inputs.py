import re

calc_path = 'src/app/portal/calculator/page.tsx'

with open(calc_path, 'r', encoding='utf-8') as f:
    text = f.read()

def replace_input(match):
    input_tag = match.group(1)
    label_text = match.group(2)
    # Check if input already has className
    if 'className="' in input_tag:
        # We append to it
        input_tag = input_tag.replace('className="', 'className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white ')
    else:
        # Add before />
        input_tag = input_tag.replace('/>', ' className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" />')
        # What if it doesn't end with />? It always does in the current file for inputs.
    
    return f'''<div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-600 dark:text-steel-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">{label_text}</label>
  {input_tag}
</div>'''

def replace_select(match):
    outer_attrs = match.group(1)
    select_head = match.group(2)
    options = match.group(3)
    select_tail = match.group(4)
    label_text = match.group(5)

    if 'className="' in select_head:
        select_head = select_head.replace('className="', 'className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white ')
    else:
        select_head = select_head.replace('>', ' className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white">')

    # Add custom chevron to the right side of the select using a standard wrapper
    # We will just put the chevron icon inside the relative wrapper.
    return f'''<div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-600 dark:text-steel-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">{label_text}</label>
  <div className="relative">
      {select_head}
      {options}
      {select_tail}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>'''


input_pattern = re.compile(r'<div className="floating-input">\s*(<input[^>]+>)\s*<label>([^<]+)</label>\s*</div>')
text = input_pattern.sub(replace_input, text)

# For select, it's multiline
# <div className="floating-select"[^>]*>
#   <select ...>
#      <option ...>...</option>
#   </select>
#   <label>...</label>
# </div>
select_pattern = re.compile(r'<div className="floating-select"([^>]*)>\s*(<select[^>]+>)(.*?)(</select>)\s*<label>([^<]+)</label>\s*</div>', re.DOTALL)
text = select_pattern.sub(replace_select, text)

with open(calc_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Inputs formatted.")
