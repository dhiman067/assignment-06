import ExerciseCard from "@/Components/ExerciseCard";
import { Ifit } from "@/type";



const getExerciseData = async()=>{
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}
const ExercisePage = async() => {
const exercises:Ifit[] = await getExerciseData() 

    
    return (
        
        <div className="container mx-auto py-8">
            <div className="justify-items-start px-4">
                <h1 className="text-white text-4xl font-bold">THE LIBRARY</h1>
                <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full  mx-auto px-4 py-8 justify-items-center">
                {
                    exercises.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>)
                }
            </div>
        </div>
    );
};

export default ExercisePage;