// import React from 'react';

// const Homepage = () =>{
    
//     return(
//         <div>yes sir this is home page</div>
//     )
// }

// export default Homepage;

// import React from 'react';

// const Homepage = ({ items }) => {
//     return (
//         <div>
//             <h1>Homepage</h1>
//             <p>nothing is showing up</p>
//             <ul>
//                 {items.map(item => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Homepage;
import React from 'react';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1 className="homepage-title">Welcome to Amelia's Bookworm Library</h1>
                <p className="homepage-subtitle">Your ultimate destination for book reviews, lists, and more!</p>
            </header>
            <section className="homepage-content">
                <div className="homepage-intro">
                    <img src="https://via.placeholder.com/300" alt="Books" className="homepage-image" />
                    <p className="homepage-description">
                        Discover a world of literature with our extensive collection. Whether you're looking for the latest
                        bestsellers or classic novels, we have something for everyone. Dive into reviews, keep track of
                        your reading list, and join our community of book lovers.
                    </p>
                </div>
                {/* <div className="homepage-links">
                    <a href="/book-list" className="homepage-link">Browse Book List</a>
                    <a href="/bookreview" className="homepage-link">Read Book Reviews</a>
                    <a href="/TBR" className="homepage-link">Manage Your TBR List</a>
                </div> */}
            </section>
            <footer className="homepage-footer">
                <p>&copy; 2024 ABL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;
