import Contact from "./Contact"


function About() {
    return (<section id="about" class="snap-proximity snap-y
    w-full min-h-dvh px-24 
    flex flex-col justify-center ">
        <div class="flex flex-col justify-center gap-y-1.5
        max-w-prose 
         text-pretty font-thin text-2xl lg:text-3xl text-slate-950 dark:text-slate-50">
           <p> Hello, I'm Jaingam, a frontend developer based in Thailand. </p>
           <p >At the moment, I work in a position where I code in <b>Flutter</b> and <b>React</b>, but I started out with C in high school, and have enjoyed programming ever since.
            </p>
            <p> When I'm free, I love to paint and read, I'd love to try wood carving someday.</p>
        </div>
        <Contact class=" ml-3"/>
    </section>)
}



export default About