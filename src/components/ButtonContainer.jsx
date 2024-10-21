import Button from "./small/Button";

export default function ButtonContainer({ action }) {
  return (
    <div className="flex gap-4">
      <Button content={"Update"} colors={"bg-orange-600 hover:bg-orange-700"} action={action} />
      <Button content={"Delete"} colors={"bg-red-600 hover:bg-red-700"} action={action} />
      <Button content={"Create"} colors={"bg-green-600 hover:bg-green-700"} action={action} />
    </div>
  );
}
