import React from "react";
import supabase from "../../utils/supabase";
import Works from "./Works";

const page = async () => {
  const { data, error } = await supabase.from("works").select();
  return <Works works={data} />;
};

export default page;
