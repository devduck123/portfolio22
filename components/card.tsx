import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="m-8 p-8 shadow-md shadow-red-300/40">
      <div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300 tracking-wide m-4">
          {props.name}
        </h1>
      </div>
      <div className="m-4 flex justify-center">
        <Image
          src={props.imageUrl}
          width="480"
          height="320"
          className="rounded-md shadow-xl"
        />
      </div>
      <div className="p-1 my-2 text-lg flex justify-center">
        {props.description}
      </div>
      <div className="p-1 my-2 flex justify-center">
        <em>{props.technologies}</em>
      </div>
    </div>
  );
}
