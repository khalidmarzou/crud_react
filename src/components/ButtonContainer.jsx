import Button from "./small/Button";

export default function ButtonContainer() {
  return (
    <div className="flex gap-4">
      <Button content={"Update"} colors={"bg-orange-700 hover:bg-orange-900"} />
      <Button content={"Delete"} colors={"bg-red-700 hover:bg-red-900"} />
      <Button content={"Create"} colors={"bg-green-700 hover:bg-green-900"} />
    </div>
  );
}
