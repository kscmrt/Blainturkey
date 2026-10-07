const fs = require('fs');

let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

content = content.replace(
    "const priceReq = await fetch(`${apiUrl}/api/external-quotes/estimate`, {",
    "const priceReq = await fetch('/api/estimate', {"
);

const insertionPoint = `    } finally {
      setIsCalculatingPrice(false);
    }
  };`;

const useEffectCode = `    } finally {
      setIsCalculatingPrice(false);
    }
  };

  // Re-fetch price automatically when accessories change
  useEffect(() => {
    if (!calcResult) return;
    let isCancelled = false;

    const fetchPrice = async () => {
      setIsCalculatingPrice(true);
      try {
        const priceReq = await fetch('/api/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            projectData: {
              calculationResult: calcResult,
              cylinderCount: Number(calcCylinderCount),
              powerUnitCount: Number(calcPowerUnitCount),
              isExisting: calcIsExisting,
              accessoriesFlags: {
                handPump: calcHandPump,
                ballValve: calcBallValve,
                ruptureValve: calcRuptureValve,
                a3Valve: calcA3Valve,
                lowPressure: calcLowPressure,
                highPressure: calcHighPressure,
                overload: calcOverload,
                heater: calcHeater,
                microLevel: calcMicroLevel
              }
            }
          })
        });

        if (priceReq.ok && !isCancelled) {
          const priceData = await priceReq.json();
          setEstimatedPrice(priceData.customerTotal);
        }
      } catch (e) {
        console.warn("Could not refetch price", e);
      } finally {
        if (!isCancelled) setIsCalculatingPrice(false);
      }
    };

    fetchPrice();

    return () => {
      isCancelled = true;
    };
  }, [
    calcResult, calcCylinderCount, calcPowerUnitCount, calcIsExisting,
    calcHandPump, calcBallValve, calcRuptureValve, calcA3Valve, calcLowPressure,
    calcHighPressure, calcOverload, calcHeater, calcMicroLevel
  ]);`;

content = content.replace(insertionPoint, useEffectCode);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log("Updated page.tsx with node script");
