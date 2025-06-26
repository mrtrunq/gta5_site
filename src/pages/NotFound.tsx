import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title = "Không tìm thấy trang - GTA Go Việt Nam";
    }, []);

    return (
        <>
            <div className="mt-[5rem] text-center text-5xl leading-[4rem] text-white">
                <p className="text-primary">Xin lỗi,</p>
                <p>không tìm thấy trang</p>
            </div>
        </>
    );
}
