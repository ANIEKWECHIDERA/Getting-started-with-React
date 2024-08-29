interface Props {
  text: string;
  onClick: () => void;
}
const button = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary">
      {text}
    </button>
  );
};

export default button;
