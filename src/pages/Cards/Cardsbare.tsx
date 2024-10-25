import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PropTypes = {
  title: number;
  body: string;
  status: string;
};

export function Cardsbare({ title, body, status }: PropTypes) {
  return (
    <Card className="w-[350px] m-3">
      <CardHeader>
        <CardTitle>Rs. {title}</CardTitle>
        <div className="flex justify-between">
          <CardDescription>{body}</CardDescription>
          <CardDescription>{status}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
