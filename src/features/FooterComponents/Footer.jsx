export default function Footer(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full text-black dark:text-white
        max-w-[2000px] m-auto p-6 gap-y-2">
            <div className="flex flex-col items-center justify-center">
                <ul>
                    <li>قیمت روز گوشی</li>
                    <li>قیمت روز</li>
                    <li>گوشی سامسونگ</li>
                    <li>دسترسی سریع</li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
                <ul>
                    <li>دربار ما</li>
                    <li>اهداف و تعهد های ما</li>
                    <li>قانین و مقررات</li>
                    <li>حریم خصوصی کاربران</li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
                <ul>
                    <li>راهنمای خرید</li>
                    <li>راهنمای خرید قسطی</li>
                    <li>ضمانت هفت روزه</li>
                    <li>شیوه و هزینه های ارسال</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
                <img src="../src/assets/c4.webp" className="w-20 h-20 rounded-md" alt="" />
                <img src="../src/assets/c5.webp" className="w-20 h-20 rounded-md" alt="" />
            </div>
            

            
        </div>
    )
}