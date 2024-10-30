import { ToolsInfiniteScrollProps, techStack } from '@/app/types/types'

const ToolsInfiniteScroll = (props: ToolsInfiniteScrollProps) => (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className={`flex items-center justify-center md:justify-start ${props.reverse ? 'animate-infinite-scroll-right' : 'animate-infinite-scroll-left'}`}>
            {props.item.map((stack: techStack, index: number) => (
                <li className={`mx-3`} key={index}>{<stack.icon className='text-2xl' />}</li>
            ))}
        </ul>
        <ul className={`flex items-center justify-center md:justify-start ${props.reverse ? 'animate-infinite-scroll-right' : 'animate-infinite-scroll-left'}`}>
            {props.item.map((stack: techStack, index: number) => (
                <li className={`mx-3`} key={index}>{<stack.icon className='text-2xl' />}</li>
            ))}
        </ul>
    </div>
)

export default ToolsInfiniteScroll;
