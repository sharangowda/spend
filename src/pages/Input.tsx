import { Input } from "@/components/ui/input";

interface Props {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input1({ onChangeHandler }: Props) {
  return (
    <>
      <Input onChange={onChangeHandler} />
    </>
  );
}

export default Input1;
