import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

const supabase_url = import.meta.env.VITE_SUPABASE_URl;
const supabase_anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabase_url, supabase_anon_key);

export default supabase;
