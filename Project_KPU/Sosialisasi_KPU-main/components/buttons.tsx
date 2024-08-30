import {
  deleteLocationData,
  getCurrentCities,
  getPost,
  updateTotal,
} from "@/lib/firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

export function UpdateInvoice({
  id,
  path,
}: {
  id: string | undefined;
  path: string | undefined;
}) {
  return (
    <Link
      href={`/dashboard/history/${path}/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-6" />
    </Link>
  );
}

export function DeleteInvoice({
  id,
  path,
}: {
  id: string | undefined;
  path: string | undefined;
}) {
  const router = useRouter();
  const deletePost = async () => {
    const currentCity = await getCurrentCities(path!!);
    const post = await getPost(path!!, id!!);

    const total_original_coklit_value =
      currentCity?.current_coklit!! - post?.total!!;

    await updateTotal(currentCity?.key!!, total_original_coklit_value);

    await deleteLocationData(path!!, id!!);
    router.push("/dashboard/history");
  };
  return (
    <>
      <form onSubmit={deletePost}>
        <Button type="submit" className="rounded-md border p-2 bg-white">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-6" />
        </Button>
      </form>
    </>
  );
}

function PencilIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z" />
    </svg>
  );
}

function TrashIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z" />
    </svg>
  );
}
