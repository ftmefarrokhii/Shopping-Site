export default function TextField({label,name, register , required , validationSchema,errors ,type="text"}){

    return(
        <div>
            <label className="mb-2 block text-slate-700 dark:text-slate-50" htmlFor={name}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input type={type} id={name} {...register(name , validationSchema )}
                   autoComplete="off" className="textField__input"              
            />
            {errors && errors[name] && <span className="text-red-500 block text-sm mt-2">{errors[name]?.message}</span>}
        </div>
    )
}