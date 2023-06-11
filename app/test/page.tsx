import Link from "next/link";

export default function Test() {
  return (
    <>
      test page
      <Link href={"/home"} className=" text-purple-600">
        Home?
      </Link>
    </>
  );
}
