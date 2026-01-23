import { Metadata } from "next";

interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const resolvedParams = await params;
    const { id } = resolvedParams;
    return {
        title: `Detalhe de Curso - ${id}`
    }
};

export default async function PageCourseDetail({ params }: Props) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    return (
        <main className="mt-8 flex justify-center">
            <div className="mt-8 min-[880px]:max-w-[880px]">
                Detalhe de Curso - {id}
            </div>
        </main>
    )
}   