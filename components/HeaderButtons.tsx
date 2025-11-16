"use client"
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button"

export default function HeaderButtons() {
    
    const handleClick = () => {
        const router = useRouter();
    
    router.push(`./${"descriptive"}`);
  };

    return (
        <header className="w-screen h-15 border border-black flex flex-row-reverse px-20 items-center sticky top-0 z-50 text-white bg-black">
            <Button className="bg-black text-white"  variant="link">Prescriptive</Button>
            <Button  variant="link">Predictive</Button>
            <Button onClick={handleClick}  variant="link"><a href="./">Descriptive</a></Button>
            <h1 className="flex grow text-lg font-bold">DUKEIGN GYM</h1>
        </header>
    )
}
