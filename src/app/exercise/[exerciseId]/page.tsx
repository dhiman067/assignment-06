import { Ifit } from "@/type";

import ExerciseDetail from "@/Components/ExerciseDetail";

const ExerciseDetailPage = async({params}:{params: Promise<{ exerciseId: string }>}) => {
    const {exerciseId} = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerciseId}`)
    const data:Ifit = await res.json()
    
    return (
        <ExerciseDetail data={data}></ExerciseDetail>
    );
};

export default ExerciseDetailPage;