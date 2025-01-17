import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { CodeBlock } from './ui/code-block'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface HeadingProps {
  children: ReactNode;
}

// Añadimos la interfaz para la tabla personalizada
interface Column {
  key: string;
  header: string;
}

interface CustomTableProps {
  columns: Column[];
  data: Record<string, string>[];
}

// Añadimos el componente CustomTable
function CustomTable({ columns, data }: CustomTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}-${row.feature}`}>
              {columns.map((column) => (
                <TableCell key={`cell-${rowIndex}-${column.key}`}>
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const createHeading = (Tag: 'h1' | 'h2' | 'h3') => {
    return function HeadingComponent({ children }: HeadingProps) {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      
      const classNames = {
        h1: "text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 scroll-mt-20",
        h2: "text-3xl font-bold mb-3 text-zinc-800 dark:text-zinc-200 scroll-mt-20",
        h3: "text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-200 scroll-mt-20",
      };

      return (
        <Tag id={id} className={classNames[Tag]}>
          {children}
        </Tag>
      );
    };
  };

  return {
    h1: createHeading('h1'),
    h2: createHeading('h2'),
    h3: createHeading('h3'),
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">{children}</p>
    ),
    a: ({ href, children }: { href?: string; children: ReactNode }) => (
      <Link 
        href={href ?? '#'} 
        className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
      >
        {children}
      </Link>
    ),
    Image: ({ src, alt, width, height, className }: any) => (
      <div className="my-8">
        <Image
          src={src ?? ''}
          alt={alt ?? ''}
          width={width ?? 800}
          height={height ?? 400}
          className={`rounded-lg ${className ?? ''}`}
        />
      </div>
    ),
    CodeBlock: (props: any) => (
      <div className="my-6">
        <CodeBlock {...props} />
      </div>
    ),
    // Añadimos el CustomTable a los componentes
    CustomTable,
    // Mantenemos los componentes de tabla originales para compatibilidad
    table: ({ children }: { children: ReactNode }) => (
      <div className="my-6">
        <Table>{children}</Table>
      </div>
    ),
    thead: ({ children }: { children: ReactNode }) => (
      <TableHeader>{children}</TableHeader>
    ),
    tbody: ({ children }: { children: ReactNode }) => (
      <TableBody>{children}</TableBody>
    ),
    tr: ({ children }: { children: ReactNode }) => (
      <TableRow>{children}</TableRow>
    ),
    th: ({ children }: { children: ReactNode }) => (
      <TableHead>{children}</TableHead>
    ),
    td: ({ children }: { children: ReactNode }) => (
      <TableCell>{children}</TableCell>
    ),
    ...components,
  }
}