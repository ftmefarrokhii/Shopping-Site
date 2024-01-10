import { useState } from "react";
import { AiFillStar, AiOutlineDislike, AiOutlineLike, AiOutlinePlusCircle } from "react-icons/ai";
import { BsReply, BsStarHalf } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export default function Comment({id , comment}){
    const {star, userName , date,text , like ,dislike ,positivePoints , negativePoints , reply} = comment;
    const [likes, setLikes] = useState(like);
    const [dislikes, setDislikes] = useState(dislike);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const productRate = () => {
        if (star <= 3) return <BsStarHalf className="text-3xl text-yellow-400" />;
        else return <AiFillStar className="text-3xl text-yellow-400" />;
      };

    const likeHandler = (like)=>{
      console.log("like",like);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
      if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
      } else {
        setLikes(likes - 1);
        setLiked(false);
      }
    }
    const dislikeHandler =() =>{
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      if (!disliked) {
        setDislikes(dislikes + 1);
        setDisliked(true);
      } else {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }

    return(
        <div className="flex w-full flex-col items-start justify-center gap-5 rounded-lg border-b border-gray-300 bg-gray-50 p-2 pb-10 dark:border-none dark:bg-gray-700/50 dark:text-white lg:gap-2 lg:border-none lg:shadow-lg">
            <div className="flex w-full flex-col items-start justify-center gap-2 lg:justify-between">
                {/* balayi sender */}
                <div className="flex w-full flex-wrap items-center justify-between gap-4 text-sm text-gray-700 dark:text-white lg:justify-start lg:pr-6">
                    {productRate()}
                    <div className="text-xl ">{star} امتیاز</div>
                    <div>{date}</div>
                    <div className="font-EstedadFont">{userName}</div>
                </div>
                {/* buttons */}
                <div className="flex w-full justify-end gap-4 p-2">
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border
                        border-gray-300 px-5 py-2 text-gray-700 dark:bg-gray-200 
                        dark:text-gray-700 lg:w-auto">
                        پاسخ دهید
                        <BsReply />
                    </button>
                    <div onClick={()=>likeHandler(like)} className={` flex items-center justify-center gap-2 rounded-lg px-4 py-2 lg:cursor-pointer
                      ${!liked
                        ? "bg-gray-200 dark:bg-gray-600"
                        : "bg-green-400 dark:bg-green-400/50"}`
                      }>
                        {likes}
                        <AiOutlineLike />
                    </div>
                    <div onClick={()=>dislikeHandler(like)}
                        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 lg:cursor-pointer 
                        ${!disliked
                          ? "bg-gray-200 dark:bg-gray-600"
                          : "bg-red-300 dark:bg-red-500/80"}`
                        }>
                        {dislikes}
                        <AiOutlineDislike />
                    </div>
                </div>

                <div className="mr-4 flex flex-col gap-3 overflow-auto border-r-2 border-gray-300 pr-3">
                    {text}
                    <div className="flex flex-col items-center justify-center gap-3">
                        <Points type={"positive"} points={positivePoints} />
                        <Points type={"negative"} points={negativePoints} />
                    </div>
                    <AdminAnswer reply={reply} />
                </div>


            </div>

        </div>

    )       
}

const Points = ({ type, points }) => {
    return (
      <div className="flex w-full flex-col items-start justify-center gap-1">
        {points?.map((p) => {
          return (
            <div className="flex items-center justify-center gap-2" key={p}>
              <AiOutlinePlusCircle
                className={`${
                  type === "positive" ? "text-green-500" : "text-red-500"
                }`}
              />
              <p>{p}</p>
            </div>
          );
        })}
      </div>
    );
  };


  const AdminAnswer = ({ reply }) => {
    return (
      <div className="flex flex-col items-start justify-center gap-2 rounded-md border-r-2 border-gray-300 p-3">
        <div className="flex items-center justify-center gap-2">
          <FaUserCircle className="text-xl text-gray-600 dark:text-white/80" />
          <span className="font-lg">ادمین</span>
        </div>
        <p>{reply}</p>
      </div>
    );
  };