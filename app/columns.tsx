import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"

export type Member = {
    Member_ID: string
    Member_Name: string
    Membership_Type: string
    Attendance_Days: number
    Trainer_Assigned: string
    Monthly_Fee: number
}


export const columns: ColumnDef<Member>[] = [
    {
        accessorKey: "Member_ID",
         header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Member ID
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "Member_Name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Member Name
                    <ArrowUpDown className=" h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "Membership_Type",
        header: "Membership Type",
    },
    {
        accessorKey: "Attendance_Days",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Attendance
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "Trainer_Assigned",
        header: "Trainer Assigned",
    },
    {
        accessorKey: "Monthly_Fee",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Monthly Fee
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("Monthly_Fee"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PHP",
            }).format(amount)

            return <div className="text-left font-medium">{formatted}</div>
        },
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const payment = row.original
    //         const handleDelete = (id: string) => {
    //             if (confirm(`Are you sure you want to delete payment ${id}?`)) {
    //                 // perform deletion logic here
    //                 console.log(`Deleted payment ${id}`);
    //             }
    //         };

    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() => navigator.clipboard.writeText(payment.Member_ID)}
    //                     >
    //                         Copy payment ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem onClick={() => handleDelete("Item 1")}>Delete</DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         )
    //     },
    // },
];