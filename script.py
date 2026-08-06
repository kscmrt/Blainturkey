import re

with open('src/app/portal/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add imports
content = content.replace(
    "import React, { useState } from 'react';",
    "import React, { useState, useMemo } from 'react';\nimport { RAW_POWER_UNITS, RAW_MOTORS, RAW_PUMPS } from '@/lib/catalogData';"
)

# 2. Insert logic before return (
logic = """
  // DYNAMIC CATALOG LOGIC
  const powerUnitsList = useMemo(() => RAW_POWER_UNITS.map(u => ({
    model: u.tank_model,
    dead_zone: Number(u.dead_zone),
    total_oil: Number(u.total_oil),
    min_pump: Number(u.min_pump_size),
    max_pump: Number(u.max_pump_size),
    min_motor: Number(u.min_motor_size),
    max_motor: Number(u.max_motor_size)
  })).sort((a, b) => a.total_oil - b.total_oil), []);

  const standardMotors = useMemo(() => list(set([Number(m['power_kw']) for m in RAW_MOTORS])) if False else list(set(map(lambda x: float(x.power_kw), RAW_MOTORS))) if False else [], []) # Wait, JS syntax here
"""
# Actually, I'll use simple string replace for python
logic = """
  const powerUnitsList = useMemo(() => RAW_POWER_UNITS.map(u => ({
    model: u.tank_model,
    dead_zone: Number(u.dead_zone),
    total_oil: Number(u.total_oil),
    min_pump: Number(u.min_pump_size),
    max_pump: Number(u.max_pump_size),
    min_motor: Number(u.min_motor_size),
    max_motor: Number(u.max_motor_size)
  })).sort((a, b) => a.total_oil - b.total_oil), []);

  const standardMotors = useMemo(() => [...new Set(RAW_MOTORS.map(m => Number(m.power_kw)))].sort((a, b) => a - b), []);
  const standardPumps = useMemo(() => RAW_PUMPS.map(p => ({
    desc: p.description,
    flow: Number(p.flow_rate)
  })).sort((a, b) => a.flow - b.flow), []);

  let recommendedPowerUnit = null;
  let recommendedMotor = null;
  let recommendedPump = null;
  
  if (calcResult) {
    const reqOil = calcResult.oilVolume;
    const reqPump = Number(calcResult.pumpFlow);
    const reqMotor = Number(calcResult.motorPowerReq);
    
    recommendedMotor = standardMotors.find(m => m >= reqMotor) || reqMotor;
    recommendedPump = standardPumps.find(p => p.flow >= reqPump)?.desc || (reqPump + ' L/dk');

    recommendedPowerUnit = powerUnitsList.find(unit => 
      (unit.total_oil - unit.dead_zone) >= reqOil &&
      reqPump >= unit.min_pump && reqPump <= unit.max_pump &&
      recommendedMotor >= unit.min_motor && recommendedMotor <= unit.max_motor
    ) || powerUnitsList.find(unit => 
      (unit.total_oil - unit.dead_zone) >= reqOil &&
      reqPump >= unit.min_pump && reqPump <= unit.max_pump
    ) || powerUnitsList.find(unit => (unit.total_oil - unit.dead_zone) >= reqOil);
  }

  return ("""

content = content.replace("  return (", logic, 1)

# 3. Replace cards
pump_regex = re.compile(r'\{\/\* 2\. Pump Card \*\/\}.*?Sistem Debi Kapasitesi.*?<\/div>.*?<\/div>', re.DOTALL)
pump_repl = """{/* 2. Pump Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Pompa</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          {recommendedPump}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>Minimum Debi: {calcResult.pumpFlow} L/dk</div>
                      </div>
                    </div>"""

content = pump_regex.sub(pump_repl, content, count=1)

motor_regex = re.compile(r'\{\/\* 3\. Motor Card \*\/\}.*?Dalg\w\w tip asans\w\w motoru.*?Statik Bas\w\w\w:.*?<\/div>.*?<\/div>', re.DOTALL)
motor_repl = """{/* 3. Motor Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Motor</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          {recommendedMotor} <span style={{fontSize:'1.2rem'}}>kW</span>
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>Minimum gereksinim: {calcResult.motorPowerReq} kW</div>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: '#f5f5f7', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 500 }}>
                        Statik Basınç: {calcResult.staticPressure} Bar
                      </div>
                    </div>"""
content = motor_regex.sub(motor_repl, content, count=1)

tank_regex = re.compile(r'\{\/\* 5\. Power Unit \/ Tank Card \*\/\}.*?Sistem ya\w\w ihtiyac\w.*?<\/div>.*?<\/div>', re.DOTALL)
tank_repl = """{/* 5. Power Unit / Tank Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Güç Ünitesi</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          {recommendedPowerUnit ? recommendedPowerUnit.model : "Özel Tank"}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>Sistem yağ ihtiyacı: {calcResult.oilVolume} Lt</div>
                      </div>
                    </div>"""
content = tank_regex.sub(tank_repl, content, count=1)

with open('src/app/portal/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx")
