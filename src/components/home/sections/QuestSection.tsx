import { useState } from "react";

export default function QuestSection() {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);

    return (
        <>
            <section className="relative z-0 mb-[2.4rem] flex min-h-[59.5rem] w-full flex-col items-center justify-start overflow-hidden pt-[6.1rem] pb-[5.4rem]">
                <img src="/images/quest_starter/particles.webp" alt="" className="absolute top-[-5.2rem] right-[7.5%] left-[7.5%] z-10 mx-auto w-[85%] max-w-[163rem] object-contain" />
                <img src="/images/quest_starter/left-palms.webp" alt="" className="absolute top-[-17rem] left-0 h-[73.1rem] object-contain" />
                <img src="/images/quest_starter/right-palms.webp" alt="" className="absolute top-[-17rem] right-0 h-[73.1rem] object-contain" />
                <img src="/images/quest_starter/gang.webp" alt="" className={`absolute top-0 left-[12rem] z-10 h-[62.3rem] w-[53.6rem] object-contain saturate-0 transition duration-200 ${hoverLeft && "saturate-100 transition duration-200 ease-in-out"} ease-in-out`} />
                <img src="/images/quest_starter/cop.webp" alt="" className={`absolute top-0 right-[12rem] z-10 h-[62.3rem] w-[53.6rem] object-contain saturate-0 transition duration-200 ${hoverRight && "saturate-100 transition duration-200 ease-in-out"} ease-in-out`} />
                <a href="" className="absolute top-0 left-0 z-20 h-full w-[50%] cursor-pointer" onMouseEnter={() => setHoverLeft(true)} onMouseLeave={() => setHoverLeft(false)}></a>
                <a href="" className="absolute top-0 right-0 z-20 h-full w-[50%] cursor-pointer" onMouseEnter={() => setHoverRight(true)} onMouseLeave={() => setHoverRight(false)}></a>
                <div className="z-10 flex h-full w-[70rem] flex-col gap-[6.4rem] text-[1.6rem] font-medium text-white">
                    <p className="text-center leading-[2.4rem]">
                        <span className="text-primary">GTA Go Việt Nam</span> là cơ hội độc đáo để bạn đắm mình vào vũ trụ ảo và nhập vai được chọn, tuân theo các quy tắc tương tự như ngoài đời thực. Trở thành chính trị gia, gangster, doanh nhân, tài xế taxi, công nhân nhà máy, cảnh sát hoặc bất kỳ vai trò nào khác. Chúng tôi không có giới hạn, bạn được tự do lựa chọn con đường của mình và tạo ra câu chuyện của riêng mình trong thế giới ảo này!
                    </p>
                    <div className="flex flex-col items-center gap-[1rem]">
                        <h1 className="text-[1.8rem]">Tại sao bạn thử nó?</h1>
                        <svg viewBox="0 0 130 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-primary h-[0.6rem] w-full stroke-[0.3rem]" data-v-21d492e8="">
                            <path d="M1.5 3.50024C47.196 1.57488 83.5797 0.597003 128.5 2.61854" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between gap-[6.6rem]">
                        <div className={`border-corner flex w-full items-center gap-[2rem] rounded-xl border-[0.2rem] px-[2rem] py-[1.6rem] ${hoverLeft && "bg-primary fill-foreground transition duration-200 ease-in-out"}`}>
                            <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-primary inline-block w-[1rem]">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.66985 0.136025 7.35428 0.376052 7.12759L7.57605 0.327588C8.05787 -0.127467 8.81736 -0.105767 9.27241 0.376055C9.72747 0.857877 9.70577 1.61736 9.22395 2.07242L2.94768 8L9.22395 13.9276C9.70577 14.3826 9.72747 15.1421 9.27241 15.6239C8.81736 16.1058 8.05787 16.1275 7.57605 15.6724L0.376052 8.87242C0.136025 8.64572 0 8.33015 0 8Z"></path>
                            </svg>
                            Con đường của gangster
                        </div>
                        <div className={`border-corner flex w-full items-center gap-[2rem] rounded-xl border-[0.2rem] px-[2rem] py-[1.6rem] ${hoverRight && "bg-primary fill-foreground transition duration-200 ease-in-out"}`}>
                            Con đường của người cảnh sát
                            <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-primary inline-block w-[1rem] rotate-180">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.66985 0.136025 7.35428 0.376052 7.12759L7.57605 0.327588C8.05787 -0.127467 8.81736 -0.105767 9.27241 0.376055C9.72747 0.857877 9.70577 1.61736 9.22395 2.07242L2.94768 8L9.22395 13.9276C9.70577 14.3826 9.72747 15.1421 9.27241 15.6239C8.81736 16.1058 8.05787 16.1275 7.57605 15.6724L0.376052 8.87242C0.136025 8.64572 0 8.33015 0 8Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="text-foreground mt-[6.4rem] text-[1.8rem]">
                        <svg data-v-21d492e8="" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[1.5rem] inline-block h-[2rem] w-[1.5rem]">
                            <rect x="5.00006" y="3.00037" width="5" height="9" fill="#E81C5A"></rect>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49999 0.000366215C10.0524 0.000309234 11.5444 0.601932 12.6625 1.67883C13.7806 2.75573 14.4378 4.22408 14.496 5.77537L14.5 6.00037V14.0004C14.5 15.5527 13.8984 17.0447 12.8215 18.1628C11.7446 19.2809 10.2763 19.9382 8.72499 19.9964L8.49999 20.0004H6.49999C4.94762 20.0004 3.45564 19.3988 2.33753 18.3219C1.21942 17.245 0.562214 15.7767 0.504 14.2254L0.5 14.0004V6.00037C0.499943 4.44799 1.10157 2.95601 2.17846 1.83789C3.25536 0.719783 4.72371 0.0625804 6.27499 0.00436616L6.49999 0.000366215H8.49999ZM7.49999 4.00037C7.23478 4.00037 6.98042 4.10572 6.79289 4.29326C6.60535 4.4808 6.49999 4.73515 6.49999 5.00037V9.00037C6.49999 9.26558 6.60535 9.51994 6.79289 9.70747C6.98042 9.89501 7.23478 10.0004 7.49999 10.0004C7.76521 10.0004 8.01956 9.89501 8.2071 9.70747C8.39464 9.51994 8.49999 9.26558 8.49999 9.00037V5.00037C8.49999 4.73515 8.39464 4.4808 8.2071 4.29326C8.01956 4.10572 7.76521 4.00037 7.49999 4.00037Z" fill="url(#paint0_linear_27_4686)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_27_4686" x1="7.49999" y1="0.000366211" x2="7.49999" y2="20.0004" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="#989898"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        Kéo xuống để xem thêm
                    </div>
                </div>
            </section>
        </>
    );
}
