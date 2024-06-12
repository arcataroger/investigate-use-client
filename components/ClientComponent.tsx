'use client';
import useSomethingClientside from "@/hooks/useSomethingClientside";
type Props = {};

export default function ClientComponent({}: Props) {
    const somethingClientside = useSomethingClientside();

    return somethingClientside
}