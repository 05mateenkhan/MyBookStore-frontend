import BannerCard from '../home/BannerCard'
export default function Banner() {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
                <div className="md:w-1/2 space-y-8">
                    {/* Left Side */}
                    <h2 className="text-6xl font-bold leading-snug text-black">Buy and sell your books <span className="text-blue-700">for the Best Prices.</span></h2>
                    <p className="md:w-4/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ullam eum laborum minima recusandae et ex neque aliquid debitis quis expedita, obcaecati nam ipsum saepe esse velit atque, ab optio!</p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-2 rounded-s-sm outline-none bg-white"/>
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black">Search</button>
                    </div>
                </div>
                <div>
                    <BannerCard />
                    {/* Right Side */}
                </div>
            </div>
        </div>
    )
}