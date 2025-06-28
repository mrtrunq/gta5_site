export const FaqSection = () => {
    return (
        <>
            <section className="mx-auto mt-[4.8rem] mb-[12.8rem] flex max-w-[167.8rem] flex-col gap-[3.6rem] px-[2.4rem] text-left">
                <h2 className="text-[2.4rem] font-black">FAQ</h2>
                <div className="grid grid-cols-3 gap-[2.4rem]">
                    <div className="border-corner flex min-h-[11rem] flex-col justify-center gap-[1.4rem] rounded-xl border p-[2rem]">
                        <h3 className="text-[1.6rem]">GTA Go là gì?</h3>
                        <p className="text-secondary-foreground text-[1.4rem]">Đây là một dự án độc đáo dựa trên GTA V, cho phép hàng nghìn người chơi tương tác với nhau theo thời gian thực</p>
                    </div>
                    <div className="border-corner flex min-h-[11rem] flex-col justify-center gap-[1.4rem] rounded-xl border p-[2rem]">
                        <h3 className="text-[1.6rem]">RP (RolePlay) là viết tắt của từ gì?</h3>
                        <p className="text-secondary-foreground text-[1.4rem]">Đây là chế độ chơi mà người chơi tạo ra các nhân vật và kịch bản, sau đó hành động theo vai trò của họ trong trò chơi</p>
                    </div>
                    <div className="border-corner flex min-h-[11rem] flex-col justify-center gap-[1.4rem] rounded-xl border p-[2rem]">
                        <h3 className="text-[1.6rem]">Làm thế nào để tôi bắt đầu chơi GTA Go?</h3>
                        <p className="text-secondary-foreground text-[1.4rem]">Trước tiên, bạn cần tải xuống GTA V có bản quyền và sau đó cài đặt GTA Go Launcher</p>
                    </div>
                    <div className="border-corner flex min-h-[11rem] flex-col justify-center gap-[1.4rem] rounded-xl border p-[2rem]">
                        <h3 className="text-[1.6rem]">GTA Go Launcher là gì?</h3>
                        <p className="text-secondary-foreground text-[1.4rem]">Đây là trình khởi chạy để kết nối với máy chủ. Trình khởi chạy an toàn, có thể sửa lỗi trò chơi và tải xuống các tệp cần thiết</p>
                    </div>
                    <div className="border-corner flex min-h-[11rem] flex-col justify-center gap-[1.4rem] rounded-xl border p-[2rem]">
                        <h3 className="text-[1.6rem]">Làm gì trên máy chủ?</h3>
                        <p className="text-secondary-foreground text-[1.4rem]">Ngoài nhiều lựa chọn công việc và tương tác với người chơi, chúng tôi còn có các bản cập nhật thường xuyên và sự kiện theo mùa</p>
                    </div>
                    <div className="border-corner flex min-h-[11rem] flex-col justify-center gap-[1.4rem] rounded-xl border p-[2rem]">
                        <h3 className="text-[1.6rem]">Tôi có thể tìm thấy các quy tắc máy chủ ở đâu?</h3>
                        <p className="text-secondary-foreground text-[1.4rem]">
                            Bạn có thể tìm thấy một phần có các quy tắc máy chủ, khiếu nại về người chơi và các chủ đề khác trên{" "}
                            <span className="text-primary font-black">
                                <a href="">fanpage</a>
                            </span>{" "}
                            của game
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
