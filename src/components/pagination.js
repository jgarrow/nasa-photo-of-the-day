import React from "react";

// want slugs to be according to date in this format --> 2012-03-14
// can add '&date=2012-03-14' to end of API url to get any desired date
export default ({ currentPage, numPages, baseSlug }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const nextPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const prevPage = (currentPage + 1).toString();

    return (
        <ul>
            <li>
                {!isLast && (
                    <a to={baseSlug + prevPage} rel="prev">
                    ← Previous
                    </a>
                )}
            </li>
            <li>
                {!isFirst && (
                    <a to={baseSlug + nextPage} rel="next">
                    Next →
                    </a>
                )}
            </li>
        </ul>
    )
}