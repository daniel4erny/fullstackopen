type Props = {
  currName: string;
  currPhoneNum: string;
  updatePhone: (phoneNum: string) => void;
  updateName: (name: string) => void;
  newName: () => void;
};

export default function PersonForm({
  currName,
  currPhoneNum,
  updateName,
  updatePhone,
  newName,
}: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        newName();
      }}
    >
      <div>
        name:{" "}
        <input value={currName} onChange={(e) => updateName(e.target.value)} />
      </div>
      <div>
        phone number:{" "}
        <input
          value={currPhoneNum}
          onChange={(e) => updatePhone(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
