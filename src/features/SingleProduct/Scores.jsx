export default function Scores({Specifications}){
    console.log(Specifications);
    let totalScores = 0;
    let allSpecifications = [];
    Object.values(Specifications).forEach((value)=>{
        allSpecifications.push({ title: value.title, score: value.score });

    })
    allSpecifications.map((s)=> (totalScores += s.score) )
    const averageScore = Math.round(totalScores / allSpecifications.length)

    return(
        <div className="mt-8 dark:bg-slate-800 flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-evenly">
            <div className="flex w-32 flex-col items-center justify-center gap-2 text-2xl text-gray-700 dark:text-white">
                <span className="border-right-[3px] flex h-24 w-24 items-center justify-center rounded-full border-2 border-t-[5px] border-green-400 text-3xl lg:hover:rotate-[360deg] lg:hover:scale-110">
                    {averageScore}
                </span>
                <p className="font-EstedadFont">امتیاز کلی</p>
            </div>
           
            <div className="h-[1px] w-11/12 bg-gray-400 lg:h-[20rem] lg:w-[1px]" />

            <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:w-[30rem] lg:items-start lg:gap-12">
                {allSpecifications.map((s, index) => {
                return (
                    <div
                    key={index}
                    className="flex w-40 flex-col items-center justify-center gap-2 text-lg text-gray-700 dark:text-white"
                    >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-r-[3px] border-t-[5px] border-violet-500 text-2xl lg:hover:rotate-[360deg] lg:hover:scale-110">
                    {s.score}
                    </span>
                    <p className="font-EstedadFont">{s?.title?.split("/")[0]}</p>
                    </div>
                );
                })}
            </div>
        </div>
    )

}