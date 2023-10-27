import "./../styles/factcard.css";

interface Props {
  title: string;
  text: string;
  color: string;
}

const FactCard = ({ title, text, color }: Props) => {
  return (
    <>
      <div className="factCard" style={{ backgroundColor: color }}>
        <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-16886,resizemode-75,msid-102703009/news/international/us/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg" />
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default FactCard;
