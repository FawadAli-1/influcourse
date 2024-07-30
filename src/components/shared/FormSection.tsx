"use client";

import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/schemaZod/formSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { addSubscriber } from "@/actions/mail";

const FormSection = () => {

  const {toast} = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    
    try {
      setLoading(true)
      const response = await addSubscriber(values)
      console.log(response);

      if(response.success){
        toast({
          title: "Added to waitlist :)",
          description: response.message
        })
      }else{
        toast({
          title: "Error adding to waitlist!",
          description: response.message,
          variant: "destructive"
        })
      }

      setLoading(false)
      form.reset()
    } catch (error: any) {
      setLoading(true)
      toast({
        title: "An Error Occured!",
        description: error.message,
        variant: "destructive"
      })
      setLoading(false)
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Email</FormLabel>
                <div className="flex gap-1 flex-col lg:flex-row">
                  <FormControl>
                    <Input className="text-slate-900" placeholder="johndoe@gmail.com" {...field} />
                  </FormControl>
                  <Button type="submit" className="md:w-1/4">
                    {loading ? <span className="flex items-center">Please Wait<LoaderCircle className="animate-spin size-4 ml-1"/></span>: <span className="flex items-center">Join Waitlist <SendHorizonal className="size-4 ml-1" /></span> }
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default FormSection;
