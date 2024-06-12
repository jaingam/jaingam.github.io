import { useState, useRef, useEffect } from "react"


function Sidebar() {


    const [activeMenu, setActiveMenu] = useState(false);
    const sections = useRef([]);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        let currentActiveMenu = null


        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionOffsetTop && scrollY < sectionOffsetTop + sectionHeight) {
                currentActiveMenu = section.id;
            }
        });

        setActiveMenu(currentActiveMenu);

    }


    useEffect(() => {
        sections.current = document.querySelectorAll('section');
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<div class="
    w-96 h-dvh
    hidden md:flex flex-col
    
    md:sticky justify-between
    md:top-0
    self-start 
    sticky col-span-1
    space-y-4
    
    text-xl font-light
    ">
        <div class="flex w-full flex-col justify-start">
            <a class={(activeMenu === 'about') ?
                'sidebar-menu h-16 w-full pl-12 content-center text-slate-900 dark:text-slate-50 transition-colors' :
                'sidebar-menu h-16 w-full pl-12 content-center text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors'
            } href='#about'><span class={(activeMenu === 'about') ? "":"hidden"}>* </span>About</a>

            <a class={(activeMenu === 'experience') ?
                   'sidebar-menu h-16 w-full pl-12 content-center text-slate-900 dark:text-slate-50 transition-colors' :
                   'sidebar-menu h-16 w-full pl-12 content-center text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors'
                } href='#experience'><span class={(activeMenu === 'experience') ? "":"hidden"}>* </span>Experience</a>
            {/* <a class={(activeMenu === 'contact') ?
                'sidebar-menu h-16 w-full pl-8 content-center bg-slate-400 hover:text-slate-900  dark:bg-slate-600 transition-colors' :
                'sidebar-menu h-16 w-full pl-8 content-center hover:bg-slate-300 hover:text-slate-900 dark:hover:bg-slate-700 transition-colors'
                } href='#contact'>Contact</a> */}
        </div>
    </div>)
}



export default Sidebar