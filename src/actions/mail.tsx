"use server"

import { formSchema } from "@/schemaZod/formSchema";
import z from "zod";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export const addSubscriber = async (data: z.infer<typeof formSchema>) => {
  const { email } = data;
  
  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        tags: ["Influcourse"],
        status: "subscribed",
      }
    );

    return { success: true, message: "We will update you about Influcourse through emails. Make sure to keep in touch. 😊" };
  } catch (error: any) {
    if (error.response && error.response.body && error.response.body.title === "Member Exists") {
        return { success: false, message: "This email is already subscribed." };
    }
    console.log(error);
    
    return { success: false, message: "An error occurred. Please try again." };
}
}
