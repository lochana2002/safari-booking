export default function Table({ title, data, onDelete, onEdit }: any) {
  return (
    <div>
      <h2>{title}</h2>

      <table className="w-full border border-gray-300">
       <thead className="bg-green-700">
  <tr>
    {data[0] &&
      Object.keys(data[0]).map((key: string) => (
        <th
          key={key}
          className="border border-gray-300 p-3 text-left capitalize"
        >
          {key}
        </th>
      ))}
    <th className="border border-gray-500 p-3">Action</th>
  </tr>
</thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.id}>
              {Object.values(item).map((val: any, i: number) => (
                <td key={i}>{String(val)}</td>
              ))}
             <td className="p-3 space-x-2">
  <button
    onClick={() => onEdit(item)}
    className="bg-blue-800 text-white px-3 py-1 rounded"
  >
    Edit
  </button>

  <button
    onClick={() => onDelete(item.id)}
    className="bg-red-800 text-white px-3 py-1 rounded"
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}