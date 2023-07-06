export default function Card(props:any) {
    return(
        <div className="space-y-4">
            <div className="bg-blue-200 rounded-md h-[265px] w-[251px]">       
            </div>
            <div>{props.name}</div>
            <div>{props.category}</div>
            <div>${props.price}</div>
        </div>
    )
}