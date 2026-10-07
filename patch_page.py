import sys

with open('src/app/portal/calculator/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the direct CRM API URL with the local proxy URL
content = content.replace("const priceReq = await fetch(`${apiUrl}/api/external-quotes/estimate`, {", "const priceReq = await fetch('/api/estimate', {")

# Add the useEffect right after handleCalculate finishes
insertion_point = """    } finally {
      setIsCalculatingPrice(false);
    }
  };"""

use_effect_code = """    } finally {
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
  ]);"""

content = content.replace(insertion_point, use_effect_code)

with open('src/app/portal/calculator/page.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(content)

print("Updated page.tsx")
