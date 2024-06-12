import TimelineItem from "./TimelineItem";

const experiencesList = [
{
    key:3,
    title: "Nicety Nine", position: "Frontend Developer",
    yearStart: "JUL 2023", yearEnd: "PRESENT", content:
        <ul>
            <li>Developed <a class="text-blue-600 after:content-['_↗']" href="https://nicetynine.com">Nicety Nine's webpage</a>.</li>
            <li>Developed ARTVenture's webpage with Firebase integration.</li>
            <li>Developing “Happo”, the company’s application that provides personal and organizational mental health services within the Flutter framework.</li>
         </ul>
},{ key:2,
    title: "Jump AI", position: "Frontend Developer",
    yearStart: "FEB 2023", yearEnd: "APR 2023", content:
        <ul>
            <li>Designed and developed a job posting webpage with extra functions, basic CRUD, and Line Authentication using Figma and React.js.</li>
         </ul>
},{ key:1,
    title: "Sompo Insurance Thailand", position: "Intern",
    yearStart: "JUN 2021", yearEnd: "JUL 2021", content:
        <ul>
            <li>Wrote an Angular webpage for displaying and interacting with the data from an SQL database.</li>
            <li>Created REST APIs for querying the SQL database using .NET.</li></ul>
}, 

];

function Timeline(props) {
    return (<div class="flex flex-col gap-y-4">
        {
            experiencesList.map(i => <><TimelineItem 
                key={i.key}
                yearStart={i.yearStart}
                yearEnd={i.yearEnd}
                content={i.content}
                title={i.title}
                position={i.position}
                isLast={i.title=="Sompo Insurance Thailand"}
            ></TimelineItem></>)}
        <div class="flex flex-row items-start  content-stretch gap-x-8">
            <div className="basis-32 flex-none 
            align-top inline-block
            ">
            </div>
                {/* <div class="flex grow-0 
                rounded-full size-4 self-center  bg-slate-950 dark:bg-slate-50"></div> */}
          

        </div>
    </div>

    )
}



export default Timeline