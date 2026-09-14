import re

calc_path = 'src/app/portal/calculator/page.tsx'

with open(calc_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace hardcoded light themes in inline styles
text = text.replace("background: '#fff'", "background: 'var(--card, #fff)'")
text = text.replace("background: '#f5f5f7'", "background: 'var(--muted, #f8fafc)'")
text = text.replace("color: '#1d1d1f'", "color: 'inherit'")
text = text.replace("color: '#86868b'", "color: 'var(--muted-foreground, #64748b)'")
text = text.replace("border: '1px solid #e5e5ea'", "border: '1px solid var(--border, #e2e8f0)'")
text = text.replace("borderBottom: '1px solid #e5e5ea'", "borderBottom: '1px solid var(--border, #e2e8f0)'")

with open(calc_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Colors fixed")
