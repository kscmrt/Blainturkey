const fs = require('fs');
const path = 'src/app/portal/calculator/page.tsx';

let content = fs.readFileSync(path, 'utf8');

// Add states
if (!content.includes('const [isSimulatingCalc, setIsSimulatingCalc]')) {
    content = content.replace(
        "const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);",
        "const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);\n  const [isSimulatingCalc, setIsSimulatingCalc] = useState(false);\n  const [calcProgress, setCalcProgress] = useState(0);"
    );
}

// Modify handleCalculate
const targetCalcStart = `    const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    // Dynamically import the calculator logic so it doesn't block initial page load
    const calc = await import('@/lib/calculator');`;

const newCalcStart = `    const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulatingCalc(true);
    setCalcProgress(0);
    const progressInterval = setInterval(() => {
      setCalcProgress(prev => (prev >= 90 ? prev : prev + 10));
    }, 60);

    // Dynamically import the calculator logic so it doesn't block initial page load
    const calc = await import('@/lib/calculator');`;

content = content.replace(targetCalcStart, newCalcStart);

const targetCalcEnd = `    setCalcResult(bestResult);

    const pFlow = Number(bestResult?.pumpFlow || 0);`;

const newCalcEnd = `    clearInterval(progressInterval);
    setCalcProgress(100);
    await new Promise(r => setTimeout(r, 250));
    setIsSimulatingCalc(false);
    
    setCalcResult(bestResult);

    const pFlow = Number(bestResult?.pumpFlow || 0);`;

content = content.replace(targetCalcEnd, newCalcEnd);

// Modify the button
const buttonTarget = `<button type="submit" className="w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-2.5 rounded-[16px] text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mt-2">
                      Hesapla
                    </button>`;

const buttonNew = `<button disabled={isSimulatingCalc} type="submit" className="relative overflow-hidden w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-2.5 rounded-[16px] text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mt-2 disabled:opacity-90 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none">
                      {isSimulatingCalc ? (
                        <>
                          <div className="absolute top-0 left-0 h-full bg-blue-500/30 transition-all duration-75" style={{ width: \`\${calcProgress}%\` }} />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Hesaplanıyor...
                          </span>
                        </>
                      ) : (
                        "Hesapla"
                      )}
                    </button>`;

content = content.replace(buttonTarget, buttonNew);

fs.writeFileSync(path, content, 'utf8');
console.log("Updated page.tsx with progress bar");
