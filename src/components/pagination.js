import React from "react";

const PaginationArrow = ({ clickHandler, children }) => {
    return <li onClick={clickHandler}>{children}</li>;
};

export default ({ setApodDate, setCurrentDate, currentDate }) => {
    let today = new Date();
    let yesterday = new Date();
    let tomorrow = new Date();

    yesterday.setDate(currentDate.getDate() - 1);
    tomorrow.setDate(currentDate.getDate() + 1);

    //  format date to YYYY-MM-DD
    function formatDate(dateObject) {
        let day = dateObject.getDate();
        let month = dateObject.getMonth() + 1;
        let year = dateObject.getFullYear();
        let formattedDate = "";

        if (day.length < 2) {
            day = "0".concat(day);
        }

        if (month.length < 2) {
            month = "0".concat(month);
        }

        formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    // string to add to end of API url --> &date=YYYY-MM-DD
    let apiDateYesterday = "&date=".concat(formatDate(yesterday));
    let apiDateTomorrow = "&date=".concat(formatDate(tomorrow));

    function setDates(date, apodDate) {
        setCurrentDate(date);
        setApodDate(apodDate);
    }

    return (
        <ul>
            <PaginationArrow
                clickHandler={() => setDates(yesterday, apiDateYesterday)}
            >
                ← Yesterday
            </PaginationArrow>
            {formatDate(currentDate) !== formatDate(today) && (
                <PaginationArrow
                    clickHandler={() => setDates(tomorrow, apiDateTomorrow)}
                >
                    Tomorrow →
                </PaginationArrow>
            )}
        </ul>
    );
};
