import { Metadata } from "next";

import { CourseHeader } from "@/components/course-header/CourseHeader";

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
            <div className="w-full mt-8 min-[880px]:max-w-[880px]">
                
                <CourseHeader />
            </div>
        </main>
    )
}   