export default function Modal({ open, slides }: { open: boolean; slides: string[] }) {
    return (
        <>
            <div className={`bg-background/80 fixed inset-0 flex items-center justify-center ${open ? "visible" : "invisible"} z-100`}>
                <div className="absolute flex h-full w-full items-center">
                    <svg data-v-2dbc394d="" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[8.7rem] size-[6rem] fill-[#ffffff80]">
                        <path d="M25.4139 34.5859L16.8279 25.9999H35.9999V21.9999H16.8279L25.4139 13.4139L22.5859 10.5859L9.17188 23.9999L22.5859 37.4139L25.4139 34.5859Z"></path>
                    </svg>
                    <svg data-v-2dbc394d="" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[8.7rem] size-[6rem] rotate-180 fill-[#ffffff80]">
                        <path d="M25.4139 34.5859L16.8279 25.9999H35.9999V21.9999H16.8279L25.4139 13.4139L22.5859 10.5859L9.17188 23.9999L22.5859 37.4139L25.4139 34.5859Z"></path>
                    </svg>
                </div>
                <svg data-v-2dbc394d="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[7.2rem] right-[7.2rem] size-[2.4rem] fill-[#ffffff80]">
                    <path d="M21.0003 0L11.9989 8.99921L2.99973 0L0 2.99973L8.9992 11.9989L0 20.9981L2.99973 23.9979L11.9989 14.9987L21.0003 23.9979L24 20.9981L15.0008 11.9989L24 2.99973L21.0003 0Z"></path>
                </svg>
                <div className="relative flex h-[68.1rem] w-[186.4rem] flex-col">
                    <div className="mb-[2.4rem] flex h-full w-full justify-center overflow-hidden rounded-xl">
                        <img src={`${import.meta.env.BASE_URL}/images/show_case/photos_email/photo8.webp`} alt="" className="h-[54.1rem] w-[128rem] rounded-xl object-cover" />
                    </div>
                    <div className="relative h-[9.2rem] w-full px-[2.4rem]">
                        <div className="absolute left-0 h-full w-[2.4rem] border"></div>
                        <div className="absolute right-0 h-full w-[2.4rem] border"></div>
                        <div className="">
                            <div className="flex h-full w-full gap-[2rem]">
                                {slides.map((image, index) => (
                                    <img key={index} src={image} alt="" className="border-corner h-full w-[18.4rem] rounded-xl border" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
