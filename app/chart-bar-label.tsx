"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a label"

const chartData = [
  { Member_ID: "M001", Attendance_Days: 12 },
  { Member_ID: "M002", Attendance_Days: 25 },
  { Member_ID: "M003", Attendance_Days: 8 },
  { Member_ID: "M004", Attendance_Days: 28 },
  { Member_ID: "M005", Attendance_Days: 20 },
  { Member_ID: "M006", Attendance_Days: 15 },
  { Member_ID: "M007", Attendance_Days: 10 },
  { Member_ID: "M008", Attendance_Days: 30 },
  { Member_ID: "M009", Attendance_Days: 22 },
  { Member_ID: "M010", Attendance_Days: 9 },
  { Member_ID: "M011", Attendance_Days: 26 },
  { Member_ID: "M012", Attendance_Days: 11 },
  { Member_ID: "M013", Attendance_Days: 27 },
  { Member_ID: "M014", Attendance_Days: 14 },
  { Member_ID: "M015", Attendance_Days: 23 },
  { Member_ID: "M016", Attendance_Days: 16 },
  { Member_ID: "M017", Attendance_Days: 29 },
  { Member_ID: "M018", Attendance_Days: 13 },
  { Member_ID: "M019", Attendance_Days: 24 },
  { Member_ID: "M020", Attendance_Days: 31 }
];

const chartConfig = {
  desktop: {
    label: "Attendance",
    color: "var(--chart-3)",
  },
  Attendance_Days: {
    label: "Attendance"
  }
} satisfies ChartConfig

export function ChartBarLabel() {


  return (
    <ResponsiveContainer width="50%" height="100%">
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Label</CardTitle>
          <CardDescription>Attendance per Member</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="Member_ID"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 20)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="Attendance_Days" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground text-lg"
                  fontSize={20}

                />
              </Bar>
            </BarChart>

          </ChartContainer>
        </CardContent>

        {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
      </Card>
    </ResponsiveContainer>
  )
}
