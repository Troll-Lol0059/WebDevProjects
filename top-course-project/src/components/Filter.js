
function Filter(props){
    const filterData = props.filterData;

    return (
        <div className="flex justify-center gap-5 bg-bgDark2 py-4">
            {
                filterData.map((data)=>{
                    return <button key={data.id} className="py-1 px-3 rounded-md bg-[rgba(0,0,0,0.5)] text-lg font-[500]">
                        <span className="text-white">{data.title}</span>
                        </button>
                })
            }
        </div>
    )
}

export default Filter;