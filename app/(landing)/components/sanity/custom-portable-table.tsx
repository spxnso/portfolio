import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow as UITableRow,
} from "@/components/ui/table";
import type { TableRow as SanityTableRow } from "@sanity/table";

export interface CustomPortableTableProps {
  value: {
    rows: SanityTableRow[];
  };
}

export default function CustomPortableTable({
  value,
}: CustomPortableTableProps) {
  const { rows } = value;

  if (!rows || rows.length === 0) {
    return null;
  }
  const [header, ...body] = rows;

  return (
    <Table>
      <TableHeader>
        <UITableRow>
          {header.cells.map((cell, i) => (
            <TableHead key={i}>{cell}</TableHead>
          ))}
        </UITableRow>
      </TableHeader>
      <TableBody>
        {body.map((row, rowIndex) => (
          <UITableRow key={row._key || rowIndex}>
            {row.cells.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </UITableRow>
        ))}
      </TableBody>
    </Table>
  );
}
