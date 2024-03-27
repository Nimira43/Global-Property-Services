import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Global Property Services | Find the Right Rental',
    description: 'Apartments, Studios, Flats, Houses, Condos',
    keywords: 'Luxury, Affordable, City, Rural, Rental, Lease, Amenities',
};

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
  )
}

export default MainLayout
