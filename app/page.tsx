"use client"
import Image from "next/image";
import { DataTable } from "./data-table";
import { ColumnDef } from "@tanstack/react-table"
import { columns, Member } from "./columns"
import { ChartBarLabel } from "./chart-bar-label"
import { ChartBarLabelCustom } from "./chart-bar-label-custom"
import { ChartLineMultiple } from "./chart-line-multiple"
 
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Home() {

  const data = [
    { Member_ID: "M001", Member_Name: "John Cruz", Membership_Type: "Regular", Attendance_Days: 12, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1200 },
    { Member_ID: "M002", Member_Name: "Alex Santos", Membership_Type: "Premium", Attendance_Days: 25, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1800 },
    { Member_ID: "M003", Member_Name: "Bella Reyes", Membership_Type: "Regular", Attendance_Days: 8, Trainer_Assigned: "Coach Louie", Monthly_Fee: 1200 },
    { Member_ID: "M004", Member_Name: "Carlo Dizon", Membership_Type: "VIP", Attendance_Days: 28, Trainer_Assigned: "Coach Mia", Monthly_Fee: 2500 },
    { Member_ID: "M005", Member_Name: "Dana Lopez", Membership_Type: "Premium", Attendance_Days: 20, Trainer_Assigned: "Coach Mia", Monthly_Fee: 1800 },
    { Member_ID: "M006", Member_Name: "Enzo Ramos", Membership_Type: "Regular", Attendance_Days: 15, Trainer_Assigned: "Coach Louie", Monthly_Fee: 1200 },
    { Member_ID: "M007", Member_Name: "Faith Tan", Membership_Type: "Regular", Attendance_Days: 10, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1200 },
    { Member_ID: "M008", Member_Name: "George Lim", Membership_Type: "VIP", Attendance_Days: 30, Trainer_Assigned: "Coach Mia", Monthly_Fee: 2500 },
    { Member_ID: "M009", Member_Name: "Hazel Yu", Membership_Type: "Premium", Attendance_Days: 22, Trainer_Assigned: "Coach Louie", Monthly_Fee: 1800 },
    { Member_ID: "M010", Member_Name: "Ivan Cruz", Membership_Type: "Regular", Attendance_Days: 9, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1200 },
    { Member_ID: "M011", Member_Name: "Jane Torres", Membership_Type: "Premium", Attendance_Days: 26, Trainer_Assigned: "Coach Mia", Monthly_Fee: 1800 },
    { Member_ID: "M012", Member_Name: "Kyle Ramos", Membership_Type: "Regular", Attendance_Days: 11, Trainer_Assigned: "Coach Louie", Monthly_Fee: 1200 },
    { Member_ID: "M013", Member_Name: "Lia David", Membership_Type: "VIP", Attendance_Days: 27, Trainer_Assigned: "Coach Mia", Monthly_Fee: 2500 },
    { Member_ID: "M014", Member_Name: "Mark Villanueva", Membership_Type: "Regular", Attendance_Days: 14, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1200 },
    { Member_ID: "M015", Member_Name: "Nina Sotto", Membership_Type: "Premium", Attendance_Days: 23, Trainer_Assigned: "Coach Louie", Monthly_Fee: 1800 },
    { Member_ID: "M016", Member_Name: "Omar Cortez", Membership_Type: "Regular", Attendance_Days: 16, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1200 },
    { Member_ID: "M017", Member_Name: "Pia Mercado", Membership_Type: "VIP", Attendance_Days: 29, Trainer_Assigned: "Coach Mia", Monthly_Fee: 2500 },
    { Member_ID: "M018", Member_Name: "Quin Alonzo", Membership_Type: "Regular", Attendance_Days: 13, Trainer_Assigned: "Coach Louie", Monthly_Fee: 1200 },
    { Member_ID: "M019", Member_Name: "Rina Go", Membership_Type: "Premium", Attendance_Days: 24, Trainer_Assigned: "Coach Kim", Monthly_Fee: 1800 },
    { Member_ID: "M020", Member_Name: "Sam Lim", Membership_Type: "VIP", Attendance_Days: 31, Trainer_Assigned: "Coach Mia", Monthly_Fee: 2500 }
  ];

  const metrics = [
    {
      category: "Members",
      metric: "Total Active Members",
      formula: "20",
      result: 20
    },
    {
      category: "Attendance",
      metric: "Highest Attendance",
      formula: "31",
      result: 31
    },
    {
      category: "Attendance",
      metric: "Lowest Attendance",
      formula: "8",
      result: 8
    },
    {
      category: "Attendance",
      metric: "Average Attendance",
      formula: "19.65",
      result: 20.2
    },
    {
      category: "Finances",
      metric: "Highest Monthly Fee",
      formula: "2500",
      result: "₱2,500"
    },
    {
      category: "Finances",
      metric: "Average Monthly Fee",
      formula: "1705",
      result: "₱1,745"
    },
    {
      category: "Finances",
      metric: "Total Monthly Revenue",
      formula: "34100",
      result: "₱34,000"
    },
    {
      category: "Staff",
      metric: "Most Active Trainer",
      formula: "Use Pivot Table",
      result: "Coach Mia"
    },
    {
      category: "Membership",
      metric: "Most Common Type",
      formula: "Use Pivot Table or MODE.MULT()",
      result: "Regular"
    }
  ];

  const attendanceData = [
    { Membership_Type: "Regular", Average_Attendance: 12, Predicted_Next_Month_Attendance: 13 },
    { Membership_Type: "Premium", Average_Attendance: 23.33333333, Predicted_Next_Month_Attendance: 25.33333333 },
    { Membership_Type: "VIP", Average_Attendance: 29, Predicted_Next_Month_Attendance: 30 },
  ];


  return (
    <section className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      <h1 className="font-bold text-lg" id="descriptive">Descriptive Analytics</h1>
      <Table className="mb-25">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Invoice</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Method</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metrics, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">{metrics.category}</TableCell>
              <TableCell className="text-center">{metrics.metric}</TableCell>
              <TableCell className="text-center">{metrics.formula}</TableCell>
              <TableCell className="text-center">{metrics.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full h-[50%] flex flex-row justify-center items-center gap-2 mb-40">
        <ChartBarLabel />
        <ChartBarLabelCustom />
      </div>
      <h1 className="font-bold text-lg" id="descriptive">Predictive Analytics</h1>
      <Table className="mb-25">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="">
          <TableRow>
            <TableHead className="w-[100px] text-center">Membership Type</TableHead>
            <TableHead className="text-center">Average Attendance</TableHead>
            <TableHead className="text-center">Predicted Next Month Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {attendanceData.map((attendanceData, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center" >{attendanceData.Membership_Type}</TableCell>
              <TableCell className="text-center">{attendanceData.Average_Attendance}</TableCell>
              <TableCell className="text-center">{attendanceData.Predicted_Next_Month_Attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full h-[30%] flex flex-row justify-center items-center mb-40">
        <ChartLineMultiple />
      </div>
    </section>
  );
}
