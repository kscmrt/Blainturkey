const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testDB() {
  console.log("Fetching tables...");
  
  // Try to find pricing tables
  const { data: pumpData, error: pumpError } = await supabase.from('pump_catalog').select('*').limit(5);
  console.log("Pump Table Sample:", pumpData, pumpError?.message);

  const { data: motorData, error: motorError } = await supabase.from('motor_catalog').select('*').limit(5);
  console.log("Motor Table Sample:", motorData, motorError?.message);
}

testDB();
