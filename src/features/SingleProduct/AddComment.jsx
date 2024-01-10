import { useForm } from "react-hook-form"
import useAddComment from "./useAddComment"
import TextField from "../../ui/TextField"

export default function AddComment({product}){
    const {addComment , isPending} = useAddComment()
    const {register , handleSubmit , formState:{errors} , reset} = useForm()
    
    const {comments,id} = product;
    console.log(id);
    const addCommentHandler = (values) => {
        console.log("values",values);
        const {userName,text,positivePoints,negativePoints} = values;
        const com = {
            star: 1,
            userName: userName,
            date: new Date().toLocaleDateString('fa-IR'),
            text: text,
            like: 0,
            dislike: 0,
            positivePoints: [
                positivePoints
            ],
            negativePoints: [
                negativePoints
            ]
        }
        const newComment = {...product , comments : [...comments , com]}
            addComment({id ,newComment},{
                onSuccess : ()=>{
                    console.log("در انتظار تایید قرار گرفت")
                    reset()
                }
        })
        

    }
    
    return(
        <div className="flex w-full flex-col items-start justify-center gap-5 rounded-lg border-b dark:bg-gray-700/50 dark:text-white border-gray-300 bg-gray-50 p-2 pb-10 dark:border-none  lg:gap-2 lg:border-none lg:shadow-lg">
                <p className="text-3xl text-violet-700 dark:text-violet-400">افزودن نظر</p>
                <form className="space-y-8 w-[50%]" onSubmit={handleSubmit(addCommentHandler)} >
                    
                    <TextField label="نام کاربری" 
                                name="userName" 
                                register={register} 
                                errors={errors}
                                validationSchema={{
                                    required : "نامی وارد نشده است"
                                }}
                    />
                    <TextField label="نظرتان را وارد کنید" 
                                name="text" 
                                register={register} 
                                errors={errors}
                                validationSchema={{
                                    required : "نظری وارد نشده است"
                                }}
                    />
                    <TextField label="نکات مثبت" 
                                name="positivePoints" 
                                register={register} 
                                errors={errors}
                    />
                    <TextField label="نکات منفی" 
                                name="negativePoints" 
                                register={register} 
                                errors={errors}
                    />
                    <button type="submit" className="btn py-3 px-4 rounded-xl text-purple-50 border bg-violet-700 border-slate-800 w-full">افزودن</button>

                </form>
        </div>
    )
}