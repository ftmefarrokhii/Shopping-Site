import Comment from "./Comment";

export default function Comments({comments}){
    console.log(comments);
    return(
        <div className="flex flex-col items-start justify-center gap-8 mt-3">
            <div className="flex w-full items-center">
                    <p className="w-full font-bold text-xl text-violet-700 dark:text-violet-400 lg:w-[25%] lg:text-3xl">
                    نظرات کاربران
                    </p>
                    <hr className="h-[1px] w-full bg-black lg:h-[2px]" />
            </div>
                
            {comments.map((comment)=>{
                return <Comment id={comment.id} key={comment.userName} comment={comment} />;
                })
            }
            
 
        </div>
    )
}