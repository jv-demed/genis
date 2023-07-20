import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dlyyhajyvsmaxtrlsngh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseXloYWp5dnNtYXh0cmxzbmdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTgxNzk3MywiZXhwIjoyMDA1MzkzOTczfQ.0LgxB1ZiP7Ia5H3AYm5ceaS3YwvE-8qnf0-PbFdOyOY';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getTableAsc(table, select, order){
    const res = await supabase.from(table).select(select)
    .order(order, { ascending: true });
    if(res.status == 200){
        return res.data;
    }
}

export async function insertRecord(table, obj){
    const insert = await supabase.from(table).insert(obj);
    if(insert.status != 201){
        console.log(insert.error);
    }
}