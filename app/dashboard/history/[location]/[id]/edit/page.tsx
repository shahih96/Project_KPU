"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import SideNav from "@/components/dashboard/side-nav";
import Header from "@/components/dashboard/header";
import {
  Cities,
  deleteLocationData,
  getAllLocations,
  getCurrentCities,
  getPost,
  Location,
  updateTotal,
  uploadRecentData,
} from "@/lib/firebase/firestore";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { uploadLocationData } from "@/lib/firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { uploadLocationImage } from "@/lib/firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/clientApp";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .trim(),
  total: z.coerce.number(),
  location: z.string(),
  file: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  description: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
});

export default function Page({
  params,
}: {
  params: { location: string; id: string };
}) {
  console.log(params);
  const [location, setLocation] = useState<Cities[]>([]);
  const [post, setPost] = useState<Location>();
  const [currentCity, setCurrentCity] = useState<Cities>();
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const fetchlocation = async () => {
      try {
        const fetchPosts = await getPost(params.location, params.id);
        const fetchLocation = await getAllLocations();
        const fetchCurrentCity = await getCurrentCities(params.location);
        setCurrentCity(fetchCurrentCity);
        setLocation(fetchLocation);
        setPost(fetchPosts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchlocation();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  if (!user) {
    return router.push("/login");
  }

  const fileRef = form.register("file");

  const handleSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const locationRef = await uploadLocationImage(value.name, value.file[0]);

      const data: Location = {
        name: value.name,
        key: value.location,
        total: value.total,
        description: value.description,
        file: locationRef,
        timestamp: Timestamp.now().toDate().toDateString(),
      };

      const total_original_coklit_value =
        currentCity?.current_coklit!! - post?.total!!;
      await updateTotal(currentCity?.key!!, total_original_coklit_value);
      await deleteLocationData(params.location, params.id);

      // Update the data
      const cities = await getCurrentCities(value.location);
      const temp_value = cities.current_coklit + value.total;

      await uploadLocationData(data);
      await uploadRecentData(data);
      await updateTotal(value.location, temp_value);

      console.log(value);
      router.push("/dashboard/history");
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };
  return (
    <div>
      <SideNav />
      <Header />

      <div className="flex flex-col gap-6 p-4 md:p-6 sm:ml-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold ml-2 ">Update Progress</h1>
        </div>

        <Card className="border-0 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <CardContent className="px-4 py-4 grid gap-4 md:px-6 md:py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            placeholder="Enter name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="grid gap-2">
                          <Label htmlFor="location">Daerah</Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih daerah" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Locations</SelectLabel>
                                {location.map((loc) => (
                                  <SelectItem key={loc.key} value={loc.key}>
                                    {loc.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="total"
                  render={({ field }) => {
                    return (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="total">Total Coklit</FormLabel>
                        <FormControl>
                          <Input
                            id="total"
                            placeholder="Enter total"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => {
                    return (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <FormControl>
                          <Textarea
                            id="description"
                            placeholder="Enter description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => {
                    return (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="file">File</FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            {...fileRef}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </CardContent>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
