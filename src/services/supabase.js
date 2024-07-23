
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://mwurecalkbuvnloyagec.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dXJlY2Fsa2J1dm5sb3lhZ2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMjIwMDEsImV4cCI6MjAzNjg5ODAwMX0.eSgneOU3Sg8jtrjkvSjiNOW-I3QSEUtIUgdtm8_SccA'
const supabase = createClient(supabaseUrl, supabaseKey);
 export default supabase;