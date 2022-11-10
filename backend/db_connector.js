import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const { data, error } = await supabase
    .from('sports')
    .select();
console.log(data);

// const { error } = await supabase
//     .from('sports')
//     .insert({ name: 'Basketball', sportid: 1 });
