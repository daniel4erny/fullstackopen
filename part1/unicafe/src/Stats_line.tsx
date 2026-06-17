type Props = {
  info: string;
  value: string;
};

export default function Stats_line({ info, value }: Props) {
  return (
    <tr>
      <td>{info}</td>
      <td>{value}</td>
    </tr>
  );
}
