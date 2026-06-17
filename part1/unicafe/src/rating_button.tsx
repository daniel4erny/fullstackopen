type Props = {
  rate: () => void;
  word: string;
};

export default function Rating_button({ rate, word }: Props) {
  return <button onClick={rate}>{word}</button>;
}
