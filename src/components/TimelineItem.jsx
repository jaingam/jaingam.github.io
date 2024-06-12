import "../index.css";

function TimelineItem({ yearStart,
    yearEnd,
    content,
    title,
    position, isLast }, props) {
    return (
        <div class="flex flex-row items-start  content-stretch gap-x-8
        max-w-fit
        
        ">
            <div className="basis-32 flex-none
            text-right
            text-lg lg:text-xl
            align-top inline-block
            font-sans
         text-slate-900 dark:text-slate-50
            ">
                {yearStart}<br/>- {yearEnd}
            </div>
            <div class="basis-2 
            flex
            flex-col 
            self-stretch
            items-center justify-stretch gap-y-4">
                <div class="flex grow-0 
                rounded-full size-4 self-center bg-slate-950 dark:bg-slate-50"></div>
                <div class={isLast ? "hidden":"flex flex-1 grow justify-self-stretch h-full w-px rounded-full self-center bg-slate-950  dark:bg-slate-50"}></div>

            </div>
            <div class="flex min-w-52 flex-col text-xl lg:text-2xl gap-y-2">
                <div class="text-slate-950 dark:text-slate-50 align-text-top inline-block
                text-2xl lg:text-3xl">{title }</div>
                <div class=" text-slate-600 dark:text-slate-400 ">{position}</div>
                <div class="font-extralight max-w-prose ">{content}</div>
<div class="h-4"></div>
            </div>
        </div>

    )
}



export default TimelineItem