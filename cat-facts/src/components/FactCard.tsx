import "./../styles/factcard.css";

interface Props {
  title: string;
  text: string;
}

const FactCard = ({ title, text }: Props) => {
  return (
    <div className="factCard">
      <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-16886,resizemode-75,msid-102703009/news/international/us/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg" />
      <div className="content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FactCard;
