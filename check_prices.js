const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://uzcwbrybjfaeyuqyjgzu.supabase.co';
const supabaseKey = 'sb_publishable_Jw2Mbe-MUvvOIGurDh1f8g_x4KA-QI9';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAccessories() {
  const { data: acc, error } = await supabase.from('accessories').select('*').limit(2);
  console.log("Accessories:", acc, "Error:", error);
}
checkAccessories();
