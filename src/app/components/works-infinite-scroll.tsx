import { WorksInfiniteScrollProps, work } from '@/app/types/types'


const WorksInfiniteScroll = (props: WorksInfiniteScrollProps) => (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className={`flex items-center justify-center md:justify-start ${props.reverse ? 'animate-infinite-scroll-right' : 'animate-infinite-scroll-left'}`}>
            {props.item.map((work: work, index: number) => (
                <li key={index}>
                    <div className={`mx-3 bg-cover bg-center border h-28 w-56 rounded-xl cursor-pointer dark:border-slate-500`} style={{ backgroundImage: `url('${work.thumbnail}')` }}>
                    </div>
                </li>
            ))}
        </ul>
        <ul className={`flex items-center justify-center md:justify-start ${props.reverse ? 'animate-infinite-scroll-right' : 'animate-infinite-scroll-left'}`}>
            {props.item.map((work: work, index: number) => (
                <li key={index}>
                    <div className={`mx-3 bg-cover bg-center border h-28 w-56 rounded-xl cursor-pointer dark:border-slate-500`} style={{ backgroundImage: `url('${work.thumbnail}')` }}>
                    </div>
                </li>
            ))}
        </ul>
    </div>
)

export default WorksInfiniteScroll;
