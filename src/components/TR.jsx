export default function TR({ product, selectProduct, productsSelected }) {
  const selected = productsSelected.some((p) => p.id === product.id);

  return (
    <tr
      className={`border-b hover:bg-gray-100 cursor-pointer ${selected ? "bg-red-50" : "bg-white"}`}
      tabIndex={1}
      onClick={() => selectProduct(product)}
    >
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {product.productName}
      </th>
      <td className="px-6 py-4">{product.color}</td>
      <td className="px-6 py-4">{product.category}</td>
      <td className="px-6 py-4">${product.price}</td>
    </tr>
  );
}
