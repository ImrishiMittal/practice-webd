import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  export default function TablePage() {
    return (
      <div className="p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
  
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Rishi</TableCell>
              <TableCell>rishi@gmail.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Rahul</TableCell>
              <TableCell>rahul@gmail.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Aman</TableCell>
              <TableCell>aman@gmail.com</TableCell>
              <TableCell>Manager</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }