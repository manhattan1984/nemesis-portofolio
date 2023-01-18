import supabase from "../utils/supabase";
import HomePage from "./HomePage";

export default async function Page() {
  const { data, error } = await supabase
    .from("works")
    .select()
    .eq("featured", true);
  return <HomePage works={data} />;
}
