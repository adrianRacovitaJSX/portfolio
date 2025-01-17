import { ReactNode } from 'react';

interface Column {
  key: string;
  header: string;
}

interface CustomTableProps {
  columns: Column[];
  data: Record<string, string>[];
}

export function CustomTable({ columns, data }: CustomTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="bg-zinc-100 dark:bg-zinc-800">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key}
                className="p-4 text-left font-semibold text-zinc-900 dark:text-zinc-100 border-b dark:border-zinc-700"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={`
                ${rowIndex % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50 dark:bg-zinc-800/50'}
                hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors
              `}
            >
              {columns.map((column) => (
                <td 
                  key={`${rowIndex}-${column.key}`}
                  className="p-4 text-zinc-600 dark:text-zinc-400 border-b dark:border-zinc-700"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}