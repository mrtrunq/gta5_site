import type { IProps } from "../Header";

export default function Navbar({ navItems }: { navItems: IProps[] }) {
    return (
        <>
            <div className="flex gap-[2.4rem]">
                {navItems.map((item, index) => (
                    <ul className="">
                        <li>
                            <a key={index} href={item.href} className="text-primary text-[1.6rem] font-bold uppercase">
                                {item.name}
                            </a>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}
