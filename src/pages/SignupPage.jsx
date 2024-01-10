import { useForm } from "react-hook-form";
import TextField from "../ui/TextField";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import useAddUser from "../hooks/useAddUser";
import useUsers from "../hooks/useUsers";

export default function SignupPage(){
    const {register , handleSubmit ,formState : {errors}, reset} = useForm()
    const { addUser , isPending} = useAddUser()
    const navigate= useNavigate()
    const  {isLoading , users} = useUsers()

    const submitHandler = async (values) => {
        console.log("values", values);
        if(users?.length === 0){
            addUser(values , {
                onSuccess : ()=>{
                    localStorage.setItem("userInfo",JSON.stringify(values))
                    reset()
                    navigate('/' , {replace: true })
                }
            }) 
        }
        users && users?.map((user)=> {
            if(user.email === values.email && user.password === values.password){
                alert("this account already exists , you must login");
            }else{
                addUser(values , {
                    onSuccess : ()=>{
                        localStorage.setItem("userInfo",JSON.stringify(values))
                        reset()
                        navigate('/' , {replace: true })
                    }
                }) 
            }
        })
        
    }

    return(
        <div className="fadeShow flex h-screen w-full dark:bg-slate-800 dark:text-slate-50">
            <div className="flex flex-col gap-y-6 items-center pt-10 w-full mr-5 ml-5 ">
                <h1 className="font-bold text-3xl text-slate-700 dark:text-slate-50">ثبت نام | ورود</h1>
                <div className="sm:max-w-sm w-full">
                    <form className="space-y-8 " onSubmit={handleSubmit(submitHandler)}>
                        <TextField label="نام و نام خانوادگی" 
                            name="name"
                            register={register}
                            validationSchema={{
                                required : "نام و نام خانوادگی ضروری است"
                            }}
                            errors={errors}
                        />
                        <TextField label="ایمیل" 
                            name="email"
                            register={register}
                            validationSchema={{
                            required : "ایمیل ضروری است",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "ایمیل نامعتبر است"
                            }
                            }}
                            errors={errors}
                        />
                        <TextField label="رمز عبور" 
                            name="password"
                            register={register}
                            validationSchema={{
                            required : "رمز عبور ضروری است",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                                message: "رمز عبور باید شامل 8 کاراکتر،یک حرف بزرگ،یک حرف کوچک،یک عدد باشد"
                            }
                            }}
                            errors={errors}
                        />
                        {isPending ? ( 
                            <Loading />
                            ) : (
                            <button type="submit" className="btn py-3 px-4 rounded-xl text-purple-50 border bg-violet-700 border-slate-800 w-full">ثبت نام</button>
                            )
                        }  
                        <Link to="/Login">
                            <div className="mt-4 text-primary-900 font-bold">
                            از قبل حساب کاربری دارم
                            </div>
                        </Link>
                     </form>
                 </div>
             </div>
            <img src="../src/assets/signUpImage.webp" className=" hidden lg:block w-[60%] rounded-r-3xl" alt="" />
        </div>
    )
}


