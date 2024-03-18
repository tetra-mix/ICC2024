import Header from "../components/Header";
import icon from "../assets/icon.png";
import title from "../assets/title_black.png";

type Props = {
  text: string;
  image_: boolean;
  subtext?: string;
}

export default function Base(props: Props) {
  return (
    <>
      <Header />
      <section className="flex flex-row p-5 bg-tea-100 items-end">
        <div className="basis-1/2">
          <img className="w-full max-w-96" src={icon}></img>
        </div>
        <div className="basis-2/2">
          <h1 className="text-black text-xl font-bold sm:text-2xl md:text-5xl ">
            {props.text}
          </h1>
          <p className="p-5 sm:p-10 text-sm">
            {
              props.image_ ?
                <img src={title} className="w-full max-w-48"></img>
                : props.subtext
            }
          </p>
        </div>
      </section>
    </>

  );
}