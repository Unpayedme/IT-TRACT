"use client"

import { Button } from "@/components/ui/button"

export default function HeaderButtons() {
    return (
        <header className="w-screen h-15 border border-black flex flex-row-reverse px-20 items-center">
            <Button className="bg-black text-white">Prescriptive</Button>
            <Button>Predictive</Button>
            <Button>Descriptive</Button>
            <h1 className="flex grow text-lg font-bold">DUKEIGN GYM</h1>
        </header>
    )
}
