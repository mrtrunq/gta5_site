import { useState } from "react";
import Modal from "../components/home/elements/Modal";
import IntroSection from "../components/home/sections/IntroSection";
import QuestSection from "../components/home/sections/QuestSection";
import ShowCaseSection from "../components/home/sections/ShowCaseSection";
import HomeLayout from "../layouts/HomeLayout";
import { GuideSection } from "../components/home/sections/GuideSection";
import { FaqSection } from "../components/home/sections/FaqSection";

export interface IArticlesProps {
    title: string;
    content: string;
}

const showCaseImages = [`${import.meta.env.BASE_URL}/images/show_case/card/your-way.webp`, `${import.meta.env.BASE_URL}/images/show_case/card/cars-clothes-every-taste.webp`, `${import.meta.env.BASE_URL}/images/show_case/card/lots-of-entertainment.webp`];
const showCaseSlides = [`${import.meta.env.BASE_URL}/images/show_case/photos_email/photo1.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo2.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo3.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo4.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo5.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo6.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo7.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo8.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo9.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo10.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo11.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo12.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo13.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo14.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo15.webp`, `${import.meta.env.BASE_URL}/images/show_case/photos_email/photo16.webp`];
const showCaseArticles: IArticlesProps[] = [
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
const guideImages = [`${import.meta.env.BASE_URL}/images/guide/circles.svg`, `${import.meta.env.BASE_URL}/images/guide/cityscape.webp`, `${import.meta.env.BASE_URL}/images/guide/dots.svg`, `${import.meta.env.BASE_URL}/images/guide/launcher.svg`, `${import.meta.env.BASE_URL}/images/guide/v_logo.svg`];

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <HomeLayout title="GTA Go Việt Nam">
                <IntroSection />
                <QuestSection />
                <ShowCaseSection setOpen={setOpen} images={showCaseImages} articles={showCaseArticles} slides={showCaseSlides} />
                <Modal open={open} slides={showCaseSlides} />
                <GuideSection images={guideImages} />
                <FaqSection />
            </HomeLayout>
        </>
    );
}
