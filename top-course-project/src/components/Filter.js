
function Filter(props){
    const filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    // function to get which category is selected or clicked
    function categoryHandler(title){
        setCategory(title);
    }

    return (
        <div className="flex justify-center gap-5 bg-bgDark2 py-4">
            {
                filterData.map((data)=>{
                    return <button key={data.id} className=
                    {`py-1 px-3 rounded-md bg-[rgba(0,0,0,0.5)] text-lg font-[500] border border-white
                    ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent" }`}
                    onClick={()=> categoryHandler(data.title)}>
                        <span className="text-white">{data.title}</span>
                        </button>
                })
            }
        </div>
    )
}

export default Filter;