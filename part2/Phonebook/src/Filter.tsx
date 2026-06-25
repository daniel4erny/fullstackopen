type Props = {
  newFilter: (arg0: string) => void;
};

export default function Filter({ newFilter }: Props) {
  return <input onChange={(e) => newFilter(e.target.value)} />;
}
