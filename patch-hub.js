import fs from 'fs';

let content = fs.readFileSync('src/app/portal/page.tsx', 'utf8');

// Replace the <Link href="/portal/login"> block entirely with an <a> tag checking CRM URL
content = content.replace(
  /<Link\s+href="\/portal\/login"[\s\S]*?(<div className="absolute top-0 right-0[\s\S]*?<\/Link>)/,
  `
          <a
            href={process.env.NEXT_PUBLIC_CRM_API_URL ? \`\${process.env.NEXT_PUBLIC_CRM_API_URL}/login\` : "https://portal.blainturkey.com.tr/login"}
            className="group relative bg-white/60 dark:bg-steel-900/40 backdrop-blur-xl border border-steel-200/60 dark:border-steel-800/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden block"
            target="_self"
          >
            $1`
);
content = content.replace('target="_self"\n          >\n            <div className="absolute', 'target="_self"\n          >\n            <div className="absolute');
content = content.replace('Girişi</h3>\n              <p', 'Girişi</h3>\n              <p');
content = content.replace('</div>\n            </div>\n          </Link>', '</div>\n            </div>\n          </a>');

fs.writeFileSync('src/app/portal/page.tsx', content);
