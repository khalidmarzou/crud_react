import TR from "./TR";

export default function () {
  return (
    <div class="relative overflow-x-auto w-4/5">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Color
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <TR />
          <TR />
          <TR />
          <TR />
          <TR />
        </tbody>
      </table>
    </div>
  );
}
