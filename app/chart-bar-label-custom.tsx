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
    { trainer: "Coach Kim", numberOFAssignedMember: 7 },
    { trainer: "Coach Mia", numberOFAssignedMember: 7 },
    { trainer: "Coach Louie", numberOFAssignedMember: 6 },
];

const chartConfig = {
    desktop: {
        label: "Attendance ",
        color: "var(--chart-3)",
    },
    numberOFAssignedMember: {
        label: "Number of Assign Members "
    }
} satisfies ChartConfig

export function ChartBarLabelCustom() {


    return (
        <ResponsiveContainer width="50%" height="100%">
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart - Label</CardTitle>
                    <CardDescription>Trainer vs Member Count</CardDescription>
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
                                dataKey="trainer"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 20)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="numberOFAssignedMember" fill="var(--color-desktop)" radius={8}>
                                <LabelList
                                    position="top"
                                    offset={12}
                                    className="fill-foreground text-lg"
                                    fontSize={14}

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
