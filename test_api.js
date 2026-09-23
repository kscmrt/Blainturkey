async function testApi() {
  const payload = {
    projectData: {
      calculationResult: {
        type: 'standart',
        pumpFlow: 120,
        motorPowerReq: 11,
        stroke: 7550,
        d: 90,
        t: 10
      },
      cylinderCount: 1,
      powerUnitCount: 1,
      isExisting: false,
      accessoriesFlags: {}
    }
  };

  const res = await fetch('https://portal.blainturkey.com.tr/api/external-quotes/estimate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  console.log("Status:", res.status);
  console.log("Response:", text);
}

testApi();
