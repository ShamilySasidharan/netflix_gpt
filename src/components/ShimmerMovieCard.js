const ShimmerMovieCard = ()=>{
    return (
        <div>
           <div className="space-y-4 p-4 animate-pulse">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="h-24 bg-gray-700 rounded-md"
                        />
                    ))}
                </div>
        </div>
    )
}

export default ShimmerMovieCard