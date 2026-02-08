export default function HomeFooter() {
    return <>
        <footer className="bg-gray-800 text-white mt-16 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Rootszy
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Discover and book amazing experiences in your city
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>

                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400 text-sm">© 2025 Rootszy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
}