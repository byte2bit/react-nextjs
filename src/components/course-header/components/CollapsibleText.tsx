'use client';

import { useState } from "react";

interface ICollapsibleTextProps {
    numberOfLinesWhenClosed: number;
    children: React.ReactNode
}

export const CollapsibleText = ({ children, numberOfLinesWhenClosed }: ICollapsibleTextProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-end">
            <p
                data-open={open}
                className="data-[open=false]:line-clamp-(--number-of-lines-when-closed)"
                style={{ "--number-of-lines-when-closed": numberOfLinesWhenClosed }}
            // className="data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]"
            // className="line-clamp-(--number-of-lines-when-closed)"
            // style={{ "--number-of-lines-when-closed": numberOfLinesWhenClosed } as any }
            >
                {children}
            </p>
            <button
                onClick={() => setOpen(!open)}
                className="px-1 bg-paper rounded border border-primary data-[open=false]:-mt-7">
                {open ? 'Ver menos' : 'Ver Mais'}
            </button>
        </div>
    );
}