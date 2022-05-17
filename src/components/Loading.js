import React from "react";

const Loading = ({searchTerm}) => {
    return ( 
        <div style={{ color: 'green' }}>Loading...Fetching books for {searchTerm}</div>
    );
}
 
export default Loading;