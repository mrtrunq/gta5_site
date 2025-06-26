import { useState } from "react";

const cardImages = ["/images/show_case/card/your-way.webp", "/images/show_case/card/cars-clothes-every-taste.webp", "/images/show_case/card/lots-of-entertainment.webp"];
const articles = [
    {
        title: "QUYỀN LỰC CỦA BẠN",
        content: "Trong trò chơi nhập vai GTA Go năng động này, bạn có quyền lựa chọn: lãnh đạo một băng đảng khét tiếng hoặc lật ngược kịch bản và tham gia lực lượng để trở thành người bảo vệ công lý. Vượt qua ranh giới mong manh giữa tội phạm và luật pháp, nơi mọi quyết định có thể đẩy bạn vào cuộc sống giao dịch ngầm hoặc vào hàng ngũ những người dũng cảm nhất của thành phố. Bạn sẽ cai trị đường phố hay bảo vệ chúng?",
    },
    {
        title: "XE VÀ QUẦN ÁO PHÙ HỢP VỚI MỌI SỞ THÍCH",
        content: "Trải nghiệm cảm giác hồi hộp khi tùy chỉnh vô tận trong máy chủ GTA 5 của chúng tôi. Lựa chọn từ một đội xe đa dạng, từ siêu xe bóng bẩy đến xe tải nhỏ tiện dụng. Cá nhân hóa nhân vật của bạn với nhiều lựa chọn quần áo, từ thời trang dạo phố hợp thời trang đến các thương hiệu xa xỉ độc quyền. Hãy tạo nên tuyên bố và nổi bật giữa những người chơi với phong cách độc đáo của bạn!",
    },
    {
        title: "CẢM GIÁC VÀ MẠO HIỂM",
        content: "Tham gia vào vô số hoạt động trên GTA Go Việt Nam. Vươn lên thành công bằng cách điều hành doanh nghiệp vận tải của riêng bạn hoặc lặn vào thế giới GTA để tạo ra thu nhập thụ động. Nhưng không chỉ là kiếm tiền; mà là vượt qua đối thủ cạnh tranh và kiểm soát lãnh địa của bạn. Hãy để mắt đến các đối thủ và quản lý tài sản của bạn một cách cẩn thận để trở thành một ông trùm thực thụ trong trò chơi.",
    },
];
const images = ["/images/show_case/photos_email/photo1.webp", "/images/show_case/photos_email/photo2.webp", "/images/show_case/photos_email/photo3.webp", "/images/show_case/photos_email/photo4.webp", "/images/show_case/photos_email/photo5.webp", "/images/show_case/photos_email/photo6.webp", "/images/show_case/photos_email/photo7.webp"];

export default function ShowCaseSection() {
    const [toggleState, setToggleState] = useState(0);
    const handleToggleTabLeft = () => {
        if (toggleState < 3 && toggleState > 0) {
            setToggleState(toggleState - 1);
        }
    };
    const handleToggleTabRight = () => {
        if (toggleState < 2) {
            setToggleState(toggleState + 1);
        }
    };

    return (
        <>
            <section className="mx-auto mb-[2.7rem] flex max-w-[167.8rem] items-center justify-between px-[2.4rem]">
                <article className="text-foreground relative h-[48.2rem] w-[78.3rem]">
                    <div className="absolute right-0 left-0 flex h-full w-full items-center justify-between object-contain">
                        <button type="button" className={`border-corner group flex aspect-square w-[5.6rem] items-center justify-center rounded-full border ${toggleState !== 0 && "hover:border-primary cursor-pointer duration-200 hover:shadow-[0_0_32px_#e81c5a80]"}`} onClick={handleToggleTabLeft}>
                            <svg data-v-745adced="" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${toggleState !== 0 && "group-hover:fill-foreground duration-200"} h-[60%] w-[60%] fill-[#ffffff80] duration-200`}>
                                <path d="M19.0605 25.9395L12.621 19.5H27V16.5H12.621L19.0605 10.0605L16.9395 7.93945L6.879 18L16.9395 28.0605L19.0605 25.9395Z"></path>
                            </svg>
                        </button>
                        <button type="button" className={`border-corner group flex aspect-square w-[5.6rem] items-center justify-center rounded-full border ${toggleState !== 2 && "hover:border-primary cursor-pointer duration-200 hover:shadow-[0_0_32px_#e81c5a80]"}`} onClick={handleToggleTabRight}>
                            <svg data-v-745adced="" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${toggleState !== 2 && "group-hover:fill-foreground duration-200"} h-[60%] w-[60%] rotate-180 fill-[#ffffff80] duration-200`}>
                                <path d="M19.0605 25.9395L12.621 19.5H27V16.5H12.621L19.0605 10.0605L16.9395 7.93945L6.879 18L16.9395 28.0605L19.0605 25.9395Z"></path>
                            </svg>
                        </button>
                    </div>
                    {cardImages.map((image, index) => (
                        <img key={index} src={image} alt="" className={`${toggleState !== index && "hidden"} h-full w-full object-contain`} />
                    ))}
                    {articles.map((article, index) => (
                        <div key={index} className={`${toggleState !== index && "hidden"} absolute bottom-0 left-0 text-left`}>
                            <h1 className="mb-[1.4rem] text-[2.4rem] font-bold">{article.title}</h1>
                            <p className="text-[1.6rem] leading-[2.2rem]">{article.content}</p>
                        </div>
                    ))}
                </article>
                <article className="flex h-[54.2rem] w-[78.3rem] flex-col gap-[2rem]">
                    <a href="https://www.youtube.com/watch?v=YNNATj2jsfM" className="relative h-[27rem] w-full">
                        <img src="public/images/show_case/cover.jpg" alt="" className="border-corner absolute right-0 left-0 h-full w-full rounded-2xl border object-cover" />
                        <div className="group absolute flex h-full w-full items-center justify-center gap-[3rem] bg-[#00000059]">
                            <div className="card-element-active card-element-active w-[6.4rem] rounded-full duration-200 group-hover:scale-[1.1] group-hover:shadow-[0_0_64px_#fff]">
                                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full fill-white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM47.1517 34.289C46.8421 33.7722 46.398 33.3496 45.8672 33.0666L31.7061 25.3437C29.4258 24.1013 26.625 25.7183 26.625 28.2786V43.7232C26.625 46.2812 29.4258 47.8994 31.7061 46.6558L45.8672 38.9341C46.398 38.651 46.8421 38.2284 47.1517 37.7116C47.4614 37.1948 47.625 36.6032 47.625 36.0003C47.625 35.3974 47.4614 34.8058 47.1517 34.289Z"></path>
                                </svg>
                            </div>
                            <h1 className="w-[24.6rem] text-left text-[1.8rem] leading-[2.5rem] font-black">XEM VIDEO MỚI NHẤT CÓ CÁC TÍNH NĂNG MỚI</h1>
                        </div>
                    </a>
                    <div className="grid grid-cols-4 gap-[1.6rem]">
                        {images.map((image, index) => (
                            <div className="border-corner h-[9.2rem] rounded-xl border-[0.5px] transition-transform duration-200 ease-in-out hover:-translate-y-1">
                                <img key={index} src={image} alt="" className="h-full w-full rounded-xl" />
                            </div>
                        ))}
                        <div className="border-corner relative h-[9.2rem] rounded-xl border-[0.5px] transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <img src="/images/show_case/photos_email/photo8.webp" alt="" className="h-full w-full rounded-xl opacity-10 saturate-0" />
                            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center gap-[2rem]">
                                <div className="w-[5.6rem] text-right text-[1.4rem] leading-[2.1rem] font-bold text-[#d7d7d7] uppercase">more photos</div>
                                <svg className="h-[2.1rem] w-[1.3rem] fill-[#d7d7d7]" data-v-745adced="" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.47766 20.5L12.4777 10.5L2.47766 0.5L0 2.97766L7.52234 10.5L0 18.0223L2.47766 20.5Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
