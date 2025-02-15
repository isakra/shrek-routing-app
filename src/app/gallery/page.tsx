import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-4xl font-bold">Shrek & Donkey Gallery</h1>
      <Image src="/shrek.jpg" alt="Shrek" width={300} height={300} />
      <Image src="/donkey.jpg" alt="Donkey" width={300} height={300} />
    </div>
  );
}
