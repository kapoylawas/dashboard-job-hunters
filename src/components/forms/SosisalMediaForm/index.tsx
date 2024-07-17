"use client"

import FieldInput from "@/components/organisms/FieldInput";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { socialMediaFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SocialMediaFormProps { }

const SocialMediaForm: FC<SocialMediaFormProps> = ({ }) => {
    const form = useForm<z.infer<typeof socialMediaFormSchema>>({
        resolver: zodResolver(socialMediaFormSchema),
    });

    const onSubmit = (val: z.infer<typeof socialMediaFormSchema>) => {
        console.log(val);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <FieldInput
                    title="Basic Information"
                    subtitle="Add elsewhere links to your company profile"
                >
                    <div className="space-y-5">
                        <FormField
                            control={form.control}
                            name="facebook"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Facebook</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.facebook.com/pemkabsidoarjo1"
                                            {...field}
                                            className="w-[450px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="instagram"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Instagram</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.instagram.com/pemkabsidoarjo"
                                            {...field}
                                            className="w-[450px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="twitter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Twitter</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.linkedin.com/"
                                            {...field}
                                            className="w-[450px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Linkedin</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.linkedin.com/"
                                            {...field}
                                            className="w-[450px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="youtube"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Youtube</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.youtube.com/watch?v=dmZi4ndmbyI"
                                            {...field}
                                            className="w-[450px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </FieldInput>
                <div className="flex justify-end">
                    <Button size='lg' >
                        Save Change
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SocialMediaForm;
