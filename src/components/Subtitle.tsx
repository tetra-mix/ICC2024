import Header from "../components/Header";
import icon from "../assets/icon.png";
import title from "../assets/title_black.png";

type Props = {
  text: string;
}

export default function Subtitle(props: Props) {
  return (
    <>
      <h3 className="pl-8 text-xl font-bold pt-1 pb-1 border-t-2 border-b-2 border-solid border-tea-600 ">
        {props.text}
      </h3>
    </>
  );
}