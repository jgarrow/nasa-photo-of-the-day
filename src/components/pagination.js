import React from "react";

// want slugs to be according to date in this format --> 2012-03-14
// can add '&date=2012-03-14' to end of API url to get any desired date
// export default ({ clickHandler }) => {

//     return (
//         <ul>
//             <li>
//                 {!isLast && (
//                     <button onClick={() => clickHandler}>
//                     ← Previous
//                     </button>
//                 )}
//             </li>
//             <li>
//                 {!isFirst && (
//                     <a to={baseSlug + nextPage} rel="next">
//                     Next →
//                     </a>
//                 )}
//             </li>
//         </ul>
//     )
// }