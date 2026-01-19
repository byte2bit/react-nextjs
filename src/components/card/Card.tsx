import Image from "next/image"
import Link from "next/link";
import { Interface } from "readline";

interface ICardProps {
    href: string;
    image: string;
    title: string;
    description: string;
}

export const Card = ({href, image, title, description}:ICardProps) => {

    return(
        <Link href={href} className="hover:no-underline">
            <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
            <Image 
                alt={title}
                src={image} 
                className="aspect-video object-cover rounded-2xl"
                width={1000}
                height={0}
                draggable={false}
            />
                <h4 className="font-extrabold text-lg">{title}</h4>
                <p className="line-clamp-3">{description}</p>
        </article>
        </Link>
    );
};