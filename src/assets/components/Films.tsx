
const Films = () => {
    return (
        <>
            <div className="films flex flex-col pl-4 pt-4 min-h-full">
                <h1 className=" text-[#fff] text-xl" >Recomendaciones</h1>
                <a className="relative bg-slate-500 min-h-40 mr-4 mt-4 aspect-auto w-auto" href="">
                    <img className="absolute inset-0 w-full h-full object-cover" src="" alt="" />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 min-w-full">
                        <p className="text-white">Titulo: Lorem ipsum dolor.</p>
                        <p className="text-white">Director: Lorem, ipsum dolor.</p>
                    </div>
                </a>
                <h1 className=" text-[#fff] mt-12 text-xl" >Estrenos</h1>
                <a className="relative bg-slate-500 min-h-40 mr-4 mt-4 aspect-auto w-auto" href="">
                    <img className="absolute inset-0 w-full h-full object-cover" src="" alt="" />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 min-w-full">
                        <p className="text-white">Titulo: Lorem ipsum dolor.</p>
                        <p className="text-white">Director: Lorem, ipsum dolor.</p>
                    </div>
                </a>
                
            </div>
        </>
    )
}

export default Films
