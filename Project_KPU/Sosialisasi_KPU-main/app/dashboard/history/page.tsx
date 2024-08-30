"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import SideNav from "@/components/dashboard/side-nav";
import Header from "@/components/dashboard/header";
import { DeleteInvoice, UpdateInvoice } from "@/components/buttons";
import { useEffect, useState } from "react";
import {
  Cities,
  getAllLocations,
  getLocation,
  Location,
} from "@/lib/firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/clientApp";

export default function Component() {
  const [locations, setLocations] = useState<Cities[]>([]);
  const [tempCity, setTempCity] = useState<string>("");
  const [subCollectionData, setSubCollectionData] = useState<Location[]>([]);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const fetchLocation = await getAllLocations();
        setLocations(fetchLocation);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (!user) {
      return router.push("/login");
    }
  }, []);

  const handleLocationChange = async (selectedLocation: string) => {
    setTempCity(selectedLocation);
    try {
      const location = await getLocation(selectedLocation);
      console.log(location);
      setSubCollectionData(location);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <SideNav />
      <Header />

      <div className="flex-1 sm:ml-10">
        <div>
          <div className="flex flex-col gap-6 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold ml-2">Total Progress</h1>

              <div className="gap-1">
                <Link href={"/dashboard/history/create"}>
                  <Button size="sm" className="h-8  gap-1 mx-2 bg-blue-600">
                    <AddIcon className="h-4 w-4" />
                    <span className="hidden md:inline text-white">Add</span>
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <FilterIcon className="h-4 w-4" />
                      <span className="hidden md:inline">
                        {tempCity ? tempCity : "Filter By"}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Nama Kota</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      onValueChange={handleLocationChange}
                    >
                      {locations.map((item) => (
                        <DropdownMenuRadioItem key={item.key} value={item.key}>
                          {item.name}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="mt-6 flow-root">
              <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                  {/* Content di Mobile */}

                  {subCollectionData.length ? (
                    <div className="md:hidden">
                      {subCollectionData?.map((item) => (
                        <div
                          key={item.id}
                          className="mb-2 w-full rounded-md bg-white p-4"
                        >
                          <div className="flex items-center justify-between border-b pb-4">
                            <div>
                              <div className="mb-2 flex items-center">
                                <p>{item.name}</p>
                              </div>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex w-full items-center justify-between pt-4">
                            <div>
                              <p className="text-xl font-medium">
                                {item.total}
                              </p>
                              <p>{item.timestamp}</p>
                            </div>
                            <div className="flex justify-end gap-2">
                              <UpdateInvoice id={item.id} path={item.key} />
                              <DeleteInvoice id={item.id} path={item.key} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="md:hidden">Empty, please create a Report</p>
                  )}

                  {/* Content di Desktop */}
                  {subCollectionData.length ? (
                    <table className="hidden min-w-full text-gray-900 md:table">
                      <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-5 font-medium sm:pl-6"
                          >
                            Name
                          </th>
                          <th scope="col" className="px-3 py-5 font-medium">
                            Deskripsi
                          </th>
                          <th scope="col" className="px-3 py-5 font-medium">
                            Total Penambahan
                          </th>
                          <th scope="col" className="px-3 py-5 font-medium">
                            Tanggal
                          </th>
                          <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white">
                        {subCollectionData?.map((item) => (
                          <tr
                            key={item.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                          >
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                              <div className="flex items-center gap-3">
                                <p>{item.name}</p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                              {item.description}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                              {item.total}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                              {item.timestamp}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                              <div className="flex justify-end gap-3">
                                <UpdateInvoice id={item.id} path={item.key} />
                                <DeleteInvoice id={item.id} path={item.key} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="hidden md:inline-flex">
                      Empty, please create a Report
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function AddIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#ffffff"
      viewBox="0 0 24 24"
    >
      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
    </svg>
  );
}
